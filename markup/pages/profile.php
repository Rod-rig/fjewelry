<?php require '../header.php'; ?>
<?php require '../components/common/breadcrumbs.php'; ?>

<div class="container profile">
  <div class="profile__h1">Personal data</div>

  <div class="row profile__row">
    <div class="profile__menu_col">
      <?php require '../components/profile/menu.php'; ?>
    </div>
    <div class="profile__content_col">
      <?php require '../components/profile/personal-data.php'; ?>
      <a class="profile__edit profile__edit--position" href="">
        <svg class="profile__edit_icon">
          <use xlink:href="#edit"></use>
        </svg>
        <span class="profile__edit_text">Edit</span>
      </a>
    </div>
  </div>
</div>

<?php require '../footer.php'; ?>
