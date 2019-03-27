import React from 'react';

import ButtonStyle from './style';

function Button({ handleClick, label }) {
  return (
    <ButtonStyle onClick={handleClick} type="submit">
      {label}
    </ButtonStyle>
  );
}

export default Button;
