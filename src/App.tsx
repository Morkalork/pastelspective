import * as React from 'react';
import Top from './components/top';
import Board from './components/board';
import ItemsProvider from './contexts/ItemsContext';

const App = () => {
  return (
    <ItemsProvider>
      <div className="app">
        <Top />
        <Board />
      </div>
    </ItemsProvider>
  );
}

export default App;
