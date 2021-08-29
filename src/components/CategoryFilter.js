import PropTypes from 'prop-types';
import categories from '../utilities/categories';

const styles = {
  select: {
    outline: 'none',
    border: 'none',
    textTransform: 'uppercase',
    opacity: 0.5,
    fontFamily: 'Montserrat',
    fontSize: '0.813rem',
    letterSpacing: '1.9px',
    color: '#121212',
  },
};

export default function CategoryFilter({ filter, changeFilter }) {
  const handleFilterChange = (evt) => changeFilter(evt.target.value);

  return (
    <select style={styles.select} value={filter} onChange={handleFilterChange}>
      <option value="All">Categories</option>
      {categories.map((filter) => <option key={filter} value={filter}>{filter}</option>)}
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
