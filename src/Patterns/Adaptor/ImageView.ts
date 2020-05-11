import { Image } from './Image';
import { Filter } from './filter';

export class ImageView {
  // ^ for previewing different filters. Contains an image.
  constructor(private image: Image) {}

  apply(filter: Filter) {
    filter.apply(this.image);
  }
}
