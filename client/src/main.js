import { createApp } from 'vue'

import 'jquery/src/jquery.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGavel } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faGavel)

// import "@fontsource/montserrat/100.css"
// import "@fontsource/montserrat/200.css"
// import "@fontsource/montserrat/300.css"
// import "@fontsource/montserrat/400.css"
// import "@fontsource/montserrat/500.css"
// import "@fontsource/montserrat/600.css"
// import "@fontsource/montserrat/700.css"
// import "@fontsource/montserrat/800.css"
// import "@fontsource/montserrat/900.css"
//import "@fontsource/aclonica"

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
