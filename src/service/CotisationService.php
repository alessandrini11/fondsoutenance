<?php
namespace App\service;

use App\Entity\Cotisation;
use App\Repository\CotisationRepository;
use stdClass;

class CotisationService 
{
    public function __construct(
        readonly private CotisationRepository $cotisationRepository,
        readonly private DepenseService $depenseService
    )
    {
        
    }

    public function getBalanceObject(): stdClass
    {
        $deposits = $this->getDeposits(Cotisation::DEPOT);
        $commissions = $this->getDeposits(Cotisation::ATTRIBUTION_FOND);
        $balance = $deposits - $commissions;
        $currentDayUserDeposits = $this->getWalletPerDay(Cotisation::DEPOT);
        $lastDayUserDeposits = $this->getWalletPerDay(Cotisation::DEPOT, 1);
        $currentDayCommissionDeposits = $this->getWalletPerDay(Cotisation::ATTRIBUTION_FOND);
        $lastDayCommissionDeposits = $this->getWalletPerDay(Cotisation::ATTRIBUTION_FOND, 1);
        /**
         * first case : if the deposits made by users added to the deposits made to the different
         * commissions are equal to 0, 
         * second case: if the sum of the deposits made by user and deposits made to commission
         * the last day and the sum of the deposit made by user and deposits made to commission
         * the current day are equal to 0 
         */
        if(
            $lastDayUserDeposits + $lastDayCommissionDeposits === 0 &&
            $currentDayUserDeposits + $currentDayCommissionDeposits > 0
        ){
            return $this->createStdClass('increase', 100, $balance);
        }elseif (
            $lastDayUserDeposits + $lastDayCommissionDeposits === 0 &&
            $currentDayUserDeposits + $currentDayCommissionDeposits === 0
        ){
            return $this->createStdClass('neutral', 0, $balance);
        } else{
            $percentage = $this->getPercentage(
                $lastDayUserDeposits + $currentDayUserDeposits, 
                $lastDayCommissionDeposits + $currentDayCommissionDeposits
            );
            return $this->createStdClass($this->getDirection($percentage), $percentage, $balance);
        }
    }

    public function getCommissionDepositeObject(): stdClass
    {
        $currentDayDeposite = $this->getWalletPerDay(Cotisation::ATTRIBUTION_FOND);
        $lastDayDeposite = $this->getWalletPerDay(Cotisation::ATTRIBUTION_FOND, 1);
        if($lastDayDeposite === 0 && $currentDayDeposite === 0){
            return $this->createStdClass('neutral', 0, $this->getDeposits(Cotisation::ATTRIBUTION_FOND));
        } elseif($lastDayDeposite === 0 && $currentDayDeposite > 0) {
            return $this->createStdClass('increase', 100, $this->getDeposits(Cotisation::ATTRIBUTION_FOND));
        } else{
            $percentage = $this->getPercentage($lastDayDeposite, $currentDayDeposite);
            return $this->createStdClass($this->getDirection($percentage), $percentage, $this->getDeposits(Cotisation::ATTRIBUTION_FOND));
        }
    }
    public function getUserDepositeObject(): stdClass
    {
        $currentDayDeposite = $this->getWalletPerDay(Cotisation::DEPOT);
        $lastDayDeposite = $this->getWalletPerDay(Cotisation::DEPOT, 1);
        if($lastDayDeposite === 0 && $currentDayDeposite == 0){
            return $this->createStdClass('neutral', 100, $this->getDeposits(Cotisation::DEPOT));
        } elseif ($lastDayDeposite === 0 && $currentDayDeposite > 0){
            return $this->createStdClass('increase', 100, $this->getDeposits(Cotisation::DEPOT));
        } else {
            $percentage = $this->getPercentage($lastDayDeposite, $currentDayDeposite);
        return $this->createStdClass($this->getDirection($percentage), $percentage, $this->getDeposits(Cotisation::DEPOT));
        }
    }
    public function getCotisationEachMonth(): array
    {
        $cotisations = $this->cotisationRepository->getCotisationEachMonth();
        $groupedDay = [];
        foreach ($cotisations as $cotisation ) {
            $day = $cotisation->getCreatedAt()->format('j');
            $groupedDay[$day][] = $cotisation;
        }
        $labelArray = [];
        $dataArray = [];
        foreach ($groupedDay as $day => $cotisations) {
            $labelArray[] = $day;
            $amountEachDay = 0;
            foreach ($cotisations as $item => $cotisation) {
                $amountEachDay = $amountEachDay + $cotisation->getAmount();
            }
            $dataArray[] = $amountEachDay;
        }
        return [
            'labels' => $labelArray,
            'datas' => $dataArray,
            'name' => 'Cotisation '. date('F')
        ];
    }
    private function getDeposits(string $type)
    {
        $cotisations = $this->cotisationRepository->findBy(['type' => $type]);
        $totalDeposite = 0;
        foreach ($cotisations as $cotisation) {
            $totalDeposite = $totalDeposite + $cotisation->getAmount();   
        }
        return $totalDeposite;
    }
    private function createStdClass($change, $amount, $balance): stdClass
    {
        $object = new stdClass();
        $object->change = $change;
        $object->amount = $amount;
        $object->balance = $balance;
        return $object;
    }
    private function getWalletPerDay(string $type, int $day = 0): int
    {
        $targetDay = (int)date('d') - $day;
        $cotisations = $this->cotisationRepository->findBy(['type' => $type]);
        $currentDayCotisationsArray = [];
        foreach ($cotisations as $cotisation) {
            $cotisationDay = $cotisation->getCreatedAt()->format('d');
            if((int)$cotisationDay  === $targetDay){
                $currentDayCotisationsArray[$targetDay][] = $cotisation->getAmount(); 
            }
        }
        $dayCotisation = 0;
        foreach($currentDayCotisationsArray as $key => $amounts){
            foreach ($amounts as $value) {
                $dayCotisation = $dayCotisation + $value;
            }
        }
        return $dayCotisation;
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
    private function getPercentage(int $lastDayDeposite, int $currentDayDeposite): float
    {
        $percentage =  (($currentDayDeposite -$lastDayDeposite) / $lastDayDeposite) * 100;
        return round($percentage, 1);
    }
}