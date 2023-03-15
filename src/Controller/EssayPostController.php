<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\EssayPosts;
use Doctrine\ORM\EntityManagerInterface;

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
        // $entityManager = $this->getDoctrine()->getManager();
  
        $essayPosts = new EssayPosts();
        $essayPosts->setEssay($request->request->get('essay-text'));
        $essayPosts->setUser('BM');
  
        $entityManager->persist($essayPosts);
        $entityManager->flush();
  
        return $this->json('Created new project successfully with id ' . $essayPosts->getId());
    }
}
