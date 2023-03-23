<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230323194259 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE depenses (id INT AUTO_INCREMENT NOT NULL, commission_id INT DEFAULT NULL, created_by_id INT DEFAULT NULL, updated_by_id INT DEFAULT NULL, amount INT NOT NULL, reason VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_EE350ECB202D1EB2 (commission_id), INDEX IDX_EE350ECBB03A8386 (created_by_id), INDEX IDX_EE350ECB896DBBDE (updated_by_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE depenses ADD CONSTRAINT FK_EE350ECB202D1EB2 FOREIGN KEY (commission_id) REFERENCES commission (id)');
        $this->addSql('ALTER TABLE depenses ADD CONSTRAINT FK_EE350ECBB03A8386 FOREIGN KEY (created_by_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE depenses ADD CONSTRAINT FK_EE350ECB896DBBDE FOREIGN KEY (updated_by_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE commission CHANGE description description LONGTEXT DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE depenses DROP FOREIGN KEY FK_EE350ECB202D1EB2');
        $this->addSql('ALTER TABLE depenses DROP FOREIGN KEY FK_EE350ECBB03A8386');
        $this->addSql('ALTER TABLE depenses DROP FOREIGN KEY FK_EE350ECB896DBBDE');
        $this->addSql('DROP TABLE depenses');
        $this->addSql('ALTER TABLE commission CHANGE description description LONGTEXT NOT NULL');
    }
}
