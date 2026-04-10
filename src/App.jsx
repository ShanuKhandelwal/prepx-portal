
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import ProtectedRoute from "./auth/ProtectedRoute";

import WelcomePage from "./pages/WelcomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RoleSelection from "./pages/RoleSelection";
import FresherDashboard from "./pages/FresherDashboard";
import ProfessionalDashboard from "./pages/ProfessionalDashboard";
import ResumeBuildingGuide from "./pages/ResumeBuildingGuide";
import PaymentScanner from "./pages/PaymentScanner";
import ServicesPage from "./pages/ServicesPage";
import UserDataPortal from "./pages/UserDataPortal";

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
            {/* ✅ First page -> Welcome */}
            <Route path="/" element={<WelcomePage />} />

            {/* Public */}
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/data" element={<UserDataPortal />} />

            {/* Protected */}
            <Route
              path="/register"
              element={
                <ProtectedRoute>
                  <RoleSelection />
                </ProtectedRoute>
              }
            />

            <Route
              path="/fresher"
              element={
                <ProtectedRoute>
                  <FresherDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/professional"
              element={
                <ProtectedRoute>
                  <ProfessionalDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/resume-building"
              element={
                <ProtectedRoute>
                  <ResumeBuildingGuide />
                </ProtectedRoute>
              }
            />

            <Route
              path="/payment-scanner"
              element={
                <ProtectedRoute>
                  <PaymentScanner />
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
