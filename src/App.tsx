import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './Styles/GlobalStyle.css';
import { IndexPage } from './Pages/Index';
import { MementoPage } from './Pages/MementoPage';
import { Nav } from './Components/Nav';
import { behavioralLinks, structuralLinks } from './Content/Links';
import { StatePage } from './Pages/StatePage';
import { IteratorPage } from './Pages/IteratorPage';
import { StrategyPage } from './Pages/StrategyPage';
import { TemplateMethodPage } from './Pages/TemplateMethodPage';
import { CommandPage } from './Pages/CommandPage';
import { ObserverPage } from './Pages/ObserverPage';
import { MediatorPage } from './Pages/MediatorPage';
import { ChainPage } from './Pages/ChainPage';
import { VisitorPage } from './Pages/VisitorPage';
import { CompositePage } from './Pages/CompositePage';
import { AdaptorPage } from './Pages/AdaptorPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav links={behavioralLinks} />
        <Nav links={structuralLinks} />
      </div>
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
      <Route path="/patterns/visitor" component={VisitorPage} exact />
      <Route path="/patterns/composite" component={CompositePage} exact />
      <Route path="/patterns/adaptor" component={AdaptorPage} exact />
    </BrowserRouter>
  );
}

export default App;
