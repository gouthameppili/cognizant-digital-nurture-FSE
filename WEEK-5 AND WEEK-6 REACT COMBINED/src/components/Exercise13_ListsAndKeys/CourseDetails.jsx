import React from 'react';

export default function CourseDetails({ courses }) {
  // Conditional rendering using Ternary Operator
  return (
    <div>
      {courses && courses.length > 0 ? (
        courses.map((course) => (
          <div key={course.id} style={{ marginBottom: '20px' }}>
            <h2 style={{ margin: '5px 0', fontSize: '24px' }}>{course.cname}</h2>
            <p style={{ margin: '2px 0', color: '#333' }}>{course.date}</p>
          </div>
        ))
      ) : (
        <p>No courses found.</p>
      )}
    </div>
  );
}