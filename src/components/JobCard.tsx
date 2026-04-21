import type { JobType } from "../services/getJobs";

export const JobCard = ({ job }: { job: JobType }) => {
  return (
    <div className="job-card">
      <span>
        <b>{job.jobCompanyName}</b>
      </span>
      {" | "}
      <span>{job.jobTitle}</span>
      <span>{new Date(job.jobPostingDate).toLocaleDateString()}</span>
      <a href={job.jobUrl} target="_blank" rel="noopener noreferrer">
        View Job
      </a>
    </div>
  );
};
