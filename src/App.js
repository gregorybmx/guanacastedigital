import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import Cards from "./testData/cards"


function App() {
  return (

      <div>
      <NavbarComponent />
      <div className="Card">
      <Cards/>
      </div>
      <FooterComponent />
      </div>

  );
}

export default App;
