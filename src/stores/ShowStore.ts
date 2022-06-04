import {types} from 'mobx-state-tree';

export const Show = types
  .model({
    title: types.string,
    picture: types.integer,
    description: types.string,
    isFocused: types.optional(types.boolean, false),
    isTextVisible: types.optional(types.boolean, false),
  })
  .actions(self => ({
    setFocused(focus: boolean) {
      self.isFocused = focus;
    },
    setTextVisible(textVisible: boolean) {
      self.isTextVisible = textVisible;
    },
  }));
