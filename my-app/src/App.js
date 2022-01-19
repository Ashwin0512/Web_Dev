import React, { useState } from "react";
import './App.css'
import Dashboard from "./components/Dashboard";
import DashboardContent from "./components/DashboardContent";
import DashboardNav from "./components/DashboardNav";
import WelcomeMessage from "./components/WelcomeMsg";

function App() {
  
  const [username, setUsername] = useState('Ashwin')

  return(
      <>
        <Dashboard>
          <DashboardNav />
          <DashboardContent />
          <WelcomeMessage user={username} />
        </Dashboard>
      </>
  )
}

export default App; 