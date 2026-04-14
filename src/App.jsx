import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import ProtectedRoute from "./auth/ProtectedRoute";

import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RoleSelection from "./pages/RoleSelection";
import FresherDashboard from "./pages/FresherDashboard";
import ProfessionalDashboard from "./pages/ProfessionalDashboard";
import ResumeBuildingGuide from "./pages/ResumeBuildingGuide";
import PaymentScanner from "./pages/PaymentScanner";
import ServicesPage from "./pages/ServicesPage";
import UserDataPortal from "./pages/UserDataPortal";
import LearningJourney from "./pages/LearningJourney";
import ServicesShowcase from "./pages/ServicesShowcase";
import FresherCourses from "./pages/FresherCourses";
import ProfessionalCourses from "./pages/ProfessionalCourses";
import NonITFresherDashboard from "./pages/NonITFresherDashboard";
import NonITProfessionalDashboard from "./pages/NonITProfessionalDashboard";
import NonITFresherCourses from "./pages/NonITFresherCourses";
import NonITProfessionalCourses from "./pages/NonITProfessionalCourses";

import ResumeReview from "./pages/services/ResumeReview";
import MockInterview from "./pages/services/MockInterview";
import InterviewPractice from "./pages/services/InterviewPractice";
import CommunicationSkills from "./pages/services/CommunicationSkills";
import CandidateTypeIT from "./pages/CandidateTypeIT";
import CandidateTypeNonIT from "./pages/CandidateTypeNonIT";

export default function App() {
  return (
    <div className="app-bg">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* ✅ First page -> Home */}
            <Route path="/" element={<HomePage />} />

            {/* Candidate Type Pages */}
            <Route path="/candidate-type/it" element={<CandidateTypeIT />} />
            <Route path="/candidate-type/non-it" element={<CandidateTypeNonIT />} />

            {/* Public */}
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/create-account" element={<CreateAccount />} />
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

            {/* Learning Journey */}
            <Route path="/learning-journey" element={<LearningJourney />} />

            {/* Services Showcase */}
            <Route path="/services-showcase" element={<ServicesShowcase />} />

            {/* New Course Pages */}
            <Route path="/fresher-courses" element={<FresherCourses />} />
            <Route path="/professional-courses" element={<ProfessionalCourses />} />
            <Route path="/non-it-fresher-courses" element={<NonITFresherCourses />} />
            <Route path="/non-it-professional-courses" element={<NonITProfessionalCourses />} />

            {/* Non-IT Dashboards */}
            <Route path="/non-it-fresher-dashboard" element={<NonITFresherDashboard />} />
            <Route path="/non-it-professional-dashboard" element={<NonITProfessionalDashboard />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
