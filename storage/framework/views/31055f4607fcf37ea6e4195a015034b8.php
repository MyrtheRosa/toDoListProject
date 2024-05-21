<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Login || HTML CSS JavaScript</title>

    <link rel="stylesheet" href="<?php echo e(asset('assets/css/Loginstyle.css')); ?>">
</head>

<body>
<section id="display">
    <div id="formSignUp">
        <header id="SignUpHeader">Signup</header>
        <form method="POST" action="<?php echo e(route('register')); ?>">
            <?php echo csrf_field(); ?>
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <input type="password" name="password_confirmation" placeholder="Confirm Password" required />
            <div id="checkbox">
                <input type="checkbox" id="signUpCheckbox" required />
                <label for="signUpCheckbox">I accept all terms & conditions</label>
            </div>
            <input type="submit" value="Signup" />
        </form>
    </div>

    <div id="formLogin">
        <header id="LoginHeader">Login</header>
        <form method="POST" action="<?php echo e(route('login')); ?>">
            <?php echo csrf_field(); ?>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <a href="<?php echo e(route('password.request')); ?>">Forgot password?</a>
            <input type="submit" value="Login" />
        </form>
    </div>

    <script>
        const display = document.getElementById("display");
        const signUpHeader = document.getElementById("SignUpHeader");
        const loginHeader = document.getElementById("LoginHeader");

        function loginOnClickHeader() {
            display.classList.add('active');
        }
        function signUpOnClickHeader() {
            display.classList.remove('active');
        }

        loginHeader.addEventListener('click', loginOnClickHeader);
        signUpHeader.addEventListener('click', signUpOnClickHeader);
    </script>
</section>
</body>

</html>
<?php /**PATH C:\Laravel\ToDoListProjectLaravelVue\resources\views\login.blade.php ENDPATH**/ ?>