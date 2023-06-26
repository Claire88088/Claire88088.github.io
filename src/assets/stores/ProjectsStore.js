import { defineStore } from "pinia"

import hero from '@/assets/images/projets/portfolio/hero.png'
import flip_card from '@/assets/images/projets/portfolio/flip_card.png'
import carousel from '@/assets/images/projets/portfolio/carousel.png'
import section_experience from '@/assets/images/projets/portfolio/experience_section.png'
import section_techno from '@/assets/images/projets/portfolio/techno_section.png'
import section_projets from '@/assets/images/projets/portfolio/projets_section.png'
import section_formation from '@/assets/images/projets/portfolio/formation_section.png'
import page_projet from '@/assets/images/projets/portfolio/page_projet.png'
import page_image from '@/assets/images/projets/portfolio/page_image.png'
import animation_titre from '@/assets/images/projets/portfolio/animation_titre.png'

import einden_bloc15 from '@/assets/images/projets/einden/Bloc_015_3.png'
// import einden_bloc1 from '@/assets/images/projets/einden/bloc1_desktop.png'
// import einden_bloc1_smartphone from '@/assets/images/projets/einden/bloc1_smartphone.png'
// import einden_bloc2 from '@/assets/images/projets/einden/bloc2_desktop.png'
import einden_bloc3 from '@/assets/images/projets/einden/bloc3_desktop.png'
import einden_bloc4 from '@/assets/images/projets/einden/bloc4_desktop.png'
import einden_bloc4_smartphone from '@/assets/images/projets/einden/bloc4_1_smartphone.png'
// import einden_bloc5 from '@/assets/images/projets/einden/bloc5_desktop.png'
// import einden_bloc6_image from '@/assets/images/projets/einden/bloc6_image_desktop.png'
import einden_bloc6_video from '@/assets/images/projets/einden/bloc6_video_desktop.png'
import einden_menu_connexion_responsive from '@/assets/images/projets/einden/menu_connexion_responsive.png'
// import einden_page_edition_bloc6 from '@/assets/images/projets/einden/page_edition_bloc.png'
// import einden_page_edition_bloc6_video from '@/assets/images/projets/einden/page_edition_bloc6_2_video.png'
// import einden_page_edition_bloc6_2 from '@/assets/images/projets/einden/page_edition_bloc6_2.png'
import einden_page_edition_page_bouton_editer from '@/assets/images/projets/einden/page_edition_page_bouton_editer.png'
// import einden_page_edition_page from '@/assets/images/projets/einden/page_edition_page.png'
// import einden_page_liste from '@/assets/images/projets/einden/page_liste.png'
import einden_page_liste_annote from '@/assets/images/projets/einden/page_liste_annote.png'
// import einden_page_modification_page from '@/assets/images/projets/einden/page_modification_page.png'
import einden_page_modification_page_annote from '@/assets/images/projets/einden/page_modification_page_annote.png'
import einden_recherche from '@/assets/images/projets/einden/capture_recherche.png'


import carte_accueil from '@/assets/images/projets/carte/accueil.png'
import carte_accueil_connecte from '@/assets/images/projets/carte/accueil_connecte.png'
import carte_form_ajout from '@/assets/images/projets/carte/form_ajout.png'
import carte_gestion_carte from '@/assets/images/projets/carte/gestion_carte.jpg'
import carte_gestion_points from '@/assets/images/projets/carte/gestion_points.png'

import bebe_accueil from '@/assets/images/projets/bebe/accueil.png'
import bebe_alimentation from '@/assets/images/projets/bebe/alimentation.png'
import bebe_change from '@/assets/images/projets/bebe/change.png'
import bebe_connexion from '@/assets/images/projets/bebe/connexion.png'
import bebe_debut_sommeil from '@/assets/images/projets/bebe/debut_sommeil.png'
import bebe_fin_sommeil from '@/assets/images/projets/bebe/fin_sommeil.png'
import bebe_info_utilisateur from '@/assets/images/projets/bebe/info_utilisateur.png'
import bebe_inscription from '@/assets/images/projets/bebe/inscription.png'
import bebe_meteo_choix from '@/assets/images/projets/bebe/meteo_choix.png'
import bebe_meteo from '@/assets/images/projets/bebe/meteo.png'
import bebe_recap from '@/assets/images/projets/bebe/recap.png'
import bebe_accueil_responsive from '@/assets/images/projets/bebe/accueil_responsive.png'
import bebe_accueil_responsive_menu from '@/assets/images/projets/bebe/accueil_responsive_menu.png'

