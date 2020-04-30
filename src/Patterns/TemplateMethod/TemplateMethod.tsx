import React, { FC } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';

export const TemplateMethod: FC = () => {
  // const logger = new StorageLogger();

  return (
    <Container>
      <FluidHeader>Template Method Design Pattern</FluidHeader>

      <Article>
        <Heading>Money Transfer with Reports example</Heading>
        <p>blah</p>

        <p>blah</p>

        <p>blah</p>
      </Article>

      {/* <Log readOnly value={logger.entries.join('\n')} rows={8} /> */}
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

  @media (min-width: ${breakPoints.tablet}) {
    justify-self: center;
    width: 50%;
  }
`;
