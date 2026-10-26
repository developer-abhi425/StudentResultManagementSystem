import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./pages/Home/Home";

import CollegeSelection from "./pages/Auth/CollegeSelection";
import RegistrationForm from "./pages/Auth/RegistrationForm";
import Login from "./pages/Auth/Login";

import SubscriptionPlans from "./pages/Subscription/SubscriptionPlans";
import SubscriptionApplication from "./pages/Subscription/SubscriptionApplication";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =====================================================
            HOME PAGE
        ===================================================== */}

        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />

        {/* =====================================================
            LOGIN
        ===================================================== */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* =====================================================
            SUBSCRIPTION PLANS
        ===================================================== */}

        <Route
          path="/subscription/plans"
          element={<SubscriptionPlans />}
        />

        {/* =====================================================
            SUBSCRIPTION APPLICATION
        ===================================================== */}

        <Route
          path="/subscription/apply"
          element={<SubscriptionApplication />}
        />

        {/* =====================================================
            REGISTRATION - COLLEGE SELECTION
        ===================================================== */}

        <Route
          path="/register/college"
          element={<CollegeSelection />}
        />

        {/* =====================================================
            REGISTRATION - FORM
        ===================================================== */}

        <Route
          path="/register/form"
          element={<RegistrationForm />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;