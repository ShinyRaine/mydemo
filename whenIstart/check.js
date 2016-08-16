function check () {
	if (!document.getElementsByTagName || !document.getElementById || !document.createElement || !document.createTextNode) return false;
}
function checkObj(obj){
	if (!obj) {return false};
}