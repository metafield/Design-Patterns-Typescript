import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article, Button } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { SpreadSheet } from './SpreadSheet';
import { Chart } from './Chart';
import { DataSource } from './DataSource';
import { Log } from '../../Components/Log';

// set up observable
const data = new DataSource(0);
// observers
const spreadSheet = new SpreadSheet(data);
const chart = new Chart(data);
//attach observers to observables
data.attach(spreadSheet);
data.attach(chart);

export const ObserverSolution: FC = () => {
  const [log, setLog] = useState(['']);
  const [valueInput, setValueInput] = useState(0);

  const handleButtonPress = () => {
    data.value = valueInput;

    const newLogEntries = [
      `data provider (observable) now has the value ${data.value}`,
      `Spreadsheet now has the value ${spreadSheet.value}`,
      `Pie Chart now has the value ${chart.value}`,
    ];

    setLog((log) => [...newLogEntries, ...log]);
  };

  return (
    <Container>
      <FluidHeader>State Design Pattern</FluidHeader>

      <Article>
        <Heading>Spreadsheet Example</Heading>
        <p>
          The observable pattern allows us to have objects (observers) subscribe
          (attach) to a source object (observable). When the data changes in the
          observable all of the observers are notified. This pattern is
          extremely useful and is used in many applications.
        </p>

        <p>
          There are two variations of this pattern. Pull style where the
          observer is coupled the the observable and calls its methods to get
          values upon receiving an update notification (can be useful if you
          need to call different methods on the observable). And push style
          where there is no coupling between the concrete classes and the value
          is just pushed into the update method.
        </p>

        <p>
          It's important to note that in this case push style coupling is not
          actually a bad thing and can actually afford us a lot of
          functionality.
        </p>

        <p>
          In this example we have a data source, a spreadsheet and a pie chart.
          When the data source is updated we notify both the sheet and the chart
          which will call the value getter on the observable for its value.
          Important to note here that neither the char or the spreadsheet
          actually hold their own variable for value they are just returning the
          observables which gives us one source of truth for our data.
        </p>

        <p>
          To keep things simple the data is just an integer value, so go ahead
          and try it out.
        </p>
      </Article>

      <Example>
        <label htmlFor="amount">Change the data source:</label>
        <input
          id="amount"
          type="number"
          value={valueInput}
          onChange={(e) => setValueInput(Number(e.target.value))}
        />
        <Button onClick={() => handleButtonPress()}>Add</Button>
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
