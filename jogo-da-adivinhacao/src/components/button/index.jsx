import styled from 'styled-components'

const Button = styled.button`
    background: ${props => (props.disabled ? props.disabledColor : props.activedColor)};
    border-radius: ${props => props.borderRadius || '0px'};
    border: 0px transparent;
    color: ${props => props.color || '#FFF'};
    margin-right : ${props => props.marginRight};
    width: ${props => props.width};
    height: ${props => props.heigth};
    font-size: ${props => props.fontSize};
    cursor: ${props => (props.disabled ? 'not-allowed' :  'pointer')};
    :focus{
      outline: none;
    }
`
export default Button