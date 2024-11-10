import './App.css';
import Home from './pages/Home';
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/Scroll';
const txtFile = '../public/app-adds.txt'
const queryClient = new QueryClient()

function App() {

  useEffect(() => {
    disableMenu();
  }, [])


  // Function to fetch text file content
  const fetchTextFile = () => {
    return fetch(txtFile)
      .then((response) => response.text())
      .catch((error) => console.error('Error fetching text file:', error));
  };

  const disableMenu = () => {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} /> {/* Make sure to use `element` instead of `Component` */}
          <Route path='/privacyPolicy' element={<PrivacyPolicy />} /> {/* Make sure to use `element` instead of `Component` */}
          <Route path='/app-ads.txt' element={<TextFileDisplay fetchTextFile={fetchTextFile} />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </QueryClientProvider>
  );
}

// Component to display the text file
const TextFileDisplay = ({ fetchTextFile }) => {
  const [textFileContent, setTextFileContent] = useState('');

  useEffect(() => {
    fetchTextFile().then(setTextFileContent);
  }, [fetchTextFile]);

  return <pre>{textFileContent}</pre>; // Using <pre> to preserve formatting
};

export default App;
