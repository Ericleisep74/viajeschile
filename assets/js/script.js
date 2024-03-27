
// alerta al click en quienes somos

$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('#quienesomos').click(function () {
        alert("Estamos con oficinas en todo Chile")
    });


    //  Ocultar parrafo en destacado

    $('.titulo1').click(function () {
        $('.texto1').toggle();
    });
    $('.titulo2').click(function () {
        $('.texto2').toggle();
    });
    $('.titulo3').click(function () {
        $('.texto3').toggle();
    });

    $('.titulo4').click(function () {
        $('.texto4').toggle();
    });

    $(".ocultar-mostrar").click(function () {
        $(".ocultar-mostrar").slideToggle(1500);
        $(".ocultar-mostrar").toggle('show');
    });
    $(".ocultar-mostrar2").click(function () {
        $(".ocultar-mostrar2").slideToggle(1500);
        $(".ocultar-mostrar2").toggle('show');
    });
    $(".ocultar-mostrar3").click(function () {
        $(".ocultar-mostrar3").slideToggle(1500);
        $(".ocultar-mostrar3").toggle('show');
    });


})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        $('html,body').animate({
            'scrollTop': $($(this).attr('href')).offset().top + 'px'
        }, 5000);


        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// tooltips en Destacados

$("#destacados").hover(function () {
    $(this).css('cursor', 'pointer').attr('title', 'La mejor vitrina de viajes de Chile');
}, function () {
    $(this).css('cursor', 'auto');
});



$("#boton").click(function () {
    alert("Tu mensaje fue enviado exitosamente")
})