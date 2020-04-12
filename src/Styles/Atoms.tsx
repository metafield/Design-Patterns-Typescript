import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
