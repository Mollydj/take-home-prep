type RemotiveJobType = {
  id: number;
  url: string;
  title: string;
  company_name: string;
  company_logo: string;
  category: string;
  tags: string[];
  job_type: string;
  publication_date: string;
  candidate_required_location: string;
  salary: string;
  description: string;
  company_logo_url: string;
};

export type JobType = {
  jobId: string;
  jobCompanyName: string;
  jobCategory: string;
  jobPostingDate: string;
  jobTitle: string;
  jobUrl: string;
};

type RemotiveResponse = {
  jobs: RemotiveJobType[];
};

export const getJobs = async (): Promise<JobType[]> => {
  const response = await fetch("https://remotive.com/api/remote-jobs");

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const data: RemotiveResponse = await response.json();

  const normalizedData = data.jobs.map((item: RemotiveJobType) => ({
    jobId: item.id.toString(),
    jobCompanyName: item.company_name,
    jobCategory: item.category,
    jobPostingDate: item.publication_date,
    jobTitle: item.title,
    jobUrl: item.url,
  }));

  return normalizedData;
};
