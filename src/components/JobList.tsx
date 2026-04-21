import type { JobType } from "../services/getJobs";
import { JobCard } from "./JobCard";

export const JobList = ({ jobs }: { jobs: JobType[] }) => {
  return (
    <div className="job-list-container">
      {jobs.map((job) => (
        <JobCard
          job={job}
        />
      ))}
    </div>
  );
};
