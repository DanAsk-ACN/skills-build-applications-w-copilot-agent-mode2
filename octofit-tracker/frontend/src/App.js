
import logo from './logo.svg';


function App() {
  return (
    <div className="container mt-4 App">
      <nav className="navbar navbar-expand-lg mb-4">
        <span className="navbar-brand">
          <img src={logo} alt="Octofit Logo" className="App-logo" />
          OctoFit Tracker
        </span>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/" element={<Activities />} />
      </Routes>
    </div>
  );
}

export default App;
