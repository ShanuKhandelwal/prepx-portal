
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import ProtectedRoute from "./auth/ProtectedRoute";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RegistrationPage from "./pages/RegistrationPage";
import ServicesPage from "./pages/ServicesPage";

import ResumeReview from "./pages/services/ResumeReview";
import MockInterview from "./pages/services/MockInterview";
import InterviewPractice from "./pages/services/InterviewPractice";
import CommunicationSkills from "./pages/services/CommunicationSkills";

export default function App() {
  return (
    <div className="app-bg">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* ✅ First page -> Login */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            {/* Public */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected */}
            <Route
              path="/register"
              element={
                <ProtectedRoute>
                  <RegistrationPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/services"
              element={
                <ProtectedRoute>
                  <ServicesPage />
                </ProtectedRoute>
              }
            />

            {/* Service pages */}
            <Route
              path="/services/resume-review"
              element={
                <ProtectedRoute>
                  <ResumeReview />
                </ProtectedRoute>
              }
            />
            <Route
              path="/services/mock-interview"
              element={
                <ProtectedRoute>
                  <MockInterview />
                </ProtectedRoute>
              }
            />
            <Route
              path="/services/interview-practice"
              element={
                <ProtectedRoute>
                  <InterviewPractice />
                </ProtectedRoute>
              }
            />
            <Route
              path="/services/communication-skills"
              element={
                <ProtectedRoute>
                  <CommunicationSkills />
                </ProtectedRoute>
              }
            />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
