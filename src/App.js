import "./App.css";
import Quiz from "./components/Quiz";
import QuizHome from "./components/QuizHome";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

function App() {
  /////////////////////////////////////////////////////////////////
   const router = createBrowserRouter([
    {
      path: "/",
      element: <QuizHome />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
