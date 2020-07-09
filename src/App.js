import React, { Component, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import AppContent from './views/index '


// const TodoView = React.Lazy(() =>
//   import(/* webpackChunkName: "views" */ './views/index ')
// );

class App extends Component {
  render() {
    return (
      <div className="App h-100">
        <AppContent />
      </div>

      // <Suspense fallback={<div>Loading ...</div>}>
      //   <TodoView />
      // </Suspense>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
