import { defineStore } from "pinia"
import html5Logo from '@/assets/images/logos/html5_logo.png'
import css3Logo from '@/assets/images/logos/css3_logo.png'
import angularLogo from '@/assets/images/logos/angular_logo.png'
import dotnetLogo from '@/assets/images/logos/net_core_logo.png'
import phpLogo from '@/assets/images/logos/php_logo.png'
import symfonyLogo from '@/assets/images/logos/symfony_logo.png'
import jsLogo from '@/assets/images/logos/js_logo.png'
import jqueryLogo from '@/assets/images/logos/jquery_logo.svg'
import bootstrapLogo from '@/assets/images/logos/bootstrap_logo.svg'
import javaLogo from '@/assets/images/logos/java_logo.png'
import vueLogo from '@/assets/images/logos/vueJS_logo.png'


export const useTechnosStore = defineStore("TechnosStore", {
    state: () => (
        {
            technos: [
                {
                    src: html5Logo,
                    alt: 'logo HTML5',
                    isBackground: false
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
                    src: angularLogo,
                    alt: 'logo Angular',
                    isBackground: false
                },
               
                
                
               
                {
                    src: vueLogo,
                    alt: 'logo VueJS',
                    isBackground: false
                },
               
                {
                    src: phpLogo,
                    alt: 'logo PHP',
                    isBackground: false
                },
                {
                    src: symfonyLogo,
                    alt: 'logo Symfony',
                    isBackground: false
                },
                {
                    src: javaLogo,
                    alt: 'logo Java',
                    isBackground: false
                },
                {
                    src: dotnetLogo,
                    alt: 'logo .Net Core',
                    isBackground: false
                },
            ]
        }
    )
})