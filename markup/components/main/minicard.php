<?php
/**
 * @var array $arParams
 * @var array $arResult
 */
$product = $arParams['PRODUCT'];
$is_extended_view = $arParams['IS_EXTENDED_VIEW'];
?>

<div class="minicard<? if ($is_extended_view) { ?> minicard--extended<? } ?>">
  <div class="minicard__body">
    <div class="minicard__actions">
      <div class="minicard__like_btn">
        <button class="btn<? if ($product['IS_FAVORITE']) { ?> active<? } ?>" type="button">
          <svg class="minicard__like">
            <use xlink:href="#like"></use>
          </svg>
        </button>
      </div>
      <div class="minicard__compare_btn">
        <button class="btn<? if ($product['IS_IN_COMPARE']) { ?> active<? } ?>" type="button">
          <svg class="minicard__compare">
            <use xlink:href="#compare"></use>
          </svg>
        </button>
      </div>
    </div>
    <div>
      <a href="">
        <img class="minicard__img minicard__img--primary" src="<?= $product['IMG']; ?>" alt="<?= $product['NAME']; ?>">
        <? if ($is_extended_view) { ?>
          <img class="minicard__img minicard__img--secondary" src="https://via.placeholder.com/400x400" alt="<?= $product['NAME']; ?>">
        <? } ?>
      </a>
    </div>
    <? if ($is_extended_view) { ?>
      <div class="minicard__buttons">
        <div class="minicard__quick_view_wrap">
          <button type="button" class="minicard__quick_view btn js_quick_view">
            <svg class="minicard__eye">
              <use xlink:href="#eye"></use>
            </svg>
            <span class="minicard__quick_view_text">Quick view</span>
          </button>
        </div>
        <div class="minicard__buy_wrap">
          <button class="btn minicard__buy js_add_to_basket" type="button">
            <span class="minicard__buy_text">Add to bag</span>
          </button>
        </div>
      </div>
    <? } ?>
  </div>
  <div class="minicard__name">
    <a class="minicard__name_link" href=""><?= $product['NAME']; ?></a>
  </div>
  <div class="text-center">
    <? if (array_key_exists('OLD_PRICE', $product)) { ?>
      <span class="minicard__oldprice">RRP <span class="minicard__oldprice--line"><?= $product['OLD_PRICE']; ?></span></span>
      <span class="minicard__divider"> | </span>
      <span class="minicard__price"><?= $product['PRICE']; ?> <? if (array_key_exists('SALE', $product)) { ?>
          <span class="minicard__sale"><?= $product['SALE']; ?></span><? } ?>
      </span>
    <? } else { ?>
      <span class="minicard__price minicard__price--only"><?= $product['PRICE']; ?></span>
    <? } ?>
  </div>
</div>