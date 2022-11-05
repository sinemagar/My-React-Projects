import { useState } from 'react';
import './App.css';
import UserDetails from './components/UserDetails';
import UsersList from './components/UsersList';

function App() {
  const [activeUserId, setActiveUserId] = useState(null)
  return (
    <div className="App">

      <div>
        <UsersList setActiveUserId={setActiveUserId} />
      </div>
      <div>
        {activeUserId &&
          <UserDetails activeUserId={activeUserId} />
        }
      </div>
    </div>
  );
}

export default App;
