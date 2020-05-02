import { ICommand } from './fx/ICommand';
export class ResizeCommand implements ICommand {
  execute(): void {
    console.log('resizes');
  }
}
