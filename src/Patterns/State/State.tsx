import React, { FC, useRef, useState } from 'react';
import styled from 'styled-components';
import { FluidHeader } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { CursorType } from './CursorType';
import { Tool } from './Tool';
import { Canvas } from './Canvas';
import { SelectionTool } from './SelectionTool';
import { BrushTool } from './BrushTool';

export const State: FC = () => {
  const [canvas, setCanvas] = useState(() => new Canvas());

  const switchTool = (tool: Tool) => {
    canvas.setCurrentTool(tool);
    const newCanvas = new Canvas();
    Object.assign(newCanvas, canvas);
    setCanvas(newCanvas);
  };

  return (
    <Container>
      <FluidHeader>State Design Pattern</FluidHeader>
      <Button onClick={() => console.log(canvas.getCurrentTool())}>
        curTool
      </Button>
      <CanvasGrid>
        <Toolbar>
          <Button onClick={() => switchTool(new SelectionTool())}>S</Button>
          <Button onClick={() => switchTool(new BrushTool())}>B</Button>
        </Toolbar>
        <DummyCanvas cursor={canvas.getCurrentTool().cursorStyle} />
      </CanvasGrid>
    </Container>
  );
};

const Button = styled.button`
  color: var(--primary);
  padding: 8px 8px;
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

const CanvasGrid = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
`;

interface CanvasProps {
  cursor: CursorType;
}

const DummyCanvas = styled.div<CanvasProps>`
  cursor: ${(props) => props.cursor};
  height: 400px;
  width: 400px;
  background-color: purple;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  @media (min-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
  }
`;

const Toolbar = styled.div`
  background-color: pink;

  display: flex;
  flex-direction: column;

  button {
  }
`;
