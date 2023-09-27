import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const MyCard = styled(Card)({
    backgroundColor:'#333333',
    color:'#ffffff',
    width : '400px',
    minWidth:'275px',
    margin : '2rem',
    height : '15rem',
})

export default function BasicCard(props) {
  const {id,title} = props;
  return (
    <MyCard sx={{ maxWidth: 275 }}>
      <CardContent>
        <h3 style={{fontWeight:300}}>{id}</h3>
        <Typography>{title}</Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </MyCard>
  );
}
