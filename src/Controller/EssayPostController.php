<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\EssayPosts;
use Doctrine\ORM\EntityManagerInterface;

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
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $essayPosts = new EssayPosts();
        $essayPosts->setEssay($request->request->get('essay-text'));
        $user_field = $this->getUser()->getUserIdentifier();
        $essayPosts->setUser($user_field);
  
        $entityManager->persist($essayPosts);
        $entityManager->flush();
  
        return $this->json('Created new project successfully with id ' . $essayPosts->getId());
    }
}
