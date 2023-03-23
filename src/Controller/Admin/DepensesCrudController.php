<?php

namespace App\Controller\Admin;

use App\Entity\Depenses;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class DepensesCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Depenses::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
