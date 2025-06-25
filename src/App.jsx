import Books from "./components/Books"
import BookByTitle from "./components/BookByTitle"
import BookByAuthor from "./components/BookByAuthor"
import AddBookForm from "./components/AddBookForm"

export default function App(){
    return <main>
        <AddBookForm />
        <Books />
        <BookByTitle title="Shoe Dog" />
        <BookByAuthor author="Harper Lee" />
    </main>
}
