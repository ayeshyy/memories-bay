import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Home from "./components/Home/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import Auth from "./components/Auth/Auth.js";

const App = () => {
  return (
    // new google oauth method;
    <GoogleOAuthProvider clientId="849385711013-lbm8datv5vol6g0uj1nos526hpcensq9.apps.googleusercontent.com">
      <BrowserRouter>
        <Container maxWidth="lg">
        {/* setting all routes here */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
