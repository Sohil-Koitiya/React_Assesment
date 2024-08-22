import React from 'react';
import Accordion from './Accordion';

const items = [
  { title: 'What is your return policy?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { title: 'Hoe do i track my order?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { title: 'Can I purchase item again?', content: 'Content for section 3' },
];

function App() {
  return (
    <div className="App">
      <h1>Accordion Example</h1>
      <Accordion items={items} />
    </div>
  );
}

export default App;
