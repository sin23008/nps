import { parkInfoTemplate, footerTemplate } from "./templates.mjs";
import enableNavigation from "./navigation.mjs";

function setHeaderInfo(data) {
	const disclaimer = document.querySelector(".disclaimer > a");
	disclaimer.href = data.url;
	disclaimer.innerHTML = data.fullName;

	const pageTitle = document.querySelector("title");
	pageTitle.innerHTML = `${data.name} | National Park Service`;

	const heroBannerContent = document.querySelector(".hero-banner__content");
	heroBannerContent.innerHTML = parkInfoTemplate(data);
}

function setFooter(data) {
	const footerEl = document.querySelector("#park-footer");
	footerEl.innerHTML = footerTemplate(data);
}

export default function setHeaderFooter(data) {
	enableNavigation();
	setHeaderInfo(data);
	setFooter(data);
}