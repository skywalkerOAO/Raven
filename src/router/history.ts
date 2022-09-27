import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

export const history = createBrowserHistory();

interface HistoryRouterProps {
  history: typeof history
  children:any
}
// react-router-dom 外部调用 route需要用此包裹 已置于index中
export const HistoryRouter: React.FC<HistoryRouterProps> = ({ history, children }) => {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location
  });

  React.useLayoutEffect(() => {
    history.listen(setState);
  }, [history]);

  return React.createElement(Router, Object.assign({ children, navigator: history }, state));
};