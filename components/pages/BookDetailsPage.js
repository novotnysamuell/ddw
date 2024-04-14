import useListOfBooks from "../../composables/useListOfBooks.js";
const { useRoute }= VueRouter;

const BookDetailsPage = {
    template: `
    <div>
        <h1>{{book.title}}</h1>
        <h2>{{book.author}}</h2>
        <pre>{{$route}}</pre>
    </div>
    `,
    setup(){
        const {listOfBooks} = useListOfBooks()
        const route = useRoute()
        
        const book = listOfBooks.find(book=>book.title==route.params.title)

        return {
            listOfBooks,
            book
        }
    }
}

export default BookDetailsPage;