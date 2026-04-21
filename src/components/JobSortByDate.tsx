export const JobSortByDate = ({
  sortingType,
  setSortingType,
}: {
  sortingType: "newest" | "oldest";
  setSortingType: (category: "newest" | "oldest") => void;
}) => {
  return (
    <div className="sort-buttons">
      <button
        disabled={sortingType === "newest"}
        onClick={() => setSortingType("newest")}
      >
        Newest First
      </button>
      <button
        disabled={sortingType === "oldest"}
        onClick={() => setSortingType("oldest")}
      >
        Oldest First
      </button>
    </div>
  );
};
