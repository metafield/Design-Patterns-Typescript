const createLink = (title: string, url: string, alt: string) => ({
  title,
  url,
  alt,
});

export const structuralLinks = [
  createLink(
    'Composite',
    '/patterns/composite',
    'The composite pattern as described by the Gang of Four.'
  ),
  createLink(
    'Adaptor',
    '/patterns/adaptor',
    'The adaptor pattern as described by the Gang of Four.'
  ),
  createLink(
    'Decorator',
    '/patterns/decorator',
    'The decorator pattern as described by the Gang of Four.'
  ),
  createLink(
    'Facade',
    '/patterns/facade',
    'The facade pattern as described by the Gang of Four.'
  ),
  createLink(
    'Flyweight',
    '/patterns/flyweight',
    'The flyweight pattern as described by the Gang of Four.'
  ),
  createLink(
    'Bridge',
    '/patterns/bridge',
    'The bridge pattern as described by the Gang of Four.'
  ),
  createLink(
    'Proxy',
    '/patterns/proxy',
    'The proxy pattern as described by the Gang of Four.'
  ),
];

export const behavioralLinks = [
  createLink('Home', '/', 'Back to Home'),
  createLink(
    'Memento',
    '/patterns/memento',
    'The memento pattern as described by the Gang of Four.'
  ),
  createLink(
    'State',
    '/patterns/state',
    'The state pattern as described by the Gang of Four.'
  ),
  createLink(
    'Iterator',
    '/patterns/iterator',
    'The Iterator pattern as described by the Gang of Four.'
  ),
  createLink(
    'Strategy',
    '/patterns/strategy',
    'The strategy pattern as described by the Gang of Four.'
  ),
  createLink(
    'Template',
    '/patterns/template',
    'The template method pattern as described by the Gang of Four.'
  ),
  createLink(
    'Command',
    '/patterns/command',
    'The command method pattern as described by the Gang of Four.'
  ),
  createLink(
    'Observer',
    '/patterns/observer',
    'The observer pattern as described by the Gang of Four.'
  ),
  createLink(
    'Mediator',
    '/patterns/mediator',
    'The mediator pattern as described by the Gang of Four.'
  ),
  createLink(
    'Chain of Responsibility',
    '/patterns/chain_of_responsibility',
    'The Chain of Responsibility pattern as described by the Gang of Four.'
  ),
  createLink(
    'Visitor',
    '/patterns/visitor',
    'The Visitor pattern as described by the Gang of Four.'
  ),
];
