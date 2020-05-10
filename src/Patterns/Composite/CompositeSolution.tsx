import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article, Button } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { Log } from '../../Components/Log';

export const CompositeSolution: FC = () => {
  const [log, setLog] = useState<string[]>([]);

  return (
    <Container>
      <FluidHeader>Composite Design Pattern</FluidHeader>

      <Article>
        <Heading>Code Editor Example</Heading>
        <p>blah</p>
      </Article>

      <Example>
        <label htmlFor="amount">Do some operations:</label>

        {/* <Buttons>
          <Button onClick={handleHighlightBtn}>Highlight tags</Button>
          <Button onClick={handlePlainTextBtn}>Tags to Plain</Button>
        </Buttons> */}
        <Log rows={8} entries={log} />
      </Example>
    </Container>
  );
};

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

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
