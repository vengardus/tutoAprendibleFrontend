import Link from "next/link"

export async function getStaticProps() {
  try {

    const res = await fetch('https://erdemo01.herokuapp.com/api/getinvcab/')
    const data = await res.json()
    console.log(data)
  }
  catch (err) {

    console.log('ERROR', err)
  }


  return {
    props: {
      books: []
    }
  }
}

export default function libros({ books }) {
  return (
    <div>
      <h1>BookList</h1>

      <pre>{JSON.stringify(books)}</pre>

      <ul>
        <li>Book 1</li>
      </ul>

      <Link href="/books/create">Create Book</Link>

    </div>
  )
}

