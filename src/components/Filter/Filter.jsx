import PropTypes from 'prop-types';
import { Margin, Label, Input } from './Filter.styled';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <Margin>
      <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={onChangeFilter} />
      </Label>
    </Margin>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
