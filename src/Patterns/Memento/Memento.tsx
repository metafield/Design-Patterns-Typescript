import React, { FC } from 'react';
import styled from 'styled-components';
import { FluidHeader } from '../../Styles/Atoms';
import { Editor } from './Editor';

export const Memento: FC = () => {
  const editor = new Editor('Enter Something');

  return (
    <Container>
      <FluidHeader>Memento Design Pattern</FluidHeader>

      <EditorContainer>
        <Controls>
          <Label htmlFor="content-input">Type Something and hit change:</Label>
          <ContentInput id="content-input" />
          <Buttons>
            <Button>change</Button>
            <Button>undo</Button>
          </Buttons>
        </Controls>
        <Content>{editor.content}</Content>
      </EditorContainer>
    </Container>
  );
};

const Buttons = styled.ul`
  display: flex;
  flex-direction: row-reverse;

  button {
    margin-left: 0.5rem;
  }
`;

const Button = styled.button`
  color: var(--primary);
  padding: 8px 20px;
  font-size: 1rem;
  background-color: #eaeaea;
  font-weight: bold;
  border: solid 1px #999;
  cursor: pointer;
  transition: color 0.3s ease-in, background-color 0.2s ease-in;
  :hover {
    background-color: var(--primary);
    color: #eaeaea;
  }
`;

const Container = styled.section`
  display: grid;
  grid-template-columns: var(--grid);
  > * {
    grid-column: 2;
  }
`;

const Controls = styled.div``;

const Content = styled.h2``;

const ContentInput = styled.textarea`
  width: 100%;
  border-radius: 4px;
  background-color: #eaeaea;
  border: solid 1px #999;
  padding: 5px 3px;
  min-height: 5rem;
  font-family: var(--body-font);
`;

const Label = styled.label``;

const EditorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
`;
