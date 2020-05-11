import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { Log } from '../../Components/Log';
import { ExampleLogger } from '../../ReactLogger/ExampleLogger';

export const FlyweightSolution: FC = () => {
  const [log, setLog] = useState<string[]>([]);

  const demo = () => {
    const logger = new ExampleLogger(setLog);
  };

  useEffect(demo, []);

  return (
    <Container>
      <FluidHeader>Flyweight Design Pattern</FluidHeader>

      <Article>
        <Heading>Example</Heading>
        <p>The Flyweight design pattern allows us to</p>
      </Article>
      <Example>
        <Log rows={6} entries={log} />
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
