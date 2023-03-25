<?php
namespace App\service;

use App\Repository\DepensesRepository;

class DepenseService 
{
    public function __construct(
        readonly private DepensesRepository $depensesRepository
    )
    {
        
    }

    public function getTotalDepenses(): int
    {
        $depenses = $this->depensesRepository->findAll();
        $total = 0;
        foreach ($depenses as $depense) {
            $total = $total + $depense->getAmount();
        }
        return $total;
    }
}