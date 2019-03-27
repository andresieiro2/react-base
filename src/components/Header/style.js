import styled from 'styled-components';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-item: center;

  background-color: #efefef;
  height: 105px;
  position: relative;

  img {
    align-self: center;
  }

  .btn-logout {
    position: absolute;

    right: 30px;
    top: 50%;
    transform: translate(0, -50%);

    cursor: pointer;
  }
`;

export default HeaderStyle;
