<?php

namespace App\Controller\Admin;

use App\Controller\Admin\UserCrudController;
use App\Entity\Commission;
use App\Entity\Cotisation;
use App\Entity\Depenses;
use App\Entity\Membre;
use App\Entity\User;
use App\service\CotisationService;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Assets;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;
use Symfony\UX\Chartjs\Model\Chart;

class DashboardController extends AbstractDashboardController
{
    public function __construct(
        readonly private ChartBuilderInterface $chartBuilder,
        readonly private CotisationService $cotisationService
    )
    {
        
    }
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        $data = [
            'labels' => ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            'datas' => [10, 15, 4, 3, 25, 41, 25],
            'name' => 'line chart'
        ];
        $debitChart = $this->createChart(Chart::TYPE_LINE, $data);
        $specialityChart = $this->createChart(Chart::TYPE_DOUGHNUT, $data);
        $creditChart = $this->createChart(Chart::TYPE_LINE, $data);
        $cotisationEachMonthChart = $this->createChart(Chart::TYPE_LINE, $this->cotisationService->getCotisationEachMonth());
        $userDepostitObect = $this->cotisationService->getUserDepositeObject();
        $commissionDepositeObject = $this->cotisationService->getCommissionDepositeObject();
        $walletObject = $this->cotisationService->getBalanceObject();
        return $this->render('admin/index.html.twig', [
            'debitChart' => $debitChart,
            'specialityChart' => $specialityChart,
            'creditChart' => $creditChart,
            'cotisationEachMonthChart' => $cotisationEachMonthChart,
            'userDepostiteObect' => $userDepostitObect,
            'commissionDepositeObject' => $commissionDepositeObject,
            'walletObject' => $walletObject
        ]);
    
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Soutenance ENSPD')
            ->setLocales([
                'en' => '🇬🇧 English',
                'pl' => '🇵🇱 Polski'
            ]);
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToCrud('Cotisation','fa fa-money-bill', Cotisation::class);
        yield MenuItem::linkToCrud('Depenses', 'fa fa-money-bill-1', Depenses::class);
        yield MenuItem::linkToCrud('Commission', 'fa fa-house', Commission::class);
        yield MenuItem::linkToCrud('Membre de commision', 'fa fa-users', Membre::class);
        yield MenuItem::linkToCrud('Utilisateurs', 'fa fa-user', User::class);
    }
    public function configureActions(): Actions
    {
        return parent::configureActions()
            ->add(Crud::PAGE_INDEX, Action::DETAIL)
            ;
    }
    public function configureAssets(): Assets
    {
        return Assets::new()
            ->addWebpackEncoreEntry('app')
        ;
    }
    private function createChart(string $type, array $data): Chart
    {
        return $this->chartBuilder
            ->createChart($type)
            ->setData($this->setData($type, $data));
    }

    private function setData(string $type, array $data): array
    {
        $options = [
            'labels' => $data['labels'],
            'datasets' => [
                [
                    'label' => $data['name'],
                    'borderColor' => 'rgb(109, 40, 217)',
                    'data' => $data['datas']
                ]
            ],
        ];
        if($type === Chart::TYPE_DOUGHNUT){
            $options['datasets'][0]['borderColor'] = '#fff';
            $options['datasets'][0]['backgroundColor'] = $this->setColors($data['datas']);
        }
        return $options;
    }
    private function setColors(array $array): array
    {
        $colors = [];
        foreach ($array as $item){
            $colors[] = $this->rndRGBColorCode();
        }
        return $colors;
    }
    private function rndRGBColorCode(): string
    {
        return 'rgb(' . rand(0, 100) . ',' . rand(100, 255) . ',' . rand(150, 255) . ')';
    }
}
