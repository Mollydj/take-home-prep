import type { RemotiveJobType } from "../services/getJobs";

export const getCategories = (jobs: RemotiveJobType[]) => {
  return [...new Set(jobs.map((item) => item.jobCategory))].sort();

};
