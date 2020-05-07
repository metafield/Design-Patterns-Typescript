import { UIControl } from './UIControl';

export abstract class DialogBox {
  public abstract changed(control: UIControl): void;

  // other common dialog box behaviors would go below
  // if it was just one abstract method then we would just use an interface
}
