import { useState, useEffect, useMemo } from "react";
import "./App.css";
import { getJobs, type JobType } from "./services/getJobs";
import { getCategories } from "./utils/getCategories";
import { JobLoader } from "./stateManagement/JobLoader";
import { JobError } from "./stateManagement/JobError";
import { JobList } from "./components/JobList";
import { JobSearchInput } from "./components/JobSearchInput";
import { JobSearchCategories } from "./components/JobSearchCategories";
import { JobSortByDate } from "./components/JobSortByDate";

function App() {
  const [jobsData, setJobsData] = useState<JobType[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [sortingType, setSortingType] = useState<"newest" | "oldest">("oldest");
  const filteredJobs = useMemo(() => {
    return jobsData.filter(
      (job) =>
        (job.JobTitle.toLowerCase().includes(searchInput.toLowerCase()) ||
          job.jobCompanyName
            .toLowerCase()
            .includes(searchInput.toLowerCase())) &&
        (!selectedCategory || job.jobCategory === selectedCategory),
    );
  }, [jobsData, searchInput, selectedCategory]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setisLoading(true);
        const jobs = await getJobs();
        setJobsData(jobs);
      } catch {
        setisLoading(false);
        setIsError(true);
      } finally {
        setisLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (isLoading) {
    return <JobLoader />;
  }
  if (isError) {
    return <JobError />;
  }

  const categories = getCategories(jobsData);

  const onSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleClearSearch = () => {
    setSearchInput("");
    setSelectedCategory("");
  };

  console.log("category", selectedCategory);

  return (
    <div>
      <h1>Jobs Board</h1>
      <div className="content">
        <JobSearchInput
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <button onClick={handleClearSearch}>clear</button>
        <JobSearchCategories
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
        />
        <br />
        <JobSortByDate
          sortingType={sortingType}
          setSortingType={setSortingType}
        />

        <JobList jobs={filteredJobs || []} />
      </div>
    </div>
  );
}

export default App;
