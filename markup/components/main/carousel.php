<?php
/**
 * @var array $arParams
 * @var array $arResult
 */
?>
<div class="container carousel">
  <div class="title"><?= $arResult['TITLE']; ?></div>
  <div class="js_main_carousel">
    <? for ($i = 0; $i < count($arResult['PRODUCTS']); $i++) { ?>
      <div>
        <? includeComponent('main/minicard', 'carousel/products', $arResult['PRODUCTS'][$i]); ?>
      </div>
    <? } ?>
  </div>
</div>