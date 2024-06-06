<header>
    <link rel="stylesheet" href="{{ asset('assets/css/auth/edit.css')}}">
</header>

<x-app-layout>
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
</x-app-layout>
