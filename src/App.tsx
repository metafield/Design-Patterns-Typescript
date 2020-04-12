import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { IndexPage } from './Pages/Index';
import { MementoPage } from './Pages/MementoPage';
import { Nav } from './Components/Nav';
import { Links } from './Content/Links';

function App() {
  return (
    <BrowserRouter>
      <Nav links={Links} />
      <Route path="/" component={IndexPage} exact />
      <Route path="/patterns/memento" component={MementoPage} exact />
    </BrowserRouter>
  );
}

export default App;
