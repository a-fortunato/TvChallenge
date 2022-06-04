import {Instance} from 'mobx-state-tree';
import {createContext, useContext} from 'react';

import shows from '../data/shows';
import {RootStore} from './RootStore';

const initialState = RootStore.create(shows);

export const rootStore = initialState;

export type RootInstance = Instance<typeof RootStore>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;

export function useMobxStateTree() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}
