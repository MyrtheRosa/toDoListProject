<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('assets/css/auth/edit.css') }}">
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <link rel="stylesheet" href="{{ asset('assets/css/app.css')}}">
    <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/alpine.min.js" defer></script>

</head>
<body>
    <div name="header" class="Nav">
        <h2 class="font-semibold text-xl leading-tight headerText">
            {{ __('Profile Information') }}
        </h2>

        <a href="./dashboard" id="redirect">
            {{ __('Return to My ToDo List') }}
        </a>
    </div>

    <div class="py-12 normalBG">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 items">
            <div class="p-4 sm:p-8 sm:rounded-lg holder">
                <div class="max-w-xl">
                    @include('profile.partials.update-profile-information-form')
                </div>
            </div>

            <div class="p-4 sm:p-8 sm:rounded-lg holder">
                <div class="max-w-xl">
                    @include('profile.partials.update-password-form')
                </div>
            </div>

            <div class="p-4 sm:p-8 sm:rounded-lg holder">
                <div class="max-w-xl">
                    @include('profile.partials.delete-user-form')
                </div>
            </div>
        </div>
    </div>
</body>
</html>
