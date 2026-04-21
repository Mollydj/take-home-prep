import type { JobType } from "../services/getJobs";

export const getCategories = (jobs: JobType[]) => {
  return [...new Set(jobs.map((item) => item.jobCategory))].sort();

};
