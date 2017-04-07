function addLoadEvent(func){
	var oldonload=window.onload;
	
	if(typeof window.onload!="function"){
		window.onload=func;//如果还没有建立函数列表，则建立函数列表。
	}else{
		window.onload=function(){
			oldonload();//之前的函数列表
			func();//在列表中增加一个新的函数。
		}
	}
}
//用法：
addLoadEvent(leftIn);
addLoadEvent(rightIn);
addLoadEvent(leftOut);
addLoadEvent(rightOut);
addLoadEvent(clickOut);
function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
function listenInput(){
	var input=document.getElementsByTagName("input")[0];
	var val=input.value;	
	return val;
}
function leftIn(){
	var leftInButton=document.getElementById("left-in");
	leftInButton.onclick=function(){
		var val=listenInput();
		if(isNaN(val)) return false;
		if(!val) return false;
		var div=document.createElement("div");
		var text=document.createTextNode(val);
		div.appendChild(text);
		var form=document.getElementsByTagName("form")[0];
		insertAfter(div,form);
		div.onclick=clickOut;
		return false;//否则button按掉之后页面会刷新。。。
	}
}
function rightIn(){
	var rightInButton=document.getElementById("right-in");
	rightInButton.onclick=function(){
		var val=listenInput();
		if(isNaN(val)) return false;
		if(!val) return false;
		var div=document.createElement("div");
		var text=document.createTextNode(val);
		div.appendChild(text);
		var divs=document.getElementsByTagName("div");
		var lastDiv=divs[divs.length-1];
		insertAfter(div,lastDiv);
		div.onclick=clickOut;
		return false;//否则button按掉之后页面会刷新。。。
	}
}
function leftOut(){
	var leftOutButton=document.getElementById("left-out");
	leftOutButton.onclick=function(){
		var divs=document.getElementsByTagName("div");
		var firstDiv=divs[0];
		firstDiv.parentNode.removeChild(firstDiv);
		return false;//否则button按掉之后页面会刷新。。。
	}
}
function rightOut(){
	var rightOutButton=document.getElementById("right-out");
	rightOutButton.onclick=function(){
		var divs=document.getElementsByTagName("div");
		var lastDiv=divs[divs.length-1];
		lastDiv.parentNode.removeChild(lastDiv);
		return false;//否则button按掉之后页面会刷新。。。
	}
}
function clickOut(){		
	this.parentNode.removeChild(this);
	return false;
		
}
