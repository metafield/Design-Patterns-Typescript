import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { Log } from '../../Components/Log';
import { ExampleLogger } from '../../ReactLogger/ExampleLogger';
import { EncryptedCloudStream } from './EncryptedCloudStream';
import { Stream } from './Stream';
import { CloudStream } from './CloudStream';
import { CompressedCloudStream } from './CompressedCloudStream';

export const DecoratorSolution: FC = () => {
  const [log, setLog] = useState<string[]>([]);

  const storeCreditCard = (stream: Stream) => {
    stream.write('4444-5555-6666-8888');
  };

  const demo = () => {
    const logger = new ExampleLogger(setLog);
    const cloudStream = new CloudStream(logger);
    const compressedStream = new CompressedCloudStream(cloudStream, logger);
    storeCreditCard(new EncryptedCloudStream(compressedStream, logger));
  };

  useEffect(demo, []);

  return (
    <Container>
      <FluidHeader>Decorator Design Pattern</FluidHeader>

      <Article>
        <Heading>Stream save/compress/encrypt Example</Heading>
        <p>
          The Decorator design pattern allows a flexible alternative to
          sub-classing for adding extended functionality. We can implement the
          interface of the object to be extended, add our extra functionality
          and then forward the requests back to the original interface.
        </p>

        <p>
          This is very similar to the adapter pattern except instead of changing
          one thing to fit another we instead keep the original the same but run
          our extra code to get what we want.
        </p>

        <p>
          Because every decorator implements the original interface we can chain
          as many of these together to add as much functionality to our object,
          dynamically as needed.
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
