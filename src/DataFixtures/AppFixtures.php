<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    public function __construct(
        readonly private UserPasswordHasherInterface $encoder
    )
    {
        
    }
    public function load(ObjectManager $manager): void
    {
        $user = new User();
        $user->setFirstname('admin')
            ->setLastname('admin')
            ->setIsVerified(true)
            ->setTelephone('+237695254870')
            ->setEmail('admin@admin.com')
            ->setPassword($this->encoder->hashPassword($user, 'azerty'))
            ->setRoles([User::ROLE_ADMIN])
            ->setSex(User::MAN);
        $manager->persist($user);

        $manager->flush();
    }
}
