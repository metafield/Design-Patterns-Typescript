import { ICommand } from './ICommand';
export class Btn {
  private label: string = '';
  constructor(private command: ICommand) {}
  public click = (): void => {
    this.command.execute();
  };
  public getLabel = () => this.label;
  public setLabel = (newLabel: string): void => {
    this.label = newLabel;
  };
}
