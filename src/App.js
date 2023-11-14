import Menu from './components/Menu'
import Body from './components/Body'

import { MovieProvider } from './contexts/MovieContext'

const App = () => {
  return (
    <div>
      <Menu />
      <MovieProvider>
        <Body />
      </MovieProvider>
    </div>
  );
}

export default App;
