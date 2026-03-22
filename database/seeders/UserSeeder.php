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
                'password' => Hash::make('Njain@1984'),
                'role' => 'admin',
            ]
        );

        // If it already existed but might need a password reset:
        $admin->password = Hash::make('Njain@1984');
        $admin->role = 'admin';
        $admin->save();

        $this->command->info('Admin user created successfully: sanmatijournal@gmail.com');
    }
}
