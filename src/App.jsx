import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";


function App() {
  return (
      <Routes>
        {/* Halaman dengan Navbar + Footer */}
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/faq"
          element={
            <MainLayout>
              <FaqPage />
            </MainLayout>
          }
        />
        <Route
          path="/kelas"
          element={
            <MainLayout>
              <KelasPage />
            </MainLayout>
          }
        />
        <Route
          path="/syarat"
          element={
            <MainLayout>
              <SyaratKetenPage />
            </MainLayout>
          }
        />
        <Route
          path="/testimonial"
          element={
            <MainLayout>
              <TestimonialPage />
            </MainLayout>
          }
        />

        {/* Halaman tanpa Navbar + Footer */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <LoginPage />
            </AuthLayout>
          }
        />
        <Route
          path="/register"
          element={
            <AuthLayout>
              <RegisterPage />
            </AuthLayout>
          }
        />
      </Routes>
  );
}

export default App;
