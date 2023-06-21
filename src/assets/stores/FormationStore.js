import { defineStore } from "pinia"

import univpoitiersLogo from '@/assets/images/logos/univ_poitiers_logo.png'
import openclassroomLogo from '@/assets/images/logos/open_classrooms_logo.png'
import ensipLogo from '@/assets/images/logos/ensip_logo.png'


export const useFormationStore = defineStore("FormationStore", {
    state: () => (
        {
            formations: [
                {
                    id: 'licence-pro',
                    year: '2022',
                    title: 'Licence professionnelle',
                    subtitle: 'Technologies Logicielles pour le Web et les Terminaux Mobiles',
                    logo: {
                        src: univpoitiersLogo,
                        alt: 'logo université de Poitiers',
                        isBackground: true
                    },
                    content: {
                        title: 'Contenu de la formation',
                        listId: 'licence-pro_list',
                        items: [
                            {
                                title: 'Algorithmique',
                            },
                            {
                                title: 'Programmation Orientée Objet',
                            },
                            {
                                title: 'Java',
                                description: 'Swing, JavaFx',
                            },                            
                            {
                                title: 'Bases de données',
                                description: 'Concevoir'
                            },
                            {
                                title: 'Oracle',
                            },
                            {
                                title: 'SQL',
                            },
                            {
                                title: 'PL/SQL',
                                description: 'trigger, procédures'
                            },
                            {
                                title: 'Méthodologies Agile',
                            },
                            {
                                title: 'Web',
                                description: 'HTML 5, CSS 3, jQuery, Ajax'
                            },
                            {
                                title: 'Symfony 5',                            
                            },
                            {
                                title: 'Mobile',
                                description: 'Swift, Xamarin'
                            },
                            {
                                title: 'Droit, Anglais',
                                description: ''
                            },
                        ],
                    }

                },
                {
                    id: 'titre-pro',
                    year: '2020',
                    title: 'Titre professionnel',
                    subtitle: 'Développeur web',
                    logo: {
                        src: openclassroomLogo,
                        alt: 'logo Open Classroom',
                        isBackground: false
                    },
                    content: {
                        title: 'Compétences',
                        items: [
                            {
                                title: 'HTML 5',
                            },
                            {
                                title: 'CSS 3',
                            },
                            {
                                title: 'Images, sons, vidéos',
                            },
                            {
                                title: 'Accessibilité',
                            },
                            {
                                title: 'SEO',
                            },
                            {
                                title: 'Compatibilité',
                                description: 'avec les différents navigateurs',
                            },
                            {
                                title: 'JavaScript',
                            },
                            {
                                title: 'PHP',
                            },
                            {
                                title: 'Bases de données',
                                description: 'Organiser et gérer'
                            },
                        ],
                    }
                },
                {
                    id: 'ingenieur',
                    year: '2004',
                    title: 'Diplôme d\'Ingénieur',
                    subtitle: 'Traitement de Eaux et des Nuisances',
                    logo: {
                        src: ensipLogo,
                        alt: 'logo ESIP',
                        isBackground: false
                    },
                    content: {
                        title: 'Contenu de la formation',
                        listId: 'licence-pro_list',
                        items: [
             
                        ],
                    }

                },
            ]
        }
    )
})