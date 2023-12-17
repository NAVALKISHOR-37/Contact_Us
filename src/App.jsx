import "./App.css";
import Form from "./components/ContactForm/Form";
import Contact from "./components/ContactHeder/Contact";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <Contact />
        <Form />
      </main>
    </div>
  );
}

export default App;
