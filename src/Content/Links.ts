const createLink = (title: string, url: string, alt: string) => ({
  title,
  url,
  alt,
});

export const Links = [
  createLink('Home', '/', 'Back to Home'),
  createLink(
    'Memento',
    'patterns/memento',
    'The memento pattern as described by the Gang of Four.'
  ),
];
