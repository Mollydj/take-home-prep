import { useEffect, useState } from "react";
import { getJobs, type JobType } from "../services/getJobs";

export const useJobs = () => {
  const [jobsData, setJobsData] = useState<JobType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
    useEffect(() => {
      const fetchJobs = async () => {
        try {
          setIsLoading(true);
          const jobs = await getJobs();
          setJobsData(jobs);
        } catch {
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchJobs();
    }, []);
  return { jobsData, isLoading, isError };
};