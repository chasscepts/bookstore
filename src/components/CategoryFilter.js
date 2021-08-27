import PropTypes from 'prop-types';
import categories from '../utilities/categories';

const filters = ['All', ...categories];

export default function CategoryFilter({ filter, changeFilter }) {
  const handleFilterChange = (evt) => {
    changeFilter(evt.target.value);
  };

  return (
    <select value={filter} onChange={handleFilterChange}>
      {filters.map((filter) => <option key={filter} value={filter}>{filter}</option>)}
    </select>
  );
}

CategoryFilter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func.isRequired,
};

CategoryFilter.defaultProps = {
  filter: 'All',
};
