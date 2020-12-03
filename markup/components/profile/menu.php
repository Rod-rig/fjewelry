<?
$menu = array(
  array(
    'NAME' => 'Personal Data',
    'ICON' => 'profile',
    'HREF' => '/profile.php',
  ),
  array(
    'NAME' => 'My orders',
    'ICON' => 'orders',
    'HREF' => '/profile-orders.php',
  ),
  array(
    'NAME' => 'My Wish List',
    'ICON' => 'wishlist',
    'HREF' => '/profile-wishlist.php',
  ),
  array(
    'NAME' => 'My Addresses',
    'ICON' => 'home',
    'HREF' => '/profile-addresses.php',
  ),
  array(
    'NAME' => 'Subscriptions',
    'ICON' => 'letter',
    'HREF' => '/profile-subscription.php',
  )
);
?>

<div class="profile__menu">
  <? foreach ($menu as $m) { ?>
    <div class="profile__item">
      <a class="profile__link<? if (isOnPage($m['HREF'])) {?> profile__link--active<? } ?>" href="<?= SITE_DIR . $m['HREF']; ?>">
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
