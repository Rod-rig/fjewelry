<?php require '../header.php'; ?>
<?php require '../components/common/breadcrumbs.php'; ?>

<div class="container profile">
  <div class="profile__h1">My addresses</div>

  <div class="row profile__row">
    <div class="profile__menu_col">
      <?php require '../components/profile/menu.php'; ?>
    </div>
    <div class="profile__content_col">
      <?php require '../components/profile/addresses.php'; ?>
    </div>
  </div>
</div>

<?php require '../footer.php'; ?>
