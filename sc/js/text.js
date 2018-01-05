//轮播图
var dom=document.querySelectorAll(".bg");
var t=document.querySelectorAll(".dian")
console.log(t)
var index=0;
var timer;
hideDiv(0);
function hideDiv(b){
 	for(var j=0;j<dom.length;j++){
		dom[j].style.display="none";
		t[j].style="background:rgba(0,0,0,0.7)"
 	}
   dom[b].style.display="block";
   t[b].style="background:#fff";
}
time()
 function time(){
	 	timer=setInterval(function(){
	 	index++;
	 	if(index>2){
	 		index=0;
	 	}
	 	hideDiv(index)
	},2000)
}