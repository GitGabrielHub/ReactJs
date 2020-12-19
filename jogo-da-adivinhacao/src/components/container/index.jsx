import styled from 'styled-components'


const Container = styled.div`
    justify-content: ${props => props.alignItems || 'center'};
    margin: ${props => props.marginTop ||'10px'} 0px ${props => props.marginBottom ||'10px'} 0px;
    align-items: center;
    flex-wrap: ${props => props.flexWrap || 'wrap'};
    flex-direction: ${props => props.flexDirection || 'row'};
    display: flex;
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
`
export default Container
