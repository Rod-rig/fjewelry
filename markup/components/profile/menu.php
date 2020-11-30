<?
$menu = array(
  array(
    'NAME' => 'Personal Data',
    'ICON' => 'profile',
    'IS_ACTIVE' => true,
  ),
  array(
    'NAME' => 'My orders',
    'ICON' => 'orders',
    'IS_ACTIVE' => false,
  ),
  array(
    'NAME' => 'My Wish List',
    'ICON' => 'wishlist',
    'IS_ACTIVE' => false,
  ),
  array(
    'NAME' => 'My Addresses',
    'ICON' => 'home',
    'IS_ACTIVE' => false,
  ),
  array(
    'NAME' => 'Subscriptions',
    'ICON' => 'letter',
    'IS_ACTIVE' => false,
  )
);
?>

<div class="profile__menu">
  <? foreach ($menu as $m) { ?>
    <div class="profile__item">
      <a class="profile__link<? if ($m['IS_ACTIVE']) {?> profile__link--active<? } ?>" href="">
        <svg class="profile__menu_icon">
          <use xlink:href="#<?= $m['ICON']; ?>"></use>
        </svg>
        <span class="profile__menu_text"><?= $m['NAME']; ?></span>
        <svg class="profile__menu_arrow">
          <use xlink:href="#arrow"></use>
        </svg>
      </a>
    </div>
  <? } ?>
</div>
