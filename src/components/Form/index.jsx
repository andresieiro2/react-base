import React from 'react';

import FormStyled from './style';

function Form({ children, onSubmit }) {
  return <FormStyled onSubmit={onSubmit}>{children}</FormStyled>;
}

export default Form;
