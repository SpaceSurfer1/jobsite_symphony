<?php

namespace App\Repository;

use App\Entity\EssayPosts;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<EssayPosts>
 *
 * @method EssayPosts|null find($id, $lockMode = null, $lockVersion = null)
 * @method EssayPosts|null findOneBy(array $criteria, array $orderBy = null)
 * @method EssayPosts[]    findAll()
 * @method EssayPosts[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EssayPostsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EssayPosts::class);
    }

    public function save(EssayPosts $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(EssayPosts $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
    * @return EssayPosts[] Returns an array of EssayPosts objects
    */
   public function myEssays($value, $offset): array
   {
       return $this->createQueryBuilder('e')
           ->andwhere('e.user = :val')
           ->setParameter('val', $value)
           ->andWhere('e.id < :vall')
           ->setParameter('vall', $offset)
           ->orderBy('e.id', 'DESC')
           ->setMaxResults(5)
           ->getQuery()
           ->getResult()
       ;
   }

   /**
    * @return EssayPosts[] Returns an array of EssayPosts objects
    */
    public function allEssays($offset): array
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.id < :vall')
            ->setParameter('vall', $offset)
            ->orderBy('e.id', 'DESC')
            ->setMaxResults(5)
            ->getQuery()
            ->getResult()
        ;
    }

//    /**
//     * @return EssayPosts[] Returns an array of EssayPosts objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('e.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?EssayPosts
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
