import React from 'react'
import CustomTable from './Table.jsx'

const Row = ({row}) => {
    const keys = Object.keys(row)
    return (
        <tr key={row.placing}>
            {keys.map(key =>  <td key = {key}>{row[key] || key}</td>)}
        </tr>
    )
}

const rowsNames = {
    placing : "#",
    name : "Nome",
    time : "Tempo",
    attempts : "Chutes",
    answer : "Resposta",
}

const Table = ({ data }) => {
    const keys = data.length === 0 ? [] : Object.keys(data[0])
    return (
        <CustomTable>
            <thead>
                <tr>
                    {keys.map(key => <th key={key}>{rowsNames[key] || key}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map(row => <Row key = {row.placing} row = {row}/>)}
            </tbody>
        </CustomTable>
    )
}

export default Table