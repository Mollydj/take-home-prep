export const JobSearchInput = ({
  searchInput,
  setSearchInput,
}: {
  searchInput: string;
  setSearchInput: (input: string) => void;
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
