import React from 'react';

// Array destructuring to get 1st, 3rd, and 5th items
export function OddPlayers([first, , third, , fifth]) {
  return (
    <div>
      <li>First : {first}</li>
      <li>Third : {third}</li>
      <li>Fifth : {fifth}</li>
    </div>
  );
}

// Array destructuring to get 2nd, 4th, and 6th items
export function EvenPlayers([, second, , fourth, , sixth]) {
  return (
    <div>
      <li>Second : {second}</li>
      <li>Fourth : {fourth}</li>
      <li>Sixth : {sixth}</li>
    </div>
  );
}

// Arrays for merging demo
const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];

// Merging arrays using ES6 Spread Operator (...)
export const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

// Component to render merged players
export function ListofIndianPlayers({ IndianPlayers }) {
  return (
    <div>
      {IndianPlayers.map((player, index) => (
        <li key={index}>Mr. {player}</li>
      ))}
    </div>
  );
}