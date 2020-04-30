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
];
