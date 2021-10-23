$(document).ready(function () {
    // function for nav bar  while scrolling transparent while no scroll and white when scrolling 
    // function for fixed up button  while scrolling visable while no scroll and invisable when scrolling 
    $(window).scroll(function () {
        if ($(window).scrollTop() == 0) {
            $("#menu").css({ "background-color": "transparent" });
            $("#fixedbutton").css({ "display": "none" });

        }
        else {
            $("#menu").css({ "background-color": "white" });
            $("#fixedbutton").css({ "display": "block" });
        }

    });
// toggle the class of icon in the F&Q section (First card)
    $(".firstIcon").click(function () {
        $(this).find(".card-header").toggleClass("card-header-color")
        jQuery(this).find('i').toggleClass("fa-plus-circle");



    });
// toggle the class of icon in the F&Q section (Rest cards)
    $(".restIcon").click(function () {
        $(this).find(".card-header").toggleClass("card-header-color")

        jQuery(this).find('i').toggleClass("fa-plus-circle");
    });

//F&Q buttons to let only 1 button selected
    let buttons = document.querySelectorAll('.Quest');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
// F&Q show div when clickon a specific button
    $("#Q1").click(function () {
        let list = $('.showD');
        $(list).removeClass("showD");
        $(list).addClass("hideD");
        $('#A1').addClass("showD");
        $('#A1').removeClass("hideD");
    });
    $("#Q2").click(function () {
        let list = $('.showD');
        $(list).removeClass("showD");
        $(list).addClass("hideD");
        $('#A2').addClass("showD");
        $('#A2').removeClass("hideD");
    });
    $("#Q3").click(function () {
        let list = $('.showD');
        $(list).removeClass("showD");
        $(list).addClass("hideD");
        $('#A3').addClass("showD");
        $('#A3').removeClass("hideD");
    });
    $("#Q4").click(function () {
        let list = $('.showD');
        $(list).removeClass("showD");
        $(list).addClass("hideD");
        $('#A4').addClass("showD");
        $('#A4').removeClass("hideD");
    });
    $("#Q5").click(function () {
        let list = $('.showD');
        $(list).removeClass("showD");
        $(list).addClass("hideD");
        $('#A5').addClass("showD");
        $('#A5').removeClass("hideD");
    });
    $("#Q6").click(function () {
        let list = $('.showD');
        $(list).removeClass("showD");
        $(list).addClass("hideD");
        $('#A6').addClass("showD");
        $('#A6').removeClass("hideD");
    });

 //Nav bar items change color when specific div is visiable 
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
     

        }

        // else $('.NavHome').removeClass("Turquise");
        if ((positionAbout.top < window.innerHeight && positionAbout.bottom >= 0) || (positionAbout.top >= 0 && positionAbout.bottom <= window.innerHeight)) {
            $('.NavAbout').addClass("Turquise");
            $('.NavSymp').removeClass("Turquise");
            $('.NavPrev').removeClass("Turquise");
            $('.NavFQ').removeClass("Turquise");
            $('.NavNews').removeClass("Turquise");
            $('.NavTreat').removeClass("Turquise");
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





