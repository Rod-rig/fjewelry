<?php
/**
 * @var array $arParams
 * @var array $arResult
 */
?>
<div class="catalog__list">
  <? foreach ($arResult as $item) { ?>
    <div class="catalog__item">
      <? includeComponent('main/minicard', 'catalog/list', $item); ?>
    </div>
  <? } ?>
</div>