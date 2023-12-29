const fs = require("fs");
const path = require("path")

class Translation{

	static langData = {}
	static langs = [];

	/**
	 * Load all languages from lang directory
	 */
	static loadLanguages(){

		// let langs = fs.readdirSync("./lang");

		// for(let lang of langs){

		// 	let langName = lang.split(".")[0];

		// 	Translation.langData[langName] = JSON.parse(fs.readFileSync("./lang/" + lang).toString());

		// 	Translation.langs.push(langName);

		// }

		// ==================================
		// Dirtty code to make it work with vercel
		Translation.langs.push("en")
		Translation.langData["en"] = {
			"description": "Download Wattpad stories for e-book readers, smartphones, desktop and more for free!",
			"titlebar": {
				"home": "Home",
				"help": "Help",
				"privacy": "Privacy"
			},
			"home": {
				"text": "Download Wattpad stories for<br/> e-book readers, smartphones, desktop and more!",
				"urlDescription": "Open a story on wattpad and change the <b>.com</b> to <b>.ml</b>",
				"placeholder": "Enter URL to book, part or id",
				"submit": "Next"
			},
			"help": [
				{
					"title": "How to download a story from Wattpad?",
					"text": "You can open the story that you want to download on Wattpad.com and simply change the <b>.com</b> of wattpad.com in the URL to <b>.ml</b>.<br/>Or you copy the URL of the book and paste it into the input field on our page."
				},
				{
					"title": "Which format should I choose for download?",
					"text": "We provide two different formats. First, the <b>EPUB</b> format and second the <b>HTML</b>.<br/>EPUB is for E-Book reader like Kindle. You can download this and load it on your E-Book reader with a software called Calibre. EPUB also works really well with Apple Books. So if you have an IPhone, you should download EPUB and you can read it with Apple Books.<br/>If you are on another platform like a PC or an android smartphone, you should download HTML. We provide a .html file that you can open with any browser. This contains a complete reader with the offline available story. The reader also gives you the option to change the font, font size and color scheme."
				},
				{
					"title": "Any questions or problems?",
					"text": "<center>Write us an E-Mail: <a href=\"mailto:myhamstermail@gmail.com\">myhamstermail@gmail.com</a></center>"
				}
			],
			"privacy": "<h1 class=\"adsimple-311190408\">Privacy policy</h1><h2 class=\"adsimple-311190408\">Privacy</h2><p>We have drawn up this data protection declaration (version 30.06.2020-311190408) in order to explain to you, in accordance with the requirements of the <a class=\"adsimple-311190408\" href=\"https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679&amp;tid=311190408\" target=\"_blank\" rel=\"noopener\">Basic Data Protection Regulation (EU) 2016/679</a>, what information we collect, how we use data and what decision-making options you have as a visitor to this website.</p><p>Unfortunately it is in the nature of things that these explanations sound very technical, but we have tried to describe the most important things as simple and clear as possible.</p><h2 class=\"adsimple-311190408\">Rights under the basic data protection regulation</h2><p>According to the provisions of the GDPR, you are basically entitled to the following rights:</p><ul class=\"adsimple-311190408\"> <li class=\"adsimple-311190408\">Right of rectification (Article 16 GDPR)</li><li class=\"adsimple-311190408\">Right of deletion (\"right to be forgotten\") (Article 17 GDPR)</li><li class=\"adsimple-311190408\">Right to restrict processing (Article 18 GDPR)</li><li class=\"adsimple-311190408\">Right of notification &#8211; Obligation to notify in connection with the correction or deletion of personal data or the restriction of processing (Article 19 GDPR) </li><li class=\"adsimple-311190408\">Right to data transferability (Article 20 GDPR)</li><li class=\"adsimple-311190408\">Right of objection (Article 21 GDPR)</li><li class=\"adsimple-311190408\">Right not to be subject to a decision based solely on automated processing, including profiling (Article 22 GDPR) </li></ul><p>If you believe that the processing of your data violates data protection law or your data protection rights have otherwise been violated in any way, you can contact the <a class=\"adsimple-311190408\" class=\"311190408\" href=\"https://www.bfdi.bund.de\" target=\"_blank\" rel=\"noopener\">Federal Commissioner for Data Protection and Freedom of Information (BfDI)</a>.</p><h2 class=\"adsimple-311190408\">TLS encryption with https</h2><p>We use https to transmit data tap-proof on the Internet (data protection through technology design <a class=\"adsimple-311190408\" href=\"https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=311190408\" target=\"_blank\" rel=\"noopener\">Article 25 paragraph 1 GDPR</a>). By using TLS (Transport Layer Security), an encryption protocol for secure data transmission on the Internet, we can ensure the protection of confidential data. You can recognize the use of this protection of data transmission by the small lock symbol in the upper left corner of the browser and the use of the scheme https (instead of http) as part of our internet address.</p><h2 class=\"adsimple-311190408\">Cloudflare privacy policy</h2><p>We use Cloudflare from Cloudflare, Inc. on this website. (101 Townsend St., San Francisco, CA 94107, USA) to make our website faster and more secure. Cloudflare uses cookies and processes user data. Cloudflare, Inc. is an American company that provides a content delivery network and various security services. These services are located between the user and our hosting provider and act as <a class=\"adsimple-311190408\" href=\"https://de.wikipedia.org/wiki/Reverse_Proxy\" target=\"_blank\" rel=\"noopener\">Reverse Proxy</a>for websites. What all this means exactly, we try to explain in the following.</p><h3 class=\"adsimple-311190408\">What is Cloudflare?</h3><p>A Content Delivery Network (CDN), as provided by Cloudflare, is nothing more than a network of servers connected via the Internet. Cloudflare has distributed such servers around the world to bring web pages to your screen faster. Simply put, Cloudflare makes copies of our website and places them on their own servers. If you visit our website now, a load balancing system ensures that the largest parts of our website are delivered from the server that can display our website the fastest. The distance of data transfer to your browser is significantly shortened by a CDN. Thus, the content of our website is delivered to you by Cloudflare not only from our hosting server, but from servers all over the world. The use of Cloudflare is especially helpful for users from abroad, because here the page can be delivered from a server nearby. Besides the fast delivery of websites Cloudflare also offers various security services like DDoS protection or the Web Application Firewall.</p><h3 class=\"adsimple-311190408\">Why do we use Cloudflare on our website?</h3><p>Of course we want to offer you the best possible service with our website. Cloudflare helps us to make our website faster and more secure. Cloudflare offers us web optimizations as well as security services like DDoS protection and web firewall. This includes a <a class=\"adsimple-311190408\" href=\"https://wikipedia.org/wiki/Reverse_Proxy\" target=\"_blank\" rel=\"noopener\">Reverse-Proxy</a>and the content distribution network (CDN). Cloudflare blocks threats and limits abusive bots and crawlers that waste our bandwidth and server resources. By storing our website in local data centers and blocking spam software, Cloudflare allows us to reduce our bandwidth usage by approximately 60%. Delivering content from a data center near you and some web optimization done there reduces the average loading time of a website by about half. According to Cloudflare, the \"I'm Under Attack Mode\" setting can mitigate further attacks by displaying a JavaScript calculation task that must be solved before a user can access a website. Overall, this makes our website much more powerful and less susceptible to spam or other attacks.</p><h3 class=\"adsimple-311190408\">Which data is stored by Cloudflare?</h3><p>Cloudflare generally only forwards those data that are controlled by website operators. The contents are therefore not determined by Cloudflare, but always by the website operator himself. In addition, Cloudflare may collect certain information about the use of our website and process data that is sent by us or for which Cloudflare has received appropriate instructions. In most cases, Cloudflare receives data such as contact information, IP addresses, security fingerprints, DNS protocol data and performance data for websites, which is derived from browser activity. For example, log data helps cloudflare identify new threats. In this way, Cloudflare can guarantee a high level of security protection for our website. Cloudflare processes this data within the framework of its services in compliance with the applicable laws. This includes of course the basic data protection regulation (GDPR).</p><p>For security reasons Cloudflare also uses a cookie. The cookie (__cfduid) is used to identify individual users behind a shared IP address and to apply security settings for each individual user. This cookie is very useful, for example, if you are using our website from a location where there are a number of infected computers. However, if your computer is trustworthy, we can recognise this from the cookie. In this way, you can surf through our website unhindered, despite infected PCs in the vicinity. It is also important to know that this cookie does not store any personal data. This cookie is absolutely necessary for the Cloudflare security functions and cannot be deactivated.</p><h3 class=\"adsimple-311190408\">Cookies used by Cloudflare</h3><ul class=\"adsimple-311190408\"> <li class=\"adsimple-311190408\">__cfduid <ul class=\"adsimple-311190408\"> <li class=\"adsimple-311190408\">Expiry period:1 year</li><li class=\"adsimple-311190408\">Usage:Security settings for each individual visitor</li><li class=\"adsimple-311190408\">Exemplary value:d798bf7df9c1ad5b7583eda5cc5e78311190408</li></ul> </li></ul><p>Cloudflare also works together with third party providers. These may only process personal data under instructions from Cloudflare and in accordance with the privacy policy and other confidentiality and security measures. Cloudflare will not pass on personal data without our explicit consent.</p><h3 class=\"adsimple-311190408\"> How long and where is the data stored?</h3><p>Cloudflare stores your information mainly in the USA and the European Economic Area. Cloudflare can transfer and access the above described information from all over the world. In general, Cloudflare stores user-level data for less than 24 hours. However, if IP addresses trigger security alerts during cloudflare, exceptions to the above retention period may occur.</p><h3 class=\"adsimple-311190408\">How can I delete my data or prevent data storage?</h3><p>Cloudflare keeps data logs only as long as necessary and in most cases these data are deleted within 24 hours. Cloudflare also does not store personal data, such as your IP address. However, there is information that Cloudflare stores indefinitely as part of its permanent logs to improve the overall performance of Cloudflare Resolver and to identify any security risks. You can find out exactly which permanent logs are stored on <a class=\"adsimple-311190408\" href=\"https://www.cloudflare.com/application/privacypolicy/\" target=\"_blank\" rel=\"noopener\">https://www.cloudflare.com/application/privacypolicy/</a>. All data that Cloudflare collects (temporary or permanent) will be cleaned from all personal data. All permanent logs are also made anonymous by Cloudflare.</p><p>Cloudflare states in their privacy policy that they are not responsible for the content they receive. For example, if you ask Cloudflare whether they can update or delete your content, Cloudflare always refers to us as the website operator. You can also completely prevent the entire collection and processing of your data by Cloudflare by deactivating the execution of script code in your browser or by integrating a script blocker into your browser.</p><p>Cloudflare is an active participant in the EU-U.S. Privacy Shield Framework which regulates the correct and secure transfer of personal data. You can find more information about this at <a class=\"adsimple-311190408\" href=\"https://www.privacyshield.gov/participant?id=a2zt0000000GnZKAA0&amp;tid=311190408\" target=\"_blank\" rel=\"noopener\">https://www.privacyshield.gov/participant?id=a2zt0000000GnZKAA0</a>.<br/>More information on data protection at Cloudflare can be found at <a class=\"adsimple-311190408\" href=\"https://www.cloudflare.com/privacypolicy/\" target=\"_blank\" rel=\"noopener\">https://www.cloudflare.com/privacypolicy/</a></p><h2>Ackee</h2><p> To get information about the behavior of our visitors, we use <a href=\"https://ackee.electerious.com\" target=\"_blank\">Ackee</a>. This analytics software gives us insight about our visitors only in general, but not about individuals per se, as it does not track visitors and does not store any personal identifiable information. <a href=\"https://docs.ackee.electerious.com/#/docs/Anonymization\" target=\"_blank\">Go to their documentation</a> to find out what Ackee collects.</p>",
			"book": {
				"download": {
					"epub": "Download for E-Book reader (epub)",
					"html": "Download PC / Smartphone (html)",
					"pdf": "Download as PDF (pdf)"
				},
				"author": "Author",
				"pubDate": "Published",
				"lang": "Language",
				"rateLimit": "Daily Download-Limit",
				"loading": {
					"text": "Plese wait a few seconds while we prepare your download..."
				},
				"captcha": {
					"title": "Security check",
					"description": "Since we currently have a lot of traffic, we need to verify that you are a real person."
				}
			},
			"parts": "Parts",
			"errors": {
				"bookNotFound": "Sorry but we can't find the book!",
				"invalidSearch": "We can not parse your entered value.<br/> Please provide a wattpad link to a story or an ID.",
				"tokenError": "Your Captcha-Token is invalid.",
				"serverError": "The book could not be retrieved/converted due to an internal error.",
				"paywall": "Paid-Stories aren't allowed for download.",
				"rateLimit": "You reached the download limit for today"
			}
		}
		// ==================================
	}

	/**
	 * Get lang object for translation by lang name
	 * @param lang
	 * @returns {*}
	 */
	static getLangData(lang){
		return Translation.langData[lang];
	}

	/**
	 * Get translation by lang name
	 * @param availableLangs
	 * @returns {{langName: *, lang: *}}
	 */
	static getTranslation(availableLangs){

		let langName = Array.isArray(availableLangs) ? availableLangs[0] : availableLangs;
		let lang;

		if(availableLangs){
			lang = Translation.getLangData(langName);
		}else{
			lang = Translation.getLangData("en");
		}

		return { lang, langName };
	}

}

module.exports = Translation;