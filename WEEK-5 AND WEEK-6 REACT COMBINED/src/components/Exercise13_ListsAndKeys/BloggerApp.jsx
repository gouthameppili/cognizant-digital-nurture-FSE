import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import { books, courses, blogs } from './data';

export default function BloggerApp() {
  const [showAll, setShowAll] = useState(true);

  const columnStyle = {
    flex: 1,
    padding: '0 20px',
    textAlign: 'center'
  };

  const dividerStyle = {
    borderRight: '4px solid green',
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      {/* Toggle button to showcase preventing rendering */}
      <button 
        onClick={() => setShowAll(!showAll)} 
        style={{ marginBottom: '20px', padding: '6px 12px', cursor: 'pointer' }}
      >
        {showAll ? 'Hide Content' : 'Show Content'}
      </button>

      {/* Prevent components from rendering by returning null / short-circuiting */}
      {showAll && (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          
          {/* Column 1: Course Details */}
          <div style={{ ...columnStyle, ...dividerStyle }}>
            <h1 style={{ marginBottom: '30px' }}>Course Details</h1>
            <CourseDetails courses={courses} />
          </div>

          {/* Column 2: Book Details */}
          <div style={{ ...columnStyle, ...dividerStyle }}>
            <h1 style={{ marginBottom: '30px' }}>Book Details</h1>
            <BookDetails books={books} />
          </div>

          {/* Column 3: Blog Details */}
          <div style={columnStyle}>
            <h1 style={{ marginBottom: '30px' }}>Blog Details</h1>
            <BlogDetails blogs={blogs} />
          </div>

        </div>
      )}
    </div>
  );
}