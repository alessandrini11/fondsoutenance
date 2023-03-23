<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230323142606 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE commission (id INT AUTO_INCREMENT NOT NULL, created_by_id INT DEFAULT NULL, updated_by_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_1C650158B03A8386 (created_by_id), INDEX IDX_1C650158896DBBDE (updated_by_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE cotisation (id INT AUTO_INCREMENT NOT NULL, created_by_id INT DEFAULT NULL, updated_by_id INT DEFAULT NULL, originator_id INT DEFAULT NULL, commission_id INT DEFAULT NULL, amount INT NOT NULL, reason VARCHAR(255) NOT NULL, type VARCHAR(255) NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_AE64D2EDB03A8386 (created_by_id), INDEX IDX_AE64D2ED896DBBDE (updated_by_id), INDEX IDX_AE64D2ED3DA3F86F (originator_id), INDEX IDX_AE64D2ED202D1EB2 (commission_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE membre (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, commission_id INT DEFAULT NULL, poste VARCHAR(255) NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_F6B4FB29A76ED395 (user_id), INDEX IDX_F6B4FB29202D1EB2 (commission_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE commission ADD CONSTRAINT FK_1C650158B03A8386 FOREIGN KEY (created_by_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE commission ADD CONSTRAINT FK_1C650158896DBBDE FOREIGN KEY (updated_by_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE cotisation ADD CONSTRAINT FK_AE64D2EDB03A8386 FOREIGN KEY (created_by_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE cotisation ADD CONSTRAINT FK_AE64D2ED896DBBDE FOREIGN KEY (updated_by_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE cotisation ADD CONSTRAINT FK_AE64D2ED3DA3F86F FOREIGN KEY (originator_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE cotisation ADD CONSTRAINT FK_AE64D2ED202D1EB2 FOREIGN KEY (commission_id) REFERENCES commission (id)');
        $this->addSql('ALTER TABLE membre ADD CONSTRAINT FK_F6B4FB29A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE membre ADD CONSTRAINT FK_F6B4FB29202D1EB2 FOREIGN KEY (commission_id) REFERENCES commission (id)');
        $this->addSql('ALTER TABLE user ADD filiere VARCHAR(255) NOT NULL, ADD poste VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE commission DROP FOREIGN KEY FK_1C650158B03A8386');
        $this->addSql('ALTER TABLE commission DROP FOREIGN KEY FK_1C650158896DBBDE');
        $this->addSql('ALTER TABLE cotisation DROP FOREIGN KEY FK_AE64D2EDB03A8386');
        $this->addSql('ALTER TABLE cotisation DROP FOREIGN KEY FK_AE64D2ED896DBBDE');
        $this->addSql('ALTER TABLE cotisation DROP FOREIGN KEY FK_AE64D2ED3DA3F86F');
        $this->addSql('ALTER TABLE cotisation DROP FOREIGN KEY FK_AE64D2ED202D1EB2');
        $this->addSql('ALTER TABLE membre DROP FOREIGN KEY FK_F6B4FB29A76ED395');
        $this->addSql('ALTER TABLE membre DROP FOREIGN KEY FK_F6B4FB29202D1EB2');
        $this->addSql('DROP TABLE commission');
        $this->addSql('DROP TABLE cotisation');
        $this->addSql('DROP TABLE membre');
        $this->addSql('ALTER TABLE user DROP filiere, DROP poste');
    }
}
