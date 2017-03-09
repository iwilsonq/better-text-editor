import React from 'react';
import Editor from './Editor';

const App = () => {
  return (
    <div className="app">
      <h2>Better Text Editr</h2>
      <div className="container">
        <div className="row">
          <div className="col s1"></div>
          <div className="col s10">
            <Editor />
          </div>
          <div className="col s1"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
