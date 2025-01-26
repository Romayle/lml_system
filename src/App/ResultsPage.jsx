import ResultsLayout from "@/Elements/ResultsLayout";

const ResultsPage = () => {
  return (
    <ResultsLayout
      totalQuestions={20}
      answeredQuestions={18}
      correctAnswers={15}
      timeFinished="12:45 PM"
    />
  );
};

export default ResultsPage;
