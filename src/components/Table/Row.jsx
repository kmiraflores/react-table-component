import React, {useState, useEffect} from "react";

const Row = ({rowData}) => {
    const [isHovered, setIsHovered] =  useState(false)

    const style = {
        row: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: '4px 4px 0px 0px',
            minHeight: '48px',
            width: '1073px',
            borderBottom: '1px solid #EBEBEB',
            background: isHovered ? '#FBFBFB' : '#FFFFFF'
        },

        td: {
            width: '120px',
        },

        tdWithBackground: {
            background: (rowData.actual < 70) ? '#ED5E61' : '#59B77A',
            borderRadius: '5px',
            color: '#FFFFFF',
            width: '120px',
        },
    }
    
    return (
                <tr style={style.row} onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <td style={{flexGrow: 1}}></td>
                    <td style={
                        {   
                            display: 'flex',
                            justifyContent: 'flex-start',
                            flexGrow: 15,
                        }
                    }>
                        {rowData.name}
                    </td>

                    <td style={style.td}>{`${rowData.target}%`}</td>
                    <td style={style.tdWithBackground}>{`${rowData.actual}%`}</td>
                    <td style={style.td}>{rowData.points}</td>
                </tr>
            )
        
}

Row.ReactPropTypes = {
    rowData: Object
}

export default Row