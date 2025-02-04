import PropTypes from "prop-types";

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      Filter shown with:{" "}
      <input
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contacts..."
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
