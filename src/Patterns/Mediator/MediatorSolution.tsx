import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article, Button } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { Log } from '../../Components/Log';
import { ArticlesDialogBox } from './ArticlesDialogBox';

const dialog = new ArticlesDialogBox();

export const MediatorSolution: FC = () => {
  const [log, setLog] = useState(['']);

  const textChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    dialog.titleTextBox.content = e.target.value;
    setLog((log) => ['changed title via textbox', ...log]);
  };

  const selectChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dialog.articlesListBox.selection = e.target.value;
    setLog((log) => ['changed title via select', ...log]);
  };

  return (
    <Container>
      <FluidHeader>Mediator Design Pattern</FluidHeader>

      <Article>
        <Heading>GUI Components Example</Heading>
        <p>
          The mediator pattern allows us to get a group of similar objects
          talking to each other without needing to know each other exists by the
          means of using a container (mediator) to update the state of the
          contain when things change in each of the components.
        </p>
        <p>
          A class (container) extending the Mediator base class will keep track
          of the components (colleagues). Each colleague will keep a reference
          to the container and will notify it when its state changes.
        </p>

        <p>
          In the example below changing the option select will trigger the
          container to populate the text box that change in turn will activate
          the save button.
        </p>
      </Article>

      <Example>
        <label htmlFor="amount">Select, Add or Remove The article:</label>
        <select onChange={selectChanged}>
          <option value="Title 1">Title 1</option>
          <option value="Title 2">Title 2</option>
          <option value="Title 3">Title 3</option>
          <option value="Title 4">Title 4</option>
        </select>

        <input
          id="amount"
          type="text"
          onChange={textChanged}
          value={dialog.titleTextBox.content}
        />

        <Button
          onClick={() => setLog((log) => ['saved', ...log])}
          disabled={!dialog.saveBtn.isEnabled}
        >
          Save
        </Button>
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
