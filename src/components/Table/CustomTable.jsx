import React, {useState, useEffect} from "react";
import Row from "./Row";
import { ReactPropTypes } from "react";

const CustomTable = ({data , headers}) => {
    const [tableData, setTableData] = useState(data)
    const [headerData, setHeaderData] = useState(headers)
 
    const style = {
        root: {
            marginTop: '100px',
            minWidth: '1073px',
        },

        table: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px',
            fontSize: '14px', 
            font: 'Open Sans',
            color: '#5A5A5A',
            background: '#FFFFFF',
            borderRadius: '4px',
        },

        header: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: '4px 4px 0px 0px',
            background: '#F8F8F8',
            height: '48px',
            width: '1073px',
        },

        body: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',

            width: '1073px',
            height: '420px',
        },
    }


    console.log(`tableData: ${JSON.stringify(tableData)}`)
    
    return (
        <div style={style.root}>
            <table style={style.table}>
                <thead>
                    <tr style={style.header}>
                        <th style={{flexGrow: 1}}></th>
                        {   
                            headerData.map((head, index) => {
                                return <th 
                                    style={(index === 0)? {
                                        flexGrow: 15,
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                    } : {
                                        flexGrow: 1
                                    }} 
                                    key={`headerKey-${head}`}>{head}</th> 
                            })
                        }
                    </tr>
                </thead>
                <tbody style={style.body}>
                    {tableData.map(person => <Row key={`rowkey-${person.name}`} rowData={person}></Row>)}
                </tbody>
            </ table>
        </div>
    )
}

CustomTable.ReactPropTypes ={
    data: Array,
    header: Array
}

export default CustomTable


