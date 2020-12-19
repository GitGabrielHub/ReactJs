import styled from 'styled-components'

const Icon = styled.i`
    position: relative;
    right: 22px;
    bottom: 5px;
    color: #aaa;
    cursor: ${props => (!props.hasText ? 'auto' :  'pointer')};
`

export default Icon