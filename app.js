// sidebar
function sidebar(){
    const hamburger=document.querySelector(".hamburger");

// console.log(hamburger)

let sidebarcontainer=document.querySelector(".sidebar-container");
// console.log(sidebarcontainer)

hamburger.addEventListener("click",showsidebar)

function showsidebar(){
  sidebarcontainer.classList.add("show-sidebar");
}


let closebutton=document.querySelector(".close-button");
// console.log(closebutton)

closebutton.addEventListener("click",closesidebar);


function closesidebar(){

    sidebarcontainer.classList.remove("show-sidebar")

}

}

sidebar();


// sticky nav

function sticky_nav_animation(){
let navbar_container=document.querySelector(".navbar-container");
// console.log(navbar_container)

window.addEventListener("scroll",sticky_nav);

function sticky_nav(){

  let scrollY_num=window.scrollY;
  // console.log(window_scrollY);
  let target_screen_num=window.innerWidth >=992 ? 70 :50;

  if(scrollY_num>=target_screen_num){
    navbar_container.classList.add("sticky-nav");
  }
  else{
    navbar_container.classList.remove("sticky-nav")
  }
}
}

sticky_nav_animation();


// copyright date


( function(){

  let copyright_date=document.querySelector(".copyright-date");
// console.log(copyright_date);

let date=new Date();
// console.log(date.getFullYear());

copyright_date.innerHTML=date.getFullYear()

  
})();