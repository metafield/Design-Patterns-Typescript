import { ICommand } from './fx/ICommand';
export class CompositeCommand implements ICommand {
  private commands: ICommand[] = [];
  add(command: ICommand): void {
    this.commands.push(command);
  }
  execute(): void {
    this.commands.forEach((command) => command.execute());
  }
}
