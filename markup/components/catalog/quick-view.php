<?
$has_sale = true;
$product_statuses = array("in_stock", "spec_order", "discontinued");
$current_product_status_index = 0;
$current_status = $product_statuses[$current_product_status_index];
$is_favourite = false;
$is_compare = false;
//$images = array("500x500", "300x300");
$images = array("500x500", "300x300", "400x300", "500x400", "600x600", "500x300", "350x300");
?>
<div class="js_quick_view_modal hide">
  <div class="modal quick_view__modal">
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
        <div class="quick_view__col1 carousel">
          <div class="quick_view__carousel">
            <div class="js_quick_view_slider">
              <? foreach ($images as $image) { ?>
                <img class="img-responsive" src="https://via.placeholder.com/<?= $image; ?>" alt="">
              <? } ?>
            </div>
            <div class="minicard__actions">
              <div class="minicard__like_btn">
                <button class="btn<? if ($is_favourite) { ?> active<? } ?>" type="button">
                  <svg class="minicard__like">
                    <use xlink:href="#like"></use>
                  </svg>
                </button>
              </div>
              <div class="minicard__compare_btn">
                <button class="btn<? if ($is_compare) { ?> active<? } ?>" type="button">
                  <svg class="minicard__compare">
                    <use xlink:href="#compare"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="quick_view__thumbs">
            <div class="<? if (count($images) > 4) { ?>quick_view__thumb_carousel<? } ?>">
              <div
                class="js_thumb<? if (count($images) > 4) { ?> js_thumb_carousel<? } else { ?> quick_view__thumb_row<? } ?>">
                <? foreach ($images as $image) { ?>
                  <div class="quick_view__thumb">
                    <img class="img-responsive" src="https://via.placeholder.com/<?= $image; ?>" alt="">
                  </div>
                <? } ?>
              </div>
            </div>

            <? if (count($images) > 4) { ?>
              <div class="quick_view__ctrl js_thumb_ctrl">
                <div class="quick_view__nav">
                  <svg class="quick_view__nav_icon">
                    <use xlink:href="#quick-view-arrow"></use>
                  </svg>
                </div>
                <div class="quick_view__nav quick_view__nav--right">
                  <svg class="quick_view__nav_icon">
                    <use xlink:href="#quick-view-arrow"></use>
                  </svg>
                </div>
              </div>
            <? } ?>
          </div>
        </div>
        <div class="quick_view__col2">
          <div class="quick_view__name">Diamond Hoop Earrings 35mm in Sterling Silver - Ug3237</div>
          <div class="mb-15 quick_view__price">
            <? if ($has_sale) { ?>
              <span class="minicard__oldprice">RRP <span class="minicard__oldprice--line">£ 1 180</span></span>
                <span class="minicard__divider"> | </span>
                <span class="minicard__price">£ 980
                <span class="minicard__sale">-40%</span>
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
        <? if ($current_status === "spec_order") { ?>
          <button class="btn quick_view__btn js_callback" type="button" data-phone="+44 203 540 1477">
            <span class="quick_view__btn_text">PRE-ORDER</span>
          </button>
        <? } else { ?>
          <button
            class="btn quick_view__btn<? if ($current_status === "discontinued") { ?> quick_view__btn--disabled<? } ?>"
            type="button">
            <span class="quick_view__btn_text">Add to bag</span>
          </button>
        <? } ?>
      </div>
    </div>
  </div>
</div>