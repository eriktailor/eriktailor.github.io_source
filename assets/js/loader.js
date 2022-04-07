// Page loader animation
document.body.addEventListener("touchmove", preventDefault, { passive: false });
window.addEventListener("load", function () {
	//document.getElementById("loader").style.display = "none";
	$("#loader").fadeOut(700);
	document.body.removeEventListener("touchmove", preventDefault, {
		passive: false,
	});
});
function preventDefault(e) {
	e.preventDefault();
}
