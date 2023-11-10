import './App.css'
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./Components/Common/Topbar"
import ProSidebar from "./Components/Common/ProSidebar";
import {Routes, Route} from "react-router-dom";
import Team from "./Components/Team/Team"
import Dashboard from "./Components/Dashboard/Dashboard"
import React from "react";
import Contacts from "./Components/Contacts/Contacts";
import Invoices from "./Components/Invoices/Invoices";
import ProfileForm from "./Components/ProfileForm/ProfileForm";
import Calendar from "./Components/Calendar/Calendar";
import Faq from "./Components/Faq/Faq";


function App() {
  const [theme, colorMode] = useMode();

  return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <div className="app">
              <ProSidebar/>
            <main className="content">
              <Topbar/>
              <Routes>
                 <Route path = "/" element={<Dashboard/>}></Route>
                 <Route path="/team" element={<Team/>}></Route>
                 <Route path="/contacts" element={<Contacts/>}></Route>
                 <Route path="/invoices" element={<Invoices/>}></Route>
                 <Route path="/profile" element={<ProfileForm/>}></Route>
                 <Route path="/calendar" element={<Calendar/>}></Route>
                 <Route path="/faq" element={<Faq/>}></Route>

              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
  );
}

export default App;
