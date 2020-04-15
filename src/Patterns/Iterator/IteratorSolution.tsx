import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article, Button } from '../../Styles/Atoms';
import { BrowseHistory } from './BrowseHistory';
import { breakPoints } from '../../Styles/breakPoints';
import { Iterator } from './Iterator';
interface iterWithIndex extends Iterator<string> {
  index: number;
}
export const IteratorSolution: FC = () => {
  const [history, setHistory] = useState(BrowseHistory.initHistory());
  const [urlInput, setUrlInput] = useState('');

  const pushHistory = (url: string) => {
    if (!url) return;

    const newHistory = new BrowseHistory();
    Object.assign(newHistory, history);

    newHistory.push(url);
    setHistory(newHistory);
  };

  const iterator: iterWithIndex = history.createArrayIterator();

  const historyItems: string[] = [];

  while (iterator.hasNext()) {
    const url = iterator.current();
    historyItems.push(url);
    iterator.next();
  }

  return (
    <Container>
      <FluidHeader>Iterator Design Pattern</FluidHeader>

      <Article>
        <Heading>Browser History Example</Heading>
        <p>blah blah</p>
        <p>blah blah</p>
      </Article>

      <ExampleContainer>
        <label htmlFor="url">Type an URL</label>
        <input id="url" onChange={(e) => setUrlInput(e.target.value)} />
        <Button onClick={() => pushHistory(urlInput)}>Add</Button>
        <Log readOnly value={historyItems.reverse().join('\n')} rows={6} />
      </ExampleContainer>
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

const ExampleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${breakPoints.mobile}) {
    max-width: 500px;
    justify-self: center;
  }
`;

const Log = styled.textarea`
  background-image: linear-gradient(#f1f1f1 50%, #f9f9f9 50%);
  background-size: 100% 2rem;
  resize: none;
`;
