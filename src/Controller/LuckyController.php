<?php
// src/Controller/LuckyController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class LuckyController
{
    #[Route('/lucky/number')]
    public function number(): JsonResponse
    {
        $number = random_int(0, 100);

        return new JsonResponse(
            ['name'=>'mishraihsdfsodfiosdoh']
        );
    }
}