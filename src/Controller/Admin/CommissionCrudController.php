<?php

namespace App\Controller\Admin;

use App\Entity\Commission;
use App\Entity\Membre;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class CommissionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Commission::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('name'),
            TextareaField::new('description')->hideOnIndex(),
            CollectionField::new('membres')
                ->useEntryCrudForm(MembreCrudController::class),
            AssociationField::new('cotisations')->hideOnForm(),
            AssociationField::new('depenses')->hideOnForm(),
            AssociationField::new('createdBy')->hideOnForm(),
            AssociationField::new('updatedBy')->hideOnForm(),
            DateTimeField::new('createdAt')->hideOnForm(),
            DateTimeField::new('updatedAt')->hideOnForm(),
        ];
    }
    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if(!$entityInstance instanceof Commission) return;
        $entityInstance->setCreatedBy($this->getUser());
        parent::persistEntity($entityManager, $entityInstance);
    }
    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if(!$entityInstance instanceof Commission) return;
        $entityInstance->setCreatedBy($this->getUser());
        parent::persistEntity($entityManager, $entityInstance);
    }
}
