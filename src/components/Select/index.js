import React from 'react';
import Select from 'react-select';

const selectStyles = {
  option: (styles, { isDisabled, isFocused }) => ({
    ...styles,
    backgroundColor: isDisabled ? null : isFocused ? '#dbdbdb' : '#e9e9e9',
    color: 'black'
  }),
  control: styles => ({
    ...styles,
    backgroundColor: '#e9e9e9',
    border: 'none',
    ':active': {
      border: 'none'
    },
    ':hover': {
      border: 'none'
    },
    boxShadow: 'none'
  }),
  menuList: styles => ({
    ...styles,
    backgroundColor: '#e9e9e9',
    paddingTop: 0,
    paddingBottom: 0
  })
};

const CustomSelect = props => <Select {...props} styles={selectStyles} />;

export default CustomSelect;
