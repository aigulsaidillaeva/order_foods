import { Header } from "./components/Header";
import { AvailableMeals } from "./components/meals/AvailableMeals";
import { Meals } from "./components/meals/Meals";
import { Summary } from "./components/Summary";

function App() {
  return (
    <div>
      <Header />
      <Summary />
      <Meals />
      <AvailableMeals />
    </div>
  );
}

export default App;
