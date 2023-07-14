import { useState, useEffect } from "react"
import Users from './components/Users.jsx'


// Instructions:
function App() {
  // 1. Use a react hook to create some state called users with an initial value of an empty Array.
  const [users, setUsers] = useState([])

  
  // 2. Use the endpoint https://jsonplaceholder.typicode.com/users to get data
  // 3. Use a hook to make the API request when the app loads. 
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data)
    }
    getData()
  }, [])
  // 4. Create Users and UserItem components
  
  
  if (users.length < 1) {
    return (
      <div className="container">
        <h1>See instructions commented out in App.jsx!</h1>
      </div>
    )
  } else {
    // 5. Pass down the users state into the Users component, loop through it, and render UserItem components
    // 6. Add event listeners to each UserItem, that when clicked will console.log() that UserItems unique ID
    return(
      <div>
      <Users users={users} />
      </div>
    )
  }
}

export default App
