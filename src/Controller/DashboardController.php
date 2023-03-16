<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{
    // /**
    //  * @Route("/{reactRouting}", name="app_home", requirements={"reactRouting"="^(?!api).+"}, defaults={"reactRouting": null})
    //  */
    #[Route(path: '/dash', name: 'dash')]
    public function dashboard(): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('app_login');
        }

        return $this->Render('dashboard/index.html.twig');
    }
}