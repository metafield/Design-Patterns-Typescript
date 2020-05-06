import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article, Button } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';

export const Observer: FC = () => {
  const [log, setLog] = useState(['']);

  const addToLog = (entry: string): void => {
    setLog((log) => {
      if (log.length > 20) {
        log.pop();
      }

      return [entry, ...log];
    });
  };

  return (
    <Container>
      <FluidHeader>State Design Pattern</FluidHeader>

      <Article>
        <Heading>Spreadsheet Example</Heading>
        <p>blah</p>

        <p>blah</p>
      </Article>

      <Log readOnly value={log.join('\n')} />
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-columns: var(--grid);
  > * {
    grid-column: 2;
  }
`;

const Log = styled.textarea`
  background-image: linear-gradient(#f1f1f1 50%, #f9f9f9 50%);
  background-size: 100% 2rem;
  resize: none;
`;
