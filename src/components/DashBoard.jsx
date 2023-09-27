import { useEffect } from 'react'
import { Box, backdropClasses } from '@mui/material'
import styled from '@emotion/styled'
import Card from './Card';
import { useState } from 'react';


const ParBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-around',
    width : '100%',
    flexWrap : 'wrap'
})

const IndBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',

})
const DashBoard = (props) => {


    const { finalData } = props
    console.log(finalData)
    return (
        <div>
            <ParBox>

                {finalData?.map((ele, ind) => {
                    return (<IndBox key={ind}><h2 style={{textAlign:'center',paddingTop:'1rem'}}>{ele.title}</h2>
                        {ele.value?.map((childEle, ind)=>{
                            return <Card key={ind} title={childEle.title} id={childEle.id} ></Card>
                        })}
                    </IndBox>)
                })}

            </ParBox>
        </div>
    )
}

export default DashBoard
