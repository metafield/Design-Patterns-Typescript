import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './Styles/GlobalStyle.css';
import { IndexPage } from './Pages/Index';
import { MementoPage } from './Pages/MementoPage';
import { Nav } from './Components/Nav';
import { Links } from './Content/Links';
import { StatePage } from './Pages/StatePage';
import { IteratorPage } from './Pages/IteratorPage';
import { StrategyPage } from './Pages/StrategyPage';
import { TemplateMethodPage } from './Pages/TemplateMethodPage';
import { CommandPage } from './Pages/CommandPage';
import { ObserverPage } from './Pages/ObserverPage';
import { MediatorPage } from './Pages/MediatorPage';
import { ChainPage } from './Pages/ChainPage';

function App() {
  return (
    <BrowserRouter>
      <Nav links={Links} />
      <Route path="/" component={IndexPage} exact />
      <Route path="/patterns/memento" component={MementoPage} exact />
      <Route path="/patterns/state" component={StatePage} exact />
      <Route path="/patterns/iterator" component={IteratorPage} exact />
      <Route path="/patterns/strategy" component={StrategyPage} exact />
      <Route path="/patterns/template" component={TemplateMethodPage} exact />
      <Route path="/patterns/command" component={CommandPage} exact />
      <Route path="/patterns/observer" component={ObserverPage} exact />
      <Route path="/patterns/mediator" component={MediatorPage} exact />
      <Route
        path="/patterns/chain_of_responsibility"
        component={ChainPage}
        exact
      />
    </BrowserRouter>
  );
}

export default App;
