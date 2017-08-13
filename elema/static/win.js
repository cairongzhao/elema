function getRootFontSize(){
	var root = document.documentElement;
	var clientWidth = root.clientWidth;

	root.style.fontSize = clientWidth*100/750+'px';
}
window.addEventListener('orientationchange', getRootFontSize);
window.addEventListener('resize', getRootFontSize);
getRootFontSize();