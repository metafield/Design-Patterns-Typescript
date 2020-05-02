import { ICommand } from './fx/ICommand';
export class SepiaCommand implements ICommand {
  execute(): void {
    console.log('applies sepia filter');
  }
}
