import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { Log } from '../../Components/Log';
import { ExampleLogger } from '../../ReactLogger/ExampleLogger';
import { PointService } from './PointService';
import { PointIconFactory } from './PointIconFactory';

export const FlyweightSolution: FC = () => {
  const [log, setLog] = useState<string[]>([]);

  const demo = () => {
    const logger = new ExampleLogger(setLog);
    const pointIconFactory = new PointIconFactory(logger);
    const pointService = new PointService(pointIconFactory, logger);
    for (const point of pointService.getPoints()) {
      point.draw();
    }
  };

  useEffect(demo, []);

  return (
    <Container>
      <FluidHeader>Flyweight Design Pattern</FluidHeader>

      <Article>
        <Heading>Example</Heading>
        <p>
          The Flyweight design pattern allows us to create a shareable object
          (the flyweight) that can be cached and reused to save on memory.
        </p>

        <p>
          The users that require the flyweight will ask the factory class for an
          instance of the required object. Upon request the factory will see if
          that object already exists inside of its cache (in the case a simple
          map.) and if it does then it will return the previously stored object.
          If it doesn't it will make, cache and return a new one.
        </p>

        <p>
          Not only does this pattern save on run time memory but it will also
          speed up any initialization due to the fact it can reuse large
          objects.{' '}
        </p>

        <p>
          Below we have a google maps style point of interest system. We don't
          want to keep duplicating the same icon.jpg so we use a factory to
          cache it and as you can see eventually requests for a new image just
          end up sending back pre-made ones.
        </p>

        <p>This pattern is best used when you can identify a memory issue. </p>
      </Article>
      <Example>
        <Log rows={16} entries={log} />
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
