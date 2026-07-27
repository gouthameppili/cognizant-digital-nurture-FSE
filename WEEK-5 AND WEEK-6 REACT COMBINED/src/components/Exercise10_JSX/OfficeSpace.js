import React from 'react';
import './OfficeSpace.css';

export default function OfficeSpace() {
  const element = "Office Space";
  
  // Placeholder office image URL matching the lab requirement
  const sr = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80";
  
  // Attribute rendering image tag as JSX
  const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;

  // Single office object as defined in the hint
  const ItemName = { Name: "DBS", Rent: 50000, Address: 'Chennai' };

  // Conditional class selection based on Rent threshold (<= 60000)
  let colors = [];
  if (ItemName.Rent <= 60000) {
    colors.push('textRed');
  } else {
    colors.push('textGreen');
  }

  // Array of office spaces for looping/mapping
  const officeSpaces = [
    { Name: "DBS", Rent: 50000, Address: 'Chennai' },
    { Name: "Regus", Rent: 75000, Address: 'Bangalore' },
    { Name: "WeWork", Rent: 58000, Address: 'Hyderabad' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>{element} , at Affordable Range</h1>
      {jsxatt}
      
      <h1>Name: {ItemName.Name}</h1>
      <h3 className={colors[0]}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>

      <hr style={{ margin: '30px 0' }} />

      <h2>More Office Spaces:</h2>
      {officeSpaces.map((office, index) => {
        const rentClass = office.Rent <= 60000 ? 'textRed' : 'textGreen';
        return (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h2>Name: {office.Name}</h2>
            <h3 className={rentClass}>Rent: Rs. {office.Rent}</h3>
            <h3>Address: {office.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}