import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage";
import UserDataPortal from "./pages/UserDataPortal";
import LearningJourney from "./pages/LearningJourney";
import ServicesShowcase from "./pages/ServicesShowcase";
import FresherCourses from "./pages/FresherCourses";
import ProfessionalCourses from "./pages/ProfessionalCourses";
import NonITFresherCourses from "./pages/NonITFresherCourses";
import NonITProfessionalCourses from "./pages/NonITProfessionalCourses";
import TaskDescription from "./pages/TaskDescription";
import ResumeBuildingTask from "./pages/Tasks/ResumeBuildingTask";
import TechnicalInterviewTask from "./pages/Tasks/TechnicalInterviewTask";
import LinkedInTask from "./pages/Tasks/LinkedInTask";
import CareerRoadmapTask from "./pages/Tasks/CareerRoadmapTask";
import JobSearchTask from "./pages/Tasks/JobSearchTask";
import CourseEnrollment from "./pages/CourseEnrollment";
import SystemDesignTask from "./pages/Tasks/SystemDesignTask";
import AdvancedTechnicalTask from "./pages/Tasks/AdvancedTechnicalTask";
import CareerAdvancementTask from "./pages/Tasks/CareerAdvancementTask";
import TechLeadershipTask from "./pages/Tasks/TechLeadershipTask";
import PaymentPage from "./pages/PaymentPage";
import SuccessPage from "./pages/SuccessPage";
import EmailTestPage from "./pages/EmailTestPage";

import CandidateTypeIT from "./pages/CandidateTypeIT";
import CandidateTypeNonIT from "./pages/CandidateTypeNonIT";
import FresherInterviewTypes from "./pages/FresherInterviewTypes";
import ProfessionalInterviewTypes from "./pages/ProfessionalInterviewTypes";
import NonITFresherInterviewTypes from "./pages/NonITFresherInterviewTypes";
import NonITProfessionalInterviewTypes from "./pages/NonITProfessionalInterviewTypes";

export default function App() {
  return (
    <div className="app-bg">
      <BrowserRouter>
        <Routes>
          {/* ✅ First page -> Home */}
          <Route path="/" element={<HomePage />} />

          {/* Candidate Type Pages */}
          <Route path="/candidate-type/it" element={<CandidateTypeIT />} />
          <Route path="/candidate-type/non-it" element={<CandidateTypeNonIT />} />

          {/* Public Pages */}
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/data" element={<UserDataPortal />} />

          {/* Learning Journey */}
          <Route path="/learning-journey" element={<LearningJourney />} />

          {/* Services Showcase */}
          <Route path="/services-showcase" element={<ServicesShowcase />} />

          {/* Course Pages */}
          <Route path="/fresher-courses" element={<FresherCourses />} />
          <Route path="/professional-courses" element={<ProfessionalCourses />} />
          <Route path="/non-it-fresher-courses" element={<NonITFresherCourses />} />
          <Route path="/non-it-professional-courses" element={<NonITProfessionalCourses />} />

          {/* Task Description Pages */}
          <Route path="/task/:taskId" element={<TaskDescription />} />
          <Route path="/task/resume-building" element={<ResumeBuildingTask />} />
          <Route path="/task/technical-interview" element={<TechnicalInterviewTask />} />
          <Route path="/task/linkedin" element={<LinkedInTask />} />
          <Route path="/task/career-roadmap" element={<CareerRoadmapTask />} />
          <Route path="/task/job-search" element={<JobSearchTask />} />
          <Route path="/task/system-design" element={<SystemDesignTask />} />
          <Route path="/task/advanced-technical" element={<AdvancedTechnicalTask />} />
          <Route path="/task/career-advancement" element={<CareerAdvancementTask />} />
          <Route path="/task/tech-leadership" element={<TechLeadershipTask />} />

          {/* Course Enrollment Pages */}
          <Route path="/enrollment/:courseId" element={<CourseEnrollment />} />

          {/* Interview Types Selection */}
          <Route path="/fresher-interview-types" element={<FresherInterviewTypes />} />
          <Route path="/professional-interview-types" element={<ProfessionalInterviewTypes />} />
          <Route path="/non-it-fresher-interview-types" element={<NonITFresherInterviewTypes />} />
          <Route path="/non-it-professional-interview-types" element={<NonITProfessionalInterviewTypes />} />

          {/* Payment Routes */}
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/success" element={<SuccessPage />} />

          {/* Email Test Route */}
          <Route path="/email-test" element={<EmailTestPage />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
