const pug = require("pug");
const fs = require("fs");
const JSZip = require("jszip");
const axios = require("axios");
const path  = require("path");
const Wattpad = require("./wattpad");

class Generator {

	static availableFormats = ["epub", "html"];
	static templates = {
		mimetype: fs.readFileSync(path.join(process.cwd(), "templates/epub/mimetype")),
		container: fs.readFileSync(path.join(process.cwd(), "templates/epub/META-INF/container.xml")),
		metadata: fs.readFileSync(path.join(process.cwd(), "templates/epub/META-INF/metadata.xml.pug")),
		mainCSS: fs.readFileSync(path.join(process.cwd(), "templates/epub/OPS/css/main.css")),
		titleCSS: fs.readFileSync(path.join(process.cwd(), "templates/epub/OPS/css/title.css")),
		cover: fs.readFileSync(path.join(process.cwd(), "templates/epub/OPS/cover.xhtml")),
		contentOPF: fs.readFileSync(path.join(process.cwd(), "templates/epub/OPS/content.opf.pug")),
		titleFile: fs.readFileSync(path.join(process.cwd(), "templates/epub/OPS/title.xhtml.pug")),
		toc: fs.readFileSync(path.join(process.cwd(), "templates/epub/OPS/toc.ncx.pug")),
		chapter: fs.readFileSync(path.join(process.cwd(), "templates/epub/OPS/chapter.xhtml.pug")),
		htmlv2: fs.readFileSync(path.join(process.cwd(), "templates/htmlv2.pug"))
	}

	/**
	 * Generate an epub (zip) file
	 * @param book
	 * @param parts
	 */
	static async epub(book, parts) {

		let zip = new JSZip();

		// Mime type
		zip.file("mimetype", Generator.templates.mimetype);

		// META-INF directory
		let metaInf = zip.folder("META-INF");

		// Container file
		metaInf.file("container.xml", Generator.templates.container);
		// Metadata
		let metadata = pug.render(Generator.templates.metadata, book);
		metaInf.file("metadata.xml", metadata);

		// OPS directory
		let ops = zip.folder("OPS");

		// CSS
		let css = ops.folder("css");
		css.file("main.css", Generator.templates.mainCSS);
		css.file("title.css", Generator.templates.titleCSS);

		// Images
		let images = ops.folder("images");

		try{
			let res = await axios.get(book.cover, { responseType: "arraybuffer" });
			images.file("cover.jpg", Buffer.from(res.data));
		}catch (e) {
			return null;
		}

		// Cover xhtml file
		ops.file("cover.xhtml", Generator.templates.cover);

		// Content.opf
		let contentOPF = pug.render(Generator.templates.contentOPF, book);
		ops.file("content.opf", contentOPF);

		// title.xhtml
		let titleFile = pug.render(Generator.templates.titleFile, book);
		ops.file("title.xhtml", titleFile);

		// table of contents
		let toc = pug.render(Generator.templates.toc, book);
		ops.file("toc.ncx", toc);

		// Chapters
		for(let i = 0; i < parts.length; i++){
			let chapter = pug.render(Generator.templates.chapter, parts[i]);
			ops.file(`chapter${i}.xhtml`, chapter);
		}

		try {
			return await zip.generateAsync({ type: "arraybuffer" });
		} catch (e) {
			console.log("Generator error:", e);
			return null;
		}

	}

	/**
	 * Get book as html
	 * @param book
	 * @param parts
	 * @param langName
	 * @param lang
	 * @returns {Promise<*>}
	 */
	static async html(book, parts, langName, lang) {

		let image = await Wattpad.getImage(book.cover);
		let avatar = await Wattpad.getImage(book.user.avatar);

		let template = Generator.templates.htmlv2;

		return pug.render(template, { book, parts, image, avatar, langName, lang });

	}

}

module.exports = Generator;