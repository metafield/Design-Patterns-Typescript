import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article, Button } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { Log } from '../../Components/Log';
import { HtmlDocument } from './HtmlDocument';
import { AnchorNode } from './AnchorNode';
import { HeadingNode } from './HeadingNode';
import { HighlightOperation } from './HighlightOperation';
import { ExampleLogger } from './ExampleLogger';
import { PlainTextOperation } from './PlainTextOperation';

export const VisitorSolution: FC = () => {
  const [log, setLog] = useState<string[]>([]);
  const [htmlDocument] = useState(new HtmlDocument());
  const [headingNode] = useState(new HeadingNode());
  const [anchorNode] = useState(new AnchorNode());

  useEffect(() => {
    htmlDocument.add(headingNode);
    htmlDocument.add(anchorNode);
  }, [anchorNode, htmlDocument, headingNode]);

  const handleHighlightBtn = () => {
    debugger;
    const logger = new ExampleLogger(setLog);
    const highLightOperation = new HighlightOperation(logger);
    htmlDocument.execute(highLightOperation);
  };

  const handlePlainTextBtn = () => {
    const logger = new ExampleLogger(setLog);
    const plainTextOperation = new PlainTextOperation(logger);
    htmlDocument.execute(plainTextOperation);
  };

  return (
    <Container>
      <FluidHeader>Visitor Design Pattern</FluidHeader>

      <Article>
        <Heading>Code Editor Example</Heading>
        <p>
          The visitor pattern allows us to add new operations to an object
          structure without modifying the existing objects. This is perfect for
          when you are not expecting to add any more objects but you you will
          need to continue to add functionality to those objects.
        </p>

        <p>
          This example assumes oyu are making a html editor like vsCode. The
          amount of tags in HTML are final but there are so many different
          functions that can be run on them so the pattern works out quite
          nicely.
        </p>

        <p>
          A side note with Typescript and JS. While the former does have some
          functionality for method overloading which is a staple of this pattern
          it isn't the nicest implementation of overloading in a language and JS
          doesn't have the option due to its lack of types. Something to think
          about.
        </p>

        <p>
          For the example below we create concrete Operations(an interface which
          is the visitor) which have an overloaded apply method for each type of
          element. The elements we want to modify all implement an interface
          which has an execute method which takes in an Operation. we create a
          new concrete operation class such as HighlightOperation, pass it to
          our element which will in turn ask the operation to 'visit' it (the
          element actually just passes its own -this- to the operation) thus
          completing the operation.
        </p>

        <p>
          Below we assume we have a heading tag and an anchor tag in our text
          editor we made
        </p>
      </Article>

      <Example>
        <label htmlFor="amount">Do some operations:</label>

        <Buttons>
          <Button onClick={handleHighlightBtn}>Highlight tags</Button>
          <Button onClick={handlePlainTextBtn}>Tags to Plain</Button>
        </Buttons>
        <Log rows={8} entries={log} />
      </Example>
    </Container>
  );
};

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

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
