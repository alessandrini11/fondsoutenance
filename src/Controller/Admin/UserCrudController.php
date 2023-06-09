<?php

namespace App\Controller\Admin;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserCrudController extends AbstractCrudController
{
    private UserPasswordHasherInterface $passwordEncoder;

    public function __construct(UserPasswordHasherInterface $passwordEncoder )
    {
        $this->passwordEncoder = $passwordEncoder;
    }
    public static function getEntityFqcn(): string
    {
        return User::class;
    }
    public function configureActions(Actions $actions): Actions
    {
        return parent::configureActions($actions)
            ->setPermission(Action::DELETE, 'ROLE_ADMIN')
            ->setPermission(Crud::PAGE_NEW, 'ROLE_ADMIN')
            ->setPermission(Crud::PAGE_EDIT, 'ROLE_ADMIN')
            ;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            AssociationField::new('cotisations')
                ->setTemplatePath('admin/contisations.html.twig')
                ->onlyOnDetail(),
            FormField::addPanel('User Details'),
            TextField::new('firstname'),
            TextField::new('lastname'),
            ChoiceField::new('poste')
                ->setChoices(array_flip(User::POSTES)),
            ChoiceField::new('sex')->setChoices(array_flip(User::sexs))->hideOnIndex(),
            FormField::addPanel('Account Details'),
            EmailField::new('email')
                ->setPermission('ROLE_ADMIN'),
            TextField::new('telephone'),
            ChoiceField::new('filiere')
                ->setChoices(array_flip(User::FILIERES)),
            TextField::new('plainPassword')->setRequired(false)->hideOnIndex(),
            ChoiceField::new('roles')

                ->allowMultipleChoices()
                ->setChoices(array_flip(User::ROLES)),
            BooleanField::new('isVerified')
                ->setPermission('ROLE_ADMIN'),
            DateTimeField::new('createdAt')->hideOnForm(),
            DateTimeField::new('updatedAt')->hideOnForm()
        ];
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if (!$entityInstance instanceof User) return;
        $hashPassword = $this->passwordEncoder->hashPassword($entityInstance, $entityInstance->getPlainPassword());
        $entityInstance->setPassword($hashPassword);
        parent::persistEntity($entityManager, $entityInstance);   
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if (!$entityInstance instanceof User) return;
        if($entityInstance->getPlainPassword()){
            $hashPassword = $this->passwordEncoder->hashPassword($entityInstance, $entityInstance->getPlainPassword());
            $entityInstance->setPassword($hashPassword);
        }
        parent::persistEntity($entityManager, $entityInstance);
    }
}
