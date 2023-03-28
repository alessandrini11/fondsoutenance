<?php

namespace App\Controller\Admin;

use App\Entity\Cotisation;
use App\Entity\User;
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
        }
        if($entityInstance->getType() === Cotisation::ATTRIBUTION_FOND){
            $entityInstance->setOriginator(null);
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
        }
        parent::persistEntity($entityManager, $entityInstance);
    }
    
}
