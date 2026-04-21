import type { JobType } from "../services/getJobs";

export const sortJobs = (
  type: "newest" | "oldest",
  jobs: JobType[],
) => {
  if (type === "newest") {
    return [...jobs].sort(
      (a, b) =>
        new Date(b.JobPostingDate).getTime() -
        new Date(a.JobPostingDate).getTime(),
    );
  } else {
    return [...jobs].sort(
      (a, b) =>
        new Date(a.JobPostingDate).getTime() -
        new Date(b.JobPostingDate).getTime(),
    );
  }
};
