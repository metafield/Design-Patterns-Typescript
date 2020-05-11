import { Component } from './Component';
import { SetLogFunction, ExampleLogger } from '../../ReactLogger/ExampleLogger';

export class Shape implements Component {
  constructor(private setLog: SetLogFunction, private name: string) {}

  logger = new ExampleLogger(this.setLog);

  move(): void {
    this.logger.log(`Shape: ${this.name} was moved.`);
  }

  render() {
    this.logger.log(`Shape: ${this.name} was drawn.`);
  }
}
