import { Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { DataContextProvider } from './context/DataContextProvider';

function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <DataContextProvider>
            <Home />
          </DataContextProvider>
        }
      />
    </Routes>
  );
}

export default App;
