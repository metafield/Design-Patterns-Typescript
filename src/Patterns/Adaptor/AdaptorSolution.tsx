import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { Log } from '../../Components/Log';
import { ImageView } from './ImageView';
import { Image } from './Image';
import { VividFilter } from './VividFilter';
import { ExampleLogger } from '../../ReactLogger/ExampleLogger';
import { CaramelAdapter } from './3rdPartyFilters/CaramelAdapter';

export const AdaptorSolution: FC = () => {
  const [log, setLog] = useState<string[]>([]);

  const demo = () => {
    const logger = new ExampleLogger(setLog);
    const imageView = new ImageView(new Image('cat.png'));
    const vividFilter = new VividFilter(logger); // our filter
    const caramelFilter = new CaramelAdapter(logger); // an adaptor taking care of a 3rd party filter not made by us

    imageView.apply(vividFilter);
    imageView.apply(caramelFilter);
  };

  useEffect(demo, []);

  return (
    <Container>
      <FluidHeader>Adaptor Design Pattern</FluidHeader>

      <Article>
        <Heading>Filter Viewer Example</Heading>
        <p>
          The Adaptor design pattern allows us to use third party or other code
          that would otherwise error due to an existing interface being
          violated.
        </p>

        <p>
          In the example we have a photo gallery that has a preview view for
          displaying filters on your photos. Filters made in house work fine but
          3rd party filters would need an adaptor to work
        </p>

        <p>
          The solution for this is to create a class that calls the 3rd party
          methods while conforming to our own interface thus creating an
          adaptor. The adaptor can either use inheritance to extend the third
          party class or it can use composition and just get a reference to the
          third party class.
        </p>

        <p>
          Below we have a 1st party filter Vivid which is called regularly and a
          3rd party filter Caramel which is called through the use of an adaptor
          class.
        </p>
      </Article>
      <Example>
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
