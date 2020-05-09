const createLink = (title: string, url: string, alt: string) => ({
  title,
  url,
  alt,
});

export const Links = [
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
];
