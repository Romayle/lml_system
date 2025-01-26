import "./App.css";
import CoursesPage from "./App/CoursesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Elements/Layout";
import ExamsPage from "./App/ExamsPage";
import SignUpPage from "./App/SignUpPage";
import SignInPage from "./App/SignInPage";
import ExamPage from "./App/ExamPage";
import ExamLayout from "./Elements/ExamLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/courses" element={<Layout pageContent={<CoursesPage />} pageName={"View Courses"} />} />
        <Route path="/exams" element={<Layout pageContent={<ExamsPage />} pageName={"View Exams"} />} />
        <Route path="/exam" element={<ExamLayout pageContent={<ExamPage />} />} />
      </Routes>
    </Router>
  );
}

export default App;
