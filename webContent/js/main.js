$(function () {
    $('.navbar .menu-item>a').on('click', function () {
        $('.navbar .menu-item').removeClass('menu-item-selected');
        $(this).parent().addClass('menu-item-selected');
    })
})