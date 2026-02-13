<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$email = 'sanmatijournal@gmail.com';
$password = 'Njain@1984';

// Check if user exists
$user = User::where('email', $email)->first();

if ($user) {
    // Update existing user
    $user->password_hash = Hash::make($password);
    $user->role = 'admin'; // Ensure role is admin
    $user->full_name = 'Sanmati Admin'; // Default name if not set, or update
    $user->save();
    echo "User {$email} updated successfully.\n";
} else {
    // Create new user
    User::create([
        'email' => $email,
        'password_hash' => Hash::make($password),
        'full_name' => 'Sanmati Admin',
        'role' => 'admin',
    ]);
    echo "User {$email} created successfully.\n";
}

// Optional: If 'only this emailid' means DELETE others, uncomment below.
// For safety, I will LIST other admins instead.
$otherAdmins = User::where('role', 'admin')->where('email', '!=', $email)->get();
if ($otherAdmins->count() > 0) {
    echo "WARNING: Other admin accounts exist:\n";
    foreach ($otherAdmins as $admin) {
        echo "- {$admin->email}\n";
    }
    // to delete: User::where('role', 'admin')->where('email', '!=', $email)->delete();
}
