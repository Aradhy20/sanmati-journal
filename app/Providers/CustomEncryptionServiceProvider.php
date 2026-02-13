<?php

namespace App\Providers;

use App\Services\NoOpEncrypter;
use Illuminate\Support\ServiceProvider;

class CustomEncryptionServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton('encrypter', function ($app) {
            $config = $app->make('config')->get('app');
            return new NoOpEncrypter($config['key'], $config['cipher']);
        });
    }
}
