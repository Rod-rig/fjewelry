<?php require '../header.php'; ?>
<?php require '../components/common/breadcrumbs.php'; ?>

<div class="container auth">
    <div class="auth__h1">Authorization</div>
    <div class="auth__row">
        <div class="auth__col">
            <div class="auth__subtitle">Registered Customers</div>
            <div class="auth__note">If you have an account, sign in with your email address</div>
            <div class="auth__form js_login_root"></div>
        </div>
        <div class="auth__col hidden-sm">
            <div class="auth__subtitle">New Customers</div>
            <div class="auth__note">Creating an account has many benefits: check out faster, keep more than one address, track orders and more</div>
            <div>
                <a href="" class="auth__link js_reg_trigger">Create an account</a>
            </div>
        </div>
    </div>
</div>

<?php require '../footer.php'; ?>