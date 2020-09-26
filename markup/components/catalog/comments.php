<?php
/**
 * @var array $arParams
 * @var array $arResult
 */
?>
<div class="catalog_comments slider">
  <div class="title"><?= $arResult['TITLE']; ?></div>
  <div class="js_catalog_comments">
    <? foreach ($arResult['COMMENTS'] as $comment) { ?>
      <div class="catalog_comments__item

">
        <div class="catalog_comments__row">
          <div class="catalog_comments__img">
            <a href="">
              <img class="img-responsive" src="<?= $comment['IMG']; ?>" alt="<?= $comment['NAME']; ?>">
            </a>
          </div>
          <div class="catalog_comments__name_wrap">
            <a class="catalog_comments__name" href=""><?= $comment['NAME']; ?></a>
          </div>
        </div>
        <div class="catalog_comments__text"><?= $comment['TEXT']; ?></div>
        <div class="catalog_comments__author"><?= $comment['AUTHOR']; ?></div>
      </div>
    <? } ?>
  </div>
</div>
