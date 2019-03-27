import styled from 'styled-components';

const DetailStyle = styled.div`
  display: inline-block;
  padding: 20px;
  background-color: #efefef;

  > .picture {
    width: 300px;
    height: 300px;
    margin: 10px;
    border-radius: 50%;
  }

  > .description {
    font-family: Arial;
    font-size: 18px;
  }

  > .button {
    display: block;
    margin: 10px 0;
    padding: 20px;
    color: #fff;
    text-align: center;
    background-color: #111;
    text-decoration: none;
  }
`;

export default DetailStyle;
