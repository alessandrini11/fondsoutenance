<?php
namespace App\service;

use App\Repository\UserRepository;

class UserService
{
    public function __construct(
        readonly private UserRepository $userRepository
    )
    {
        
    }
    public function getUserPerFiliere(): array
    {
        $users = $this->userRepository->findAll();
        $groupedByFiliere = [];
        foreach ($users as $user) {
            $groupedByFiliere[$user->getFiliere()][] = $user;
        }
        $labelArray = [];
        $dataArray = [];
        foreach ($groupedByFiliere as $filiere => $users) {
            $labelArray[] = $filiere;
            $dataArray[] = count($users);
        }
        return [
            'labels' => $labelArray,
            'datas' => $dataArray,
            'name' => 'depense '. date('F')
        ];
    }
}