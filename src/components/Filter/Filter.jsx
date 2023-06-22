import { Formik } from 'formik';

import { FilterContainer, InputSearch } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <Formik>
      <FilterContainer>
        <InputSearch
          placeholder="Search Contact"
          onChange={handleChangeFilter}
          value={value}
        />
      </FilterContainer>
    </Formik>
  );
};

export default Filter;
