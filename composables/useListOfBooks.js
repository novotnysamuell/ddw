//Globalny stav definujeme v samostatnom js subore.
//Vsetky js scripty definujuce nejaky globalny stav uchovavame v adresari composable.
//Postup pri definovani globalneho stavu:

//1. Kedze chceme definovat stav potrebujeme z kniznice Vue pouzit jednu z funkcii pomocou ktorej vytvarame stav, v tomto pripade reactive
const {reactive} = Vue;

//2. Nasledne definujem stav 
const listOfBooks = reactive([])

//3. Vytvorime funkciu s nasledujucim nazvom:
//  - "use" a za tym nazov nasho stavu (camel notation)
function useListOfBooks (){

    //3.1. V tejto funkcii definujem funkcie (moze ich byt viac) ktorymi modifikujeme hodnotu tohto stavu. 

    //V tomto pripade  som definoval funkciu, ktora pridava novu knihu, ktoru prijma ako argument, do pola knih teda do nasho stavu listOfBooks
    const addBook = (newBook)=>{
        listOfBooks.push(newBook)
    }
    //Dalsou takouto funkciou modifikujucou hodnotu stavu, by mohla byt funkcia, ktora ako argument prijma isbn a na zaklade neho vyhodi z pola knih, knihu s danym isbn

    //3.2. Navratova hodnota funkcie je potom tvorena zo samotneho stavu a vsetkych modifikacnych funkcii tohto stavu
    return {
        listOfBooks,
        addBook
        //...
    }
}

//4. Úplne nakoniec musim exportovat funkciu z predosleho kroku, aby som docielil globalnost stavu definovaneho v ramci tohto js scriptu.
//POZOR: nestaci exportovat samotny stav!!!
export default useListOfBooks;

//5. Nasledne vsade tam, kde chcem tento globany stav vyuzit importujem tuto funkciu use_ a zavolam ju.



