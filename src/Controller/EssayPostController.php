<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\EssayPosts;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;

/**
 * @Route("/api", name="api_")
 */
class EssayPostController extends AbstractController
{
    #[Route('/essay/post', name: 'app_essay_post')]
    public function index(): Response
    {
        return $this->render('essay_post/index.html.twig', [
            'controller_name' => 'EssayPostController',
        ]);
    }

    /**
     * @Route("/project", name="project_new", methods={"POST"})
     */
    public function new(Request $request, EntityManagerInterface $entityManager,LoggerInterface $logger): Response
    {
        $essayPosts = new EssayPosts();
        $logger->info('I just got the logger==========================');
        $logger->info($request->request->get('essay-text'));
        // print_r($request->request->get('essay-text'));
        exit;
        $essayPosts->setEssay($request->request->get('essay-text'));
        $essayPosts->setEssayTitle($request->request->get('essay-title-text'));
        $user_field = $this->getUser();
        $essayPosts->setUser($user_field);
        $essayPosts->setTime(time());
  
        $entityManager->persist($essayPosts);
        $entityManager->flush();
  
        return $this->json('Created new project successfully with id ' . $essayPosts->getId());
    }
}
