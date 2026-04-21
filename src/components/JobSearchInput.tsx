export const JobSearchInput = ({
  searchInput,
  setSearchInput,
}: {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <input
      type="text"
      placeholder="Search for a job..."
      onChange={(e) => setSearchInput(e.target.value)}
      value={searchInput}
    />
  );
};
