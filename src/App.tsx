import React from 'react';
import { TVMazeResults } from './components/TVMazeResults';
import { TVMazeSearch } from './components/TVMazeSearch';
import { useTVMaze } from './hooks/useTVMaze';
import { TVMazeShowDetails } from './components/TVMazeShowDetails';

export const App = () => {
  const {series, details, search, itemClick, closeModal} = useTVMaze();

  return (
    <div>
      <TVMazeSearch search={search} />
      <TVMazeResults result={series} itemClick={itemClick}/>
      <TVMazeShowDetails show={details} onClose={closeModal}/>
      
    </div>
  );
}

export default App
