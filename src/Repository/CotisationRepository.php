<?php

namespace App\Repository;

use App\Entity\Cotisation;
use DateTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Cotisation>
 *
 * @method Cotisation|null find($id, $lockMode = null, $lockVersion = null)
 * @method Cotisation|null findOneBy(array $criteria, array $orderBy = null)
 * @method Cotisation[]    findAll()
 * @method Cotisation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CotisationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Cotisation::class);
    }

    public function save(Cotisation $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Cotisation $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
    public function getCotisationEachMonth(): array
    {
        $currentYear = date('Y');
        $currentMonth = date('m');
        $currentDay = date('d');
        $startDate = new DateTime("$currentYear-$currentMonth-01 00:00:00");
        $endDate = new DateTime("$currentYear-$currentMonth-$currentDay 23:59:59");
        return $this->getQueryBuilderSorted($startDate, $endDate, Cotisation::DEPOT);

    }

    private function getQueryBuilderSorted(DateTime $startDate, DateTime $endDate, string $type): array
    {
        return $this->createQueryBuilder('c')
            ->where('c.type = :type')
            ->andWhere('c.createdAt BETWEEN :start AND :end')
            ->setParameter('type', $type)
            ->setParameter('start', $startDate)
            ->setParameter('end', $endDate)
            ->getQuery()
            ->getResult()
        ;
    }

//    /**
//     * @return Cotisation[] Returns an array of Cotisation objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Cotisation
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
