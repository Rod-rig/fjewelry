<?
$has_sale = true;
$product_statuses = array("in_stock", "spec_order", "discontinued");
$current_product_status_index = 0;
$current_status = $product_statuses[$current_product_status_index];
?>
<div class="modal hide js_quick_view_modal">
  <div class="modal__backdrop js_quick_view"></div>
  <div class="modal__root quick_view">
    <div class="modal__close js_quick_view">
      <button
        class="modal__close_btn"
        aria-label="Close modal"
        type="button"
      >
        <svg class="modal__close_icon">
          <use xlink:href="#close" />
        </svg>
      </button>
    </div>
    <div class="quick_view__row">
      <div class="quick_view__col1">
        <img class="img-responsive" src="https://via.placeholder.com/500x500" alt="">
      </div>
      <div class="quick_view__col2">
        <div class="quick_view__name">Diamond Hoop Earrings 35mm in Sterling Silver - Ug3237</div>
        <div class="mb-15 quick_view__price">
          <? if ($has_sale) { ?>
            <span class="minicard__oldprice">RRP <span class="minicard__oldprice--line">£ 1 180</span></span>
            <span class="minicard__divider"> | </span>
            <span class="minicard__price">£ 980
              <span class="minicard__sale">40%</span>
            </span>
          <? } else { ?>
            <span class="minicard__price minicard__price--only">£ 980</span>
          <? } ?>
        </div>
        <? if ($current_status === "in_stock") { ?>
          <div class="quick_view__status mb-15">
            <svg class="quick_view__instock_icon">
              <use xlink:href="#tick"></use>
            </svg>
            <div class="quick_view__instock">in stock</div>
          </div>
        <? } else if ($current_status === "spec_order") { ?>
          <div class="quick_view__status mb-15">
            <!--<svg class="quick_view__instock_icon">
              <use xlink:href="#specorder"></use>
            </svg>-->
            <div class="quick_view__specorder">special order</div>
          </div>
        <? } else { ?>
          <div class="quick_view__status mb-15">
            <!--<svg class="quick_view__instock_icon">
              <use xlink:href="#discontinued"></use>
            </svg>-->
            <div class="quick_view__disc">discontinued</div>
          </div>
        <? } ?>
        <div class="filter__sizes mb-15">
          <? for ($i = 0; $i < 13; $i++) { ?>
            <a href="" class="filter__size<? if ($i === 0) { ?> filter__size--active<? } ?>">
              <?= $i; ?>
            </a>
          <? } ?>
        </div>
        <div class="quick_view__features mb-15">
          <svg class="quick_view__info_icon">
            <use xlink:href="#return"></use>
          </svg>
          <div class="quick_view__info"><span class="quick_view__info_primary">FREE</span> RETURN 14 DAYS</div>
        </div>
        <div class="quick_view__features mb-15">
          <svg class="quick_view__info_icon">
            <use xlink:href="#delivery"></use>
          </svg>
          <div class="quick_view__info"><span class="quick_view__info_primary">FREE</span> DELIVERY OVER £ 49</div>
        </div>
        <table class="quick_view__table">
          <tr>
            <td class="quick_view__main quick_view__td">Product code</td>
            <td class="quick_view__main quick_view__td quick_view__td--right">000124508</td>
          </tr>
          <tr>
            <td class="quick_view__td">Metal Type:</td>
            <td class="quick_view__td quick_view__td--right">Gold</td>
          </tr>
          <tr>
            <td class="quick_view__td">Metal Сolor:</td>
            <td class="quick_view__td quick_view__td--right">White</td>
          </tr>
          <tr>
            <td class="quick_view__td">Gemstone:</td>
            <td class="quick_view__td quick_view__td--right">Sapphire</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="quick_view__buttons">
      <a href="" class="btn quick_view__btn" type="button">
        <span class="quick_view__btn_text">More info</span>
      </a>
      <?if ($current_status === "spec_order") { ?>
        <button class="btn quick_view__btn js_callback" type="button" data-phone="+44 203 540 1477">
          <span class="quick_view__btn_text">PRE-ORDER</span>
        </button>
      <? } else { ?>
        <button class="btn quick_view__btn<?if ($current_status === "discontinued") { ?> quick_view__btn--disabled<? } ?>" type="button">
          <span class="quick_view__btn_text">Add to bag</span>
        </button>
      <? } ?>
    </div>
  </div>
</div>