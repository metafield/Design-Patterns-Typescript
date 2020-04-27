import React, { FC, useRef, useState } from 'react';
import styled from 'styled-components';
import { FluidHeader, Article } from '../../Styles/Atoms';
import { Editor } from './Editor';
import { breakPoints } from '../../Styles/breakPoints';
import { History } from '../Memento/History';

const editor = new Editor();
const history = new History();

editor.setContent('first piece of content');
history.push(editor.createState());
editor.setContent('second piece of content');
history.push(editor.createState());
editor.setContent('third piece of content');

export const Memento: FC = () => {
  const [content, setContent] = useState(editor.getContent());
  const [curHistory, setCurHistory] = useState(history.getStates());

  const textInputRef = useRef<HTMLTextAreaElement>(null);

  const handleContentChange = (e: React.MouseEvent) => {
    if (textInputRef.current) {
      history.push(editor.createState());
      setCurHistory(history.getStates());

      const newValue = textInputRef.current.value;

      setContent(newValue);
      editor.setContent(newValue);

      textInputRef.current.value = '';
    }
  };

  const handleUndo = (e: React.MouseEvent) => {
    const lastState = history.pop();

    if (lastState === undefined) return;

    editor.restore(lastState);
    setContent(editor.getContent());
    setCurHistory(history.getStates());
  };

  return (
    <Container>
      <FluidHeader>Memento Design Pattern</FluidHeader>

      <Article>
        <Heading>Text field example</Heading>
        <p>
          The Memento pattern allows us to store states of our class and then
          recall them later.
        </p>
      </Article>

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
        <HistoryPane>
          <Heading>History</Heading>
          {curHistory.map((state) => (
            <li key={Math.random()}>{state.content}</li>
          ))}
        </HistoryPane>
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

const HistoryPane = styled.ul`
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
