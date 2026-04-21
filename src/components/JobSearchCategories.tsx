export const JobSearchCategories = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}) => {
  return (
    <div className="category-buttons">
      <button onClick={() => onSelectCategory("")} type="reset">
        Clear filter
      </button>
      <br />
      {categories?.map((category) => (
        <button
          disabled={category === selectedCategory}
          onClick={() => onSelectCategory(category)}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
