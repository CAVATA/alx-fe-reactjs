// src/App.jsx
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent>
        <UserProfile
          name="Jane Kavata"
          age={24}
          bio="BSc Applied Mathematics student — I love data, making body care products, and web development."
        />
      </MainContent>
      <Footer />
    </div>
  );
}

export default App;
