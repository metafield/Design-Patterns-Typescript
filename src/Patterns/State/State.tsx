import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article, Button } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { CursorType } from './CursorType';
import { Tool } from './Tool';
import { Canvas } from './Canvas';
import { SelectionTool } from './SelectionTool';
import { BrushTool } from './BrushTool';
import { MoveTool } from './MoveTool';

export const State: FC = () => {
  const [canvas, setCanvas] = useState(() => new Canvas());
  const [log, setLog] = useState(['']);

  const switchTool = (tool: Tool) => {
    canvas.setCurrentTool(tool);
    const newCanvas = new Canvas();
    Object.assign(newCanvas, canvas);
    setCanvas(newCanvas);
  };

  const addToLog = (entry: string): void => {
    setLog((log) => {
      if (log.length > 20) {
        log.pop();
      }

      return [entry, ...log];
    });
  };

  const handleCanvasMouseDown = () => {
    addToLog(canvas.mouseDown());
  };

  const handleCanvasMouseUp = () => {
    addToLog(canvas.mouseUp());
  };

  return (
    <Container>
      <FluidHeader>State Design Pattern</FluidHeader>

      <Article>
        <Heading>Canvas Example</Heading>
        <p>
          A canvas or paint application is a good use case for the state
          pattern. The Canvas benefits from its fields being programmed to some
          abstract concept such as a Tool interface. By using an interface we
          can easily add new tools to our canvas class without ever needing to
          change the Canvas implementation.
        </p>

        <p>
          This is not a fully functioning paint app but you can select some
          tools on the left and watch as the cursor icons, mouse down and mouse
          up correctly reflect the newly selected tool.
        </p>
      </Article>

      <CanvasGrid>
        <Toolbar>
          <Button onClick={() => switchTool(new SelectionTool())}>S</Button>
          <Button onClick={() => switchTool(new BrushTool())}>B</Button>
          <Button onClick={() => switchTool(new MoveTool())}>M</Button>
        </Toolbar>
        <DummyCanvas
          cursor={canvas.getCurrentTool().cursorStyle}
          onMouseDown={handleCanvasMouseDown}
          onMouseUp={handleCanvasMouseUp}
        />
        <Log readOnly value={log.join('\n')} />
      </CanvasGrid>
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

const CanvasGrid = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr 1fr;
  justify-content: center;
`;

interface CanvasProps {
  cursor: CursorType;
}

const DummyCanvas = styled.div<CanvasProps>`
  cursor: ${(props) => props.cursor};
  height: 200px;
  background-color: purple;

  @media (min-width: ${breakPoints.tablet}) {
    height: 400px;
  }
`;

const Log = styled.textarea`
  background-image: linear-gradient(#f1f1f1 50%, #f9f9f9 50%);
  background-size: 100% 2rem;
  resize: none;
`;

const Toolbar = styled.div`
  background-color: pink;

  display: flex;
  flex-direction: column;

  button {
  }
`;
