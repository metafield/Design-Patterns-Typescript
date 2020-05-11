import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FluidHeader, Heading, Article } from '../../Styles/Atoms';
import { breakPoints } from '../../Styles/breakPoints';
import { Log } from '../../Components/Log';
import { ExampleLogger } from '../../ReactLogger/ExampleLogger';
import { NotificationService } from './NotificationService';

export const FacadeSolution: FC = () => {
  const [log, setLog] = useState<string[]>([]);

  const demo = () => {
    const logger = new ExampleLogger(setLog);

    const notify = new NotificationService(logger);
    notify.send('Hello World', `user 33's phone`);
  };

  useEffect(demo, []);

  return (
    <Container>
      <FluidHeader>Facade Design Pattern</FluidHeader>

      <Article>
        <Heading>Notification Server Example</Heading>
        <p>
          The Facade design pattern allows us to provide a simple interface to a
          complex system. We can remove a bunch of config and initialization
          steps away from our user and instead just provide simple concise
          methods.
        </p>

        <p>
          By using this pattern we also get free upside of decoupling
          complicated logic from the user of the system.
        </p>

        <p>
          The example below sends a notification to a user, before the Facade it
          looked like this:
        </p>

        <p>
          <b>
            {`const server = new NotificationServer(this.logger);
          const connection = server.connect('ip');
          const authToken = server.authenticate('appId', 'key');
          const msg = new Message("Hello World");
          server.send(authToken, msg, "user 33's phone");
          connection.disconnect();`}
          </b>
        </p>

        <p>And after:</p>

        <p>
          <b>
            {`const notify = new NotificationService(logger);
          notify.send('Hello World', 'user 33's phone');`}
          </b>
        </p>

        <p>
          Not only is this more readable but it will become much easier to deal
          with when we use this notification service in more than one place.
        </p>
      </Article>
      <Example>
        <Log rows={6} entries={log} />
      </Example>
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  margin-bottom: 3rem;
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
