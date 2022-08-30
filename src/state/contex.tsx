import React from 'react';
import { IContextState } from './interfaces';
import state from './state';
import dispatch from './reducer';

export const StateContext = React.createContext<IContextState>({
  state,
  dispatch,
});
