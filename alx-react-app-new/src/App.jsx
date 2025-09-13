import Header from "./components/Header";
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" style={{ fontFamily: "Segoe UI, Arial, sans-serif", padding: "16px" }}>
      <Header />
      <WelcomeMessage />
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "flex-start" }}>
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <UserProfile name="Bob" age="30" bio="Frontend dev, coffee lover" />
      </div>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