import blog_accueil from '@/assets/images/projets/blog/accueil.png'
import blog_accueil_connecte from '@/assets/images/projets/blog/accueil_connecte.png'
import blog_admin from '@/assets/images/projets/blog/admin.png'
import blog_commentaire_ajout from '@/assets/images/projets/blog/commentaire_ajout.png'
import blog_connexion from '@/assets/images/projets/blog/connexion.png'
import blog_episode_ajout from '@/assets/images/projets/blog/episode_ajout.png'
import blog_episode from '@/assets/images/projets/blog/episode.png'

import velos_projet from '@/assets/images/projets/velos/velos_projet.png'
import velos_marqueurs from '@/assets/images/projets/velos/carte_marqueurs.png'
import velos_form from '@/assets/images/projets/velos/reservation_form.png'
import velos_reservation from '@/assets/images/projets/velos/reservation.png'
import velos_signature from '@/assets/images/projets/velos/signature.png'
import velos_diaporama from '@/assets/images/projets/velos/diaporama.png'
import velos_carte from '@/assets/images/projets/velos/carte.png'
import velos_expiration from '@/assets/images/projets/velos/reservation_expiration.png'

import integration1 from  '@/assets/images/projets/integration/projet_integration.png'
import integration_accueil from  '@/assets/images/projets/integration/accueil.png'
import integration_contact from  '@/assets/images/projets/integration/section_contact.png'
import integration_projets from  '@/assets/images/projets/integration/section_projets.png'
import integration_services from  '@/assets/images/projets/integration/section_services.png'


import html5Logo from '@/assets/images/logos/html5_logo.png'
import css3Logo from '@/assets/images/logos/css3_logo.png'
import phpLogo from '@/assets/images/logos/php_logo.png'
import symfonyLogo from '@/assets/images/logos/symfony_logo.png'
import jsLogo from '@/assets/images/logos/js_logo.png'
import jqueryLogo from '@/assets/images/logos/jquery_logo.svg'
import bootstrapLogo from '@/assets/images/logos/bootstrap_logo.svg'
import javaLogo from '@/assets/images/logos/java_logo.png'
import javafxLogo from '@/assets/images/logos/javafx_logo.png'
import vueLogo from '@/assets/images/logos/vueJS_logo.png'
import leafletLogo from '@/assets/images/logos/leaflet_logo.svg'
import sqliteLogo from '@/assets/images/logos/sqlite_logo.svg'
import mysqlLogo from '@/assets/images/logos/mysql_logo.png'
import wordpressLogo from '@/assets/images/logos/word_press_white_logo.png'
import piniaLogo from '@/assets/images/logos/pinia_logo.svg'
import sassLogo from '@/assets/images/logos/sass_logo.png'

let basePath = window.location.origin
let websiteUrl = basePath + '/projet_velos'


