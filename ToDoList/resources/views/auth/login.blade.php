<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="{{ asset('assets/css/login.css') }}">
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&display=swap" rel="stylesheet">
</head>
<body>
<header>
    <h2>Login</h2>
</header>
<div class="wrapper">
    <div class="form-box login">
        <!-- Session Status -->
        <x-auth-session-status class="mb-4" :status="session('status')" />

        <form method="POST" action="{{ route('login') }}">
            @csrf

            <h2>{{ __('Login') }}</h2>

            <!-- Email Address -->
            <div class="input-box">
                <input id="email" type="email" name="email" :value="old('email')" required autofocus autocomplete="username">
                <label for="email">{{ __('Email') }}</label>
            </div>
            <x-input-error :messages="$errors->get('email')" class="mt-2" />

            <!-- Password -->
            <div class="input-box">
                <input id="password" type="password" name="password" required autocomplete="current-password">
                <label for="password">{{ __('Password') }}</label>
            </div>
            <x-input-error :messages="$errors->get('password')" class="mt-2" />

            <!-- Remember Me -->
            <div class="remember-forgot">
{{--                <label for="remember_me">--}}
{{--                    <input id="remember_me" type="checkbox" name="remember">--}}
{{--                    <span>{{ __('Remember me') }}</span>--}}
{{--                </label>--}}
                @if (Route::has('password.request'))
                    <a href="{{ route('password.request') }}">{{ __('Forgot your password?') }}</a>
                @endif
            </div>

            <button type="submit" class="btn">
                {{ __('Log in') }}
            </button>

            <div class="login-register">
                <p>{{ __("Don't have an account?") }} <a href="{{ route('register') }}">{{ __('Register') }}</a></p>
            </div>
        </form>
    </div>
</div>
</body>
</html>
