<?php

namespace App\DTO;

use App\Entity\User;

class SmsResponse
{
    public string $fullName;
    public string $phoneNumber;
    public int $amount;
    public function __construct(User $user, int $amount)
    {
        $this->fullName = $user->getFirstname(). ' '. $user->getLastname();
        $this->phoneNumber = $user->getTelephone();
        $this->amount = $amount;
    }
}