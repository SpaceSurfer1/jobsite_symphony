<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230318003838 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE essay_posts ADD user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE essay_posts ADD CONSTRAINT FK_48428805A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('CREATE INDEX IDX_48428805A76ED395 ON essay_posts (user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE essay_posts DROP FOREIGN KEY FK_48428805A76ED395');
        $this->addSql('DROP INDEX IDX_48428805A76ED395 ON essay_posts');
        $this->addSql('ALTER TABLE essay_posts DROP user_id');
    }
}
