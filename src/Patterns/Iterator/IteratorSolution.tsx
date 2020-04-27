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

  const code = [
    `export interface Iterator<T> {`,
    `  hasNext(): boolean;`,
    `  current(): T;`,
    `  next(): void;`,
    `}`,
  ];

  return (
    <Container>
      <FluidHeader>Iterator Design Pattern</FluidHeader>

      <Article>
        <Heading>Browser History Example</Heading>
        <p>
          By returning a class that programs to this interface: <br />
          <br />
          {code.map((code) => (
            <span key={Math.random()}>
              <code>{code}</code>
              <br />
            </span>
          ))}
        </p>
        <p>
          We can decide the best way to iterate over our collection in order to
          return the items and do what we want with them until the <b>.next </b>
          function returns false.
        </p>

        <p>
          Below an ArrayIterator is returned from the History object and we
          iterate over it in order to display the list. If I later decide to
          change the History object to store its data as a List or any other
          collection type all I would have to do it return a new Iterator that
          conforms to the interface, the code inside the consuming class would
          not need to be changed.
        </p>
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
