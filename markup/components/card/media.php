<? $images = array(
"https://img.zlato.ua/upload/iblock/92a/zolotoe_koltso_vzaimnyy_vybor_s_tsirkoniem_000054216.jpg",
"https://img.zlato.ua/upload/resize_cache/iblock/e8b/700_700_1/000054216_t_1.jpg",
"https://img.zlato.ua/upload/resize_cache/iblock/ad3/700_700_1/000054216_t_2.jpg",
"https://img.zlato.ua/upload/resize_cache/iblock/2c3/700_700_1/000054216_f_2.jpg",
"https://img.zlato.ua/upload/resize_cache/iblock/29a/700_700_1/000054216_f_3.jpg",
"https://img.zlato.ua/upload/resize_cache/iblock/552/700_700_1/000054216_f_1.jpg",
"https://img.zlato.ua/upload/resize_cache/iblock/929/700_700_1/000054216_add_1.jpg"
); ?>

<div class="card_media__container">
  <div class="card_media__row">
    <? if (count($images) > 0) { ?>
      <div class="card_media__slider">
        <div class="js_media_slider">
          <? foreach ($images as $image) { ?>
            <div class="card_media__slide">
              <img src="<?= $image; ?>" alt="" class="card_media__img js_media_trigger">
            </div>
          <? } ?>
        </div>
      </div>
    <? } else { ?>
      <img src="<?= SITE_TEMPLATE_PATH; ?>/img/no-photo.png" alt="" class="img-responsive">
    <? } ?>

    <? if (count($images) > 1) { ?>
      <div class="card_media__thumbs_wrap">
        <div class="js_media_thumb js_media_thumb_carousel card_media__thumbs">
          <? foreach ($images as $image) { ?>
            <div class="card_media__thumb">
              <img src="<?= $image; ?>" alt=""
                   class="card_media__thumb_img img-responsive">
            </div>
          <? } ?>
        </div>
        <div class="card_media__ctrl js_media_thumb_ctrl">
          <div class="card_media__nav">
            <svg class="card_media__nav_icon">
              <use xlink:href="#quick-view-arrow"></use>
            </svg>
          </div>
          <div class="card_media__nav card_media__nav--right">
            <svg class="card_media__nav_icon">
              <use xlink:href="#quick-view-arrow"></use>
            </svg>
          </div>
        </div>
      </div>
    <? } ?>
  </div>

  <div class="minicard__actions">
    <div class="minicard__like_btn">
      <button class="btn active" type="button">
        <svg class="minicard__like">
          <use xlink:href="#like"></use>
        </svg>
      </button>
    </div>
    <div class="minicard__compare_btn">
      <button class="btn active" type="button">
        <svg class="minicard__compare">
          <use xlink:href="#compare"></use>
        </svg>
      </button>
    </div>
  </div>
</div>

<!-- photo gallery popup -->
<div class="modal js_media_popup hide">
  <div class="modal__backdrop js_media_trigger"></div>
  <div class="modal__root card_media__popup">
    <div class="modal__close">
      <button
        class="modal__close_btn js_media_trigger"
        type="button"
      >
        <svg class="modal__close_icon">
          <use xlink:href="#close"></use>
        </svg>
      </button>
    </div>

    <div class="card_media__name">9CT Yellow Gold Drop Earrings 55 x 14.7mm</div>
    <div class="card__price_info">
      <span class="card__oldprice">RRP <span class="card__oldprice--line">£ 2 250</span></span>
      <span class="card__divider"> | </span>
      <span class="card__price">£ 1 180
        <span class="card__sale">-33%</span>
      </span>
    </div>
    <div class="card_media__popup_slider">
      <div class="js_media_popup_slider">
        <? foreach ($images as $image) { ?>
          <div class="card_media__slide">
            <img src="<?= $image; ?>" alt="" class="img-responsive">
          </div>
        <? } ?>
      </div>
      <div class="card_media__popup_ctrl js_media_popup_ctrl">
        <div class="card_media__popup_nav">
          <svg class="card_media__popup_nav_icon">
            <use xlink:href="#quick-view-arrow"></use>
          </svg>
        </div>
        <div class="card_media__popup_nav card_media__popup_nav--right">
          <svg class="card_media__popup_nav_icon">
            <use xlink:href="#quick-view-arrow"></use>
          </svg>
        </div>
      </div>
    </div>
    <button class="card__buy" type="button">Add to bag</button>
  </div>
</div>
