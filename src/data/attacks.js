export const attacks = [
    {
        id: 1,
        name: "Phishing",
        level: "Débutant",
        keywords: ["phishing", "email", "faux", "lien", "identifiant", "mot de passe", "hameçonnage", "connexion"],
        hints: [
            "Tout commence souvent par un email ou un message qui semble officiel.",
            "Le message crée l'urgence : « Votre compte sera bloqué ! ».",
            "L'attaquant se fait passer pour un service connu afin de voler vos identifiants.",
        ],
        explanation:
            "L'attaquant envoie un faux message avec un lien vers une fausse page de connexion. La victime y saisit son mot de passe, qui est alors volé.",
        example: "Un faux email de « la scolarité » demande de confirmer votre mot de passe.",
        protection:
            "Vérifier l'expéditeur, ne pas cliquer sur les liens suspects, activer l'authentification à deux facteurs (2FA).",
    },
    {
        id: 2,
        name: "Ransomware",
        level: "Débutant",
        keywords: ["ransomware", "rançon", "chiffre", "chiffrement", "fichier", "cryptomonnaie", "bloque"],
        hints: [
            "Vos fichiers deviennent soudain inaccessibles.",
            "Un message s'affiche, parfois avec un compte à rebours.",
            "Les fichiers sont chiffrés et une rançon est demandée pour les récupérer.",
        ],
        explanation:
            "Un logiciel malveillant chiffre les fichiers de la victime, puis exige de l'argent (souvent en cryptomonnaie) contre la clé de déchiffrement.",
        example: "Un hôpital voit tous ses dossiers bloqués jusqu'au paiement d'une rançon.",
        protection:
            "Sauvegardes régulières hors ligne, mises à jour du système, ne pas ouvrir de pièces jointes inconnues.",
    },
    {
        id: 3,
        name: "Ingénierie sociale",
        level: "Débutant",
        keywords: ["ingénierie", "sociale", "manipul", "humain", "confiance", "psychologie", "persuasion"],
        hints: [
            "L'attaque vise l'humain, pas la machine.",
            "L'attaquant joue sur la confiance, la peur ou la politesse.",
            "Il manipule psychologiquement la victime pour obtenir une information ou un accès.",
        ],
        explanation:
            "L'attaquant manipule une personne (appel, message, présence physique) pour qu'elle révèle des informations ou ouvre un accès, sans aucune faille technique.",
        example: "Quelqu'un appelle en se disant du support informatique et demande votre mot de passe.",
        protection:
            "Vérifier l'identité de l'interlocuteur, ne jamais partager ses mots de passe, se méfier de l'urgence.",
    },
    {
        id: 4,
        name: "Brute force",
        level: "Débutant",
        keywords: ["brute", "force", "essai", "tente", "combinaison", "devine", "mot de passe", "automatique"],
        hints: [
            "L'attaquant essaie, encore et encore.",
            "Un programme teste des milliers de combinaisons par minute.",
            "Il devine un mot de passe en essayant toutes les possibilités.",
        ],
        explanation:
            "L'attaquant utilise un programme qui teste automatiquement un grand nombre de mots de passe jusqu'à trouver le bon.",
        example: "Tester 123456, password, azerty... sur un compte jusqu'à ce que l'un fonctionne.",
        protection:
            "Mots de passe longs et uniques, blocage après plusieurs tentatives, authentification à deux facteurs.",
    },
    {
        id: 5,
        name: "Cheval de Troie",
        level: "Débutant",
        keywords: ["troie", "trojan", "déguisé", "légitime", "caché", "malveillant", "install"],
        hints: [
            "Son nom vient d'une légende grecque.",
            "Le programme semble utile ou gratuit.",
            "Un logiciel en apparence légitime cache un code malveillant.",
        ],
        explanation:
            "Un programme déguisé en application légitime est installé par la victime elle-même, puis il ouvre une porte à l'attaquant.",
        example: "Un faux crack de jeu ou un faux « logiciel gratuit » qui espionne votre PC.",
        protection:
            "Télécharger uniquement depuis des sources officielles, garder un antivirus et le système à jour.",
    },
    {
        id: 6,
        name: "Evil Twin (faux Wi-Fi)",
        level: "Débutant",
        keywords: ["wifi", "wi-fi", "evil twin", "faux", "réseau", "point d'accès", "espion"],
        hints: [
            "Ça se passe dans un café, une gare ou un aéroport.",
            "Un Wi-Fi gratuit porte le même nom qu'un réseau connu.",
            "L'attaquant crée un faux point d'accès pour espionner ceux qui s'y connectent.",
        ],
        explanation:
            "L'attaquant crée un faux réseau Wi-Fi identique à un vrai. Tout ce que la victime envoie passe par lui et peut être lu.",
        example: "Un réseau « Cafe_Free_WiFi » créé par un inconnu à côté du vrai réseau du café.",
        protection:
            "Éviter les Wi-Fi publics pour les données sensibles, utiliser un VPN, vérifier le nom exact du réseau.",
    },
    {
        id: 7,
        name: "Keylogger",
        level: "Débutant",
        keywords: ["keylogger", "clavier", "frappe", "enregistre", "touche", "tape"],
        hints: [
            "Un espion silencieux sur votre clavier.",
            "Il enregistre tout ce que vous tapez.",
            "Un logiciel ou un dispositif enregistre les frappes pour voler mots de passe et messages.",
        ],
        explanation:
            "Un logiciel (ou un petit appareil branché au clavier) enregistre chaque touche tapée et envoie les données à l'attaquant.",
        example: "Un logiciel espion installé sur un PC partagé qui capture vos mots de passe.",
        protection:
            "Antivirus à jour, ne pas brancher de clé USB inconnue, authentification à deux facteurs.",
    },
    {
        id: 8,
        name: "DDoS",
        level: "Intermédiaire",
        keywords: ["ddos", "dos", "satur", "trafic", "requête", "indisponible", "botnet", "submerg"],
        hints: [
            "Un site devient soudainement inaccessible.",
            "Des milliers d'appareils envoient des requêtes en même temps.",
            "Le serveur est submergé de trafic et ne peut plus répondre aux vrais utilisateurs.",
        ],
        explanation:
            "Un grand nombre d'appareils infectés (un botnet) envoient simultanément des requêtes à un serveur pour le saturer et le rendre indisponible.",
        example: "Un site de e-commerce mis hors service en plein Black Friday.",
        protection:
            "Filtrage du trafic, pare-feu anti-DDoS, CDN et répartition de charge.",
    },
    {
        id: 9,
        name: "Man-in-the-Middle",
        level: "Intermédiaire",
        keywords: ["mitm", "middle", "intercepte", "entre", "écoute", "modifie", "intermédiaire"],
        hints: [
            "Quelqu'un s'installe secrètement entre deux personnes qui communiquent.",
            "Ni l'expéditeur ni le destinataire ne se doutent de quoi que ce soit.",
            "L'attaquant intercepte, et parfois modifie, les échanges entre deux parties.",
        ],
        explanation:
            "L'attaquant se place entre la victime et le service auquel elle se connecte, pour lire ou modifier les données échangées.",
        example: "Sur un réseau non sécurisé, un attaquant lit les données d'une connexion non chiffrée.",
        protection:
            "Utiliser HTTPS partout, un VPN, et ne jamais ignorer les alertes de certificat.",
    },
    {
        id: 10,
        name: "Injection SQL",
        level: "Intermédiaire",
        keywords: ["sql", "injection", "base de données", "requête", "formulaire", "connexion"],
        hints: [
            "Ça touche les sites web qui utilisent une base de données.",
            "L'attaquant écrit du code dans un champ de formulaire (login, recherche).",
            "Le code saisi est exécuté par la base de données et peut contourner l'authentification ou lire des données.",
        ],
        explanation:
            "L'attaquant insère du code SQL dans un champ de saisie mal protégé pour manipuler la requête envoyée à la base de données.",
        example: "Saisir ' OR '1'='1 dans un formulaire de connexion mal sécurisé.",
        protection:
            "Requêtes préparées (paramétrées), validation des entrées, droits minimum pour la base de données.",
    },
    {
        id: 11,
        name: "XSS (Cross-Site Scripting)",
        level: "Intermédiaire",
        keywords: ["xss", "script", "javascript", "navigateur", "cookie", "inject"],
        hints: [
            "Ça touche les sites web, mais la victime est l'utilisateur.",
            "Un script est caché dans un commentaire ou un lien.",
            "Un script malveillant injecté dans une page s'exécute dans le navigateur des visiteurs.",
        ],
        explanation:
            "L'attaquant injecte du JavaScript dans un site vulnérable. Le script s'exécute chez les autres visiteurs et peut voler leurs cookies ou leur session.",
        example: "Un commentaire piégé sur un forum qui vole la session de chaque lecteur.",
        protection:
            "Filtrer et échapper les entrées utilisateur, Content Security Policy, cookies HttpOnly.",
    },
    {
        id: 12,
        name: "Credential stuffing",
        level: "Intermédiaire",
        keywords: ["credential", "stuffing", "réutilis", "fuite", "identifiant", "même mot de passe", "autre site"],
        hints: [
            "Vous utilisez le même mot de passe sur plusieurs sites ?",
            "Une fuite de données sur un site met tous vos autres comptes en danger.",
            "L'attaquant teste des identifiants volés ailleurs sur de nombreux autres services.",
        ],
        explanation:
            "L'attaquant récupère des identifiants issus d'une fuite de données et les essaie automatiquement sur d'autres sites, en espérant que la victime a réutilisé son mot de passe.",
        example: "Un mot de passe volé sur un petit forum est testé sur Gmail, Instagram et Netflix.",
        protection:
            "Un mot de passe unique par site, un gestionnaire de mots de passe, l'authentification à deux facteurs.",
    },
    {
        id: 13,
        name: "Smishing",
        level: "Débutant",
        keywords: ["smishing", "sms", "message", "faux", "lien", "téléphone", "phishing"],
        hints: [
            "L'attaque arrive sur votre téléphone, pas par email.",
            "Le message ressemble à celui d'une banque, d'un colis ou d'un opérateur.",
            "Un SMS frauduleux pousse à cliquer sur un lien pour voler des données.",
        ],
        explanation:
            "C'est un phishing par SMS : l'attaquant envoie un faux message texte avec un lien malveillant pour voler identifiants ou argent.",
        example: "Un SMS « Votre colis est en attente, cliquez ici pour payer 1€ » mène à une fausse page.",
        protection:
            "Ne pas cliquer sur les liens dans les SMS suspects, vérifier auprès de l'organisme officiel, se méfier de l'urgence.",
    },
    {
        id: 14,
        name: "Vishing",
        level: "Débutant",
        keywords: ["vishing", "appel", "téléphone", "voix", "faux", "support", "banque"],
        hints: [
            "L'attaque se fait à la voix, pas par écrit.",
            "L'appelant prétend être un service officiel (banque, impôts, support).",
            "Il pousse la victime à donner des codes ou à faire un virement.",
        ],
        explanation:
            "Le vishing est un phishing vocal : l'attaquant appelle en se faisant passer pour une institution pour obtenir des informations ou de l'argent.",
        example: "Un faux conseiller bancaire demande votre code de confirmation reçu par SMS.",
        protection:
            "Raccrocher et rappeler le numéro officiel, ne jamais donner de codes par téléphone, se méfier de la pression.",
    },
    {
        id: 15,
        name: "Spyware",
        level: "Débutant",
        keywords: ["spyware", "espion", "surveil", "données", "activité", "vol", "logiciel"],
        hints: [
            "Un programme observe en silence.",
            "Il collecte emails, mots de passe, historique ou position.",
            "C'est un logiciel espion qui envoie vos données à un tiers.",
        ],
        explanation:
            "Un spyware est un logiciel malveillant qui surveille secrètement l'activité d'un appareil et envoie les informations collectées à l'attaquant.",
        example: "Une appli gratuite qui envoie vos contacts et votre localisation à un serveur inconnu.",
        protection:
            "Installer uniquement des apps de confiance, lire les permissions, antivirus et mises à jour à jour.",
    },
    {
        id: 16,
        name: "USB malveillante",
        level: "Débutant",
        keywords: ["usb", "clé", "malveillant", "badusb", "brancher", "infect", "trouvé"],
        hints: [
            "Une clé USB « trouvée » dans un parking ou une salle de cours.",
            "Dès qu'on la branche, quelque chose s'installe.",
            "Le périphérique lance un malware ou ouvre un accès à l'attaquant.",
        ],
        explanation:
            "L'attaquant laisse ou offre une clé USB piégée. Quand la victime la branche, un malware s'installe ou des données sont volées.",
        example: "Une clé « Notes de cours » trouvée sur le campus qui infecte le PC dès qu'elle est branchée.",
        protection:
            "Ne jamais brancher une clé USB inconnue, désactiver l'exécution automatique, scanner les périphériques.",
    },
    {
        id: 17,
        name: "Shoulder surfing",
        level: "Débutant",
        keywords: ["shoulder", "épaule", "regarde", "derrière", "mot de passe", "écran", "observer"],
        hints: [
            "Pas besoin de hacker : il suffit de regarder.",
            "Quelqu'un observe discrètement derrière vous.",
            "L'attaquant lit votre mot de passe ou votre PIN sur l'écran ou le clavier.",
        ],
        explanation:
            "Le shoulder surfing consiste à observer physiquement quelqu'un taper un mot de passe, un PIN ou des informations sensibles.",
        example: "Dans un bus, une personne mémorise le code que vous tapez sur votre téléphone.",
        protection:
            "Masquer le clavier, faire attention à l'environnement, utiliser la biométrie quand c'est possible.",
    },
    {
        id: 18,
        name: "Spoofing",
        level: "Intermédiaire",
        keywords: ["spoofing", "usurp", "identité", "faux", "adresse", "ip", "email", "numéro"],
        hints: [
            "L'attaquant se fait passer pour quelqu'un d'autre.",
            "Il falsifie une adresse email, un numéro ou une IP.",
            "La victime croit communiquer avec une source légitime.",
        ],
        explanation:
            "Le spoofing consiste à usurper une identité technique (email, numéro, IP, site) pour tromper la victime ou les systèmes.",
        example: "Un email qui affiche l'adresse de votre professeur alors qu'il vient d'un pirate.",
        protection:
            "Vérifier les en-têtes et l'URL réelle, activer SPF/DKIM/DMARC, ne pas se fier uniquement à l'affichage.",
    },
    {
        id: 19,
        name: "Clickjacking",
        level: "Intermédiaire",
        keywords: ["clickjacking", "clic", "invisible", "iframe", "piège", "bouton"],
        hints: [
            "Vous croyez cliquer sur un bouton inoffensif.",
            "Une couche invisible se superpose à la page.",
            "Votre clic déclenche en réalité une action dangereuse ailleurs.",
        ],
        explanation:
            "Le clickjacking trompe l'utilisateur pour qu'il clique sur un élément invisible (souvent une iframe) et réalise une action sans le savoir.",
        example: "Un faux jeu « Clique pour gagner » qui active en secret le partage de votre webcam.",
        protection:
            "Les sites doivent utiliser des en-têtes anti-framing (X-Frame-Options, CSP). Méfiance envers les pages trop « gamifiées ».",
    },
    {
        id: 20,
        name: "Session hijacking",
        level: "Intermédiaire",
        keywords: ["session", "hijack", "cookie", "vol", "connexion", "token", "identifiant"],
        hints: [
            "Vous êtes déjà connecté à un site.",
            "L'attaquant vole le « ticket » de votre session.",
            "Il se connecte à votre place sans connaître votre mot de passe.",
        ],
        explanation:
            "L'attaquant vole le cookie ou le token de session d'un utilisateur connecté pour usurper sa session et agir à sa place.",
        example: "Sur un Wi-Fi public, un pirate capture le cookie de session d'un site non sécurisé.",
        protection:
            "HTTPS partout, cookies Secure/HttpOnly, se déconnecter des sessions partagées, éviter les Wi-Fi ouverts sans VPN.",
    },
    {
        id: 21,
        name: "Deepfake",
        level: "Intermédiaire",
        keywords: ["deepfake", "faux", "vidéo", "voix", "ia", "intelligence", "usurp", "visage"],
        hints: [
            "L'image ou la voix semble réelle, mais ne l'est pas.",
            "L'intelligence artificielle recrée un visage ou une voix.",
            "On utilise un faux contenu multimédia pour tromper ou extorquer.",
        ],
        explanation:
            "Un deepfake est un contenu (vidéo, audio, image) généré ou modifié par IA pour faire croire qu'une personne a dit ou fait quelque chose.",
        example: "Un faux appel vidéo du « directeur » demandant un virement urgent à la comptabilité.",
        protection:
            "Vérifier par un second canal, se méfier des demandes urgentes, analyser les incohérences (voix, lèvres, fond).",
    },
    {
        id: 22,
        name: "Zero-day",
        level: "Avancé",
        keywords: ["zero", "day", "0-day", "faille", "inconnu", "patch", "vulnérabilit"],
        hints: [
            "Même l'éditeur du logiciel ne connaît pas encore le problème.",
            "Aucune mise à jour n'existe encore pour se protéger.",
            "L'attaquant exploite une faille inconnue du public et du vendeur.",
        ],
        explanation:
            "Une attaque zero-day exploite une vulnérabilité encore inconnue du fabricant, donc sans correctif disponible au moment de l'attaque.",
        example: "Un navigateur récemment sorti est piraté via une faille non encore découverte par l'éditeur.",
        protection:
            "Mises à jour dès leur sortie, moindre privilège, segmentation réseau, détection comportementale.",
    },
];
