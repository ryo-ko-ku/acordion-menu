// JavaScript source code
alert("OK");

$(function () {
    $('.js-menu-item-link').each(function () {
        $(this).click(function () {
            $("+.submenu",this).slideToggle();
            return false;
        });
    });
});