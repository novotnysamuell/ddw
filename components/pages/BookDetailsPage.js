// Aby som mohol vyuzit globany stav listOfBooks musim importovat funkciu useListOfBooks!!!
import useListOfBooks from "../../composables/useListOfBooks.js";

const { useRoute }= VueRouter;

// Komponent sluziaci ako genericka podstranka (vyuziva parametre) pre detaily o konkretnej knihe
const BookDetailsPage = {
    template: `
    <div>
        <h1>{{book.title}}</h1>
        <p>There are some basic information about this book.</p>
        <table>
            <tr>
                <th>Author</th>
                <td>{{book.author}}</td>
            </tr>
            <tr>
                <th>ISBN</th>
                <td>{{book.isbn}}</td>
            </tr>
        </table>
        <pre>{{$route}}</pre>
    </div>
    `,
    setup(){
        // Volanie funkcie use_, z ktoreho navratovej hodnoty vyberame dekonstrukciou len samotny globany stav (listOfBooks)
        const {listOfBooks} = useListOfBooks()

        // V ramci html mozem pristupit k globalnej premennej $route, ktora nesie informacie o aktualnej route na ktorej sa nachadzame. V ramci js-ka (teda setup metody) však takuto moznost nemam.
        // Aby sme vsak mohli pristupit k informaciam o aktualnej route na ktorej sa nachadzame aj v ramci js-ka (teda setup metody) mozem pouzit globalny stav route, ktory ziskame rovnako ako ktorykolvek iny stav, teda volanim funkcie use_. V tomto pripade, volanim funkcie useRoute - preto sme potrebovali tuto funkciu vytiahnut z VueRouter kniznice - pozri riadok 4.
        const route = useRoute()

        // Nasledne z globalneho stavu, v ktorom su uchovane vsetky informacie o vsetkych knihach, na zaklade aktualnej hodnoty parametra stranky isbn vytiahnem do premennej book informacie o konkretnej knihe.
        const book = listOfBooks.find(book=>book.isbn==route.params.isbn)

        return {
            book
        }
    }
}

//POZOR: na hodine som ukazoval iny, "nepekny" pristup kedy som to iste filtrovanie robil viackrat priamo v template!
//POZNAMKA: Okrem globalneho stavu route existuje samozrejme aj globalny stav router podobne ako existuju $route aj $router globalne vlastnosti pristupne v ramci html.

export default BookDetailsPage;