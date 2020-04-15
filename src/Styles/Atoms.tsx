import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { breakPoints } from './breakPoints';

export const Article = styled.article`
  justify-self: center;

  @media (min-width: ${breakPoints.tablet}) {
    max-width: 50%;
  }
`;

export const Button = styled.button`
  color: var(--primary);
  padding: 8px;
  font-size: 1rem;
  background-color: #eaeaea;
  font-weight: bold;
  border: solid 1px #999;
  cursor: pointer;
  transition: color 0.3s ease-in, background-color 0.2s ease-in;
  :hover {
    background-color: var(--primary);
    color: #eaeaea;
  }
`;

export const FluidHeader = styled.h1`
  background-color: var(--primary);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  margin-bottom: 2rem;
`;

export const InternalLink = styled(NavLink)`
  color: var(--primary);
  text-decoration: none;
  cursor: pointer;
  &:visited {
    color: var(--mid-grey);
  }
`;

export const ExternalLink = () => {
  return styled.a.attrs(() => ({ rel: 'noreferrer noopener' }))``;
};

export const Heading = styled.h2`
  font: 400 1.6rem/1.6rem var(--display-font);
  text-align: center;
  margin-bottom: 2rem;
`;
