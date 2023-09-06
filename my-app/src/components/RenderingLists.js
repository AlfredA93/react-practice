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
      return <h2> {book} </h2>})}
      <hr/>
      {
        books.map(book => {
          return (
          <div>
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
          return <Book book={book} />
        })
      }
    </div>
  )
}

export default RenderingLists