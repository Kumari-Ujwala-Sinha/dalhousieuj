import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactComponent from "./components/Contact/ContactComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import HomeComponent from "./components/Home/HomeComponent";
import ServiceComponent from "./components/Services/SeviceComponent";
import NavbarComponent from "./components/Navbar/Navbar";
import Products from "./components/technology/Products";
import Whatsapp from "./components/whatsapp/Whatsapp";
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/technology" component={Products}/>
          <Route exact path="/contact" component={ContactComponent} />
          <Route exact path="/services" component={ServiceComponent} />
        </Switch>
        <FooterComponent />
        <Whatsapp />
      </BrowserRouter>
    </div>
  );
}

export default App;
