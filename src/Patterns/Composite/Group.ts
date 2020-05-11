import { Component } from './Component';
import { SetLogFunction, ExampleLogger } from '../../ReactLogger/ExampleLogger';

export class Group implements Component {
  constructor(private setLog: SetLogFunction, private name: string) {}

  private logger = new ExampleLogger(this.setLog);
  private components: Component[] = [];

  add(component: Component) {
    this.components.push(component);
  }

  render() {
    for (const component of this.components) {
      this.logger.log(`Group: ${this.name} calling render() for all children`);
      component.render();
    }
  }

  move(): void {
    for (const component of this.components) {
      this.logger.log(`Group: ${this.name} calling move() for all children`);
      component.move();
    }
  }
}
