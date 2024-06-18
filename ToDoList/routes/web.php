<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/todos', function () {
    return view('todo');
})->middleware(['auth', 'verified'])->name('todo');

Route::get('/todo/timer', function () {
    return view('todotimer');
})->middleware(['auth', 'verified'])->name('todotimer');

Route::get('/todo', [TodoController::class, 'index']);
Route::post('/todo', [TodoController::class, 'store']);
Route::put('/todo/{id}', [TodoController::class, 'update']);
Route::get('/todo/{id}', [TodoController::class, 'destroy']);
Route::delete('/todo/delete/{id}', [TodoController::class, 'delete']);
Route::delete('/todo/delete/all', [TodoController::class, 'deleteAll']);
Route::get('/todo/{id}/edit', [TodoController::class, 'edit']);

Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
