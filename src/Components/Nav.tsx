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
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }

  li {
    margin: 0 1rem;
  }
`;
