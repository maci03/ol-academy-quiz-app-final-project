import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './AppRouter';

function App() {
  return (
    <main>
      <Router>
        <AppRouter />
      </Router>
    </main>
  );
}

export default App;
