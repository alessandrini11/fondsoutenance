<?php

namespace App\Controller\Admin;

use App\Entity\Depenses;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;

class DepensesCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Depenses::class;
    }

    // public function configureActions(Actions $actions): Actions
    // {
    //     return parent::configureActions($actions)
    //         ->remove(Crud::PAGE_INDEX, Action::DELETE)
    //         ;
    // }
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            AssociationField::new('commission'),
            NumberField::new('amount'),
            TextareaField::new('reason'),
            AssociationField::new('createdBy')->hideOnForm(),
            AssociationField::new('updatedBy')->hideOnForm(),
            DateTimeField::new('createdAt')->hideOnForm(),
            DateTimeField::new('updatedAt')->hideOnForm(),
        ];
    }
    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if(!$entityInstance instanceof Depenses) return;
        $entityInstance->setCreatedBy($this->getUser());
        parent::persistEntity($entityManager, $entityInstance);
    }
    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if(!$entityInstance instanceof Depenses) return;
        $entityInstance->setCreatedBy($this->getUser());
        parent::persistEntity($entityManager, $entityInstance);
    }
    
}
