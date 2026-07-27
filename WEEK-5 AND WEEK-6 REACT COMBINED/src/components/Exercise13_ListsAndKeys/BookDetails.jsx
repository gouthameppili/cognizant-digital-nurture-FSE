import React from 'react';

export default function BookDetails({ books }) {
  // Conditional rendering check 1: If list is empty or undefined
  if (!books || books.length === 0) {
    return <p>No books available.</p>;
  }

  // Storing mapped JSX elements in an Element Variable as per lab hints
  const bookdet = (
    <div style={{ listStyle: 'none', padding: 0 }}>
      {books.map((book) => (
        <div key={book.id} style={{ marginBottom: '15px' }}>
          <h3 style={{ margin: '5px 0' }}>{book.bname}</h3>
          <h4 style={{ margin: '0', fontWeight: 'normal' }}>{book.price}</h4>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {bookdet}
    </div>
  );
}