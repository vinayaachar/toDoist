
import React from 'react';
import {Header} from './components/layout/header';
import {Content} from './components/layout/content';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Content />
      </header>
    </div>
  );
}

