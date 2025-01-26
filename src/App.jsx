import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CoursesPage from "./App/CoursesPage";
import ExamPage from "./App/ExamPage";
import ExamsPage from "./App/ExamsPage";
import SignInPage from "./App/SignInPage";
import SignUpPage from "./App/SignUpPage";
import ExamLayout from "./Elements/ExamLayout";
import Layout from "./Elements/Layout";
import { Toaster } from "./components/ui/toaster";
import ResultsPage from "./App/ResultsPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/" element={<Layout pageName={"Dashboard"} />} />
          <Route
            path="/courses"
            element={
              <Layout pageContent={<CoursesPage />} pageName={"View Courses"} />
            }
          />
          <Route
            path="/exams"
            element={
              <Layout pageContent={<ExamsPage />} pageName={"View Exams"} />
            }
          />
          <Route
            path="/exam"
            element={<ExamLayout pageContent={<ExamPage />} />}
          />

          <Route
            path="/results"
            element={<ResultsPage />}
          />
        </Routes>
      </Router>

      <Toaster />
    </>
  );
}

export default App;
