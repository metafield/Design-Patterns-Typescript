import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { CustomerService } from './CustomerService';
import { AddCustomerCommand } from './AddCustomerCommand';
import { Btn } from './fx/Btn';

export const Command: FC = () => {
  const [service] = useState(new CustomerService());
  const [command] = useState(new AddCustomerCommand(service));
  const [button] = useState(new Btn(command));
  button.click();

  return (
    <Container>
      <FluidHeader>Command Design Pattern</FluidHeader>

      <Article>
        <Heading>Framework Button Example</Heading>
        <p>blah</p>

        <p>blah</p>
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
