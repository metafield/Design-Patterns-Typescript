import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FluidHeader = styled.h1`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
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
