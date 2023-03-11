window.onload = function () {
	if (window.screen.availHeight <= 768 && window.screen.availWidth <= 1366) {
		document.getElementById("photos-bg").src = "img/photos-bg-1.5.JPG";
		document.getElementById("projects-bg").src = "img/projects-bg-1.5.JPG";
		document.getElementById("contact-bg").src = "img/contact-bg-1.5.JPG";
		document.getElementById("cv-bg").src = "img/cv-bg-1.5.JPG";
	}
	else {
		document.getElementById("photos-bg").src = "img/photos-bg.JPG";
		document.getElementById("projects-bg").src = "img/projects-bg.JPG";
		document.getElementById("contact-bg").src = "img/contact-bg.JPG";
		document.getElementById("cv-bg").src = "img/cv-bg.JPG";
	}
}
