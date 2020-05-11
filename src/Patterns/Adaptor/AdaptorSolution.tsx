import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { Log } from '../../Components/Log';

export const AdaptorSolution: FC = () => {
  const [log, setLog] = useState<string[]>([]);

  const demo = () => {};

  useEffect(demo, []);

  return (
    <Container>
      <FluidHeader>Adaptor Design Pattern</FluidHeader>

      <Article>
        <Heading>Shapes and Groups Example</Heading>
        <p>The Adaptor design pattern allows us</p>s
      </Article>
      <Example>
        <Log rows={22} entries={log} />
      </Example>
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  margin-bottom: 3rem;
  grid-template-columns: var(--grid);
  > * {
    grid-column: 2;
  }
`;

const Example = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;

  @media (min-width: ${breakPoints.tablet}) {
    width: 50%;
    margin: 0 auto;
  }
`;
