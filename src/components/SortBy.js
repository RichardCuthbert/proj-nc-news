const SortBy = (props) => {
  const { sortBy, setSortBy } = props;
  const optionsToSortBy = [
    {
      label: "Date created",
      value: "created_at",
    },
    {
      label: "Comment count",
      value: "comment_count",
    },
    {
      label: "Votes",
      value: "votes",
    },
  ];

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div>
      <label>
        Sort by{" "}
        <select defaultValue="created_at" onChange={(e) => handleSortBy(e)}>
          {optionsToSortBy.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default SortBy;
