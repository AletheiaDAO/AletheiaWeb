import React from 'react';
import logo from './logo.svg';
import './App.css';

const Layout = React.lazy(() => import('src/components/Layout'))

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<div>Loading...</div>}>
      <Layout />
      </React.Suspense>
    </div>
  );
}

export default App;
