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
        // Delete the old placeholder admin if it exists
        $oldAdmin = User::where('email', 'admin@sanmati.com')->first();
        if ($oldAdmin) {
            $oldAdmin->delete();
        }

        // Create or update the official admin user
        $admin = User::firstOrCreate(
            ['email' => 'sanmatijournal@gmail.com'],
            [
                'full_name' => 'Admin User',
                'password' => Hash::make(env('ADMIN_PASSWORD', Str::random(12))),
                'role' => 'admin',
            ]
        );

        // If it already existed and we want to ensure it's an admin
        $admin->role = 'admin';
        
        // Only update password if provided in env
        if (env('ADMIN_PASSWORD')) {
            $admin->password = Hash::make(env('ADMIN_PASSWORD'));
        }
        
        $admin->save();

        $this->command->info('Admin user created successfully: sanmatijournal@gmail.com');
    }
}
