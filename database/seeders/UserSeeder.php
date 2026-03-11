<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (!User::where('email', 'admin@sanmati.com')->exists()) {
            User::create([
                'full_name' => 'Admin User',
                'email' => 'admin@sanmati.com',
                'password' => Hash::make('ChangeMe@2026!'), // Change this immediately after deployment
                'role' => 'admin',
            ]);
            $this->command->info('Admin user created: admin@sanmati.com — CHANGE PASSWORD IMMEDIATELY!');
        } else {
            $this->command->info('Admin user already exists.');
        }
    }
}
