import { Component } from './Component';
import { Logger } from '../../ReactLogger/Logger';

export class Shape implements Component {
  constructor(private logger: Logger, private name: string) {}

  move(): void {
    this.logger.log(`Shape: ${this.name} was moved.`);
  }

  render() {
    this.logger.log(`Shape: ${this.name} was drawn.`);
  }
}
