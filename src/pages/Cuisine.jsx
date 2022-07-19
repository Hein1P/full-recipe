import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Grid from '@mui/material/Grid';
import { Card, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    const cuisineName = useParams();
    useEffect(() => {
        getCuisine(cuisineName.type);
    }, [cuisineName])
    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipe = await data.json()
        setCuisine(recipe.results)
    }
    return (
        <div>
            <Grid container spacing={2}>
                {cuisine.map(item => {
                    return (
                        <Grid item xs={3} key={item.id}>
                            <Link to={`/recipe/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                <Box sx={{ borderRadius: '2rem', minHeight: '300px', overflow: 'hidden', position: 'relative' }}>
                                    <img src={item.image} style={
                                        {
                                            borderRadius: '',
                                            width: '380px',
                                            height: '300px',
                                            left: 0,
                                            position: 'absolute',
                                            objectFit: 'cover'
                                        }} />
                                </Box>
                                <Typography variant={'h6'} sx={{ textAlign: 'center' }}>
                                    {item.title}
                                </Typography>
                            </Link>

                        </Grid>
                    )
                })}

            </Grid>
        </div>
    )
}

export default Cuisine