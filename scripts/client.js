$(document).ready(function() {
    // Navbar is transparent on page load, turn it solid after scrolling 40 pixels
    $(window).scroll(function() {
        if($(this).scrollTop() > 40) {
            $('.nav-header').addClass('solid');
        } else {
            $('.nav-header').removeClass('solid');
        }
    })
})