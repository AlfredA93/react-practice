import React from 'react'
import Book from './Book'

function RenderingLists() {
  const booklist = [
    'to kill a mocking bird',
    'harry potter',
    'the great gatsby'
  ]

  const books = [
    {
      title: 'qwrty',
      author: 'computer',
      pages: '123'
    },
    {
      title: 'abcdef',
      author: 'calculator',
      pages: '963'
    },
    {
      title: 'smile',
      author: 'face',
      pages: '456'
    },
  ]
  return (
    <div>
      {booklist.map(book => {
      return <h2 key={book}> {book} </h2>})}
      <hr/>
      {
        books.map(book => {
          return (
          <div key={book.title}>
            <h5>{book.title}</h5>
            <p>{book.author}</p>
            <p>{book.pages}</p>
          </div>
          )
        }
        )
      }
      <hr />
      {
        books.map(book => {
          return <Book key={book.title} book={book} />
        })
      }
    </div>
  )
}

export default RenderingLists