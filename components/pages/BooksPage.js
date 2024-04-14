import useListOfBooks from "../../composables/useListOfBooks.js";

const {reactive, ref} = Vue;


const BooksPage = {
    template: `
    <div>
        <h1>Books</h1>
        <div>
            <input  v-model="newBook.title"
                    type="text"
                    placeholder="Enter book's title"/>
            <input  v-model="newBook.author"
                    type="text"
                    placeholder="Enter book's author"/>
            <button @click="addNewBook">Add</button>
        </div>
        <router-link :key="idx" v-for="(book,idx) of listOfBooks" :to="'/books/'+book.title">{{book.title}}</router-link>
        <pre>path: {{$route.fullPath}}</pre>
    </div>
    `,
    setup(){
        const {listOfBooks, addBook} = useListOfBooks()
        const newBook = reactive({title: "", author: ""})

        const addNewBook=()=>{
            addBook({title: newBook.title, author: newBook.author})
            newBook.title = ""
            newBook.author = ""
        }
        return{
            newBook,
            addNewBook,
            listOfBooks
        }
    }
}

export default BooksPage;