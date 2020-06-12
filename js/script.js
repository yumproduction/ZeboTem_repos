$(document).ready(function(){
    $('.slider').slick({
        arrows: false, 
        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySped: 1000,
        pauseOnHover: false,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        centerMode: true,
        waitForAniamte: false,
        slidesToShow: 3,
        variableWidth: true,
    });
});

function OpenSideMenu()
{
    document.getElementById('side-menu').style.width = '250px';
}

function CloseSideMenu()
{
    document.getElementById('side-menu').style.width = '0px';
}

