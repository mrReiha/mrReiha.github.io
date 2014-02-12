/*
####### mrReiha is here !
####### #FreeIranianSoldiers - A css-based game
####### UI by : Mr.JCR ( Javad Chitgar Rahimi )
####### Just Share
*/
!function(){var e=document,t=e.getElementById("target"),n=90*Math.random(),i=t.style,s=e.getElementById("curtain"),a=e.getElementById("ready"),d=e.getElementById("finalMessage"),o=5,l=e.getElementById("redsky"),u=e.getElementById("progress").getElementsByTagName("span")[0],c=function(){l.classList.remove("fadeout");setTimeout(function(){l.classList.add("fadeout")},0);--o,m(o),o||f()},m=function(e){u.style.width=Number(20*e)+"%"},f=function(){d.style.display="block";setTimeout(function(){d.className="fadein"},0)},r=function(){o&&(n=90*Math.random(),i.bottom="15%",i.left=n+"%",id=setTimeout(y,1500))},y=function(){i.bottom="-50%",id=setTimeout(r,750)};id=setTimeout(function(){r()},1e3),t.addEventListener("click",c,0),a.addEventListener("click",function(e){e.preventDefault(),s.className="fadeout",s.addEventListener("transitionend",function(){this.style.display="none"},0),s.addEventListener("webkitTransitionEnd",function(){this.style.display="none"},0)},0)}();