<?php

namespace App\Controller;

use App\Repository\EssayPostsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route("/api", name="api_")
 */
class MyEssaysGetController extends AbstractController
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
    public function showMyEssay(Request $request, EssayPostsRepository $essayPostsRepository): Response
    {
        $offset = $request->query->get('offset');
        $myEssayText = $essayPostsRepository->myEssays($this->getUser(), $offset);
        $result = [];
        $i = 0;
        foreach($myEssayText as $eachEssayPostRow){

            $result[$i]['essay'] = $eachEssayPostRow->getEssay();
            $result[$i]['id'] = $eachEssayPostRow->getId();
            $result[$i]['email'] = $eachEssayPostRow->getUser()->getEmail();
            $result[$i]['essay_title'] = $eachEssayPostRow->getEssayTitle();
            $result[$i]['time'] = $eachEssayPostRow->getTime();
            $result[$i]['firstname'] = $eachEssayPostRow->getUser()->getFirstName();
            $result[$i]['lastname'] = $eachEssayPostRow->getUser()->getLastName();
            $i++;

        }
 
        return $this->json($result);
    }
}
