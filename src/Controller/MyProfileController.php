<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MyProfileController extends AbstractController
{
    #[Route(path: '/myprofile', name: 'my_profile')]
    public function myprofile(): Response
    {
        if (!$this->getUser()) 
        {
            return $this->redirectToRoute('app_login');
        }

        return $this->Render('dashboard/index.html.twig');
    }
}