import React from 'react'
import Container from '../../components/container'
import Button from '../../components/button'
import { Title, Span } from '../../components/text'
import { useLocation, Link } from 'react-router-dom'


const End = () => {

    const playerName = useLocation().params.playerName
    const time = useLocation().params.time
    const counter = useLocation().params.counter
    const numberPlayer = useLocation().params.numberPlayer
    
    return (
        <Container flexDirection='column'>
            <Title color='black'>
                {`${playerName} seu resultado final foi`}
            </Title>
            <Container marginBottom = '0px'>
                <Span fontSize='1.2rem' color = '#44903E'>Tempo:</Span>
                
                <Span paddingLeft = '5px' fontSize='1.2rem'>{time}</Span>
            </Container>
            <Container marginBottom = '0px'>
                <Span fontSize='1.2rem' color = '#44903E'>Tentativa(s):</Span>

                <Span paddingLeft = '5px' fontSize='1.2rem'>{counter}</Span>
            </Container>
            <Container marginBottom = '30px'>
                <Span fontSize='1.2rem' color = '#44903E'>Número certo:</Span>

                <Span paddingLeft = '5px' fontSize='1.2rem'>{numberPlayer}</Span>
            </Container>
            <Link to='/'>
                <Button
                    fontSize=' .85rem'
                    borderRadius='3px'
                    width='200px'
                    heigth='50px'
                    disabledColor='#44BB0055'
                    activedColor='#007734'
                >
                    JOGAR NOVAMENTE
                </Button>
            </Link>
        </Container>
    )
}

export default End