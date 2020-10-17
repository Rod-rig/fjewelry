<? $images = array(
"https://img.zlato.ua/upload/iblock/92a/zolotoe_koltso_vzaimnyy_vybor_s_tsirkoniem_000054216.jpg",
"https://img.zlato.ua/upload/resize_cache/iblock/e8b/700_700_1/000054216_t_1.jpg",
"https://img.zlato.ua/upload/resize_cache/iblock/ad3/700_700_1/000054216_t_2.jpg",
"https://img.zlato.ua/upload/resize_cache/iblock/2c3/700_700_1/000054216_f_2.jpg",
"https://img.zlato.ua/upload/resize_cache/iblock/29a/700_700_1/000054216_f_3.jpg",
"https://img.zlato.ua/upload/resize_cache/iblock/552/700_700_1/000054216_f_1.jpg",
"https://img.zlato.ua/upload/resize_cache/iblock/929/700_700_1/000054216_add_1.jpg"
); ?>

<div class="card_media">
  <div class="card_media__container">
    <div class="card_media__slider js_media_slider">
      <? foreach ($images as $image) { ?>
        <div class="card_media__slide">
          <img src="<?= $image; ?>" alt="" class="card_media__img img-responsive">
        </div>
      <? } ?>
    </div>
    <div class="js_media_thumb js_thumb_carousel card_media__thumbs">
      <? foreach ($images as $image) { ?>
        <div class="card_media__thumb">
          <img src="https://img.zlato.ua/upload/resize_cache/iblock/576/700_700_1/serebryanoe_koltso_s_agatom_i_fianitami_000122585_000122585.jpg" alt=""
               class="card_media__thumb_img img-responsive">
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
</div>