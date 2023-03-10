<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MyProfileController extends AbstractController
{
    #[Route(path: '/myprofile', name: 'my_profile')]
    // /**
    //  * @Route("/{reactRouting}",name="index",defaults={"reactRouting":null})
    //  */
    public function myprofile(): Response
    {
        if (!$this->getUser()) 
        {
            return $this->redirectToRoute('app_login');
        }
        else
        {
            // return $this->redirectToRoute('dash');
            return $this->Render('myprofile/myprofile.html.twig');
        }

        // return $this->Render('dashboard/index.html.twig');
    }
}