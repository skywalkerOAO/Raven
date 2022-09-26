import ReactDOM from 'react-dom/client'
import RootComponent from './router/root.component'
import { history,HistoryRouter } from './router/history'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <HistoryRouter history={history}>
    <RootComponent />
  </HistoryRouter>
)
