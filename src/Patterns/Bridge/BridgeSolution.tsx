import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { Log } from '../../Components/Log';
import { ExampleLogger } from '../../ReactLogger/ExampleLogger';
import { SonyTV } from './SonyTV';
import { AdvancedRemoteControl } from './AdvancedRemoteControl';
import { SamsungTV } from './SamsungTV';

export const BridgeSolution: FC = () => {
  const [log, setLog] = useState<string[]>([]);

  const demo = () => {
    const logger = new ExampleLogger(setLog);

    const sonyTV = new SonyTV(logger);
    const remoteControl = new AdvancedRemoteControl(sonyTV);
    remoteControl.turnOn();
    remoteControl.setChannel(42);
    remoteControl.turnOff();

    const samsung = new SamsungTV(logger);
    const remoteControl2 = new AdvancedRemoteControl(samsung);
    remoteControl2.turnOn();
    remoteControl2.setChannel(42);
    remoteControl2.turnOff();
  };

  useEffect(demo, []);

  return (
    <Container>
      <FluidHeader>Bridge Design Pattern</FluidHeader>

      <Article>
        <Heading> TV Remote Example</Heading>
        <p>
          The Bridge design pattern gives us a solution when your hierarchies
          are growing in two different dimensions. We split them up and use an
          interface as the link (the bridge) between them.
        </p>

        <p>
          Our example uses the idea of different types of remotes, simple
          remotes for on and off or specialized remotes for supporting many
          different features. The list of features can grow as can the brands of
          tv that must be supported.
        </p>

        <p>
          We can break up our problem into features and devices (our bridge and
          interface). Now a feature set will be composed of a concrete device
          that is passed in upon creation. The concrete implementation of a
          device (such as SonyTV) will implement the Device interface which will
          contain all the possible features.
        </p>
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