export const useProjectsStore = defineStore("ProjectsStore", {
    state: () => (
        {
            projects: [
                {
                    id: 'projet_portfolio',
                    year: "2022/2023",
                    isMain: true,
                    title: 'Portfolio',
                    image: hero,
                    technos: [
                        {
                            src: html5Logo,
                            alt: 'logo HTML5'
                        },
                        {
                            src: css3Logo,
                            alt: 'logo CSS3',
                            isBackground: false
                        },
                        {
                            src: jsLogo,
                            alt: 'logo JavaScript'
                        },
                        {
                            src: vueLogo,
                            alt: 'logo VueJS',
                        },
                        {
                            src: piniaLogo,
                            alt: 'logo Pinia',
                        },
                     
                    ],
                    links: {
                        github: "https://github.com/Claire88088/Claire88088.github.io",
                    },
                    goal: 'Créer mon portfolio pour présenter mes projets',
                    description: "Après une première version entièrement en HTML, CSS et JS natifs, voici la version 2 : une Single Page Application en VueJS",
                    context: "Projet personnel",
                    features: [
                        "Carousel",
                        "Animation en CSS : cartes qui se retournent",
                        "Routing avec VueJS",
                        "Gestion des stores avec Pinia",
                        "Style en CSS natif"
                    ],
                    skills: [
                        "Utiliser le framework VueJS",
                        "Créer une Single Page Application avec VueJS",
                        "Utiliser le routing VueJS",
                        "Utiliser Pinia pour gérer les stores",
                        "Créer des animations en CSS"
                    ],
                    portfolio: [
                        { 
                            id: '1',
                            image: flip_card,
                            legend: "Animation en CSS : cartes qui se retournent"
                        },
                        { 
                            id: '2',
                            image: carousel,
                            legend: "Carrousel d'images"
                        },
                        { 
                            id: '3',
                            image: animation_titre,
                            legend: "Animation en CSS : affichage du titre"
                        },
                        { 
                            id: '4',
                            image: hero,
                            legend: "Hero"
                        },
                        { 
                            id: '5',
                            image: section_formation,
                            legend: "Section formation"
                        },
                        { 
                            id: '6',
                            image: section_experience,
                            legend: "Section expérience"
                        },
                        { 
                            id: '7',
                            image: section_techno,
                            legend: "Section technologies"
                        },
                        { 
                            id: '8',
                            image: section_projets,
                            legend: "Section projets"
                        },
                        { 
                            id: '9',
                            image: page_projet,
                            legend: "Page d'un projet"
                        },
                        { 
                            id: '10',
                            image: page_image,
                            legend: "Page d'une image en grand format"
                        },
                    ]
                },
                {
                    id: 'projet_einden',
                    isMain: true,
                    year: "2022/2023",
                    title: "Reprise d'un projet de CMS",
                    context: "Projet réalisé en tant que développeuse web junior chez Einden",
                    description: '',
                    image: einden_page_modification_page_annote,
                    technos: [
                        {
                            src: html5Logo,
                            alt: 'logo HTML5'
                        },
                        {
                            src: css3Logo,
                            alt: 'logo CSS3',
                            isBackground: false
                        },
                        {
                            src: jsLogo,
                            alt: 'logo JavaScript'
                        },
                        {
                            src: phpLogo,
                            alt: 'logo PHP'
                        },
                    ],
                    goal: "Effectuer les modifications nécessaires pour répondre aux besoins du client suite aux retours du chef de projet",
                    skills: [
                        "Analyser et comprendre du code existant",
                        "Ecrire du code en PHP natif",
                        "S'assurer de la compatibilité avec les différents navigateurs",
                        "Gérer la responsivité (HTML, CSS, JavaScript)",
                        "Travailler en lien avec un chef de projet informatique"
                    ],
                    features: [
                        "Ajout du choix d'une page d'accueil parmi les pages créées (avec validation de l'utilisateur)",
                        "Ajout d'un nouveau modèle de bloc",
                        "Refonte du style (standardisation des titres, boutons, visuel plus aéré, ajout de couleurs pour plus de lisibilité...)",
                        "Uniformisation du style et mise en place du responsive de la 15aine de modèles de blocs existants",
                        "Mise en place du responsive du menu",
                        "Redimensionnement dynamique des vidéos et des images",
                        "Gestion des failles XSS et caractères non autorisés"

                    ],
                    portfolio: [
                        { 
                            id: '1',
                            image: einden_page_modification_page_annote,
                            legend: "Ajout du choix d'une page d'accueil"
                        },
                        { 
                            id: '2',
                            image: einden_page_liste_annote,
                            legend: "Ajout du choix d'une page d'accueil (visualisation)"
                        },
                        { 
                            id: '3',
                            image: einden_bloc15,
                            legend: "Ajout d'un nouveau modèle de bloc (visuel)"
                        },
                        // { 
                        //     id: '3',
                        //     // image: einden_bloc15,
                        //     legend: "Ajout d'un nouveau modèle de bloc (page d'édition)"
                        // },
                        { 
                            id: '11',
                            image: einden_recherche,
                            legend: "Debug du module de recherche"
                        },
                        { 
                            id: '5',
                            image: einden_bloc3,
                            legend: "Uniformisation du style (ex : bloc 3)"
                        },
                        { 
                            id: '6',
                            image: einden_bloc4,
                            legend: "Uniformisation du style (ex : bloc 4)"
                        },
                        { 
                            id: '7',
                            image: einden_bloc6_video,
                            legend: "Uniformisation du style (ex : bloc 6 avec vidéo)"
                        },
                        { 
                            id: '8',
                            image: einden_bloc4_smartphone,
                            legend: "Mise en place du responsive (ex : bloc 4)"
                        },
                        { 
                            id: '9',
                            image: einden_page_edition_page_bouton_editer,
                            legend: "Refonte du style (ex : Edition d'une nouvelle page)"
                        },
                        { 
                            id: '10',
                            image: einden_menu_connexion_responsive,
                            legend: "Mise en place du responsive (menu)"
                        },                     
                    ]
                },
                {
                    id: 'projet_carte',
                    year: '2022',
                    isMain: true,
                    title: 'Aide cartographique',

                    image: carte_accueil,
                    technos: [
                        {
                            src: jsLogo,
                            alt: 'logo JavaScript'
                        },
                        {
                            src: leafletLogo,
                            alt: 'logo Leaflet',
                            isBackground: true
                        },
                        {
                            src: symfonyLogo,
                            alt: 'logo Symfony',
                        },
                        {
                            src: sqliteLogo,
                            alt: 'logo SQLite',
                            isBackground: true
                        },
                    ],
                    links: {
                        github: "https://github.com/Claire88088/ProjetCartePompier",
                    },
                    goal: "Créer une application de carte interactive équivalente à UMap mais plus simple d'utilisation (interface claire, intuitive et lisible)",
                    context: 'Projet tuteuré dans le cadre de ma licence professionnelle et réalisé pour un client (350 h à deux étudiants)',
                    skills: [
                        "Etablir le cahier des charges et les spécifications techniques suite aux échanges avec le client",
                        "Concevoir l'application (méthode Merise, diagrammes UML...)",
                        "Mettre en œuvre la méthode Agile Scrum (sprints, user stories...)",
                        "Développer l'application",
                        "Livrer et déployer l'application chez le client",
                        "Debugger",
                        "Utiliser Git pour le versionnement du projet"
                    ],
                    features: [
                        "Connexion en fonction des droits de l'utilisateur",
                        "Recherche et affichage d'une adresse",
                        "Affichage de points d'intérêt sur différents calques",
                        "CRUD des points d'intérêts"
                    ],
                    portfolio: [
                        { 
                            id: 'carte_accueil',
                            image: carte_accueil,
                            legend: "Recherche et affichage d'une adresse"
                        },
                        { 
                            id: 'carte_accueil_connecte',
                            image: carte_accueil_connecte,
                            legend: "Page d'accueil connecté"
                        },
                        { 
                            id: 'carte_form_ajout',
                            image: carte_form_ajout,
                            legend: "Formulaire d'ajout de points d'intérêt"
                        },
                        { 
                            id: 'carte_gestion_carte',
                            image: carte_gestion_carte,
                            legend: "Gestion de la carte"
                        },
                        { 
                            id: 'carte_gestion_points',
                            image: carte_gestion_points,
                            legend: "Gestion des points d'intérêts"
                        },
                    ]
                },
                {
                    id: 'projet_memory',
                    year: '2022',
                    title: 'Memory',
                    technos: [
                        {
                            src: javaLogo,
                            alt: 'logo Java'
                        },
                        {
                            src: javafxLogo,
                            alt: 'logo JavaFX',
                            isBackground: true
                        },
                    ],
                    links: {
                        github: "https://github.com/Claire88088/memory",
                 
                    },
                    goal: "Créer un jeu de Memory en orienté objet avec Java et la bibliothèque JavaFX",
                    description: 'Projet de cours de POO de licence professionnelle',
                    skills: [
                        "Développer en Orienté Object en Java",
                        "Utiliser la bibliothèque JavaFX",
                    ],
                    features: [
                        "Choix du nombre de joueurs et de cartes",
                        "Saisie des noms des joueurs",
                        "Visualisation du plateau de jeu, des scores, boutons de gestion de la partie",
                        "Possibilité pour le joueur avec le plus petit score d'échanger 2 cartes de son choix sur le plateau",
                        "Choix de l'apparence du jeu"
                    ],
                },
                {
                    id: 'projet_bebe',
                    year: "2020",
                    isMain: true,
                    title: 'Suivi de bébé',
                    image: bebe_accueil ,
                    technos: [
                        {
                            src: html5Logo,
                            alt: 'logo HTML5'
                        },
                        {
                            src: css3Logo,
                            alt: 'logo CSS3',
                            isBackground: false
                        },
                        {
                            src: bootstrapLogo,
                            alt: 'logo Bootstrap',
                            isBackground: false
                        },
                        {
                            src: sassLogo,
                            alt: 'logo Sass',
                            isBackground: false
                        },
                        {
                            src: jsLogo,
                            alt: 'logo JavaScript',
                            isBackground: false
                        },
                        {
                            src: jqueryLogo,
                            alt: 'logo jQuery',
                            isBackground: true
                        },
                        {
                            src: phpLogo,
                            alt: 'logo PHP',
                            isBackground: false
                        },
                        {
                            src: mysqlLogo,
                            alt: 'logo MySQL',
                            isBackground: true
                        },
                    ],
                    links: {
                        github: "https://github.com/Claire88088/projetbebe",
                    
                    },
                    goal: "Créer une application permettant de suivre facilement les besoins de son bébé",
                    context: "Projet de fin de formation de développeur web",
                    description: "Il s'agissait d'utiliser l'ensemble des technologies abordées lors de ma formation de développeur web (HTML, CSS, JavaScript, PHP, base de données, consommation d'API...)",
                    skills: [
                        "Développer une application en PHP sans framework",
                        "Mettre en oeuvre une architecture MVC",
                        "Programmer en orienté objet",
                        "Créer une base de données MySQL",
                        "Utiliser Bootstrap et Sass pour la mise en forme responsive",
                        "Utiliser JavaScript et jQuery pour valider les formulaires côté client, aider à la saisie de mots de passe forts, créer une petite animation sur les logos",
                        "Intégrer la météo via l'API MeteoConcept",
                        "Sécuriser l'application (failles XSS et injections SQL)"
                    ],
                    features: [
                        "Connexion sécurisée",
                        "Enregistrement d'un biberon",
                        "Enregistrement d'un change",
                        "Enregistrement d'une sieste",
                        "Affichage de la météo du département"
                    ],
                    portfolio: [
                        { 
                            id: '1',
                            image: bebe_connexion,
                            legend: "Connexion sécurisée"
                        },
                        { 
                            id: '2',
                            image: bebe_inscription,
                            legend: "Inscription (avec aide à la saisie)"
                        },
                        { 
                            id: '3',
                            image: bebe_accueil,
                            legend: "Page d'accueil"
                        },
                        { 
                            id: '4',
                            image: bebe_alimentation,
                            legend: "Enregistrement d'un biberon"
                        },
                        { 
                            id: '5',
                            image: bebe_change,
                            legend: "Enregistrement d'un change"
                        },
                        { 
                            id: '6',
                            image: bebe_debut_sommeil,
                            legend: "Enregistrement d'une sieste (endormissement)"
                        },
                        { 
                            id: '7',
                            image: bebe_fin_sommeil,
                            legend: "Enregistrement d'une sieste (réveil)"
                        },
                        { 
                            id: '8',
                            image: bebe_info_utilisateur,
                            legend: "Messaage d'information utilisateur"
                        },
                        { 
                            id: '9',
                            image: bebe_recap,
                            legend: "Page récapitulative de la journée"
                        },
                        { 
                            id: '10',
                            image: bebe_meteo_choix,
                            legend: "Choix du département pour la météo"
                        },
                        { 
                            id: '11',
                            image: bebe_meteo,
                            legend: "Affichage de la météo du jour"
                        },
                        { 
                            id: '12',
                            image: bebe_accueil_responsive,
                            legend: "Application responsive"
                        },
                        { 
                            id: '13',
                            image: bebe_accueil_responsive_menu,
                            legend: "Application responsive (ex : menu)"
                        },
                    ]
                },
                {
                    id: 'projet_blog',
                    year: '2019',
                    isMain: false,
                    title: 'Blog',
                    image: blog_accueil,
                    technos: [
                        {
                            src: html5Logo,
                            alt: 'logo HTML5'
                        },
                        {
                            src: css3Logo,
                            alt: 'logo CSS3',
                            isBackground: false
                        },
                        {
                            src: phpLogo,
                            alt: 'logo PHP',
                            isBackground: false
                        },
                        {
                            src: mysqlLogo,
                            alt: 'logo MySQL',
                            isBackground: false
                        },
                    ],
                    links: {
                        github: "https://github.com/Claire88088/projet4Blog",
                  
                    },
                    goal: "Créer un moteur de blog en PHP (sans framework) qui interagit avec une base de données MySQL pour publier un roman chapitre par chapitre",
                    context: 'Projet n°4 de formation de développeur web',
                    skills: [
                        "Utiliser une architecture MVC",
                        "Coder en orienté objet en PHP",
                        "Récupérer la saisie d'un formulaire utilisateur en PHP",
                        "Organiser le code en PHP (namespace, un fichier par classe...)",
                        "Construire et gérer une base de données MySQL",
                        "Utiliser Git et GitHub pour le versionnement et l'hébergement du code",
                        "Sécuriser l'application (failles XSS et injections SQL)"
                    ],
                    features: [
                        "Interface front office (lecture des chapitres)",
                        "Interface back office (administration, CRUD des chapitres)",
                        "Gestion des commentaires (ajout, signalement, modération côté administration avec remontée des commentaires signalés)",
                        "Accès sécurisé à l'administration",
                        "Rédaction des articles via une interface WYSIWYG (TinyMCE)"
                    ],
                    portfolio: [
                        { 
                            id: '1',
                            image: blog_accueil,
                            legend: "Interface front office"
                        },
                        
                        { 
                            id: '2',
                            image: blog_admin,
                            legend: "Interface back office"
                        },
                        { 
                            id: '3',
                            image: blog_episode,
                            legend: "Lecture d'un épisode"
                        },
                        { 
                            id: '4',
                            image: blog_episode_ajout,
                            legend: "Rédaction des articles via une interface WYSIWYG (TinyMCE)"
                        },
                        { 
                            id: '5',
                            image: blog_commentaire_ajout,
                            legend: "Ajout d'un commentaire"
                        },
                        { 
                            id: '6',
                            image: blog_connexion,
                            legend: "Accès sécurisé à l'administration"
                        },
                        { 
                            id: '7',
                            image: blog_accueil_connecte,
                            legend: "Interface front office si utilisateur connecté"
                        },
                       
                    ]
                },
                {
                    id: 'projet_velos',
                    year: '2019',
                    isMain: true,
                    title: 'Carte interactive de location de vélos',
                   
                    image: velos_projet,
                    technos: [
                        {
                            src: html5Logo,
                            alt: 'logo HTML5'
                        },
                        {
                            src: css3Logo,
                            alt: 'logo CSS3',
                            isBackground: false
                        },
                        {
                            src: jsLogo,
                            alt: 'logo JS',
                            isBackground: false
                        },
                        {
                            src: leafletLogo,
                            alt: 'logo Leaflet',
                            isBackground: false
                        },
                    ],
                    links: {
                        github: "https://github.com/Claire88088/projetcarte",
                        // website: "https://claire88088.github.io/projet_velos",
                    },
                    goal: 'Créer une "Single Page Application" simulant la réservation de vélos dans une ville à partir du mockup de la page',
                    context: 'Projet n°3 de formation de développeur web',
                    skills: [
                        "Créer des objets simples en JavaScript",
                        "Récupérer des données de formulaires en JavaScript",
                        "Faire des requêtes HTTP en JavaScript",
                        "Utiliser l'API de cartographie (OpenStreetMap)",
                        "Utiliser l'API de récupération de données pour les vélos (JC Decaux)",
                        "Utiliser l'API de stockage dans le navigateur (localStorage et sessionStorage)",
                        "Utiliser l'API Canvas (pour signer le formulaire)"
                    ],
                    features: [
                        "Diaporama en JavaScript natif",
                        "Fond de carte généré dynamiquement",
                        "Affichage en temps réel de la liste des stations et de la disponibilité des vélos",
                        "Formulaire de réservation",
                        "Gestion de la réservation uniquement côté navigateur",
                        "Gestion de l'expiration de la réservation"
                    ],
                    portfolio: [
                        { 
                            id: '1',
                            image: velos_diaporama,
                            legend: 'Diaporama en JavaScript'
                        },
                        { 
                            id: '2',
                            image: velos_carte,
                            legend: 'Fond de carte généré dynamiquement'
                        },
                        { 
                            id: '3',
                            image: velos_marqueurs,
                            legend: 'Affichage en temps réel des stations' 
                        },
                        { 
                            id: '4',
                            image: velos_form,
                            legend: 'Formulaire de réservation'  
                        },
                        { 
                            id: '5',
                            image: velos_signature,
                            legend: "Gestion de la signature avec l'API Canvas"  
                        },
                        {
                            id: '6',
                            image: velos_reservation,
                            legend: "Gestion de la réservation"  
                        },
                        {
                            id: '7',
                            image: velos_expiration,
                            legend: "Gestion de l'expiration de la réservation"  
                        },
                    ]
                },
                {
                    id: 'projet_wordpress',
                    year: "2019",
                    isMain: false,
                    title: 'Site WordPress et SEO',
                    technos: [
                        {
                            src: wordpressLogo,
                            alt: 'logo WordPress',
                        },
                        {
                            src: css3Logo,
                            alt: 'logo CSS3',
                            isBackground: false
                        },
                    ],
                    links: {
                    },
                    goal: "Personnaliser un thème WordPress afin de créer un site conforme aux attentes d'un client fictif (office de tourisme) et optimiser le référencement de ce site",
                    context: 'Projet n°2 de formation de développeur web',
                    skills: [
                        "Définir la structure de navigation d’un site",
                        "Assurer la cohérence graphique",
                        "Gérer la responsivité",
                        "Appliquer les principes du SEO (utilisation d’un plugin Yoast SEO, sitemap, Google Search Console, Google Analytics)",
                        "Créer une animation en CSS3",
                        "Créer un thème enfant WordPress",
                    ],
                    features: [
                        "Champ de recherche",
                        "Administration (poster les actualités, les activités)",
                        "Possibilité de s’inscrire en ligne pour les activités",
                        "Formulaire de contact"
                    ],
                },
                {
                    id: 'projet_integration',
                    year: "2019",
                    isMain: false,
                    title: 'Intégration d\'une maquette',
                    image: integration1,
                    technos: [
                        {
                            src: html5Logo,
                            alt: 'logo HTML5'
                        },
                        {
                            src: css3Logo,
                            alt: 'logo CSS3',
                            isBackground: false
                        },
                    ],
                    links: {
                        github: "https://github.com/Claire88088/projet_integration",
                        // website: "https://claire88088.github.io/projet_integration",
                    },
                    goal: 'Créer un site vitrine (1 page avec 4 sections) à partir d\'une maquette au format jpg',
                    description: "L'objectif de ce projet étant la mise en oeuvre des connaissances en HTML et CSS, le site est volontairement non fonctionnel (pas de JavaScript)",
                    context: 'Projet n°1 de formation de développeur web',
                    skills: [
                        "Coder la structure et la présentation d'un site",
                        "Utiliser les formats adaptés au web pour les images",
                        "Ecrire du code conforme aux normes du W3C (HTML et CSS)",
                        "S'assurer de la compatibilité avec les différents navigateurs",
                        "Gérer la responsivité avec les Media Queries"
                    ],
                    portfolio: [
                        { 
                            id: '1',
                            image: integration_accueil,
                            legend: "Hero"
                        },
                        { 
                            id: '2',
                            image: integration_services,
                            legend: "Section services"
                        },
                        { 
                            id: '3',
                            image: integration_projets,
                            legend: "Section projets"
                        },
                        { 
                            id: '4',
                            image: integration_contact,
                            legend: "Section contact"
                        },
                    ]
                },

            ]
        }
    )
})