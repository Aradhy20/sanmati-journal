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
        // Check if admin exists
        if (!User::where('email', 'admin@sanmati.com')->exists()) {
            User::create([
                'full_name' => 'Admin User',
                'email' => 'admin@sanmati.com',
                'password_hash' => Hash::make('password'), //Default password
                'role' => 'admin',
            ]);
            $this->command->info('Admin user created: admin@sanmati.com / password');
        } else {
            $this->command->info('Admin user already exists.');
        }
    }
}
