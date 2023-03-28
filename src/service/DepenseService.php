<?php
namespace App\service;

use App\Repository\DepensesRepository;
use stdClass;

class DepenseService 
{
    public function __construct(
        readonly private DepensesRepository $depensesRepository
    )
    {
        
    }

    public function getDepenseObject(): stdClass
    {
        $depenseCurrentDay = $this->getDepensePerDay();
        $depenseLastDay = $this->getDepensePerDay(1);
        if($depenseLastDay === 0 && $depenseCurrentDay === 0 ){
            return $this->createStdClass('neutral', 100, $this->getDepense());
        } elseif ($depenseLastDay === 0 && $depenseCurrentDay > 0){
            return $this->createStdClass('increase', 100, $this->getDepense());
        } else {
            $percentage = $this->getPercentage($depenseLastDay, $depenseCurrentDay);
            return $this->createStdClass($this->getDirection($percentage), $percentage, $this->getDepense());
        }
    }
    public function getDepenseEachDay(): array
    {
        $depenses = $this->depensesRepository->getDepensesEachDay();
        $groupedDay = [];
        foreach ($depenses as $depense ) {
            $day = $depense->getCreatedAt()->format('j');
            $groupedDay[$day][] = $depense;
        }
        $labelArray = [];
        $dataArray = [];
        foreach ($groupedDay as $day => $depenses) {
            $labelArray[] = $day;
            $amountEachDay = 0;
            foreach ($depenses as $item => $depense) {
                $amountEachDay = $amountEachDay + $depense->getAmount();
            }
            $dataArray[] = $amountEachDay;
        }
        return [
            'labels' => $labelArray,
            'datas' => $dataArray,
            'name' => 'depense '. date('F')
        ];
    }
    private function getDepense()
    {
        $depenses = $this->depensesRepository->findAll();
        $total = 0;
        foreach ($depenses as $depense) {
            $total = $total + $depense->getAmount();
        }
        return $total;
    }
    private function getDepensePerDay(int $day = 0): int
    {
        $targetDay = (int)date('d') - $day;
        $depenses = $this->depensesRepository->findAll();
        $currentDaydepensesArray = [];
        foreach ($depenses as $depenses) {
            $depensesDay = $depenses->getCreatedAt()->format('d');
            if((int)$depensesDay  === $targetDay){
                $currentDaydepensesArray[$targetDay][] = $depenses->getAmount(); 
            }
        }
        $daydepenses = 0;
        foreach($currentDaydepensesArray as $key => $amounts){
            foreach ($amounts as $value) {
                $daydepenses = $daydepenses + $value;
            }
        }
        return $daydepenses;
    }

    private function getPercentage(int $lastDayDepense, int $currentDayDepense): float
    {
        $percentage =  (($currentDayDepense -$lastDayDepense) / $lastDayDepense) * 100;
        return round($percentage, 1);
    }

    private function createStdClass($change, $amount, $balance): stdClass
    {
        $object = new stdClass();
        $object->change = $change;
        $object->amount = $amount;
        $object->balance = $balance;
        return $object;
    }
    private function getDirection(float $percentage): string
    {
        $direction = 'neutral';
        if($percentage > 0){
            $direction = 'increase';
        } 
        if ($percentage < 0){
            $direction = 'decrease';
        }
        return $direction;
    }
}