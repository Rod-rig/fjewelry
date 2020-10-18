<?
$hasOldPrice = true;
?>

<div>
  <div class="card__name">9CT Yellow Gold Drop Earrings 55 x 14.7mm</div>
  <div class="card__info">
    <div class="card__price_info">
      <? if ($hasOldPrice) { ?>
        <span class="card__oldprice">RRP <span class="card__oldprice--line">£ 2 250</span></span>
        <span class="card__divider"> | </span>
        <span class="card__price">£ 1 180
          <span class="card__sale">-33%</span>
        </span>
      <? } else { ?>
        <span class="card__price card__price--only">£ 3 333</span>
      <? } ?>
    </div>
    <div class="card__sku">SKU 1234567</div>
  </div>
  <div class="card__status_info">
    <? require "status.php"; ?>
    <button type="button" class="btn card__guide">size guide</button>
  </div>
  <? require "sizes.php"; ?>
</div>