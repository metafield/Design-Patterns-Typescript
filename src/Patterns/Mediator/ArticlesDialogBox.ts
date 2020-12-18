import { TextBox } from './TextBox';
import { Btn } from './Btn';
import { ListBox } from './ListBox';

export class ArticlesDialogBox {
  // to do some simulation form react the next three are set to public
  // if you are making a GUI framework with this pattern they should be private

  public articlesListBox = new ListBox();
  public titleTextBox = new TextBox();
  public saveBtn = new Btn();

  constructor() {
    this.articlesListBox.addEventHandler({
      // EventHandler is a functional interface so we can just return an anonymous obj with that function
      handle: this.articleSelected,
    });

    this.titleTextBox.addEventHandler({
      handle: this.titleChanged,
    });
  }

  private titleChanged = (): void => {
    const content = this.titleTextBox.content;
    const hasContent = !!content;
    this.saveBtn.isEnabled = hasContent;
  };

  private articleSelected = (): void => {
    this.titleTextBox.content = this.articlesListBox.selection;
    this.saveBtn.isEnabled = true;
  };
}
