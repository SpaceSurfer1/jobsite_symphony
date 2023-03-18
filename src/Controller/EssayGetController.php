<?php

namespace App\Controller;

use App\Repository\EssayPostsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api", name="api_")
 */
class EssayGetController extends AbstractController
{
    #[Route('/essay/get', name: 'app_essay_get')]
    public function index(): Response
    {
        return $this->render('essay_get/index.html.twig', [
            'controller_name' => 'EssayGetController',
        ]);
    }

    /**
     * @Route("/getmyessay", name="get_my_essay", methods={"GET"})
     */
    public function showMyEssay(EssayPostsRepository $essayPostsRepository): Response
    {
        $myEssayText = $essayPostsRepository->findByExampleField($this->getUser());
        // $myEssayText = $this->getUser()->getUserEssay();
        $result = [];
        foreach($myEssayText as $eachEssayPostRow){

            array_push($result, $eachEssayPostRow->getEssay());

        }
 
        return $this->json($result);
    }
}
