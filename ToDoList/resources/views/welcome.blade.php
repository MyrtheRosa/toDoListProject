<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>

    <link rel="stylesheet" href="{{asset('assets/css/login.css')}}" />
</head>

<body>
    <section>
      <img src="{{asset('assets/images/stars.png')}}" id="stars" />
      <img src="{{asset('assets/images/moon.png')}}" id="moon" />
      {{-- <img src="{{asset('assets/images/mountains_behind.png')}}" id="mountains_behind" /> --}}
      <section id="display">
        <div id="formSignUp">
            <header id="SignUpHeader">Signup</header>
            <form method="POST" action="{{ route('register') }}">
                @csrf
                <input type="text" placeholder="Full Name" required />
                <input type="text" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <div id="checkbox">
                    <input type="checkbox" id="signUpCheckbox" />
                    <label for="signUpCheckbox">I accept all terms & conditions</label>
                </div>
                <input type="submit" value="Signup" />
            </form>
        </div>

        <div id="formLogin">
            <header id="LoginHeader">Login</header>
            <form method="POST" action="{{ route('todo') }}">
                @csrf
                <input type="text" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <a href="#">Forgot password?</a>
                <input type="submit" value="Login" />
            </form>
        </div>
      <img src="{{asset('assets/images/mountains_front.png')}}" id="mountains_front" />
    </section>

        <script>
            const display = document.getElementById("display");
            const signUpHeader = document.getElementById("SignUpHeader");
            const loginHeader = document.getElementById("LoginHeader");

            function loginOnClickHeader() {
                display.classList.add('active')
            }
            function signUpOnClickHeader() {
                display.classList.remove('active')
            }

            loginHeader.addEventListener('click', loginOnClickHeader);
            signUpHeader.addEventListener('click', signUpOnClickHeader)


        </script>
    </section>
</body>

