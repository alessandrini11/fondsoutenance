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
        $currentWeekUserDeposits = $this->getWalletPerWeek(Cotisation::DEPOT);
        $lastWeekUserDeposits = $this->getWalletPerWeek(Cotisation::DEPOT, 1);
        $currentWeekCommissionDeposits = $this->getWalletPerWeek(Cotisation::ATTRIBUTION_FOND);
        $lastWeekCommissionDeposits = $this->getWalletPerWeek(Cotisation::ATTRIBUTION_FOND, 1);
        $percentage = $this->getPercentage(
            $lastWeekCommissionDeposits + $lastWeekUserDeposits, 
            $currentWeekCommissionDeposits + $currentWeekUserDeposits
        );
        if($currentWeekCommissionDeposits + $currentWeekUserDeposits === 0){
            return $this->createStdClass('decrease', 100, $balance);
        }
        return $this->createStdClass($this->getDirection($percentage), $percentage, $balance);
    }

    public function getCommissionDepositeObject(): stdClass
    {
        $currentWeekDeposite = $this->getWalletPerWeek(Cotisation::ATTRIBUTION_FOND);
        $lastWeekDeposite = $this->getWalletPerWeek(Cotisation::ATTRIBUTION_FOND, 1);
        if($lastWeekDeposite === 0){
            return $this->createStdClass('increase', 100, $this->getDeposits(Cotisation::ATTRIBUTION_FOND));
        }
        $percentage = $this->getPercentage($lastWeekDeposite, $currentWeekDeposite);
        return $this->createStdClass($this->getDirection($percentage), $percentage, $this->getDeposits(Cotisation::ATTRIBUTION_FOND));
    }
    public function getUserDepositeObject(): stdClass
    {
        $currentWeekDeposite = $this->getWalletPerWeek(Cotisation::DEPOT);
        $lastWeekDeposite = $this->getWalletPerWeek(Cotisation::DEPOT, 1);
        if($lastWeekDeposite === 0){
            return $this->createStdClass('increase', 100, $this->getDeposits(Cotisation::DEPOT));
        }
        $percentage = $this->getPercentage($lastWeekDeposite, $currentWeekDeposite);
        return $this->createStdClass($this->getDirection($percentage), $percentage, $this->getDeposits(Cotisation::DEPOT));
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
    private function getWalletPerWeek(string $type, int $week = 0): int
    {
        $targetWeek = (int)date('d') - $week;
        $cotisations = $this->cotisationRepository->findBy(['type' => $type]);
        $currentWeekCotisationsArray = [];
        foreach ($cotisations as $cotisation) {
            $cotisationWeek = $cotisation->getCreatedAt()->format('d');
            if((int)$cotisationWeek  === $targetWeek){
                $currentWeekCotisationsArray[$targetWeek][] = $cotisation->getAmount(); 
            }
        }
        $weekCotisation = 0;
        foreach($currentWeekCotisationsArray as $key => $amounts){
            foreach ($amounts as $value) {
                $weekCotisation = $weekCotisation + $value;
            }
        }
        return $weekCotisation;
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
    private function getPercentage(int $lastWeekDeposite, int $currentWeekDeposite): float
    {
        $percentage =  (($currentWeekDeposite -$lastWeekDeposite) / $lastWeekDeposite) * 100;
        return round($percentage, 1);
    }
}