import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/landingPage/LandingPage';
import AboutUs from './pages/Apropos/AboutUs';
import Services from './pages/Service/Services';
import Contact from './pages/Contact/Contact_us';
import Products from './pages/Products/Products';
// import Blog from './pages/Blog/Blog';
// import BlogPost from './pages/BlogPost/BlogPost';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="App flex flex-col min-h-screen">
          <Header />
          <Suspense fallback={<LoadingScreen />}>
            <main className="flex-grow pt-24">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Products />} />
                {/* <Route path="/blog" element={<Blog />} /> */}
                {/* <Route path="/blog/:id" element={<BlogPost />} /> */}
              </Routes>
            </main>
          </Suspense>
          <Footer />
          <ScrollToTop />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
