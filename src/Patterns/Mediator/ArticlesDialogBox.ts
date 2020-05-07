import { UIControl } from './UIControl';
import { TextBox } from './TextBox';
import { Btn } from './Btn';
import { ListBox } from './ListBox';
import { DialogBox } from './DialogBox';

export class ArticlesDialogBox extends DialogBox {
  // to do some simulation form react the next three are set to public
  // if you are making a GUI framework with this pattern they should be private

  public articlesListBox = new ListBox(this);
  public titleTextBox = new TextBox(this);
  public saveBtn = new Btn(this);

  public changed(control: UIControl): void {
    if (control === this.articlesListBox) {
      this.articleSelected();
    } else if (control === this.titleTextBox) {
      this.titleChanged();
    }
  }

  private titleChanged(): void {
    const content = this.titleTextBox.content;
    const hasContent = !!content;
    this.saveBtn.isEnabled = hasContent;
  }

  private articleSelected(): void {
    this.titleTextBox.content = this.articlesListBox.selection;
    this.saveBtn.isEnabled = true;
  }
}
