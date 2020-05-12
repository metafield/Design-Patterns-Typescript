import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { Log } from '../../Components/Log';
import { ExampleLogger } from '../../ReactLogger/ExampleLogger';
import { Library } from './Library';
import { EbookProxy } from './EbookProxy';

export const ProxySolution: FC = () => {
  const [log, setLog] = useState<string[]>([]);

  const demo = () => {
    const logger = new ExampleLogger(setLog);

    const library = new Library();

    const fileNames = ['Lord_of_the_Rings', 'Last_Kingdom', 'c', 'd'];
    for (const fileName of fileNames) {
      library.add(new EbookProxy(fileName, logger));
    }

    library.openEbook('Lord_of_the_Rings');
  };

  useEffect(demo, []);

  return (
    <Container>
      <FluidHeader>Proxy Design Pattern</FluidHeader>

      <Article>
        <Heading>Library Example</Heading>
        <p>
          The Proxy design pattern is used to create an object that sits between
          the user and the real version of the object. This may be used to add
          some additional functionality before forwarding the request to the
          original or in some cases it can be used when the original is not even
          ready yet (not yet loaded from disk).
        </p>

        <p>
          This means we can use the proxy pattern to defer loading of objects up
          until the point we actually need them which can improve performance
          tremendously.
        </p>

        <p>
          The proxy mimics the interface of the original object and in the case
          of a lazy loading pattern would be responsible for forwarding requests
          to the original or creating the original if it does not yet exist and
          then forwarding the requests.
        </p>

        <p>
          In our example we have an ebook library. Instead of loading all of the
          ebooks at once we instead create them all as proxy objects and only
          load the books we ask for, when we ask for them.
        </p>

        <p>
          We can also use the pattern to intercept requests to the real object
          and do some extra functionality like for example: logging.
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
