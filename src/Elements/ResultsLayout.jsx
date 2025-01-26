import React from "react";
import { CheckCircle, Clock, HelpCircle, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Example button component (replace with your actual implementation or library)
// const Button = ({ variant = "default", children }) => (
//   <button
//     className={`px-4 py-2 rounded ${
//       variant === "outline"
//         ? "border border-gray-400 text-gray-600"
//         : "bg-blue-500 text-white"
//     }`}
//   >
//     {children}
//   </button>
// );

// Example progress component (replace with your actual implementation or library)
const Progress = ({ value, className }) => (
  <div className={`w-full bg-gray-300 rounded ${className}`}>
    <div
      style={{ width: `${value}%` }}
      className="h-full bg-green-500 rounded"
    ></div>
  </div>
);

const ResultsLayout = ({ totalQuestions, answeredQuestions, correctAnswers, timeFinished }) => {
  const percentageCorrect = (correctAnswers / totalQuestions) * 100;

  const router = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Exam Results</h1>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Total Questions:</span>
            <span className="font-semibold">{totalQuestions}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-600">Answered Questions:</span>
            <div className="flex items-center">
              <HelpCircle className="w-5 h-5 text-blue-500 mr-2" />
              <span className="font-semibold">{answeredQuestions}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-600">Correct Answers:</span>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span className="font-semibold">{correctAnswers}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-600">Incorrect Answers:</span>
            <div className="flex items-center">
              <XCircle className="w-5 h-5 text-red-500 mr-2" />
              <span className="font-semibold">{answeredQuestions - correctAnswers}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-600">Time Finished:</span>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-gray-500 mr-2" />
              <span className="font-semibold">{timeFinished}</span>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Score:</span>
              <span className="font-semibold">{percentageCorrect.toFixed(1)}%</span>
            </div>
            <Progress value={percentageCorrect} className="h-4" />
          </div>
        </div>

        <div className="mt-12 flex justify-center space-x-4">
          <Button variant="outline">Review Answers</Button>
          <Button onClick={() => {router("/")}} >Back to Dashboard</Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsLayout;
