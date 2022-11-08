import "./global.css";
import { Card } from "./Card";
import { Header } from "./Header";
import img1 from "./image/icon1.png"
import img2 from "./image/icon2.png"
import img3 from "./image/icon3.png"
import img4 from "./image/icon4.png"
// import logo from "./image/ironhack-logo-xs.png"
// import menu from "./image/menu-top-xs.png"



function App() {
  return (
    <>
      <Header />
      <div>
        <Card title="Declarative" description="React makes it painless to create interactive UIs." src={img1} alt="icon1"/>
        <Card title="Components" description="Build encapsulated components that anage theis state." src={img2} alt="icon2"/>
        <Card title="Single-Way" description="A set of immutable values are passed to the component's." src={img3} alt="icon3"/>
        <Card title="JSX" description="Statically-typed, designed to run on modern browsers." src={img4} alt="icon4"/>
      </div>
    </>
  );
}

export default App;
