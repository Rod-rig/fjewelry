<?
$personal = array(
  array(
    'KEY' => 'Title',
    'VALUE' => 'Mr.',
  ),
  array(
    'KEY' => 'First Name',
    'VALUE' => 'Kevin',
  ),
  array(
    'KEY' => 'Last Name',
    'VALUE' => 'McCallister',
  ),
  array(
    'KEY' => 'Email',
    'VALUE' => 'kevinmccallister@gmail.com',
  ),
  array(
    'KEY' => 'Phone',
    'VALUE' => '+04412345678',
  ),
  array(
    'KEY' => 'Date of Birth',
    'VALUE' => '12/12/1982',
  ),
);
?>

<div class="profile__personal">
  <? foreach ($personal as $p) { ?>
    <div class="profile__personal_col">
      <div class="profile__personal_key"><?= $p['KEY']; ?></div>
      <div class="profile__personal_value"><?= $p['VALUE']; ?></div>
    </div>
  <? } ?>
</div>
