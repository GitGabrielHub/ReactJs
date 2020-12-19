import styled from 'styled-components'

const CustomTable = styled.table`

margin:16px 0px 20px 0px;
font-size: 1.05rem;
    border-collapse: collapse;
    table,
    th,
    td {
        border-bottom: 1px solid green;
        
    }
    th,
    td,
    tr {
        padding: 15px 29px;
        text-align: left;
    }
    th {
        text-align: left;
    }
    table {
        width: 100%;
    }
`;

export default CustomTable