<?php

namespace App\Controller\Admin;

use App\DTO\SmsResponse;
use App\Entity\Cotisation;
use App\Entity\User;
use App\exception\BadRequestException;
use App\service\CotisationService;
use App\service\SmsService;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class CotisationCrudController extends AbstractCrudController
{
    public function __construct(
        readonly private CotisationService $cotisationService,
        readonly private SmsService $smsService
    )
    {
        
    }
    public static function getEntityFqcn(): string
    {
        return Cotisation::class;
    }

    public function configureActions(Actions $actions): Actions
    {
        return parent::configureActions($actions)
            // ->remove(Crud::PAGE_INDEX, Action::DELETE)
            ->setPermissions([
                Crud::PAGE_NEW => User::ROLE_TREASURER,
                Crud::PAGE_EDIT => User::ROLE_TREASURER,
                Action::NEW => User::ROLE_TREASURER
            ])
            ;
    }
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            ChoiceField::new('type')
                ->setChoices(array_flip(Cotisation::TYPES)),
            NumberField::new('amount'),
            TextField::new('reason'),
            AssociationField::new('originator'),
            AssociationField::new('commission'),
            AssociationField::new('createdBy')->hideOnForm(),
            AssociationField::new('updatedBy')->hideOnForm(),
            DateTimeField::new('createdAt')->hideOnForm(),
            DateTimeField::new('updatedAt')->hideOnForm(),
        ];
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if(!$entityInstance instanceof Cotisation) return;
        $entityInstance->setCreatedBy($this->getUser());
        if($entityInstance->getType() === Cotisation::DEPOT){
            $entityInstance->setCommission(null);
            $smsResponse = new SmsResponse($entityInstance->getOriginator(), $entityInstance->getAmount());
            // $this->smsService->sendSms($smsResponse);

        }
        if($entityInstance->getType() === Cotisation::ATTRIBUTION_FOND){
            $entityInstance->setOriginator(null);
            if($this->cotisationService->getBalanceObject()->balance < $entityInstance->getAmount()){
                throw new BadRequestException("Il y a pas assez d'argent dans les caisses", 400);
            }
        }
        parent::persistEntity($entityManager, $entityInstance);
    }
    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if(!$entityInstance instanceof Cotisation) return;
        $entityInstance->setCreatedBy($this->getUser());
        if($entityInstance->getType() === Cotisation::DEPOT){
            $entityInstance->setCommission(null);
        }
        if($entityInstance->getType() === Cotisation::ATTRIBUTION_FOND){
            $entityInstance->setOriginator(null);
            if($this->cotisationService->getBalanceObject()->balance < $entityInstance->getAmount()){
                throw new BadRequestException("Il y a pas assez d'argent dans les caisses", 400);
            }
        }
        parent::persistEntity($entityManager, $entityInstance);
    }
    
}
