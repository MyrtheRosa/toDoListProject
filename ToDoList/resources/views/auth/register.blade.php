<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="{{ asset('assets/css/auth/register.css') }}">
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&display=swap" rel="stylesheet">
</head>
<body>
<header>
    <h2>Register</h2>
</header>
<div class="wrapper">
    <div class="form-box register">
        <!-- Session Status -->
        <x-auth-session-status class="mb-4" :status="session('status')" />

        <form method="POST" action="{{ route('register') }}">
            @csrf

            <h2>{{ __('Register') }}</h2>

            <!-- Name -->
            <div class="input-box">
                <input id="name" type="text" name="name" :value="old('name')" required autofocus autocomplete="name">
                <label for="name">{{ __('Name') }}</label>
            </div>
            <x-input-error :messages="$errors->get('name')" class="mt-2" />

            <!-- Email Address -->
            <div class="input-box">
                <input id="email" type="email" name="email" :value="old('email')" required autofocus autocomplete="username">
                <label for="email">{{ __('Email') }}</label>
            </div>
            <x-input-error :messages="$errors->get('email')" class="mt-2" />

            <!-- Password -->
            <div class="input-box confirm" style="border-bottom: 2px solid #fff;">
                <input id="password" type="password" name="password" required autocomplete="new-password">
                <label for="password">{{ __('Password') }}</label>
            </div>
            <x-input-error :messages="$errors->get('password')" class="mt-2" />

            <!-- Confirm Password -->
            <div class="input-box" style="border-bottom: 2px solid #fff;">
                <input id="password_confirmation" type="password" name="password_confirmation" required autocomplete="new-password" style="color:white;" >
                <label for="password_confirmation" style="color:white;">{{ __('Confirm Password') }}</label>
            </div>

            <button type="submit" class="btn">
                {{ __('Register') }}
            </button>

            <div class="login-register">
                <p>{{ __("Already have an account?") }} <a href="{{ route('login') }}">{{ __('Login') }}</a></p>
            </div>
        </form>
    </div>
</div>
</body>
</html>
