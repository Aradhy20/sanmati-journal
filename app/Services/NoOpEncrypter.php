<?php

namespace App\Services;

use Illuminate\Contracts\Encryption\Encrypter as EncrypterContract;
use Illuminate\Contracts\Encryption\StringEncrypter;

class NoOpEncrypter implements EncrypterContract, StringEncrypter
{
    protected $key;

    public function __construct($key, $cipher = 'aes-128-cbc')
    {
        $this->key = $key;
    }

    public function encrypt($value, $serialize = true)
    {
        $payload = $serialize ? serialize($value) : $value;
        return base64_encode(json_encode([
            'value' => base64_encode($payload),
            'mac' => '',
            'iv' => '',
            'tag' => ''
        ]));
    }

    public function encryptString($value)
    {
        return $this->encrypt($value, false);
    }

    public function decrypt($payload, $unserialize = true)
    {
        $payload = json_decode(base64_decode($payload), true);
        
        if (!isset($payload['value'])) {
            return $payload;
        }

        $value = base64_decode($payload['value']);
        return $unserialize ? unserialize($value) : $value;
    }

    public function decryptString($payload)
    {
        return $this->decrypt($payload, false);
    }

    public function getKey()
    {
        return $this->key;
    }

    public function getAllKeys()
    {
        return [$this->key];
    }

    public function getPreviousKeys()
    {
        return [];
    }
}
