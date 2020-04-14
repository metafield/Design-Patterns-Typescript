import React, { FC } from 'react';
import styled from 'styled-components';
import { InternalLink } from '../Styles/Atoms';

interface Props {
  links: {
    url: string;
    title: string;
    alt: string;
  }[];
}

export const Nav: FC<Props> = ({ links }) => {
  const Links = links.map((link) => (
    <li key={link.title}>
      <InternalLink to={link.url}>{link.title}</InternalLink>
    </li>
  ));

  return (
    <Menu>
      <ul>{Links}</ul>
    </Menu>
  );
};

const Menu = styled.nav`
  display: grid;
  grid-template-columns: var(--grid);
  > * {
    grid-column: 2;
  }
  ul {
  }

  li {
    display: inline;
    margin-right: 1rem;
    font: 400 1.2rem/1.5rem var(--body-font);
  }
`;
