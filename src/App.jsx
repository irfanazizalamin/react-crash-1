// It's the main component

import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import Navbar from "./components/Navbar";
import ViewAllJobs from "./components/ViewAllJobs";


const App = () => {
  // we can only return a single component, so if there's more than one, add () "parenthesis" and wrap in single root
  // we can use <></> to be a wrapper
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default App;
