import type { JobType } from "../services/getJobs";

export const sortJobs = (
  type: "newest" | "oldest",
  jobs: JobType[],
) => {
  if (type === "newest") {
    return [...jobs].sort(
      (a, b) =>
        new Date(b.jobPostingDate).getTime() -
        new Date(a.jobPostingDate).getTime(),
    );
  } else {
    return [...jobs].sort(
      (a, b) =>
        new Date(a.jobPostingDate).getTime() -
        new Date(b.jobPostingDate).getTime(),
    );
  }
};
