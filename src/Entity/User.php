<?php

namespace App\Entity;

use App\Repository\UserRepository;
use App\Trait\DateTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\HasLifecycleCallbacks]
#[UniqueEntity(fields: ['email'], message: 'There is already an account with this email')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    use DateTrait;

    const ROLE_USER = 'ROLE_USER';
    const ROLE_ADMIN = 'ROLE_ADMIN';
    // const ROLE_SUPER_ADMIN = 'ROLE_SUPER_ADMIN';

    const ROLES = [
        self::ROLE_ADMIN => "Admin",
        self::ROLE_USER => "User",
        // self::ROLE_SUPER_ADMIN => "Super admin"
    ];

    const MAN = 'man';
    const WOMAN = 'woman';

    const sexs = [
        self::MAN => 'homme',
        self::WOMAN => 'femme',
    ];

    const GI_EXFGI = 'gi exFGi';
    const GRT_EXFGI = 'grt exFGi';
    const GLO_ENSPD = 'glo enspd';
    const GRT_ENSPD = 'grt enspd';
    const GLO_MPRO = 'glo mpro';
    const GRT_MPRO = 'grt mpro';

    const FILIERES = [
        self::GI_EXFGI => 'GI exFGi',
        self::GRT_EXFGI => 'GRT exFGi',
        self::GLO_ENSPD => 'GLO enspd',
        self::GRT_ENSPD => 'GRT enspd',
        self::GLO_MPRO => 'GLO mpro',
        self::GRT_MPRO => 'GRT mpro',
        self::GRT_MPRO => 'GRT mpro',
    ];
    
    const PRESIDENT = 'president';
    const VICE_PRESIDENT = 'vice president';
    const SECRETAIRE_GENERALE = 'sg';
    const TRESORIER = 'tresorier';
    const COMMISSAIRE_COMPTES = 'comm au comptes';
    const AUCUN = 'aucun';
    const POSTES = [
        self::PRESIDENT => 'président',
        self::VICE_PRESIDENT => 'vice président',
        self::SECRETAIRE_GENERALE => 'sg',
        self::TRESORIER => 'trésorier',
        self::AUCUN => 'aucun'
    ];
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $email = null;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[ORM\Column(length: 255)]
    private ?string $firstname = null;

    #[ORM\Column(length: 255)]
    private ?string $lastname = null;

    #[ORM\Column(length: 255)]
    private ?string $sex = null;

    #[ORM\Column]
    private ?string $telephone = null;

    #[ORM\Column(type: 'boolean')]
    private $isVerified = false;

    private $plainpassword = null;

    #[ORM\Column(length: 255)]
    private ?string $filiere = null;

    #[ORM\Column(length: 255)]
    private ?string $poste = null;

    #[ORM\OneToMany(mappedBy: 'createdBy', targetEntity: Cotisation::class)]
    private Collection $createdCotisations;

    #[ORM\OneToMany(mappedBy: 'updatedBy', targetEntity: Cotisation::class)]
    private Collection $updatedCotisations;

    #[ORM\OneToMany(mappedBy: 'originator', targetEntity: Cotisation::class)]
    private Collection $cotisations;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Membre::class)]
    private Collection $membres;

    #[ORM\OneToMany(mappedBy: 'createdBy', targetEntity: Commission::class)]
    private Collection $createdCommission;

    #[ORM\OneToMany(mappedBy: 'updatedBy', targetEntity: Commission::class)]
    private Collection $updatedCommissions;

    #[ORM\OneToMany(mappedBy: 'createdBy', targetEntity: Depenses::class)]
    private Collection $createdDepenses;

    #[ORM\OneToMany(mappedBy: 'updatedBy', targetEntity: Depenses::class)]
    private Collection $updatedDepenses;

    public function __construct()
    {
        $this->createdCotisations = new ArrayCollection();
        $this->updatedCotisations = new ArrayCollection();
        $this->cotisations = new ArrayCollection();
        $this->membres = new ArrayCollection();
        $this->createdCommission = new ArrayCollection();
        $this->updatedCommissions = new ArrayCollection();
        $this->createdDepenses = new ArrayCollection();
        $this->updatedDepenses = new ArrayCollection();
    }
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getSex(): ?string
    {
        return $this->sex;
    }

    public function setSex(string $sex): self
    {
        $this->sex = $sex;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function isVerified(): bool
    {
        return $this->isVerified;
    }

    public function setIsVerified(bool $isVerified): self
    {
        $this->isVerified = $isVerified;

        return $this;
    }

    /**
     * Get the value of plainpassword
     */ 
    public function getPlainpassword()
    {
        return $this->plainpassword;
    }

    /**
     * Set the value of plainpassword
     *
     * @return  self
     */ 
    public function setPlainpassword($plainpassword)
    {
        $this->plainpassword = $plainpassword;

        return $this;
    }

    public function getFiliere(): ?string
    {
        return $this->filiere;
    }

    public function setFiliere(string $filiere): self
    {
        $this->filiere = $filiere;

        return $this;
    }

    public function getPoste(): ?string
    {
        return $this->poste;
    }

    public function setPoste(string $poste): self
    {
        $this->poste = $poste;

        return $this;
    }

    /**
     * @return Collection<int, Cotisation>
     */
    public function getCreatedCotisations(): Collection
    {
        return $this->createdCotisations;
    }

    public function addCreatedCotisation(Cotisation $createdCotisation): self
    {
        if (!$this->createdCotisations->contains($createdCotisation)) {
            $this->createdCotisations->add($createdCotisation);
            $createdCotisation->setCreatedBy($this);
        }

        return $this;
    }

    public function removeCreatedCotisation(Cotisation $createdCotisation): self
    {
        if ($this->createdCotisations->removeElement($createdCotisation)) {
            // set the owning side to null (unless already changed)
            if ($createdCotisation->getCreatedBy() === $this) {
                $createdCotisation->setCreatedBy(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Cotisation>
     */
    public function getUpdatedCotisations(): Collection
    {
        return $this->updatedCotisations;
    }

    public function addUpdatedCotisation(Cotisation $updatedCotisation): self
    {
        if (!$this->updatedCotisations->contains($updatedCotisation)) {
            $this->updatedCotisations->add($updatedCotisation);
            $updatedCotisation->setUpdatedBy($this);
        }

        return $this;
    }

    public function removeUpdatedCotisation(Cotisation $updatedCotisation): self
    {
        if ($this->updatedCotisations->removeElement($updatedCotisation)) {
            // set the owning side to null (unless already changed)
            if ($updatedCotisation->getUpdatedBy() === $this) {
                $updatedCotisation->setUpdatedBy(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Cotisation>
     */
    public function getCotisations(): Collection
    {
        return $this->cotisations;
    }

    public function addCotisation(Cotisation $cotisation): self
    {
        if (!$this->cotisations->contains($cotisation)) {
            $this->cotisations->add($cotisation);
            $cotisation->setOriginator($this);
        }

        return $this;
    }

    public function removeCotisation(Cotisation $cotisation): self
    {
        if ($this->cotisations->removeElement($cotisation)) {
            // set the owning side to null (unless already changed)
            if ($cotisation->getOriginator() === $this) {
                $cotisation->setOriginator(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Membre>
     */
    public function getMembres(): Collection
    {
        return $this->membres;
    }

    public function addMembre(Membre $membre): self
    {
        if (!$this->membres->contains($membre)) {
            $this->membres->add($membre);
            $membre->setUser($this);
        }

        return $this;
    }

    public function removeMembre(Membre $membre): self
    {
        if ($this->membres->removeElement($membre)) {
            // set the owning side to null (unless already changed)
            if ($membre->getUser() === $this) {
                $membre->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Commission>
     */
    public function getCreatedCommission(): Collection
    {
        return $this->createdCommission;
    }

    public function addCreatedCommission(Commission $createdCommission): self
    {
        if (!$this->createdCommission->contains($createdCommission)) {
            $this->createdCommission->add($createdCommission);
            $createdCommission->setCreatedBy($this);
        }

        return $this;
    }

    public function removeCreatedCommission(Commission $createdCommission): self
    {
        if ($this->createdCommission->removeElement($createdCommission)) {
            // set the owning side to null (unless already changed)
            if ($createdCommission->getCreatedBy() === $this) {
                $createdCommission->setCreatedBy(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Commission>
     */
    public function getUpdatedCommissions(): Collection
    {
        return $this->updatedCommissions;
    }

    public function addUpdatedCommission(Commission $updatedCommission): self
    {
        if (!$this->updatedCommissions->contains($updatedCommission)) {
            $this->updatedCommissions->add($updatedCommission);
            $updatedCommission->setUpdatedBy($this);
        }

        return $this;
    }

    public function removeUpdatedCommission(Commission $updatedCommission): self
    {
        if ($this->updatedCommissions->removeElement($updatedCommission)) {
            // set the owning side to null (unless already changed)
            if ($updatedCommission->getUpdatedBy() === $this) {
                $updatedCommission->setUpdatedBy(null);
            }
        }

        return $this;
    }
    public function __toString()
    {
        return "$this->firstname $this->lastname";
    }

    /**
     * @return Collection<int, Depenses>
     */
    public function getCreatedDepenses(): Collection
    {
        return $this->createdDepenses;
    }

    public function addCreatedDepense(Depenses $createdDepense): self
    {
        if (!$this->createdDepenses->contains($createdDepense)) {
            $this->createdDepenses->add($createdDepense);
            $createdDepense->setCreatedBy($this);
        }

        return $this;
    }

    public function removeCreatedDepense(Depenses $createdDepense): self
    {
        if ($this->createdDepenses->removeElement($createdDepense)) {
            // set the owning side to null (unless already changed)
            if ($createdDepense->getCreatedBy() === $this) {
                $createdDepense->setCreatedBy(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Depenses>
     */
    public function getUpdatedDepenses(): Collection
    {
        return $this->updatedDepenses;
    }

    public function addUpdatedDepense(Depenses $updatedDepense): self
    {
        if (!$this->updatedDepenses->contains($updatedDepense)) {
            $this->updatedDepenses->add($updatedDepense);
            $updatedDepense->setUpdatedBy($this);
        }

        return $this;
    }

    public function removeUpdatedDepense(Depenses $updatedDepense): self
    {
        if ($this->updatedDepenses->removeElement($updatedDepense)) {
            // set the owning side to null (unless already changed)
            if ($updatedDepense->getUpdatedBy() === $this) {
                $updatedDepense->setUpdatedBy(null);
            }
        }

        return $this;
    }
}
