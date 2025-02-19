import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';

const queryClient = new QueryClient();

function App() {
  return(
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}


// Temporary home component for root route
function Home() {
  return(
    <div className="text-center">
      <h1 className="text-4xl font-bld mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg">Select a section from the navigation menu</p>
    </div>
  );
}

export default App;