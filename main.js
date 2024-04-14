/*Nasa web aplikacia bude mat nasledujucu strukturu:
    - hlavna stanka (HomePage)
    - informacna stanka (AboutPage)
    - stanka s tiedamy (ClassesPage)
        - genericka (vyuziva parametre) podstranka pre jednu triedu (MyClassPage)
*/
//importy komponentov reprezentujucich jednotlive stranky nasej web aplikacie
import HomePage from  "./components/pages/HomePage.js"
import AboutPage from "./components/pages/AboutPage.js"
import AuthorPage from "./components/pages/AuthorPage.js"
import BooksPage from "./components/pages/BooksPage.js"
import BookDetailsPage from "./components/pages/BookDetailsPage.js"
import ClassesPage from "./components/pages/ClassesPage.js"
import MyClassPage from "./components/pages/MyClassPage.js"

const {createApp} = Vue;
const {createRouter, createWebHistory} = VueRouter; //funkcie ktoré potrebujeme vyuzivat z kniznice (scriptu) vue-router ktory sme pridali do index.html

//vytvorenie aplikacie
const app = createApp({
    setup(){
        return{}
    }
})

//vytvorenie routes (tras) nasej web aplikacie
//kazda route (trasa) je reprezentovana:
//  - cestou (path), ktoru nasledne vidime aj v URL browsera
//  - komponentom ktory predstavuje stranku danej route-y 
const routes = [
    {   
        path: "/", 
        component: HomePage
    },
    {
        path: "/about", 
        component: AboutPage
    },
    {
        path: "/classes", 
        component: ClassesPage
    },
    {
        path: "/author",
        component: AuthorPage
    },
    {
        path: "/books",
        component: BooksPage
    },
    {
        path: "/books/:title",
        component: BookDetailsPage
    },
    {
        path: "/classes/:id", //takto specifikujeme parameter stranky s nazvom id v rámci jej zodpovedajucej cesty (/:nazov_parametra)
        component: MyClassPage
    },
]

//vytvorenie router-a volaním funkcie createRouter
//ako argument odovzdávame objekt s vlastnosťami:
//  - history, kde potrebujeme specifikovat mod historie:
//      -> teraz ho specifikujeme ako HTML5 Mode, a to volanim funkcie createWebHistory z kniznice VueRouter
//      -> na hodine sme ho specifikovali ako Memory mode, volanim funkcie createMemoryHistory taktiez z kniznice VueRouter
//      -> viac o jednotlivych modoch historie na: https://router.vuejs.org/guide/essentials/history-mode.html
//  - routes, kde odovzdame naše trasy
const router = createRouter({
    history: createWebHistory(),
    routes
})

//po vytvoreni smerovaca ho musime zaregistrovat ako plugin volaním metody use() nad našou aplikaciou
//pozor najprv musím nad app zavolat metódu use() az potom mount()!!!
app.use(router)
app.mount("#app")