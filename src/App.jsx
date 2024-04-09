// It's the main component

// for routing system in react
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/404";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";

const App = () => {
  const addJob = async (newJob) => {
    const response = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    const data = await response.json();
    console.log(data);
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
        {/* "*" is to catch all other routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  // we can only return a single component, so if there's more than one, add () "parenthesis" and wrap in single root
  // we can use <></> to be a wrapper
  return <RouterProvider router={router} />;
};

export default App;
