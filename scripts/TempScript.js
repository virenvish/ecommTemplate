$(document).ready(function () {
    $('.test-cart').click(function () {
        window.location.href = './cart.html'
    });

    //Show hide login/signup div
    $('#btn-sign-up').click(function () {       
        $('.signup-area').show();
        $('.login-area').hide();      
    });

    $('#btn-login').click(function () {
        $('.signup-area').hide();
        $('.login-area').show();       
    });
});