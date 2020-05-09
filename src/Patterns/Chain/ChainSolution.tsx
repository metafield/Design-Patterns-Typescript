import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article, Button } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { Log } from '../../Components/Log';
import { Compressor } from './Compressor';
import { Logger } from './Logger';
import { Authenticator } from './Authenticator';
import { WebServer } from './WebServer';
import { HttpRequest } from './HttpRequest';

export const ChainSolution: FC = () => {
  // Our pipeline looks like this for `request`:
  // authenticator -> logger -> compressor
  const [log, setLog] = useState<string[]>([]);
  const [compressor] = useState(new Compressor(setLog, null));
  const [logger] = useState(new Logger(setLog, compressor));
  const [authenticator] = useState(new Authenticator(setLog, logger));
  const [server] = useState(new WebServer(authenticator));

  const fakeRequest = (happy: boolean): void => {
    setLog([]);

    if (happy) {
      server.handle(new HttpRequest('admin', '1234'));
    } else {
      server.handle(new HttpRequest('admin', 'bad pass'));
    }
  };

  return (
    <Container>
      <FluidHeader>Chain of Responsibility Design Pattern</FluidHeader>

      <Article>
        <Heading>Example</Heading>
        <p>blah </p>
      </Article>

      <Example>
        <label htmlFor="amount">Select, Add or Remove The article:</label>

        <Buttons>
          <Button onClick={() => fakeRequest(false)}>Request (sad)</Button>
          <Button onClick={() => fakeRequest(true)}>Request (happy)</Button>
        </Buttons>
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
