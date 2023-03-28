<?php

namespace App\Controller\Admin;

use App\Entity\Depenses;
use App\Entity\Membre;
use App\Entity\User;
use App\Repository\CommissionRepository;
use App\Repository\MembreRepository;
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
    public function __construct(
        readonly private CommissionRepository $commissionRepository,
        readonly private MembreRepository $membreRepository
    )
    {
        
    }
    public static function getEntityFqcn(): string
    {
        return Depenses::class;
    }

    public function configureActions(Actions $actions): Actions
    {
        return parent::configureActions($actions)
            // ->remove(Crud::PAGE_INDEX, Action::DELETE)
            ->setPermissions([
                Crud::PAGE_NEW => User::ROLE_COMMISSION_HEAD,
                Crud::PAGE_EDIT => User::ROLE_COMMISSION_HEAD,
                Action::NEW => User::ROLE_COMMISSION_HEAD
            ])
            ;
    }
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            AssociationField::new('commission')->hideOnForm(),
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
        $user = $this->getUser();
        $membre = $this->membreRepository->findOneBy(['user' => $user, 'poste' => Membre::HEAD]);
        $commission = $membre->getCommission();
        $entityInstance->setCommission($commission);
        $entityInstance->setCreatedBy($user);
        parent::persistEntity($entityManager, $entityInstance);
    }
    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if(!$entityInstance instanceof Depenses) return;
        $user = $this->getUser();
        if($user !== $entityInstance->getCreatedBy()) return;
        $membre = $this->membreRepository->findOneBy(['user' => $user, 'poste' => Membre::HEAD]);
        $commission = $membre->getCommission();
        $entityInstance->setCommission($commission);
        $entityInstance->setUpdatedBy($user);
        parent::persistEntity($entityManager, $entityInstance);
    }
    
}
