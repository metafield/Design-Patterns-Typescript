import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { CustomerService } from './CustomerService';
import { AddCustomerCommand } from './AddCustomerCommand';
import { Btn } from './fx/Btn';
import { CompositeCommand } from './CompositeCommand';
import { ResizeCommand } from './ResizeCommand';
import { SepiaCommand } from './SepiaCommand';

export const Command: FC = () => {
  const [service] = useState(new CustomerService());
  const [command] = useState(new AddCustomerCommand(service));
  const [button] = useState(new Btn(command));
  button.click();

  // we can also use a container to fire off multiple commands
  const composite = new CompositeCommand();
  composite.add(new ResizeCommand());
  composite.add(new SepiaCommand());
  // then later we can replay these commands
  composite.execute();

  return (
    <Container>
      <FluidHeader>Command Design Pattern</FluidHeader>

      <Article>
        <Heading>Framework Button Example</Heading>
        <p>
          Used to decouple the caller from the sender. A command can be packaged
          in a class like the example: AddCusotmerCommand. It adheres to the
          interface that the caller (in this case an imaginary button) will also
          use to store execute the command.
        </p>
        <p>
          Because these commands are now instances of objects we can log them,
          store them in containers (see source and console.log) and even replay
          them back.
        </p>
      </Article>

      <Log readOnly value={service.log.join('\n')} rows={8} />
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

  @media (min-width: ${breakPoints.tablet}) {
    justify-self: center;
    width: 50%;
  }
`;
