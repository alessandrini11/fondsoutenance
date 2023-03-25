<?php
namespace App\service;

use App\Entity\Cotisation;
use App\Repository\CotisationRepository;
use stdClass;

class CotisationService 
{
    public function __construct(
        readonly private CotisationRepository $cotisationRepository
    )
    {
        
    }

    public function getDepositeObject(): stdClass
    {
        $currentWeek = $this->getWalletPerWeek();
        $lastWeek = $this->getWalletPerWeek(1);
        $percentage = (($lastWeek - $currentWeek) / $lastWeek) * 100;
        $walletObject = new stdClass();
        $direction = 'neutral';
        if($percentage > 0){
            $direction = 'decrease';
        } 
        if ($percentage < 0){
            $direction = 'increase';
        }
        $walletObject->change = $direction;
        $walletObject->amount = $percentage;
        return $this->createStdClass($direction, $percentage, $this->getDeposite());
    }
    private function getDeposite(): int
    {
        $cotisations = $this->cotisationRepository->findBy(['type' => Cotisation::DEPOT]);
        $wallet = 0;
        foreach ($cotisations as $cotisation) {
            $wallet = $wallet + $cotisation->getAmount();
        }
        return $wallet;
    }
    private function createStdClass($change, $amount, $balance): stdClass
    {
        $object = new stdClass();
        $object->change = $change;
        $object->amount = $amount;
        $object->balance = $balance;
        return $object;
    }
    private function getWalletPerWeek(int $week = 0): int
    {
        $targetWeek = (int)date('W') - $week;
        $cotisations = $this->cotisationRepository->findBy(['type' => Cotisation::DEPOT]);
        $currentWeekCotisationsArray = [];
        foreach ($cotisations as $cotisation) {
            $cotisationWeek = $cotisation->getCreatedAt()->format('W');
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

    public function getWalletEachMonth(): array
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
            'name' => 'Cotisation Chaque Jour'
        ];
    }
}