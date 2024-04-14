const {reactive} = Vue;

const listOfBooks = reactive([])

function useListOfBooks (){

    const addBook = (newBook)=>{
        listOfBooks.push(newBook)
    }

    return {
        listOfBooks,
        addBook
    }
}

export default useListOfBooks;



