import './App.css';
import BarChart from "./components/BarChart"
import UserProfiles from "./components/UserProfiles"

function App() {
  return (
    <div className="App">

      <header className="App-header">
        HEADER
      </header>

      <h1>Student Dashboard</h1>
      <div>
        <h1>BarChart</h1>
        <BarChart />
      </div>

      <div>
        <h1>User Profiles</h1>
        <UserProfiles />
      </div>

    </div>
  );
}

export default App;