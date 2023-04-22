<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UploadImageController extends AbstractController
{
    /**
     * @Route("/upload_image", name="upload_image", methods={"POST"})
     */
    public function uploadImage(Request $request): Response
    {
        $file = $request->files->get('file');
        $fileName = md5(uniqid()) . '.' . $file->guessExtension();

        $file->move(
            $this->getParameter('uploads_directory'),
            $fileName
        );

        return new Response($fileName);
    }
}
