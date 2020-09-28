<?php
/**
 * @var array $arParams
 * @var array $arResult
 */
?>
<div class="catalog__list">
  <? foreach ($arResult as $item) { ?>
    <div class="catalog__item">
      <? includeComponent('main/minicard', 'catalog/list', array('PRODUCT' => $item, 'IS_EXTENDED_VIEW' => true)); ?>
    </div>
  <? } ?>
</div>