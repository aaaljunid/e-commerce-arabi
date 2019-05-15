$(document).ready(function(){

    $('[data-toggle="tooltip"]').tooltip();

    $('[data-add-to-cart]').click(function(e){
        alert('تم اضافة المنتج الى العربة');
        e.stopPropagation();
    });

    $('.product-option input[type="radio"]').change(function() {
        $(this).parents('.product-option').siblings().removeClass('active');
        $(this).parents('.product-option').addClass('active');
    });

});