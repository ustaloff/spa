<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')
    ->get('/user', function (Request $request) {
        return $request->user();
    });

//Route::group(['api'], function () {
Route::get('/get-base-data', BaseController::class . '@getBaseData');
Route::get('/get-items', BaseController::class . '@getItems');
//});


Route::group(['prefix' => 'profile'], function () {
    //Route::get('/get-base-data', BaseController::class . '@getBaseData');
    Route::get('/get-items', ProfileController::class . '@getItems');
});
