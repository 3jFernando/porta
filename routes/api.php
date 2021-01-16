<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\v1\{
    BriefcaseController,
    MessageController,
    CompanyController
};

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => '/v1'], function() {
    
    /**
     * Empresa
     */
    Route::group(['prefix' => '/companies'], function () {
        Route::get('/', [CompanyController::class, 'index'])->name('companies.index');
        Route::get('/{id}', [CompanyController::class, 'show'])->name('companies.show');
        Route::put('/{id}', [CompanyController::class, 'update'])->name('companies.update');
    });

    /**
     * Portafolio de los proyectos de la empresa
     */
    Route::group(['prefix' => '/briefcases'], function () {
        Route::get('/', [BriefcaseController::class, 'index'])->name('briefcases.index');
        Route::post('/', [BriefcaseController::class, 'store'])->name('briefcases.store');
    });
    
    /**
     * Mensajes de los usuarios
     */
    Route::group(['prefix' => '/messages'], function () {
        Route::get('/cant/{cant}', [MessageController::class, 'index'])->name('messages.index');
        Route::post('/', [MessageController::class, 'store'])->name('messages.store');
        Route::put('/{id}', [MessageController::class, 'update'])->name('messages.update');
    });

});
