/*Nasa web aplikacia bude mat nasledujucu strukturu:
    - stranka s informaciami o autorovi tejto stranky o Vas
    - stranka s knihami (BooksPage)
        - genericka (vyuziva parametre) podstranka pre detaily o konkretnej knihe (BookDetailsPage)
*/
//importy komponentov reprezentujucich jednotlive stranky nasej web aplikacie
import AuthorPage from "./components/pages/AuthorPage.js"
import BooksPage from "./components/pages/BooksPage.js"
import BookDetailsPage from "./components/pages/BookDetailsPage.js"

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
        path: "/author",
        component: AuthorPage
    },
    {
        path: "/books",
        component: BooksPage
    },
    {
        path: "/books/:isbn",
        component: BookDetailsPage
    },
]

//vytvorenie router-a volanim funkcie createRouter
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
//pozor najprv musim nad app zavolat metodu use() az potom mount()!!!
app.use(router)
app.mount("#app")