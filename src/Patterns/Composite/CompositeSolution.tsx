import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { Log } from '../../Components/Log';
import { Group } from './Group';
import { Shape } from './Shape';
import { ExampleLogger } from '../../ReactLogger/ExampleLogger';

export const CompositeSolution: FC = () => {
  const [log, setLog] = useState<string[]>([]);

  const demo = () => {
    const logger = new ExampleLogger(setLog);
    const group1 = new Group(logger, 'Squares');
    group1.add(new Shape(logger, 'Square 1'));
    group1.add(new Shape(logger, 'Square 2'));

    const group2 = new Group(logger, 'Circles');
    group2.add(new Shape(logger, 'Circle 1'));
    group2.add(new Shape(logger, 'Circle 2'));

    const container = new Group(logger, 'Container');
    container.add(group1);
    container.add(group2);

    container.render();
    container.move();
    setLog((log) => [...log, '-----------']);
  };

  useEffect(demo, []);

  return (
    <Container>
      <FluidHeader>Composite Design Pattern</FluidHeader>

      <Article>
        <Heading>Shapes and Groups Example</Heading>
        <p>
          The composite design pattern allows us to take a hierarchy of objects
          and treat them the some way. Calls of a function can be called on a
          parent and we will get the expected behavior from all of the children
          in the hierarchy as well. If we deleted a folder we expect that the
          child files also have their delete called too.
        </p>

        <p>
          Below we have an example with a group of 2 squares(Squares), two
          circles (Circles) and a group (Container) that contains them both.
          Squares, Circles and Groups are all components and all haver the
          render() and move() functions which come form the component interface.
        </p>

        <p>
          render() is called on the main container and then move() is called on
          the same container, watch how the calls propagate down through the
          children to create a recursive style function.
        </p>
      </Article>
      <Example>
        <p>container.render()</p>
        <p>container.move()</p>
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
