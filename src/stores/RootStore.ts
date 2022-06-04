import {types} from 'mobx-state-tree';
import {Show} from './ShowStore';

export const RootStore = types
  .model({
    shows: types.array(Show),
    focusedShow: types.optional(types.string, ''),
  })
  .views(self => ({
    get isTextShowing() {
      return self.shows.reduce(
        (isVisible, current) => isVisible || current.isTextVisible,
        false,
      );
    },
    get focusedShowTitle() {
      return self.shows.find(s => !!s.isFocused)?.title;
    },
  }))
  .actions(self => ({
    setTextVisible(textVisible: boolean, title?: string) {
      const showFocused = self.shows.find(s => s.title === title);
      if (showFocused) {
        showFocused.setTextVisible(textVisible);
      }
    },
  }));
