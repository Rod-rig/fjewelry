<? $IS_EMPTY_BASKET = false; ?>
<div class="basket js_basket hide">
  <div class="basket__popup">
    <div class="basket__title">My bag</div>
    <button type="button" class="btn basket__close js_basket_close">
      <svg class="basket__close_icon">
        <use xlink:href="#close"></use>
      </svg>
    </button>
    <? if ($IS_EMPTY_BASKET) { ?>
      <div class="basket__list">
        <div class="basket__empty_title">Your bag is empty</div>
        <div class="basket__empty_text">Sigh in to see your bag and get shopping!</div>
      </div>
      <div class="basket__footer">
        <a class="basket__btn js_login_trigger" href="">
          <span class="basket__btn_text">Sign in</span>
        </a>
        <a class="basket__btn js_basket_close" href="">
          <span class="basket__btn_text">Close</span>
        </a>
      </div>
    <? } else { ?>
      <div class="basket__list js_basket_scroll">
        <? for ($i = 0; $i < 6; $i++) { ?>
          <div class="basket__item">
            <div class="basket__item_img">
              <a href="">
                <img src="https://via.placeholder.com/200x200" alt="" class="img-responsive">
              </a>
            </div>
            <div class="basket__item_body">
              <a class="basket__item_name" href="">Diamond Hoop Earrings 35mm in Sterling Silver - Ug3237</a>
              <div class="basket__item_info">
                <table class="basket__table">
                  <tr>
                    <td class="text-bold">Item Ref:</td>
                    <td>Ug32432</td>
                  </tr>
                  <tr>
                    <td class="text-bold">Quantity:</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td class="text-bold">Price</td>
                    <td>£ 75</td>
                  </tr>
                  <tr>
                    <td class="text-bold">Size</td>
                    <td>M</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        <? } ?>
      </div>
      <div class="basket__footer">
        <a class="basket__btn" href="">
          <span class="basket__btn_text">View bag</span>
        </a>
        <a class="basket__btn" href="">
          <span class="basket__btn_text">Checkout</span>
        </a>
      </div>
    <? } ?>
  </div>
  <div class="basket__fade js_basket_close"></div>
</div>