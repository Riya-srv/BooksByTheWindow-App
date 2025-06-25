import { useState } from "react";
import useFetch from "../useFetch"

const Books = () => {
    const [successMessage, setSuccessMessage] = useState();
    const  { data, loading, error } = useFetch("https://be-4-assignment1-taupe.vercel.app/books")
        
        const handleDelete = async (bookId) => {
        try{
            const response = await fetch(`https://be-4-assignment1-taupe.vercel.app/books/${bookId}`,
                { method: "DELETE" }
            )

            if(!response.ok){
                throw "Failed to delete book record."
            }
            const data = await response.json()
            if(data){
                setSuccessMessage("Book deleted successfully")
                window.location.reload()
            }
        }
        catch(error){
            console.log(error)
        }
    } 

    return (
        
        <div>
            <h1>All Books</h1>
            <ul>
                {data?.map((book) => (
                    <li key={book._id}>{book.title}<button onClick={() => handleDelete(book._id)}>Delete</button></li>
                ))}
            </ul>
            <p>{successMessage}</p>
        </div>
    )
}

export default Books