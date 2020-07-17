$( document ).ready(function() {
    $(".main-arrow").on("click", function(event){
        event.preventDefault();
        var top = $("#selectplan").offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    
    var link = $(".burger-menu-link");
    var menu = $(".burger-menu");
    var close = $(".close-menu");
    $(link).on("click", function(event){
        event.preventDefault();
        $(menu).toggleClass("burger-menu-active");
    });
    $(close).on("click", function(event){
        event.preventDefault();
        $(menu).toggleClass("burger-menu-active");
    });
});