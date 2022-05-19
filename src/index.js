import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/js/all.min';

$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('.carousel').carousel({
      interval: 3000
    });


    $('.add-to-cart-btn').click(function() {
      alert('اضف المنتج الى عربة الشراء')
    });

    $('.product-option input[type="radio"]').on( "change",function() {
      $(this).parents('.product-option').siblings().removeClass('active');
      $(this).parents('.product-option').addClass('active');
    });
    
    $('[data-remove-from-cart]').click(function () {
      $(this).parents('[data-product-info]').remove()
    });

    $('[data-product-quantity]').change(function (){
      var newQuantity = $(this).val();
      var parent = $(this).parents('[data-product-info]');
      var price = parent.attr('data-product-price');
      var totalPriceProduct = price * newQuantity;
      parent.find('.total-price-for-product').text(totalPriceProduct + "$");
      calculateTotalPrice();
    });

    function calculateTotalPrice() {
      
      // أنشئ متغيّرًا جديدًا لحفظ السعر الإجمالي
      var totalPriceForAllProducts = 0;
  
      // لكل سطر يمثل معلومات المُنتج في الصّفحة
      $('[data-product-info]').each(function() {
  
          // اجلب سعر القطعة الواحدة من الخاصّية الموافقة
          var pricePerUnit = $(this).attr('data-product-price');
  
          // اجلب كمية المنتج من حقل اختيار الكمية
          var quantity = $(this).find('[data-product-quantity]').val();
  
          var totalPriceForProduct = pricePerUnit * quantity;
  
          // أضف السعر الإجمالي لهذا المنتج إلى السعر الإجمالي لكل المُنتجات، واحفظ القيمة في المتغير نفسه
          totalPriceForAllProducts = totalPriceForAllProducts + (totalPriceForProduct);
      });
  
        // حدث السعر الإجمالي لكل المُنتجات في الصفحة
      $('#total-price-for-all-products').text(totalPriceForAllProducts + '$');
    }

  })