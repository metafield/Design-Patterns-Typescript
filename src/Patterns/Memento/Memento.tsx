import React, { FC, useRef, useState } from 'react';
import styled from 'styled-components';
import { FluidHeader } from '../../Styles/Atoms';
import { Editor } from './Editor';
import { breakPoints } from '../../Styles/breakPoints';

const editor = new Editor('woop');

export const Memento: FC = () => {
  const intialContent = 'Enter Something';
  const [content, setContent] = useState(intialContent);

  const textInputRef = useRef<HTMLTextAreaElement>(null);

  const handleContentChange = (e: React.MouseEvent) => {
    if (textInputRef.current) {
      const newValue = textInputRef.current.value;
      setContent(newValue);
      editor.setContent(newValue);
      textInputRef.current.value = '';
    }
  };

  const handleUndo = (e: React.MouseEvent) => {
    editor.undo();
    setContent(editor.content);
  };

  return (
    <Container>
      <FluidHeader>Memento Design Pattern</FluidHeader>

      <EditorContainer>
        <div>
          <Heading>Current Value</Heading>
          <Content>{content}</Content>
        </div>
        <Controls>
          <Heading>Controls</Heading>
          <Label htmlFor="content-input">Type Something and hit change:</Label>
          <ContentInput id="content-input" ref={textInputRef} />
          <Buttons>
            <Button onClick={handleContentChange}>change</Button>
            <Button onClick={handleUndo}>undo</Button>
          </Buttons>
        </Controls>
        <History>
          <Heading>History</Heading>
          {editor.getHistory().map((item) => (
            <li key={Math.random()}>{item}</li>
          ))}
        </History>
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

const Content = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: var(--primary);
`;

const ContentInput = styled.textarea`
  width: 100%;
  border-radius: 4px;
  background-color: #eaeaea;
  border: solid 1px #999;
  padding: 5px 3px;
  min-height: 5rem;
  font-family: var(--body-font);
`;

const Heading = styled.h2`
  font: 400 1.6rem/1.6rem var(--display-font);
  text-align: center;
  margin-bottom: 2rem;
`;

const History = styled.ul`
  margin: 0 auto;
`;

const Label = styled.label``;

const EditorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  @media (min-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
  }
`;
