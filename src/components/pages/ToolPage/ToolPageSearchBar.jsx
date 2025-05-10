export const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Поиск..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
