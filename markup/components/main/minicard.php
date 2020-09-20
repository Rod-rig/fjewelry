<?php
/**
 * @var array $arParams
 * @var array $arResult
 */
?>
<div class="minicard">
  <div class="minicard__body">
    <div class="minicard__actions">
      <div class="minicard__like_btn">
        <button class="btn<? if ($arParams['IS_FAVORITE']) { ?> active<? } ?>" type="button">
          <svg class="minicard__like">
            <use xlink:href="#like"></use>
          </svg>
        </button>
      </div>
      <div class="minicard__compare_btn">
        <button class="btn<? if ($arParams['IS_IN_COMPARE']) { ?> active<? } ?>" type="button">
          <svg class="minicard__compare">
            <use xlink:href="#compare"></use>
          </svg>
        </button>
      </div>
    </div>
    <div>
      <a href="">
        <img class="minicard__img" src="<?= $arParams['IMG']; ?>" alt="<?= $arParams['NAME']; ?>">
      </a>
    </div>
  </div>
  <div class="minicard__name">
    <a class="minicard__name_link" href=""><?= $arParams['NAME']; ?></a>
  </div>
  <div class="text-center">
    <? if (array_key_exists('OLD_PRICE', $arParams)) { ?>
      <span class="minicard__oldprice">RRP <span class="minicard__oldprice--line"><?= $arParams['OLD_PRICE']; ?></span></span>
      <span class="minicard__divider"> | </span>
      <span class="minicard__price"><?= $arParams['PRICE']; ?> <? if (array_key_exists('SALE', $arParams)) { ?>
          <span class="minicard__sale"><?= $arParams['SALE']; ?></span><? } ?>
      </span>
    <? } else { ?>
      <span class="minicard__price minicard__price--only"><?= $arParams['PRICE']; ?></span>
    <? } ?>
  </div>
</div>