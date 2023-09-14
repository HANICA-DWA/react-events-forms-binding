import React, { useState } from "react";
import Logo from "./Logo";
import "./App.css";
import Preferences from "./Preferences";

function App() {
  const [preferences, setPreferences] = useState({
    logoColor: "ochre",
    companyName: "myCompany Name is Marvelous",
  });

  return (
    <div className="App">
      <Logo
        logoColor={preferences.logoColor}
        companyName={preferences.companyName}
      />
      <Preferences
        preferences={preferences}
        setUpstreamPrefs={(prefs) => setPreferences(prefs)}
      />
    </div>
  );
}

export default App;
