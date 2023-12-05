import { Routes, Route } from 'react-router-dom';
import { Discover } from '@pages';

function App() {
  return (
    <main className="h-screen">
      <Routes>
        <Route path="/" element={<Discover />} />
      </Routes>
    </main>
  );
}

export default App;
