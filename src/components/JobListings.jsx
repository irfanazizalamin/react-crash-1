import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: why is this must be create as a function then called below?
    const fetchJobs = async () => {
      const queryParams = isHome ? "_limit=3" : "";

      try {
        const response = await fetch(
          `api/jobs?${queryParams}`
        );
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Job"}
          </h2>
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.length &&
                jobs.map((job) => <JobListing key={job.id} job={job} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default JobListings;
