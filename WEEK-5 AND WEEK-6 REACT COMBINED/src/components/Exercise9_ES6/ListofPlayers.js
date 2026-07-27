import React from 'react';

// Component to list all players
export function ListofPlayers({ players }) {
  return (
    <div>
      {players.map((item, index) => (
        <div key={index}>
          <li>
            Mr. {item.name} <span>{item.score}</span>
          </li>
        </div>
      ))}
    </div>
  );
}

// Component to list players with score <= 70
export function Scorebelow70({ players }) {
  const players70 = [];
  
  // Filtering using arrow function as per lab snippet
  players.map((item) => {
    if (item.score <= 70) {
      players70.push(item);
    }
    return item;
  });

  return (
    <div>
      {players70.map((item, index) => (
        <div key={index}>
          <li>
            Mr. {item.name} <span>{item.score}</span>
          </li>
        </div>
      ))}
    </div>
  );
}