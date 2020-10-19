<?
$status = "in_stock";
$hasOldPrice = true;
?>

<div class="card__content">
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
  <div class="card__buy_wrap">
    <button class="card__buy <? if ($status !== "in_stock") { ?>card__buy--disabled<? } ?>" type="button">Add to bag</button>
    <div class="">
      <div class="card__features">
        <svg class="card__info_icon">
          <use xlink:href="#return"></use>
        </svg>
        <div class="card__feature_info"><span class="card__info_primary">FREE</span> RETURN 14 DAYS</div>
      </div>
      <div class="card__features">
        <svg class="card__info_icon">
          <use xlink:href="#delivery"></use>
        </svg>
        <div class="card__feature_info"><span class="card__info_primary">FREE</span> DELIVERY OVER £ 49</div>
      </div>
    </div>
  </div>
  <? require "other-variations.php"; ?>
  <? require "tabs.php"; ?>
</div>