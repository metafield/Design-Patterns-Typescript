import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article, Button } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { TransferMoneyTask } from './TransferMoneyTask';

export const TemplateMethod: FC = () => {
  const [transferTask] = useState(new TransferMoneyTask());
  const [transfers, setTransfers] = useState<number[]>([]);
  const [transferInput, setTransferInput] = useState<number>(0);

  const handleMoneyTransfer = (amount: number) => {
    transferTask.execute(amount);
    setTransfers(transferTask.auditTrail.items);
    setTransferInput(0);
  };

  return (
    <Container>
      <FluidHeader>Template Method Design Pattern</FluidHeader>

      <Article>
        <Heading>Money Transfer with Reports example</Heading>
        <p>
          The template pattern can be used when we always want to run some
          default functionality, in this case, a logger. Every different kind of
          task will extend an abstract Task and hook into functions that Task
          declares as abstract.
        </p>

        <p>
          When we run Task.execute() it will in turn run the abstract function
          doExecute which is allowing our subclass (MoneyTask) to hook into the
          functionality, get an audit log all without actually having to
          duplicate code.
        </p>

        <p>
          In most cases this is probably a bad pattern to follow since now we
          have a coupling between Task and its Sub-Tasks which is probably not
          beneficial in the long run.
        </p>
      </Article>

      <Example>
        <label htmlFor="amount">Transfer Amount:</label>
        <input
          id="amount"
          type="number"
          value={transferInput}
          onChange={(e) => setTransferInput(Number(e.target.value))}
        />
        <Button onClick={() => handleMoneyTransfer(transferInput)}>Add</Button>
        <Log
          readOnly
          value={transfers
            .map((t) => `$${t} transferred successfully!`)
            .join('\n')}
          rows={8}
        />
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

const Log = styled.textarea`
  background-image: linear-gradient(#f1f1f1 50%, #f9f9f9 50%);
  background-size: 100% 2rem;
  resize: none;

  @media (min-width: ${breakPoints.tablet}) {
  }
`;
