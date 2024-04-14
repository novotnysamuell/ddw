// aby som mohol vyuzit globany stav listOfBooks musim importovat funkciu useListOfBooks!!!
import useListOfBooks from "../../composables/useListOfBooks.js";

const {reactive, ref} = Vue;

// komponent sluziaci ako stranka Books
const BooksPage = {
    template: `
    <div>
        <h1>Books</h1>
        <!-- formular pre zadavanie novych knih-->
        <div>
            <!-- input pre nazov knihy-->
            <input  v-model="newBook.title"
                    type="text"
                    placeholder="Enter book's title"/>
            <!-- input pre meno autora knihy-->
            <input  v-model="newBook.author"
                    type="text"
                    placeholder="Enter book's author"/>
            <!-- input pre ISBN knihy, ktore nam bude sluzit ako jedinecny identifikator knihy-->
            <input  v-model="newBook.isbn"
                    type="text"
                    placeholder="Enter book's isbn"/>
            <!-- button, ktory sluzi na pridanie knihy do globalneho stavu listOfBooks-->
            <button @click="addNewBook">Add</button>
        </div>
        <!-- link na genericku stranku prezentujucu vsetky detaily o knihe (BookDetailsPage)-->
        <router-link :key="idx" v-for="(book,idx) of listOfBooks" :to="'/books/'+book.isbn">{{book.title}}</router-link>
        <pre>path: {{$route.fullPath}}</pre>
    </div>
    `,
    // kedze tento komponent ma uz aj nejaku vlastnu funkcionalitu pribudla nam metoda setup
    setup(){
        // volanie funkcie use_, ktore nam vracia samotny globany stav (listOfBooks) a vsetky jeho modifikacne funkcie (addBook)
        const {listOfBooks, addBook} = useListOfBooks()

        // stav na uchovavanie aktualnych hodnot inputov
        const newBook = reactive({title: "", author: "", isbn: ""})

        // handler funkcia ktora sa vykona po stlaceni tlacidla Add
        const addNewBook=()=>{
            // volanie modifikacnej funkcie globalneho stavu
            addBook({title: newBook.title, author: newBook.author, isbn: newBook.isbn})
            // nasledne precistenie inputov
            newBook.title = ""
            newBook.author = ""
            newBook.isbn = ""
        }

        //exponovanie hodnot vyuzivanych v template-e
        return{
            newBook,
            addNewBook,
            listOfBooks
        }
    }
}

export default BooksPage;