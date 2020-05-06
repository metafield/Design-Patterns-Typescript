import styled from 'styled-components';
import React, { FC } from 'react';

interface Props {
  entries: string[];
  rows: number;
}

export const Log: FC<Props> = ({ entries, rows }) => {
  return <Container value={entries.join('\n')} readOnly rows={rows} />;
};

const Container = styled.textarea`
  background-image: linear-gradient(#f1f1f1 50%, #f9f9f9 50%);
  background-size: 100% 2rem;
  resize: none;
`;
