import React, { useState, useEffect } from 'react'
import Button from '../../components/button'
import { Title, Span } from '../../components/text'
import Container from '../../components/container'
import { useParams, Link } from 'react-router-dom'
import Form from '../../components/form'
import Icon from '../../components/icon'
import Timer from '../../components/timer'
import { AiOutlineSend } from "react-icons/ai";
import ReactTooltip from 'react-tooltip';

const Game = function () {

    const [inferiorLimit, setInferiorLimit] = useState(1)
    const [upperLimit, setUpperLimit] = useState(1001)
    const [finalGame, setFinalGame] = useState(false)
    const [formTip1, setFormTip1] = useState("")
    const [formTip2, setFormTip2] = useState("")
    const [formTip3, setFormTip3] = useState("")
    const [tip1, setTip1] = useState(false)
    const [tip2, setTip2] = useState(false)
    const [tip3, setTip3] = useState(false)
    const { playerName } = useParams()
    const [numberPlayer, setNumberPlayer] = useState()
    const [counter ,setCounter] = useState(0)
    const [time ,setTime] = useState("00:00:00")
    
    useEffect(() => {
        showNumberPlayer()
        setFinalGame(numberNotExist())
        setCounter(counter + 1)
    }, [upperLimit, inferiorLimit])

    function getTime(value){
        setTime(value)
    }
    
    function numberNotExist() {
        return (upperLimit === inferiorLimit)
    }

    function onClickSmaller() {
        console.log(time)
        if (finalGame) return
        setUpperLimit(numberPlayer)
    }

    function onClickBigger() {
        if (finalGame) return
        setInferiorLimit(numberPlayer + 1)
    }

    function digitSum(num) {
        let total = 0
        const stringNum = num.toString()
        for (var index = 0; index < stringNum.length; index++) {
            total += +stringNum[index]
        }
        return total === formTip1
    }

    function digitProduct(num) {
        let total = 1
        const stringNum = num.toString()
        for (var index = 0; index < stringNum.length; index++) {
            total *= +stringNum[index]
        }
        return total === formTip3
    }

    function numberExist() {
        let inferiorLimitCopy = inferiorLimit + 1
        for (inferiorLimitCopy; inferiorLimitCopy < upperLimit; inferiorLimitCopy++) {
            if ((!tip1 || digitSum(inferiorLimitCopy)) && (!tip2 || inferiorLimitCopy % 2 === formTip2) && (!tip3 || digitProduct(inferiorLimitCopy))) return true
        }
        return false
    }

    function getNumberPlayer() {
        const number = parseInt(Math.random() * (upperLimit - inferiorLimit)) + inferiorLimit
        if ((tip2 && number % 2 !== formTip2) || (tip1 && !digitSum(number)) || (tip3 && !digitProduct(number))) {
            if (numberExist()) return getNumberPlayer()
            return "Error"
        }
        return number
    }

    function showNumberPlayer() {
        setNumberPlayer(getNumberPlayer())
    }

    return (
        <Container flexDirection='column'>
            <Timer getTime = {getTime}/>
            <Title>{`Vamos lá ${playerName}!`}</Title>
            <Span>
                Seu número é
            <br />
                {numberPlayer}
            </Span>
            <Container>
                <Button onClick={onClickSmaller} fontSize='.87rem' marginRight='30px' heigth='33px' width='72px' borderRadius='3px' activedColor='#10309F'>Menor</Button>
                <Link to={{ pathname: "/end", params: { playerName, time, numberPlayer, counter } }}><Button fontSize='.87rem' marginRight='30px' heigth='33px' width='72px' borderRadius='3px' activedColor='#007734'>Acertou</Button></Link>
                <Button onClick={onClickBigger} fontSize='.87rem' heigth='33px' width='72px' borderRadius='3px' activedColor='red'>Maior</Button>
            </Container>
            <Span fontSize='1.2rem'>Que tal dar alguma dica?</Span>
            <Container>
                <Container margin='0px'>
                    <Form
                        disabled={tip1}
                        data-tip=''
                        data-for='form1'
                        placeholder="A soma dos digitos que compoe o número vocês está pesando. (exemplo: 113 -> soma dos digitos = 5)"
                        width='125px'
                        height='30px'
                        borderWidth='1px'
                        borderRadius='3px'
                        fontSize='.85em'
                        paddingRight='30px'
                        borderColor='rgba(0,0,0,0.3)'
                        onChange={e => { setFormTip1(+e.target.value) }}
                        type='number'
                    ></Form>
                    <ReactTooltip id='form1' backgroundColor='#3555AA' arrowColor='transparent' effect='solid' place='bottom' multiline={true}>
                        <Span fontSize='.7rem' textAlign='justify'>
                            A soma dos digitos que compõe<br />
                            o número que vocês está pesando.
                            <br /> (exemplo: 113 {`->`} soma dos
                            <br /> digitos = 5)
                        </Span>
                    </ReactTooltip>
                    <Icon hasText={formTip1 > 0 && !tip1} onClick={() => { if(formTip1 > 0 && !tip1)setTip1(true) }}><AiOutlineSend /></Icon>
                </Container>
                <Container margin='0px'>
                    <Form
                        disabled={tip2}
                        data-tip=''
                        data-for='form2'
                        placeholder="O resto da divisão do seu número por 2. (exemplo: 3 % 2 = 1)"
                        width='125px'
                        height='30px'
                        borderWidth='1px'
                        borderRadius='3px'
                        fontSize='.85em'
                        paddingRight='30px'
                        borderColor='rgba(0,0,0,0.3)'
                        onChange={e => { setFormTip2(+e.target.value) }}
                        type='number'
                    ></Form>
                    <ReactTooltip id='form2' backgroundColor='#3555AA' arrowColor='transparent' effect='solid' place='bottom' multiline={true}>
                        <Span fontSize='.7rem' textAlign='justify'>
                            O resto da divisão do seu número<br />por 2. (exemplo: 3 % 2 = 1)
                        </Span>
                    </ReactTooltip>
                    <Icon hasText={formTip2 >= 0 && !tip2} onClick={() => {if(formTip2 >= 0 && !tip2) setTip2(true) }}><AiOutlineSend /></Icon>
                </Container>
                <Container margin='0px'>
                    <Form
                        disabled={tip3}
                        data-tip=''
                        data-for='form3'
                        placeholder="O produto dos digitos que compoe o número vocês está pesando. (exemplo: 113 -> 1*1*3 = 3)"
                        width='125px'
                        height='30px'
                        borderWidth='1px'
                        borderRadius='3px'
                        fontSize='.85em'
                        paddingRight='30px'
                        borderColor='rgba(0,0,0,0.3)'
                        onChange={e => { setFormTip3(+e.target.value) }}
                        type='number'
                    ></Form>
                    <ReactTooltip id='form3' arrowColor='transparent' backgroundColor='#3555AA' effect='solid' place='bottom' multiline={true}>
                        <Span fontSize='.7rem' textAlign='justify'>
                            O produto dos digitos que compõe<br />o número que vocês está pesando.<br />(exemplo: 113 {`->`} 1*1*3= 3)
                        </Span>
                    </ReactTooltip>
                    <Icon hasText={formTip3 >= 0 && !tip3} onClick={() => { if(formTip3 >= 0 && !tip3) setTip3(true) }}><AiOutlineSend /></Icon>
                </Container>
            </Container>
        </Container>
    )
}

export default Game