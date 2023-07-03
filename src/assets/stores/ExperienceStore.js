import { defineStore } from "pinia"
import eindenLogo from '@/assets/images/logos/einden_logo_redim.jpg'
import pictavLogo from '@/assets/images/logos/pictav_logo.png'
import vivaticketLogo from '@/assets/images/logos/vivaticket_logo.svg'

import html5Logo from '@/assets/images/logos/html5_logo.png'
import css3Logo from '@/assets/images/logos/css3_logo.png'
import angularLogo from '@/assets/images/logos/angular_logo.png'
import dotnetLogo from '@/assets/images/logos/net_core_logo.png'
import phpLogo from '@/assets/images/logos/php_logo.png'
import sqlserverLogo from '@/assets/images/logos/sql_server_logo.png'
import jsLogo from '@/assets/images/logos/js_logo.png'


export const useExperienceStore = defineStore("ExperienceStore", {
    state: () => (
        {
            experiences: [
                {
                    id: 'einden',
                    year: '2022-2023 (4 mois)',
                    title: 'Développeuse web junior',
                    subtitle: '',
                    logo: {
                        src: eindenLogo,
                        alt: 'logo Einden',
                        isBackground: false
                    },
                    technos: [
                        {
                            src: html5Logo,
                            alt: 'logo HTML5'
                        },
                        {
                            src: css3Logo,
                            alt: 'logo CSS3'
                        },
                        {
                            src: jsLogo,
                            alt: 'logo JavaScript',
                        },
                        {
                            src: phpLogo,
                            alt: 'logo PHP',
                        },
                    ],
                    content: {
                        title: 'Mission',
                        // context: "Interface Front Office du logiciel de Digital Asset Management édité par Einden et le Front Office sur mesure",
                        missions: [
                            {
                                description: 'Développer des fonctionnalités (HTML/CSS, JS et PHP natifs)',
                            },
                            {
                                description: 'Résoudre des tickets de debug (HTML/CSS, JS et PHP natifs)',
                            },
                            {
                                description: "Configurer le modèle d'interface Front Office pour répondre aux exigences d'une 10aine de clients",
                            },
                            {
                                description: 'Mettre en place le responsive et améliorer le style sur un projet de CMS personnalisé pour un client',
                            },
                        ],
                    }
                },

                {
                    id: 'pictav',
                    year: '2022 (4 mois)',
                    title: 'Stagiaire ASP.NET / Angular',
                    subtitle: 'Développement de la gestion des droits des utilisateurs',
                    logo: {
                        src: pictavLogo,
                        alt: 'logo Pictav\'Informatique',
                        isBackground: true
                    },
                    technos: [
                        {
                            src: angularLogo,
                            alt: 'logo Angular'
                        },
                        {
                            src: dotnetLogo,
                            alt: 'logo .NetCore'
                        },
                        {
                            src: sqlserverLogo,
                            alt: 'logo Microsoft SQLServer',
                            isBackground: true
                        },
                    ],
                    content: {
                        missions: [
                            {
                                description: "Reprendre la connexion / authentification",
                            },
                            {
                                description: "Développer l'interface d\'administration des utilisateurs et des droits",
                            },
                            {
                                description: "Développer la gestion des accès",
                            },
                            {
                                description: "Développer l'affichage en fonction des droits",
                            },
                           
                        ],
                        details: [
                            {
                                detail: "Au niveau de l'application backend (ASP.NET) : création d'API, requêtes Linq",
                            },
                            {
                                detail: "Au niveau de l'application frontend (Angular) : création de composants, consommation des API exposées par l'application backend",
                            },
                        ]
                    }

                },
                {
                    id: 'vivaticket',
                    year: '2018 (1 semaine)',
                    title: 'Stagiaire observation',
                    subtitle: 'Découverte du métier de développeur informatique',
                    logo: {
                        src: vivaticketLogo,
                        alt: 'logo Vivaticket',
                        isBackground: false
                    },
                    content: {
                        title: 'Mission',
                        missions: [
                            {
                                description: "Elaborer un cahier des charges pour un logiciel de conversion d\'informations clients en tâches JIRA",
                            },
                        ],
                    }
                },
                
            ]
        }
    )
})