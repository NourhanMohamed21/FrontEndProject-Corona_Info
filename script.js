$(document).ready(function(){
    $(window).scroll(function(){
        console.log($(window).scrollTop());
        if($(window).scrollTop() > $(window).height()){
            $("#menu").css({"background-color":"transparent"});   
        }
       
        else if($(window).scrollTop()==0)
        $("#menu").css({"background-color":"transparent"});   
        else{
            $("#menu").css({"background-color":"white"});
        }

    })
})
console.log("cc")
// // $(document).ready(function () {
// //     $("#ToggleButton").click(function(){
// //         $("#habal").html("<h1>hgjhklk</h1>")
// //     })
// // });

// function Togglee()
// {
//  var x=  document.getElementById("ToggleButton").innerHTML;
//  window.onclick
//  console.log(x);
//  if(x=='<i class="far fa-times-circle"></i>')
//  document.getElementById("ToggleButton").innerHTML='<i class="fas fa-bars fa-1x"></i>';
//  else {
//     document.getElementById("ToggleButton").innerHTML='<i class="far fa-times-circle"></i>'; console.log("here");

//     }   

// }
// window.ondblclick=function(){
//     document.getElementById("ToggleButton").innerHTML='<i class="fas fa-bars fa-1x"></i>';
//  }
//  const element = document.querySelector('#offcanvasNavbar')

// //  const fontSize = element.style.fontSize
// // //  var xy=element.style.visibility;
// //  console.log(fontSize);
// //  if(document.getElementById("offcanvasNavbar").style.visibility=="hidden")
// //  document.getElementById("ToggleButton").innerHTML='<i class="fas fa-bars fa-1x"></i>';
// var myNav = document.getElementById('mynav');
// window.onscroll = function () { 
//     "use strict";
//     if (document.body.scrollTop >= 200 ) {
//         myNav.classList.add("nav-colored");
//         myNav.classList.remove("nav-transparent");
//     } 
//     else {
//         myNav.classList.add("nav-transparent");
//         myNav.classList.remove("nav-colored");
//     }
// };