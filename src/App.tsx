import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { IndexPage } from './Pages/Index';
import { MementoPage } from './Pages/MementoPage';
import { Nav } from './Components/Nav';
import { Links } from './Content/Links';
import { GlobalStyle } from './Styles/GlobalStyle';
import { StatePage } from './Pages/StatePage';
import { IteratorPage } from './Pages/IteratorPage';
import { StrategyPage } from './Pages/StrategyPage';
import { TemplateMethodPage } from './Pages/TemplateMethodPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav links={Links} />
      <Route path="/" component={IndexPage} exact />
      <Route path="/patterns/memento" component={MementoPage} exact />
      <Route path="/patterns/state" component={StatePage} exact />
      <Route path="/patterns/iterator" component={IteratorPage} exact />
      <Route path="/patterns/strategy" component={StrategyPage} exact />
      <Route path="/patterns/template" component={TemplateMethodPage} exact />
    </BrowserRouter>
  );
}

export default App;
