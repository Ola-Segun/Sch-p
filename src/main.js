import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'primeicons/primeicons.css'


import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';
import { Button, Card, Checkbox, InputGroup, SelectButton } from 'primevue'
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';


const app = createApp(App)

app.use(router)
app.use(ConfirmationService);
app.use(ToastService);

const myPresets = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{violet.50}',
            100: '{violet.100}',
            200: '{violet.200}',
            300: '{violet.300}',
            400: '{violet.400}',
            500: '{violet.500}',
            600: '{violet.600}',
            700: '{violet.700}',
            800: '{violet.800}',
            900: '{violet.900}',
            950: '{violet.950}'
        },
        colorScheme: {
            light: {
                primary: {
                    color: '{violet.700}',
                    inverseColor: '#ffffff',
                    hoverColor: '{violet.700}',
                    activeColor: '{violet.800}',
                    iconCheckedColor: '{violet.300}',
                },
                highlight: {
                    background: '{violet.900}',
                    focusBackground: '{violet.700}',
                    color: '#ffffff',
                    focusColor: '#ffffff',
                    iconCheckedColor: '{violet.300}',
                }
            },
            dark: {
                primary: {
                    color: '{violet.50}',
                    inverseColor: '{violet.950}',
                    hoverColor: '{violet.100}',
                    activeColor: '{violet.200}'
                },
                highlight: {
                    background: 'rgba(250, 250, 250, .16)',
                    focusBackground: 'rgba(250, 250, 250, .24)',
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)'
                }
            }
        }
    },
    components: {
        card:{
            borderRadius: '1.5rem 1.5rem 0rem 0rem',
        },
        checkbox:{
            borderColor: '#777'
        },
        button:{
            background: '{violet.200}',
            borderRadius: '10px',
        },
        panel:{
            borderColor: '#999'
            
        },
        menubar:{
            // background: '#e9e9e9',
            // background: '#FaFaFa',
            background: '#FFF',
            borderColor: '#fff',

            itemBackground: '#FaFaFa',

            itemFocusBackground: '{primary.500}',
            itemActiveBackground: '{primary.500}',

            itemIconColor: '#afafaf',
            itemIconFocusColor: '#fff',
            itemIconActiveColor: '#fff',

            itemColor: '#afafaf',
            itemFocusColor: '#fff',
            itemActiveColor: '#fff',

            itemPadding: '30px',
            itemGap: '10px',

            baseItemPadding: '15px',

            baseItemBorderRadius: '10px',
            
        }, 
         
    }
});

app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        preset: myPresets,
        options: {
            prefix: 'p',
            darkModeSelector: '.my-dark-mode',
        }
    }
 });

app.mount('#app');