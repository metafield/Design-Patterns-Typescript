import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./Styles/GlobalStyle.css";
import { IndexPage } from "./Pages/Index";
import { MementoPage } from "./Pages/MementoPage";
import { Nav } from "./Components/Nav";
import { behavioralLinks, structuralLinks } from "./Content/Links";
import { StatePage } from "./Pages/StatePage";
import { IteratorPage } from "./Pages/IteratorPage";
import { StrategyPage } from "./Pages/StrategyPage";
import { TemplateMethodPage } from "./Pages/TemplateMethodPage";
import { CommandPage } from "./Pages/CommandPage";
import { ObserverPage } from "./Pages/ObserverPage";
import { MediatorPage } from "./Pages/MediatorPage";
import { ChainPage } from "./Pages/ChainPage";
import { VisitorPage } from "./Pages/VisitorPage";
import { CompositePage } from "./Pages/CompositePage";
import { AdaptorPage } from "./Pages/AdaptorPage";
import { DecoratorPage } from "./Pages/DecoratorPage";
import { FacadePage } from "./Pages/FacadePage";
import { FlyweightPage } from "./Pages/FlyweightPage";
import { BridgePage } from "./Pages/BridgePage";
import { ProxyPage } from "./Pages/ProxyPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav links={behavioralLinks} />
        <Nav links={structuralLinks} />
      </div>
      <Route path="/" component={IndexPage} exact />
      <Route path="/patterns/memento" component={MementoPage} />
      <Route path="/patterns/state" component={StatePage} />
      <Route path="/patterns/iterator" component={IteratorPage} />
      <Route path="/patterns/strategy" component={StrategyPage} />
      <Route path="/patterns/template" component={TemplateMethodPage} />
      <Route path="/patterns/command" component={CommandPage} />
      <Route path="/patterns/observer" component={ObserverPage} />
      <Route path="/patterns/mediator" component={MediatorPage} />
      <Route
        path="/patterns/chain_of_responsibility"
        component={ChainPage}
      />
      <Route path="/patterns/visitor" component={VisitorPage} />
      <Route path="/patterns/composite" component={CompositePage} />
      <Route path="/patterns/adaptor" component={AdaptorPage} />
      <Route path="/patterns/decorator" component={DecoratorPage} />
      <Route path="/patterns/facade" component={FacadePage} />
      <Route path="/patterns/flyweight" component={FlyweightPage} />
      <Route path="/patterns/bridge" component={BridgePage} />
      <Route path="/patterns/proxy" component={ProxyPage} />
    </BrowserRouter>
  );
}

export default App;
