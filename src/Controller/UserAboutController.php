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
     * @Route("/setuserabout", name="set_user_about", methods={"POST"})
     */
    public function saveUserAbout(Request $request, EntityManagerInterface $entityManager): Response
    {
        
        if(!$this->getUser()->getUserAbout())
        {
            $userAbout = new UserAbout();
            if(!$userAbout->getUser())
            {
                $userAbout->setUser($this->getUser());
            }
            $userAbout->setAbout($request->request->get('about-text'));

            $entityManager->persist($userAbout);
            $entityManager->flush();
        }
        elseif($this->getUser()->getUserAbout())
        {
            $userAbout = $this->getUser()->getUserAbout();
            $userAbout->setAbout($request->request->get('about-text'));

            $entityManager->persist($userAbout);
            $entityManager->flush();
        }
  
        
  
        // return $this->json('Created new project successfully with id ' . $userAbout->getId());
        return $this->json('Created new project successfully with id ');
    }


    /**
     * @Route("/setusereducation", name="set_user_education", methods={"POST"})
     */
    public function saveUserEducation(Request $request, EntityManagerInterface $entityManager): Response
    {
        
        if(!$this->getUser()->getUserAbout())
        {
            $userAbout = new UserAbout();
            if(!$userAbout->getUser())
            {
                $userAbout->setUser($this->getUser());
            }
            $userAbout->setEducation($request->request->get('education-text'));

            $entityManager->persist($userAbout);
            $entityManager->flush();
        }
        elseif($this->getUser()->getUserAbout())
        {
            $userAbout = $this->getUser()->getUserAbout();
            $userAbout->setEducation($request->request->get('education-text'));

            $entityManager->persist($userAbout);
            $entityManager->flush();
        }
  
        
  
        // return $this->json('Created new project successfully with id ' . $userAbout->getId());
        return $this->json('Created new project successfully with id ');
    }


    /**
     * @Route("/getabout", name="get_about", methods={"GET"})
     */
    public function showAbout(): Response
    {
        $aboutText = $this->getUser()->getUserAbout()->getAbout();
 
        return $this->json($aboutText);
    }

    /**
     * @Route("/geteducation", name="get_education", methods={"GET"})
     */
    public function showEducation(): Response
    {
        $educationText = $this->getUser()->getUserAbout()->getEducation();
 
        return $this->json($educationText);
    }
}
