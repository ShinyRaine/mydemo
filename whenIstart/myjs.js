function addEvent (element,type,func) {
	if (element.addEventListener) {
		element.addEventListener(type,func,false);
	}else if (element.attachEvent) {
		element.attachEvent("on"+type,func);
	}else{
		element["on"+type]=func;
	};
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

//发送接收请求的AJAX函数，格式ajax(URL,"word="+发送的信息,执行的函数);
function ajax (url,message,fun,argument) {
  var xhr=new XMLHttpRequest();
  xhr.open("post",url,true);
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xhr.send(message); 
  xhr.onreadystatechange=function () {
    if (xhr.readyState==4) {
      if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
        fun(xhr.responseText,argument);
      }else{
        alert(xhr.status)
      }
    };
  }
} 

function viewDiv (div) {
	div.style.display="block";
	var over=document.createElement('div');
	over.style.cssText = 'width:100%;height:100%;background:#333;opacity:0.6;z-index:2;position:fixed;top:0;left:0;';
	document.getElementsByTagName('body')[0].appendChild(over);

	over.onclick=function () {
		div.style.display="none";
		document.getElementsByTagName('body')[0].removeChild(over);
	}
}