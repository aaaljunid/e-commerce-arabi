$(document).ready(function(){

    $('[data-toggle="tooltip"]').tooltip();

    $('[data-add-to-cart]').click(function(e){
        alert("تم اضافة المنتج الى العربة");
        e.stopPropagation();
    });



    $(".product-option input[type='radio']").change(function(){
        $(this).parents(".product-option").siblings().removeClass('active');
        $(this).parents(".product-option").addClass('active');
    });



    $('[data-remove-from-cart]').click(function(){
        $(this).parents('[data-product-info]').remove();

        calculateTotalPrice();
    });




    $('[data-product-quantity]').change(function(){

        var $newQuantity = $(this).val();

        var $parent = $(this).parents('[data-product-info]');

        var $price = $parent.attr('data-product-price');

        var $total = $price * $newQuantity;

        $parent.find('.total-price-for-product').text($total + '$');

        calculateTotalPrice();
    });

    function calculateTotalPrice(){
        var totalPriceForAll = 0;

        $('[data-product-info]').each(function(){
            
            var price = $(this).attr('data-product-price');

            var quantity = $(this).find('[data-product-quantity]').val();

            var totalPriceForProduct = price * quantity;

            totalPriceForAll = totalPriceForAll + totalPriceForProduct;
        });

        $("#total-price-for-all").text(totalPriceForAll + "$");
    }
});