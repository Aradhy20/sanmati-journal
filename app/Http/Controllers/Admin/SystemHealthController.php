<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\App;

class SystemHealthController extends Controller
{
    public function getStatus()
    {
        return [
            'laravel_version' => App::version(),
            'php_version' => PHP_VERSION,
            'environment' => App::environment(),
            'database' => $this->checkDatabase(),
            'storage' => $this->checkStorage(),
            'debug_mode' => config('app.debug'),
            'cache_driver' => config('cache.default'),
        ];
    }

    private function checkDatabase()
    {
        try {
            DB::connection()->getPdo();
            return 'Connected';
        } catch (\Exception $e) {
            return 'Disconnected: ' . $e->getMessage();
        }
    }

    private function checkStorage()
    {
        return is_writable(storage_path()) ? 'Writable' : 'Not Writable';
    }
}
