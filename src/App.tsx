import { useState, useMemo } from "react";
import "./App.css";
import { getCategories } from "./utils/getCategories";
import { JobLoader } from "./stateManagement/JobLoader";
import { JobError } from "./stateManagement/JobError";
import { JobList } from "./components/JobList";
import { JobSearchInput } from "./components/JobSearchInput";
import { JobSearchCategories } from "./components/JobSearchCategories";
import { JobSortByDate } from "./components/JobSortByDate";
import { sortJobs } from "./utils/sortJobs";
import { useJobs } from "./hooks/useJobs";

function App() {

  const { jobsData, isLoading, isError } = useJobs();
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [sortingType, setSortingType] = useState<"newest" | "oldest">("oldest");
  const filteredJobs = useMemo(() => {
    return sortJobs(sortingType, jobsData.filter(
      (job) =>
        (job.JobTitle.toLowerCase().includes(searchInput.toLowerCase()) ||
          job.jobCompanyName
            .toLowerCase()
            .includes(searchInput.toLowerCase())) &&
        (!selectedCategory || job.jobCategory === selectedCategory),
    ));
  }, [jobsData, searchInput, selectedCategory, sortingType]);



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
