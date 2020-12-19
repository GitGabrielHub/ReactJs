import React, { Component } from 'react'
import Divider from '../../components/divider'
import Button from '../../components/button'
import Form from '../../components/form'
import Table from '../../table'
import { Link } from 'react-router-dom'
import Container from '../../components/container'
import {Descricao, Head2} from '../../components/text'

export default class HomePage extends Component {

    state = {
        playerName: "",
        isButtonEnabled: true,
        index: 0,
    }

    constructor(props) {
        super(props)
        this.data = props.data
    }

    changePlayerName = (name) => {
        this.setState({ playerName: name, isButtonEnabled: name.length === 0 })
    }

    onClickNext = () => {
        this.setState({ index: this.state.index + 5 })
    }

    onClickBack = () => {
        this.setState({ index: this.state.index - 5 })
    }

    render() {

        return (
            <Container display = 'flex' alignItems = 'center'>
                <Container flexDirection="column" width='350px'>
                    <Head2> Jogo da Adivinhação</Head2>
                    <Descricao >
                        Pense em um número de 1 a 1000, e eu irei adivinha-lo, vamos ver quantas tentativas precisarei para desvenda-lo!
            </Descricao>
                    <Form borderWidth = '2px' placeholder="Qual o seu nome?" onChange={e => { this.changePlayerName(e.target.value)}} paddingLeft = '25px' fontSize = '.85em' />
                    <Link to={`/game/${this.state.playerName}`}>
                        <Button
                            disabled={this.state.isButtonEnabled}
                                                        borderRadius='3px'
                            width='236px'
                            heigth='50px'
                            fontSize='1.4rem'
                            disabledColor='#44BB0055'
                            activedColor='#007734'
                        >
                            COMEÇAR!
                </Button>
                    </Link>

                </Container>

                <Divider />

                <Container flexWrap = 'nowrap' flexDirection="column" alignItems = 'flex-start' height = '420px'>
                    <Head2> Os melhores desafiantes, até agora...</Head2>

                    <Table data={this.data.slice(this.state.index, this.state.index + 5)} />
                    <Container  alignItems = "flex-end" width = '515.5px'>
                        <Button
                            disabled={this.state.index === 0}
                            onClick={this.onClickBack}
                            disabledColor='#b0c9e6'
                            activedColor='#0e44a7'
                            width='93.44px'
                            heigth='35px'
                            fontSize='.95rem'
                            marginRight='.5em'
                        >
                            Anterior
                    </Button>
                        <Button
                            disabled={this.state.index + 5 >= this.data.length}
                            onClick={this.onClickBack}
                            disabledColor='#b0c9e6'
                            activedColor='#0e44a7'
                            width='93.44px'
                            heigth='35px'
                            fontSize='.95rem'
                            onClick={this.onClickNext}
                        >
                            Proximo
                    </Button>
                    </Container>

                </Container>
            </Container>
        )
    }
}