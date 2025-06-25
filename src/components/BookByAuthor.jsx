import useFetch from "../useFetch"

const BookByAuthor =  ({ author })=>{
    const { data, loading, error } = useFetch(`https://be-4-assignment1-taupe.vercel.app/books/author/${author}`
        ,)
    return data ? (
        <div>
            <h1>Books by {author}</h1>
            <ul>
                {data?.map((book) => (
                    <li key={book._id}>{book.title}</li>
                ))}
            </ul>
        </div>
    ) : (
        loading && <p>Loading...</p>
    )

}

export default BookByAuthor;