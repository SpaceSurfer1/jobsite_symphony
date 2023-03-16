<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\UserAbout;
use Doctrine\ORM\EntityManagerInterface;

/**
 * @Route("/api", name="api_")
 */
class UserAboutController extends AbstractController
{
    #[Route('/user/about', name: 'app_user_about')]
    public function index(): Response
    {
        return $this->render('user_about/index.html.twig', [
            'controller_name' => 'UserAboutController',
        ]);
    }

    /**
     * @Route("/userabout", name="project_new", methods={"POST"})
     */
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        
        if(!$this->getUser()->getUserAbout())
        {
            $userAbout = new UserAbout();
            $userAbout->setUser($this->getUser());
            $userAbout->setAbout($request->request->get('about-text'));

            $entityManager->persist($userAbout);
            $entityManager->flush();
        }
        elseif($this->getUser()->getUserAbout())
        {
            $userAboutz = $this->getUser()->getUserAbout();
            $userAboutz->setAbout($request->request->get('about-text'));
            // $this->getUser()->setUserAbout($userAboutz);

            $entityManager->persist($userAboutz);
            $entityManager->flush();
        }
  
        
  
        // return $this->json('Created new project successfully with id ' . $userAbout->getId());
        return $this->json('Created new project successfully with id ');
    }
}
