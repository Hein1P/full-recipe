import { Typography, Button, List, ListItem } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const style1 = {
    backgroundColor: '#3f3f3f',
    color: 'white',
    "&.MuiButtonBase-root:hover": {
        backgroundColor: "black"
    }
}
const style2 = {
    color: 'inherit',
    "&.MuiButtonBase-root:hover": {
        backgroundColor: "black"
    }
}
function Recipe() {
    const [detail, setDetail] = useState({})
    const [active, setActive] = useState('')
    const recipeName = useParams();
    useEffect(() => {
        fetchDetails(recipeName.name)
    }, recipeName)
    const fetchDetails = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detailData = await data.json();
        setDetail(detailData);
        console.log(detailData)
    }
    console.log("Actvie", active)
    return (
        <Container sx={{ marginTop: '4rem', display: 'flex', gap: 20 }} maxWidth='xl'>
            <Box>
                <Typography variant='h5' sx={{ marginBottom: '2rem' }}>
                    {detail.title}
                </Typography>
                <img src={detail.image} width={'400px'} height={'300px'} />
            </Box>
            <Box>
                <div style={{ color: '#3f3f3f' }}>
                    <Button variant="outlined" color='inherit' onClick={() => setActive('instructions')}
                        sx={active == 'instructions' ? style1 : style2}>
                        Instructions
                    </Button>
                    <div style={{ marginLeft: '2rem', display: 'inline' }}>
                        <Button variant="outlined" onClick={() => setActive('ingredients')}
                            color='inherit'
                            sx={active == 'ingredients' ? style1 : style2}>
                            Ingredients
                        </Button>
                    </div>
                </div>

                {active == 'instructions' ?
                    <div>
                        <Typography variant={'h6'} component={'p'} sx={{ textAlign: 'justify', marginTop: '2rem' }}>
                            <p dangerouslySetInnerHTML={{ __html: detail.instructions }}></p>

                        </Typography>
                        <Typography variant={'h6'} component={'p'} sx={{ textAlign: 'justify', marginTop: '2rem' }}>
                            <p dangerouslySetInnerHTML={{ __html: detail.summary }}></p>
                        </Typography>
                    </div>

                    : active == 'ingredients' ?
                        <Typography variant={'h6'} component={'p'} sx={{ textAlign: 'justify', marginTop: '2rem' }}>
                            <List sx={{ listStyleType: 'disc' }}>
                                {detail.extendedIngredients.map(item => {
                                    return (<ListItem key={item.id} sx={{ display: 'list-item' }}>
                                        {item.original}
                                    </ListItem>)
                                })}
                            </List>
                        </Typography> : ''}

            </Box>
        </Container >
    )
}

export default Recipe