import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article, Button } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { Log } from '../../Components/Log';

export const ChainSolution: FC = () => {
  const [log, setLog] = useState(['']);

  return (
    <Container>
      <FluidHeader>Chain of Responsibility Design Pattern</FluidHeader>

      <Article>
        <Heading>Example</Heading>
        <p>blah </p>
      </Article>

      <Example>
        <label htmlFor="amount">Select, Add or Remove The article:</label>

        {/* <input
          id="amount"
          type="text"
          onChange={textChanged}
          value={dialog.titleTextBox.content}
        /> */}

        {/* <Button
          onClick={() => setLog((log) => ['saved', ...log])}
          disabled={!dialog.saveBtn.isEnabled}
        >
          Save
        </Button> */}
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
