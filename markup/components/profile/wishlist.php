<?
$list = array(
  array(
    'IMG' => 'https://via.placeholder.com/300x300',
    'NAME' => 'Golden ring',
    'RRP' => '£ 435',
    'PRICE' => '£ 435',
    'SALE' => '-45%',
    'SKU' => 'SKU 0123324',
    'STATUS' => 'in stock',
  ),
  array(
    'IMG' => 'https://via.placeholder.com/400x400',
    'NAME' => 'Diamond ring',
    'PRICE' => '£ 500',
    'SKU' => 'SKU 0123324',
    'STATUS' => 'in stock',
  ),
  array(
    'IMG' => 'https://via.placeholder.com/300x300',
    'NAME' => 'Golden ring',
    'RRP' => '£ 435',
    'PRICE' => '£ 435',
    'SALE' => '-45%',
    'SKU' => 'SKU 0123324',
    'STATUS' => 'in stock',
  ),
  array(
    'IMG' => 'https://via.placeholder.com/400x400',
    'NAME' => 'Diamond ring',
    'PRICE' => '£ 500',
    'SKU' => 'SKU 0123324',
    'STATUS' => 'in stock',
  ),
  array(
    'IMG' => 'https://via.placeholder.com/300x300',
    'NAME' => 'Golden ring',
    'RRP' => '£ 435',
    'PRICE' => '£ 435',
    'SALE' => '-45%',
    'SKU' => 'SKU 0123324',
    'STATUS' => 'in stock',
  ),
  array(
    'IMG' => 'https://via.placeholder.com/400x400',
    'NAME' => 'Diamond ring',
    'PRICE' => '£ 500',
    'SKU' => 'SKU 0123324',
    'STATUS' => 'in stock',
  ),
);
?>

<div class="profile_wish">
  <div class="profile_wish__list">
    <? foreach ($list as $l) { ?>
      <div class="profile_wish__row">
        <div class="profile_wish__media">
          <img class="profile_wish__img img-responsive" src="<?= $l['IMG']; ?>" alt="" />
        </div>
        <div class="profile_wish__body">
          <div class="profile_wish__name_wrap">
            <a class="profile_wish__name" href=""><?= $l['NAME']; ?></a>
          </div>
          <div class="profile_wish__price">
            <? if (array_key_exists('RRP', $l)) { ?>
              <div class="profile_wish__rrp">RRP <?= $l['RRP']; ?></div>
              <div class="profile_wish__divider">|</div>
              <div class="profile_wish__newprice"><?= $l['PRICE']; ?></div>
              <div class="profile_wish__sale"><?= $l['SALE']; ?></div>
            <? } else { ?>
              <div><?= $l['PRICE']; ?></div>
            <? } ?>
          </div>
          <div class="profile_wish__info">
            <div class="profile_wish__sku"><?= $l['SKU']; ?></div>
            <div class="profile_wish__status">
              <svg class="profile_wish__status_icon">
                <use xlink:href="#tick"></use>
              </svg>
              <div class="profile_wish__status--instock"><?= $l['STATUS']; ?></div>
            </div>
          </div>
          <div>
            <button class="btn profile_wish__btn" type="button">
              <span>+</span>
              <span class="profile_wish__btn_text">Add to bag</span>
            </button>
          </div>
          <button class="btn profile_wish__close_btn" class="btn" type="button">
            <svg class="profile_wish__close">
              <use xlink:href="#close"></use>
            </svg>
            <span class="profile_wish__close_btn_text">Remove</span>
          </button>
        </div>
      </div>
    <? } ?>
  </div>
  <div class="profile_wish__footer">
    <div class="text-center">
      <button type="button" class="profile_wish__bag">Add all to bag</button>
    </div>
    <div class="text-center">
      <button type="button" class="btn profile_wish__share">Share wish list</button>
    </div>
  </div>
</div>