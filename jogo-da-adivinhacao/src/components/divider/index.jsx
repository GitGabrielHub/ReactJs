import styled from 'styled-components'

const Divider = styled.span`
    display: flex;
    //margin-bottom: 120px;
    width: 0px;
    height: 400px;
    background-color: rgb(8, 58, 6);
    margin: 25px 30px 25px 5px; 
    border-left: 1.5px solid rgb(8, 58, 6);

    @media (max-width: 800px) {
        width: 400px;
        height: 1.5px;
  }
`
export default Divider
