<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{
    #[Route(path: '/dash', name: 'dash')]
    // /**
    //  * @Route("/{reactRouting}",name="index",defaults={"reactRouting":null})
    //  */
    public function dashboard(): Response
    {
        // $number = random_int(0, 100);
        if (!$this->getUser()) {
            return $this->redirectToRoute('app_login');
        }

        return $this->Render('dashboard/index.html.twig');
    }
}