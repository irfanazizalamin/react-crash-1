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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      {/* "*" is to catch all other routes */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  // we can only return a single component, so if there's more than one, add () "parenthesis" and wrap in single root
  // we can use <></> to be a wrapper
  return <RouterProvider router={router} />;
};

export default App;
