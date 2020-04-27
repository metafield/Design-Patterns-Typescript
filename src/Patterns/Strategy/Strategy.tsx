import React, { FC } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { ImageStorage } from './ImageStorage';
import { SepiaFilter } from './SepiaFilter';
import { PngCompressor } from './PngCompressor';
import { StorageLogger } from './StorageLogger';

export const Strategy: FC = () => {
  const logger = new StorageLogger();

  const imgStorage = new ImageStorage(logger);
  imgStorage.store(
    '/cat.png',
    new PngCompressor(logger),
    new SepiaFilter(logger)
  );

  return (
    <Container>
      <FluidHeader>Strategy Design Pattern</FluidHeader>

      <Article>
        <Heading>File Compression Example</Heading>
        <p>
          The strategy pattern allows us to break off the tasks (or strategies)
          we need for a class to do its job.
        </p>

        <p>
          We do this by creating an interface for each strategy and then a
          concrete implementation of that interface for each variation of that
          task.
        </p>

        <p>
          In the example below we have two strategies: Compression and applying
          Filters. That means we have two interfaces: Compressor and Filter. And
          two classes that are concrete implementations of these interfaces:
          SepiaFilter and PngCompressor.
        </p>
      </Article>

      <Log readOnly value={logger.entries.join('\n')} rows={8} />
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

const Log = styled.textarea`
  background-image: linear-gradient(#f1f1f1 50%, #f9f9f9 50%);
  background-size: 100% 2rem;
  resize: none;
`;
