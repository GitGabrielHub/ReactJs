import styled from 'styled-components'


const Form = styled.input`
    ::-webkit-input-placeholder{
      color:rgba(0,0,0,0.3)
      
    }
    [type = "number"] {  
       -moz-appear: textfield; 
    }
    ::-webkit-inner-spin-button, 
    ::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
    background-color: ${props => props.disabled ? "rgba(0,0,0,0.1)" :  "none"};
    font-size: ${props => props.fontSize || '1em'};
    border: 0px solid  ${props => props.borderColor || '#10206B'};
    border-radius: ${props => props.borderRadius || '0px'};
    border-width:  ${props => props.borderWidth || '0px'};
    width: ${props => props.width || '200px'};
    height: ${props => props.height || '50px'};
    padding-left: ${props => props.paddingLeft || '10px'};
    padding-right: ${props => props.paddingRight || '10px'};
    margin-bottom: 15px;
    
    :focus{
      outline: none;
    }
  `;

export default Form