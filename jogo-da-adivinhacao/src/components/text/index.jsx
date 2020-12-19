import styled from 'styled-components'

const Title = styled.h1`
    font-size: 1.8rem;
    color: ${props => props.color || '#44903E'};
    font-weight: bold;
    //margin: 0px
`
const Span = styled.span`
    padding-left: ${props => props.paddingLeft};
    font-size: ${props => props.fontSize || '1.6rem'};
    text-align: ${props => props.textAlign || 'center'};;
    margin: 0px;
    color: ${props => props.color};
    display: inline-block;
`

const Descricao = styled.h4`
text-align: center;
`

const Head4 = styled.h4`
    font-weight: 350;
    margin-bottom: 20px;
`

const Head2 = styled.h2`
    font-weight: bold ;
    color:  rgb(21, 109, 18);
    margin-bottom: 0px;
`


export {Title, Span, Descricao, Head4, Head2}