import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article, Button } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { Log } from '../../Components/Log';

export const MediatorSolution: FC = () => {
  const [log, setLog] = useState(['']);
  const [valueInput, setValueInput] = useState(0);

  return (
    <Container>
      <FluidHeader>Mediator Design Pattern</FluidHeader>

      <Article>
        <Heading>GUI Components Example</Heading>
        <p>bluh</p>
      </Article>

      <Example>
        <label htmlFor="amount">Change the data source:</label>
        <input
          id="amount"
          type="number"
          value={valueInput}
          onChange={(e) => setValueInput(Number(e.target.value))}
        />
        <Button onClick={() => {}}>Add</Button>
        <Log rows={8} entries={log} />
      </Example>
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

const Example = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;

  @media (min-width: ${breakPoints.tablet}) {
    width: 50%;
    margin: 0 auto;
  }
`;
