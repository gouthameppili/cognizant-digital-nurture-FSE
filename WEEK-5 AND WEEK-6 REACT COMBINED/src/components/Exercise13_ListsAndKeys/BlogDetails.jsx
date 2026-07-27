import React from 'react';

export default function BlogDetails({ blogs }) {
  return (
    <div>
      {/* Conditional rendering using Logical && Operator */}
      {blogs && blogs.length > 0 && (
        <div>
          {blogs.map((blog) => (
            <div key={blog.id} style={{ marginBottom: '20px' }}>
              <h2 style={{ margin: '5px 0', fontSize: '22px' }}>{blog.title}</h2>
              <p style={{ margin: '2px 0', fontWeight: 'bold' }}>{blog.author}</p>
              <p style={{ margin: '5px 0', color: '#555' }}>{blog.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}