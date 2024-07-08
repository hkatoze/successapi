const { Sequelize, DataTypes } = require("sequelize");

const UserModel = require("./models/User");
const FiliereModel = require("./models/Filiere");
const AdminModel = require("./models/Admin");
const TestResultatModel = require("./models/TestResultat");
const TemperamentModel = require("./models/Temperament");
const TestPersonnaliteModel = require("./models/TestPersonnalite");

const sequelize = new Sequelize(
  "st11917_success",
  "st11917_success",
  "6F7D3vkxDqWQM4RuVYag",
  {
    host: "st11917.ispot.cc",
    dialect: "mysql",
    dialectOptions: {},
    logging: false,
  }
);

const User = UserModel(sequelize, DataTypes);
const Admin = AdminModel(sequelize, DataTypes);
const Filiere = FiliereModel(sequelize, DataTypes);
const TestResultat = TestResultatModel(sequelize, DataTypes);
const Temperament = TemperamentModel(sequelize, DataTypes);
const TestPersonnalite = TestPersonnaliteModel(sequelize, DataTypes);
const temperaments = [
  {
    temperamentForce: "populaire",
    temperamentFaiblesse: "sanguin",

    description:
      "Tu es naturellement enthousiaste et extraverti, attirant les gens avec ton charme et ton énergie. Tu adores être au centre de l'attention, ce qui te rend souvent le cœur de la fête. Cependant, ta nature impulsive peut parfois te conduire à prendre des décisions hâtives sans penser aux conséquences. Tu peux également manquer de discipline, ce qui peut affecter ta capacité à rester concentré sur des tâches à long terme. Malgré ces défis, ta joie de vivre et ta capacité à inspirer les autres sont des atouts précieux.",
    filiereRecommandee:
      "Marketing et gestion commerciale,Communication d'entreprise,Logistique-Transport-Transit",
  },
  {
    temperamentForce: "populaire",
    temperamentFaiblesse: "colérique",
    description:
      "Tu combines le charisme et l’énergie d’un tempérament populaire avec la détermination et la force d’un tempérament colérique. Tu es capable de motiver et d’inspirer les autres avec facilité, et tu as une présence forte qui attire naturellement les gens. Cependant, ta tendance à être autoritaire et impatient peut parfois créer des conflits. Tu es souvent très direct dans tes communications, ce qui peut être perçu comme agressif. Néanmoins, ta capacité à diriger et à prendre des décisions rapidement est un grand avantage dans des situations de leadership.",
    filiereRecommandee:
      "Marketing et gestion commerciale,Gestion des ressources humaines,Gestions des projetss",
  },
  {
    temperamentForce: "populaire",
    temperamentFaiblesse: "mélancolique",
    description:
      "Tu es à la fois charmant et sensible, combinant la sociabilité d’un tempérament populaire avec la profondeur et la réflexion d’un tempérament mélancolique. Tu as une grande capacité à comprendre et à empathiser avec les autres, ce qui fait de toi un excellent confident. Cependant, ton perfectionnisme et ta sensibilité peuvent te rendre susceptible aux critiques et aux doutes personnels. Tu cherches souvent à atteindre des idéaux élevés, ce qui peut être à la fois une force et une source de stress. Ton sens artistique et ton souci du détail font de toi une personne créative et accomplie.",
    filiereRecommandee:
      "Communication d'entreprise,Finance-Comptabilité,Electronique et Informatique Industrielle",
  },
  {
    temperamentForce: "populaire",
    temperamentFaiblesse: "flegmatique",
    description:
      "Tu es amical et facile à vivre, avec une capacité naturelle à mettre les gens à l'aise. Ta nature sociable te permet de te faire des amis facilement, et tu apprécies les interactions sociales. Cependant, tu peux parfois manquer de motivation et de dynamisme, préférant éviter les confrontations et les conflits. Ta tendance à être détendu et à prendre les choses comme elles viennent peut être perçue comme de la paresse par certains. Malgré cela, ta capacité à rester calme et serein dans des situations stressantes est une qualité précieuse.",
    filiereRecommandee:
      "Logistique-Transport-Transit,Communication d'entreprise,Banque et Microfinance",
  },
  {
    temperamentForce: "puissant",
    temperamentFaiblesse: "sanguin",
    description:
      "Tu es dynamique et déterminé, avec une énergie contagieuse qui inspire ceux qui t’entourent. Tu es excellent pour diriger et prendre des décisions rapides, ce qui fait de toi un leader naturel. Cependant, ta tendance à être enclin à la colère et impulsif peut parfois causer des tensions. Tu peux avoir du mal à rester patient et à contrôler tes émotions dans des situations frustrantes. Néanmoins, ta capacité à motiver et à diriger les autres est un atout majeur, et ton enthousiasme pour les nouveaux défis est admirable.",
    filiereRecommandee:
      "Genie Civil,Gestion des ressources humaines,Gestions des projets",
  },
  {
    temperamentForce: "puissant",
    temperamentFaiblesse: "colérique",
    description:
      "Tu es un leader naturel, très compétitif et direct dans tes actions et tes décisions. Ta détermination et ta volonté de réussir sont des traits qui te distinguent. Cependant, tu peux être intolérant et autoritaire, ce qui peut parfois créer des conflits avec ceux qui ne partagent pas ta vision. Ta tendance à être trop exigeant peut aussi mettre la pression sur les autres. Malgré cela, ta capacité à prendre des décisions difficiles et à rester ferme dans tes convictions est une qualité essentielle pour le leadership.",
    filiereRecommandee:
      "Genie Civil,Gestion des ressources humaines,Gestions des projets",
  },
  {
    temperamentForce: "puissant",
    temperamentFaiblesse: "mélancolique",
    description:
      "Tu es ambitieux et analytique, avec une forte attention aux détails. Tu combines la force de volonté d’un tempérament puissant avec la profondeur et la réflexion d’un tempérament mélancolique. Cependant, ton perfectionnisme et ta tendance à la critique peuvent parfois te rendre difficile à satisfaire. Tu as une grande capacité à planifier et à organiser, mais tu peux être dur avec toi-même et avec les autres lorsque les choses ne vont pas comme prévu. Ta capacité à maintenir des standards élevés et à rester concentré sur tes objectifs est impressionnante.",
    filiereRecommandee: "Genie Civil,Finance-Comptabilité,Gestions des projets",
  },
  {
    temperamentForce: "puissant",
    temperamentFaiblesse: "flegmatique",
    description:
      "Tu es efficace et résilient, capable de rester calme sous pression. Ta combinaison de détermination et de tranquillité te permet de gérer les situations stressantes avec facilité. Cependant, tu peux parfois sembler indifférent ou trop détaché, ce qui peut être perçu comme un manque de passion ou d'engagement. Ta capacité à prendre des décisions rationnelles et à rester stable même dans les moments difficiles est un grand avantage. Tu es souvent perçu comme un pilier de stabilité pour ceux qui t’entourent.",
    filiereRecommandee:
      "Gestion des ressources humaines,Logistique-Transport-Transit,Gestions des projets",
  },
  {
    temperamentForce: "parfait",
    temperamentFaiblesse: "sanguin",
    description:
      "Tu es méticuleux et enthousiaste, avec une passion pour la perfection qui inspire les autres. Tu combines une attention aux détails avec une énergie vivante, ce qui te rend très efficace dans tout ce que tu entreprends. Cependant, tu peux être désorganisé et imprévisible, ce qui peut parfois contrecarrer tes efforts de perfection. Ta capacité à motiver les autres avec ta passion et ton enthousiasme est remarquable, mais veille à ne pas te laisser submerger par ton désir de tout faire parfaitement.",
    filiereRecommandee:
      "Finance-Comptabilité,Comptabilité-Controle-audit,Electronique et Informatique Industrielle",
  },
  {
    temperamentForce: "parfait",
    temperamentFaiblesse: "colérique",
    description:
      "Tu es détaillé et déterminé, avec une forte volonté de réussir. Ta combinaison de perfectionnisme et de détermination fait de toi une personne très accomplie. Cependant, tu peux être trop critique et autoritaire, ce qui peut créer des tensions dans tes relations. Ta tendance à chercher la perfection peut également te rendre impatient avec les imperfections des autres. Malgré ces défis, ta capacité à maintenir des standards élevés et à diriger avec confiance est un atout majeur.",
    filiereRecommandee:
      "Genie Civil,Finance-Comptabilité,Comptabilité-Controle-audit",
  },
  {
    temperamentForce: "parfait",
    temperamentFaiblesse: "mélancolique",
    description:
      "Tu es très analytique et sensible, avec une profondeur dans tes réflexions et émotions. Ton perfectionnisme et ta sensibilité te permettent de comprendre les choses en profondeur, mais tu peux aussi être pessimiste et trop autocritique. Ta tendance à la réflexion et à l'analyse te rend très conscient des détails et des subtilités, mais veille à ne pas te laisser submerger par la négativité. Ta capacité à voir au-delà des apparences et à chercher des solutions précises est une qualité précieuse.",
    filiereRecommandee:
      "Finance-Comptabilité,Comptabilité-Controle-audit,Electronique et Informatique Industrielle",
  },
  {
    temperamentForce: "parfait",
    temperamentFaiblesse: "flegmatique",
    description:
      "Tu es patient et méthodique, avec une capacité naturelle à résoudre les problèmes de manière calme et efficace. Ta tranquillité d’esprit et ton approche réfléchie font de toi un excellent médiateur et résolveur de conflits. Cependant, ton manque de réactivité et ton approche parfois trop passive peuvent te faire passer à côté d’opportunités. Ta capacité à maintenir la stabilité et à trouver des solutions durables est un atout précieux pour tout environnement de travail.",
    filiereRecommandee:
      "Finance-Comptabilité,Secretariat de Direction Bureautique,Banque et Microfinance",
  },

  {
    temperamentForce: "pacifique",
    temperamentFaiblesse: "sanguin",
    description:
      "Tu es agréable et facile à vivre, avec une nature sociable qui te permet de te faire des amis facilement. Ta combinaison de tranquillité et d'enthousiasme te rend très accessible. Cependant, tu peux être oisif et manquer de discipline, ce qui peut affecter ta productivité. Ta capacité à maintenir l'harmonie et à éviter les conflits est un atout, mais veille à ne pas te laisser submerger par la paresse. Ton charme naturel et ton attitude détendue font de toi une personne très appréciée.",
    filiereRecommandee:
      "Logistique-Transport-Transit,Communication d'entreprise,Banque et Microfinance",
  },

  {
    temperamentForce: "pacifique",
    temperamentFaiblesse: "colérique",
    description:
      "Tu es calme et équilibré, mais capable de prendre des décisions fermes quand nécessaire. Ta combinaison de tranquillité et de détermination te permet de gérer les situations avec sang-froid. Cependant, tu peux être trop permissif et manquer de direction, ce qui peut créer des problèmes dans les moments où une approche plus stricte est nécessaire. Ta capacité à rester serein et à prendre des décisions rationnelles est un grand avantage, mais veille à ne pas être trop passif.",
    filiereRecommandee:
      "Gestion des ressources humaines,Logistique-Transport-Transit,Gestions des projets",
  },

  {
    temperamentForce: "pacifique",
    temperamentFaiblesse: "mélancolique",
    description:
      "Tu es diplomate et réfléchi, aimant la paix et la tranquillité. Ta combinaison de sensibilité et de tranquillité te rend très empathique et compréhensif. Cependant, tu peux être trop sensible et hésitant, ce qui peut t'empêcher de prendre des décisions difficiles. Ta capacité à maintenir une atmosphère harmonieuse et à comprendre les émotions des autres est une qualité précieuse, mais veille à ne pas te laisser submerger par la négativité. Ton approche équilibrée et posée fait de toi un pilier de stabilité pour ceux qui t’entourent.",
    filiereRecommandee:
      "Finance-Comptabilité,Secretariat de Direction Bureautique,Banque et Microfinance",
  },

  {
    temperamentForce: "pacifique",
    temperamentFaiblesse: "flegmatique",
    description:
      "Tu es stable et serein, rarement perturbé par les événements extérieurs. Ta combinaison de tranquillité et de résilience te permet de rester calme dans des situations stressantes. Cependant, tu peux être paresseux et indifférent aux changements, préférant maintenir le statu quo. Ta capacité à rester détendu et à prendre les choses comme elles viennent est un atout, mais veille à ne pas te laisser freiner par l'inaction. Ton approche équilibrée et posée fait de toi un pilier de stabilité pour ceux qui t'entourent.",
    filiereRecommandee:
      "Logistique-Transport-Transit,Secretariat de Direction Bureautique,Banque et Microfinance",
  },
];
const filieres = [

  {
    nom: "Genie Civil",
    description:
      "Le génie civil concerne la conception, la construction et la maintenance des infrastructures comme les routes, les ponts, les bâtiments, les tunnels et les systèmes de traitement des eaux. Les ingénieurs civils travaillent sur des projets qui améliorent la qualité de vie et l'environnement.",
    perspectives: [
      "Ingénieur civil",
      "Chef de chantier",
      "Consultant en génie civil",
      "Responsable de la planification urbaine",
      "Directeur des travaux publics",
      "Ingénieur en structures",
      "Inspecteur de bâtiment",
      "Ingénieur en hydraulique",
      "Gestionnaire de projet",
    ].join(", "),
    departement: "ST",
  },
  {
    nom: "Maintenance industrielle",
    description:
      "La maintenance industrielle vise à assurer le bon fonctionnement et la longévité des équipements et des machines dans les usines et les sites de production. Elle comprend la maintenance préventive, corrective et prédictive, ainsi que la gestion de la sécurité.",
    perspectives: [
      "Technicien de maintenance",
      "Responsable de maintenance",
      "Ingénieur de maintenance",
      "Superviseur de la maintenance",
      "Spécialiste en fiabilité",
      "Consultant en maintenance industrielle",
      "Coordinateur de maintenance",
      "Analyste de maintenance",
      "Gestionnaire d'actifs",
    ].join(", "),
    departement: "ST",
  },
  {
    nom: "Genie Minier",
    description:
      "Le génie minier implique l'exploration, l'extraction et la gestion des ressources minérales de la Terre. Les ingénieurs miniers travaillent sur l'optimisation des méthodes d'extraction, la sécurité des mines, et la réduction de l'impact environnemental.",
    perspectives: [
      "Ingénieur minier",
      "Géologue",
      "Responsable de site minier",
      "Consultant en exploration minière",
      "Ingénieur en sécurité minière",
      "Gestionnaire des ressources minérales",
      "Analyste des ressources naturelles",
      "Directeur d'exploitation minière",
      "Chercheur en ingénierie minière",
    ].join(", "),
    departement: "ST",
  },
  {
    nom: "Genie Biomédical",
    description:
      "Le génie biomédical combine les principes de l'ingénierie et des sciences biologiques pour développer des technologies et des dispositifs médicaux. Les ingénieurs biomédicaux travaillent sur des équipements de diagnostic, des prothèses, des implants et des systèmes de soins de santé.",
    perspectives: [
      "Ingénieur biomédical",
      "Technicien biomédical",
      "Consultant en équipements médicaux",
      "Chef de projet en dispositifs médicaux",
      "Responsable de la maintenance des équipements hospitaliers",
      "Chercheur en biomatériaux",
      "Spécialiste en imagerie médicale",
      "Concepteur de prothèses",
      "Ingénieur en biotechnologie",
    ].join(", "),
    departement: "ST",
  },
  {
    nom: "Agroalimentaire",
    description:
      "L'agroalimentaire englobe la transformation des produits agricoles en produits alimentaires. Ce domaine couvre la production, la transformation, l'emballage, la distribution et le contrôle de la qualité des aliments.",
    perspectives: [
      "Ingénieur agroalimentaire",
      "Responsable qualité",
      "Chef de production",
      "Consultant en sécurité alimentaire",
      "Directeur d'usine agroalimentaire",
      "Spécialiste en développement de produits",
      "Technologue alimentaire",
      "Gestionnaire de la chaîne d'approvisionnement",
      "Analyste en nutrition",
    ].join(", "),
    departement: "ST",
  },
  {
    nom: "Energies Renouvelables",
    description:
      "Les énergies renouvelables se concentrent sur le développement et la gestion des sources d'énergie alternatives, comme le solaire, l'éolien, la biomasse et l'hydroélectricité. Ce domaine vise à réduire la dépendance aux combustibles fossiles et à promouvoir un avenir énergétique durable.",
    perspectives: [
      "Ingénieur en énergies renouvelables",
      "Consultant en énergie",
      "Gestionnaire de projet énergétique",
      "Spécialiste en efficacité énergétique",
      "Chercheur en technologies renouvelables",
      "Responsable de la production d'énergie renouvelable",
      "Analyste en politiques énergétiques",
      "Concepteur de systèmes énergétiques",
      "Technicien en maintenance des énergies renouvelables",
    ].join(", "),
    departement: "ST",
  },
  {
    nom: "Electronique et Informatique Industrielle",
    description:
      "Ce domaine implique la conception, le développement et la maintenance des systèmes électroniques et informatiques utilisés dans les processus industriels. Cela comprend l'automatisation, la robotique et les systèmes embarqués.",
    perspectives: [
      "Ingénieur en électronique",
      "Technicien en informatique industrielle",
      "Consultant en systèmes industriels",
      "Développeur de systèmes embarqués",
      "Responsable de l'automatisation",
      "Spécialiste en robotique industrielle",
      "Concepteur de circuits électroniques",
      "Gestionnaire de projets industriels",
      "Analyste en systèmes industriels",
    ].join(", "),
    departement: "ST",
  },
  {
    nom: "Reseaux informatiques et Telecoms",
    description:
      "Ce domaine couvre la gestion, la maintenance et la sécurité des réseaux informatiques et des systèmes de télécommunications. Les professionnels assurent le bon fonctionnement des infrastructures de communication.",
    perspectives: [
      "Ingénieur réseaux",
      "Technicien télécoms",
      "Consultant en télécommunications",
      "Architecte de réseaux",
      "Administrateur réseau",
      "Spécialiste en cybersécurité",
      "Analyste de systèmes",
      "Gestionnaire de la sécurité des systèmes d'information",
      "Concepteur de réseaux",
    ].join(", "),
    departement: "ST",
  },
  {
    nom: "Electrotechnique",
    description:
      "L'électrotechnique se concentre sur l'étude et l'application de l'électricité et de l'électromécanique. Les ingénieurs travaillent sur des systèmes électriques, des moteurs, des générateurs, et des équipements de transmission et de distribution d'électricité.",
    perspectives: [
      "Ingénieur électrotechnique",
      "Technicien électrotechnique",
      "Responsable de maintenance électrique",
      "Consultant en électricité",
      "Chef de projet en systèmes électriques",
      "Spécialiste en conversion d'énergie",
      "Concepteur de systèmes électriques",
      "Gestionnaire de réseaux électriques",
      "Analyste en systèmes énergétiques",
    ].join(", "),
    departement: "ST",
  },
 
  {
    nom: "Logistique-Transport-Transit",
    description:
      "La logistique et le transport impliquent la gestion des flux de marchandises, la planification des itinéraires, la gestion des stocks et la coordination des opérations de transit. Les professionnels optimisent les chaînes d'approvisionnement pour réduire les coûts et améliorer l'efficacité.",
    perspectives: [
      "Logisticien",
      "Responsable transport",
      "Consultant en logistique",
      "Gestionnaire de la chaîne d'approvisionnement",
      "Coordinateur de transit",
      "Directeur des opérations logistiques",
      "Analyste logistique",
      "Planificateur de transport",
      "Spécialiste en gestion des stocks",
    ].join(", "),
    departement: "SG",
  },
  {
    nom: "Finance-Comptabilité",
    description:
      "La finance et la comptabilité concernent la gestion financière des entreprises, l'analyse des états financiers, la planification budgétaire, et la prise de décisions économiques. Les professionnels veillent à la santé financière et à la conformité réglementaire.",
    perspectives: [
      "Comptable",
      "Contrôleur de gestion",
      "Analyste financier",
      "Directeur financier",
      "Auditeur interne",
      "Consultant en gestion financière",
      "Gestionnaire de trésorerie",
      "Analyste en planification financière",
      "Responsable de la conformité",
    ].join(", "),
    departement: "SG",
  },
  {
    nom: "Communication d'entreprise",
    description:
      "La communication d'entreprise englobe la gestion de la communication interne et externe, la gestion de la marque, les relations publiques, et la stratégie de communication. Les professionnels assurent une communication cohérente et efficace avec toutes les parties prenantes.",
    perspectives: [
      "Responsable communication",
      "Chargé de communication",
      "Consultant en communication",
      "Spécialiste en relations publiques",
      "Directeur de la communication",
      "Community manager",
      "Gestionnaire de la marque",
      "Analyste en communication interne",
      "Planificateur d'événements",
    ].join(", "),
    departement: "SG",
  },
  {
    nom: "Comptabilité-Controle-audit",
    description:
      "Cette filière se concentre sur la comptabilité avancée, le contrôle de gestion et l'audit. Les professionnels analysent les performances financières, identifient les risques, et proposent des solutions pour améliorer l'efficacité et la conformité.",
    perspectives: [
      "Auditeur",
      "Contrôleur de gestion",
      "Comptable senior",
      "Consultant en audit",
      "Responsable de la conformité",
      "Directeur financier",
      "Analyste de risques financiers",
      "Gestionnaire de la performance",
      "Inspecteur des finances",
    ].join(", "),
    departement: "SG",
  },

  {
    nom: "Secretariat de Direction Bureautique",
    description:
      "Le secrétariat de direction et la bureautique incluent la gestion administrative, la coordination des activités de bureau, la gestion des agendas et la communication avec les différents services. Les professionnels assurent le bon fonctionnement des opérations administratives.",
    perspectives: [
      "Secrétaire de direction",
      "Assistant de direction",
      "Responsable administratif",
      "Gestionnaire de bureau",
      "Assistant personnel",
      "Coordonnateur des services administratifs",
      "Spécialiste en gestion documentaire",
      "Assistant exécutif",
      "Réceptionniste",
    ].join(", "),
    departement: "SG",
  },

  {
    nom: "Banque et Microfinance",
    description:
      "Ce domaine couvre la gestion des services bancaires, la finance de marché, et la microfinance. Les professionnels travaillent sur l'octroi de prêts, la gestion des portefeuilles d'investissement, et le soutien financier aux petites entreprises.",
    perspectives: [
      "Banquier",
      "Conseiller en microfinance",
      "Gestionnaire de portefeuille",
      "Analyste de crédit",
      "Consultant en services bancaires",
      "Responsable de la gestion des risques",
      "Directeur d'agence bancaire",
      "Spécialiste en finance inclusive",
      "Analyste des investissements",
    ].join(", "),
    departement: "SG",
  },

  {
    nom: "Gestion des ressources humaines",
    description:
      "La gestion des ressources humaines inclut le recrutement, la formation, la gestion des performances, et le développement des talents. Les professionnels veillent à ce que l'organisation dispose des compétences nécessaires et favorisent un environnement de travail positif.",
    perspectives: [
      "Responsable RH",
      "Chargé de recrutement",
      "Consultant RH",
      "Gestionnaire de formation",
      "Spécialiste en relations de travail",
      "Directeur des ressources humaines",
      "Gestionnaire de la paie",
      "Spécialiste en développement organisationnel",
      "Analyste des ressources humaines",
    ].join(", "),
    departement: "SG",
  },

  {
    nom: "Gestions des projets",
    description:
      "La gestion de projets comprend la planification, l'exécution, le suivi et la clôture des projets. Les professionnels utilisent des méthodologies de gestion de projet pour s'assurer que les projets sont livrés à temps, dans les limites du budget et selon les spécifications.",
    perspectives: [
      "Chef de projet",
      "Consultant en gestion de projet",
      "Planificateur de projet",
      "Coordinateur de projet",
      "Directeur de programme",
      "Spécialiste en gestion agile",
      "Analyste de projet",
      "Gestionnaire de la qualité",
      "Responsable de la PMO",
    ].join(", "),
    departement: "SG",
  },

  {
    nom: "Marketing et gestion commerciale",
    description:
      "Ce domaine implique la gestion des activités marketing et commerciales, y compris la recherche de marché, la stratégie marketing, la gestion des ventes, et la relation client. Les professionnels travaillent à augmenter les ventes et à développer des relations durables avec les clients.",
    perspectives: [
      "Responsable marketing",
      "Chef de produit",
      "Consultant en marketing",
      "Directeur des ventes",
      "Analyste de marché",
      "Spécialiste en gestion de la relation client",
      "Gestionnaire de marque",
      "Directeur commercial",
      "Responsable des opérations de vente",
    ].join(", "),
    departement: "SG",
  },
];
const initDb = () => {
  return sequelize.sync().then((_) => {
    console.log(`La base de données a bien été initialisée !`);
    Temperament.bulkCreate(temperaments).then((_) =>
      console.log(`Temperaments ajoutés avec succès`)
    );
    Filiere.bulkCreate(filieres).then((_) =>
      console.log(`Filières ajoutées avec succès`)
    );
  });
};

module.exports = {
  initDb,
  User,
  Admin,
  Filiere,
  TestResultat,
  Temperament,
  TestPersonnalite,
};
