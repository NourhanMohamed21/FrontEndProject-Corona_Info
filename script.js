$(document).ready(function () {
    $(window).scroll(function () {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() == 0) {
            $("#menu").css({ "background-color": "transparent" });
            $("#fixedbutton").css({ "display": "none" });
            
        }
        else {
            $("#menu").css({ "background-color": "white" });
            $("#fixedbutton").css({ "display": "block" });
        }

    });
    // let anchors = document.querySelectorAll('#accordion a');
    // anchors.forEach(anchor => {
    //     anchor.addEventListener('click', function () {
    //         anchors.forEach(btn => btn.classList.remove('active'));
    //         this.classList.add('active');        
    //     });
    // });
    // $(".restIcon").click(function(){

    //     if(jQuery(this).find('i').attr('class')==("fas fa-plus-circle")){
    //     jQuery(this).find('i').removeClass("fa-plus-circle");
    //     jQuery(this).find('i').addClass("fa-minus-circle");
    //     }
    //     else{
    //         jQuery(this).find('i').removeClass("fa-minus-circle");
    //         jQuery(this).find('i').addClass("fa-plus-circle");
    //     }
    //     console.log("jkkjlsvff done")
    //   });





    // });
    // importantttttt
    // $("#Q1").click( function () {
    //     $("#here").html('<div id="accordion"><div class="card FlexSpaceBt"><div class="card-header card-header-color firstIcon"><a href="#collapseOne " class="AboutArrow " class="btn" data-bs-toggle="collapse"><div class="FlexSpaceBt  "> <h6> What is a novel coronavirus? </h6> <i class="fas fa-minus-circle "></i></div></a></div><div id="collapseOne" class="collapse show"><div class="card-body"><p>On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In COVID-19, ‘CO’ stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for disease. Formerly, this disease was referred to as “2019 novel coronavirus” or “2019-nCoV”.</p><p>A novel coronavirus is a new coronavirus that has not been previously identified. The virus causing coronavirus disease 2019 (COVID-19), is not the same as the<span class="Turquise"> coronaviruses that commonly circulate among humans</span> and cause mild illness, like the common cold.</p></div></div></div </div><div class="card FlexSpaceBt"><div class="card-header restIcon"><a href="#collapseTwo " class="AboutArrow " class="btn" data-bs-toggle="collapse"><div class="FlexSpaceBt  "><h6> Why is the disease being called coronavirus disease 2019, COVID-19?</h6><i class="fas fa-minus-circle fa-plus-circle"></i></div></a></div><div id="collapseTwo" class="collapse "><div class="card-body"> <p>On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In COVID-19, ‘CO’ stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for disease. Formerly, this disease was referred to as “2019 novel coronavirus” or “2019-nCoV”.</p><p>There are <span class="Tuequise">many types </span>of human coronaviruses including some that commonly cause mild upper-respiratory tract illnesses. COVID-19 is a new disease, caused be a novel (or new)coronavirus that has not previously been seen in humans. The name of this disease was selectedfollowing the World Health Organization (WHO) best practiceexternal icon for naming of new human infectious diseases.</p></div></div></div>' );
    // });

    $(".firstIcon").click(function () {
        $(this).toggleClass("card-header-color")
        jQuery(this).find('i').toggleClass("fa-plus-circle");
    });

    $(".restIcon").click(function () {
        $(this).toggleClass("card-header-color")
        console.log("hbj")
        jQuery(this).find('i').toggleClass("fa-plus-circle");
    });
    let buttons = document.querySelectorAll('.Quest');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

$("#Q1").click(function () {
    console.log("gh");
    let list = $('.showD');
    $(list).removeClass("showD");
    $(list).addClass("hideD");
    $('#A1').addClass("showD");
    $('#A1').removeClass("hideD");
});
$("#Q2").click(function () {
    console.log("gh");
    let list = $('.showD');
    $(list).removeClass("showD");
    $(list).addClass("hideD");
    $('#A2').addClass("showD");
    $('#A2').removeClass("hideD");
});
$("#Q3").click(function () {
    console.log("gh");
    let list = $('.showD');
    $(list).removeClass("showD");
    $(list).addClass("hideD");
    $('#A3').addClass("showD");
    $('#A3').removeClass("hideD");
});
$("#Q4").click(function () {
    console.log("gh");
    let list = $('.showD');
    $(list).removeClass("showD");
    $(list).addClass("hideD");
    $('#A4').addClass("showD");
    $('#A4').removeClass("hideD");
});
$("#Q5").click(function () {
    console.log("gh");
    let list = $('.showD');
    $(list).removeClass("showD");
    $(list).addClass("hideD");
    $('#A5').addClass("showD");
    $('#A5').removeClass("hideD");
});
$("#Q6").click(function () {
    console.log("gh");
    let list = $('.showD');
    $(list).removeClass("showD");
    $(list).addClass("hideD");
    $('#A6').addClass("showD");
    $('#A6').removeClass("hideD");
});

var element = document.querySelector("offcanvas-backdrop");
$(element).html("<b>Hello world!</b>");
// element.innerHTML='<h1 class = "offset-11">jkkl</h1>';


window.addEventListener('scroll', function () {
    var elementHome = document.querySelector('#banner_cont');
    var positionHome = elementHome.getBoundingClientRect();
    var elementAbout = document.querySelector('#AboutCorona');
    var positionAbout = elementAbout.getBoundingClientRect();
    var elementSymp = document.querySelector('#CoronaSymptoms');
    var positionSymp = elementSymp.getBoundingClientRect();
    var elementPrev = document.querySelector('#CoronaPrevention');
    var positionPrev = elementPrev.getBoundingClientRect();
    var elementTreat = document.querySelector('#CoronaTreatment');
    var positionTreat = elementTreat.getBoundingClientRect();
    var elementFQ = document.querySelector('.FreqQues');
    var positionFQ = elementFQ.getBoundingClientRect();
    var elementNews = document.querySelector('#LatestUpdate');
    var positionNews = elementNews.getBoundingClientRect();


    if ((positionHome.top < window.innerHeight && positionHome.bottom >= 0) || (positionHome.top >= 0 && positionHome.bottom <= window.innerHeight)) {
        $('.NavHome').addClass("Turquise");
        $('.NavSymp').removeClass("Turquise");
        $('.NavPrev').removeClass("Turquise");
        $('.NavFQ').removeClass("Turquise");
        $('.NavNews').removeClass("Turquise");
        $('.NavTreat').removeClass("Turquise");
        $('.NavAbout').removeClass("Turquise");
        console.log("Home")

    }

    // else $('.NavHome').removeClass("Turquise");
    if ((positionAbout.top < window.innerHeight && positionAbout.bottom >= 0) || (positionAbout.top >= 0 && positionAbout.bottom <= window.innerHeight)) {
        $('.NavAbout').addClass("Turquise");
        $('.NavSymp').removeClass("Turquise");
        $('.NavPrev').removeClass("Turquise");
        $('.NavFQ').removeClass("Turquise");
        $('.NavNews').removeClass("Turquise");
        $('.NavTreat').removeClass("Turquise");
        console.log("about")
        $('.NavHome').removeClass("Turquise");
    }

    // else{ $('.NavAbout').removeClass("Turquise");


    if ((positionSymp.top < window.innerHeight && positionSymp.bottom >= 0) || (positionSymp.top >= 0 && positionSymp.bottom <= window.innerHeight)) {
        $('.NavSymp').addClass("Turquise");

        $('.NavPrev').removeClass("Turquise");
        $('.NavFQ').removeClass("Turquise");
        $('.NavNews').removeClass("Turquise");
        $('.NavTreat').removeClass("Turquise");
        $('.NavAbout').removeClass("Turquise");
        $('.NavHome').removeClass("Turquise");
    }

    else {
        $('.NavSymp').removeClass("Turquise");


    }

    if ((positionTreat.top < window.innerHeight && positionTreat.bottom >= 0) || (positionTreat.top >= 0 && positionTreat.bottom <= window.innerHeight)) {
        $('.NavTreat').addClass("Turquise");
        $('.NavSymp').removeClass("Turquise");

        $('.NavFQ').removeClass("Turquise");
        $('.NavNews').removeClass("Turquise");
        $('.NavPrev').removeClass("Turquise");
        $('.NavAbout').removeClass("Turquise");
        $('.NavHome').removeClass("Turquise");
    }

    else $('.NavTreat').removeClass("Turquise");
    if ((positionPrev.top < window.innerHeight && positionPrev.bottom >= 0) || (positionPrev.top >= 0 && positionPrev.bottom <= window.innerHeight)) {
        $('.NavPrev').addClass("Turquise");
        $('.NavSymp').removeClass("Turquise");

        $('.NavFQ').removeClass("Turquise");
        $('.NavNews').removeClass("Turquise");
        $('.NavTreat').removeClass("Turquise");
        $('.NavAbout').removeClass("Turquise");
        $('.NavHome').removeClass("Turquise");
    }

    else $('.NavPrev').removeClass("Turquise");
    if ((positionFQ.top < window.innerHeight && positionFQ.bottom >= 0) || (positionFQ.top >= 0 && positionFQ.bottom <= window.innerHeight)) {
        $('.NavFQ').addClass("Turquise");
        $('.NavSymp').removeClass("Turquise");
        $('.NavPrev').removeClass("Turquise");

        $('.NavNews').removeClass("Turquise");
        $('.NavTreat').removeClass("Turquise");
        $('.NavAbout').removeClass("Turquise");
        $('.NavHome').removeClass("Turquise");
    }
    else

        $('.NavFQ').removeClass("Turquise");
    if ((positionNews.top < window.innerHeight && positionNews.bottom >= 0) || (positionNews.top >= 0 && positionNews.bottom <= window.innerHeight)) {
        $('.NavSymp').removeClass("Turquise");
        $('.NavPrev').removeClass("Turquise");
        $('.NavFQ').removeClass("Turquise");

        $('.NavTreat').removeClass("Turquise");
        $('.NavAbout').removeClass("Turquise");
        $('.NavHome').removeClass("Turquise");
        $('.NavNews').addClass("Turquise");
    }

    else $('.NavNews').removeClass("Turquise");
});



});





