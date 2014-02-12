/*
####### mrReiha is here !
####### #FreeIranianSoldiers - A css-based game
####### UI by : Mr.JCR ( Javad Chitgar Rahimi )
####### Just Share
*/
!function(){var t=document,e=t.getElementById("target"),n=90*Math.random(),i=e.style,s=t.getElementById("curtain"),a=t.getElementById("ready"),o=t.getElementById("finalMessage"),d=5,l=t.getElementById("progress").getElementsByTagName("span")[0],c=function(){--d,u(d),d||m()},u=function(t){l.style.width=Number(20*t)+"%"},m=function(){o.style.display="block";setTimeout(function(){o.className="fadein"},0)},f=function(){d&&(n=90*Math.random(),i.bottom="15%",i.left=n+"%",id=setTimeout(r,1500))},r=function(){i.bottom="-50%",id=setTimeout(f,750)};id=setTimeout(function(){f()},1e3),e.addEventListener("click",c,0),a.addEventListener("click",function(t){t.preventDefault(),s.className="fadeout",s.addEventListener("transitionend",function(){this.style.display="none"},0),s.addEventListener("webkitTransitionEnd",function(){this.style.display="none"},0)},0)}();