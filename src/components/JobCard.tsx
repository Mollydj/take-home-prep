import type { JobType } from "../services/getJobs";

export const JobCard = ({ job }: { job: JobType }) => {
  return (
    <div className="job-card">
      <span>
        <b>{job.jobCompanyName}</b>
      </span>
      {" | "}
      <span>{job.JobTitle}</span>
      <span>{new Date(job.JobPostingDate).toLocaleDateString()}</span>
      <a href={job.JobUrl} target="_blank" rel="noopener noreferrer">
        View Job
      </a>
    </div>
  );
};
