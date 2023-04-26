import PropTypes from 'prop-types';
import { Form, Label, Select } from './Filter.styled';

export default function Filter({ onFilterChange }) {
  const handleSubmit = evt => {
    evt.preventDefault();
    const filterValue = evt.target.value;
    onFilterChange(filterValue);
  };

  return (
    <>
      <Form>
        <Label htmlFor="filter">Filter by:</Label>
        <Select id="filter" name="filter" onChange={handleSubmit}>
          <option value="all">Show all</option>
          <option value="follow">Follow</option>
          <option value="following">Following</option>
        </Select>
      </Form>
    </>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
