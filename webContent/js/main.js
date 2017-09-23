$(function () {
    $('.navbar .menu-item').on('click', function () {
        $('.navbar .menu-item').removeClass('menu-item-selected');
        $(this).addClass('menu-item-selected');
    })
})