// list.forEach(lis => {
//     lis.addEventListener('click', function () {
//         lis.forEach(btn => btn.classList.remove('showD'));

//     });

// });

    // <div class="card FlexSpaceBt">
    //     <div class="card-header restIcon">
    //         <a href="#collapse3" class="AboutArrow " class="btn" data-bs-toggle="collapse">

    //             <div class="FlexSpaceBt  ">

    //                 <h6> How can people help stop stigma related to COVID-19?</h6>

    //                 <i class="fas fa-minus-circle fa-plus-circle"></i>
    //             </div>
    //         </a>
    //         <!-- <a class="btn" data-bs-toggle="collapse" href="#collapseOne">
    //     Collapsible Group Item #1
    //   </a> -->
    //     </div>
    //     <div id="collapse3" class="collapse ">
    //         <div class="card-body">
    //             People can fight stigma and help, not hurt, others by providing social support. Counter stigma
    //             by learning and sharing facts. Communicating the facts that viruses do not target specific
    //             racial or ethnic groups and how COVID-19 actually spreads can help stop stigma.
    //         </div>
    //     </div>
    // </div>
    // <div class="card FlexSpaceBt">
    //     <div class="card-header restIcon">
    //         <a href="#collapse4" class="AboutArrow " class="btn" data-bs-toggle="collapse">

    //             <div class="FlexSpaceBt  ">

    //                 <h6> Why might someone blame or avoid individuals and groups?</h6>

    //                 <i class="fas fa-minus-circle fa-plus-circle"></i>
    //             </div>
    //         </a>
    //         <!-- <a class="btn" data-bs-toggle="collapse" href="#collapseOne">
    //     Collapsible Group Item #1
    //   </a> -->
    //     </div>
    //     <div id="collapse4" class="collapse ">
    //         <div class="card-body">
    //             <p>
    //                 People in the U.S. may be worried or anxious about friends and relatives who are living in
    //                 or visiting areas where COVID-19 is spreading. Some people are worried about the disease.
    //                 Fear and anxiety can lead to social stigma, for example, towards Chinese or other Asian
    //                 Americans or people who were in quarantine.
    //             </p>
    //             <p>
    //                 Stigma is discrimination against an identifiable group of people, a place, or a nation.
    //                 Stigma is associated with a lack of knowledge about how COVID-19 spreads, a need to blame
    //                 someone, fears about disease and death, and gossip that spreads rumors and myths.
    //             </p>
    //             <p>
    //                 Stigma hurts everyone by creating more fear or anger towards ordinary people instead of the
    //                 disease that is causing the problem.
    //             </p>
    //         </div>
    //     </div>


// function myfun()
// {console.log(document.getElementById("here"));
//     document.getElementById("here").innerHTML="<h1>yarabb </h1>"
// }
// console.log("cc")
// // $(document).ready(function () {
// //     $("#ToggleButton").click(function(){
// //         $("#habal").html("<h1>hgjhklk</h1>")
// //     })
// // });

// function Togglee()
// {
//  var x=  document.getElementById("ToggleButton").innerHTML;
// //  window.onclick
// //  console.log(x);
//  if(x=='<i class="far fa-times-circle"></i>')
//  document.getElementById("ToggleButton").innerHTML='<i class="fas fa-bars fa-1x"></i>';

//  else {
//     document.getElementById("ToggleButton").innerHTML='<i class="far fa-times-circle"></i>'; console.log("here");
// console.log("hii")

//     }   
// }

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
