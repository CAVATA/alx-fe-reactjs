
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <MainContent>
        <UserProfile name="Jane Kavata Kyalo" age={28} bio="Loves coding, soaps and design." />
        {/* Add more content here */}
      </MainContent>
      <Footer />
    </div>
  );
}

export default App;
