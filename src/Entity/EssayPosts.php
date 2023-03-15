<?php

namespace App\Entity;

use App\Repository\EssayPostsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EssayPostsRepository::class)]
class EssayPosts
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $essay = null;

    #[ORM\Column(length: 255)]
    private ?string $user = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEssay(): ?string
    {
        return $this->essay;
    }

    public function setEssay(?string $essay): self
    {
        $this->essay = $essay;

        return $this;
    }

    public function getUser(): ?string
    {
        return $this->user;
    }

    public function setUser(string $user): self
    {
        $this->user = $user;

        return $this;
    }
}
