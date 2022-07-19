import { Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import { Link } from 'react-router-dom';

function Veggie() {
    const [veggie, setVeggie] = useState([])

    useEffect(() => {
        getVeggie();
    }, [])

    const check = localStorage.getItem('veggie')

    const getVeggie = async () => {
        if (check) {
            setVeggie(JSON.parse(check))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarians`)
            const data = await api.json();
            localStorage.setItem('veggie', JSON.stringify(data.recipes))
            setVeggie(data.recipes)
            console.log("CAlled API")
        }

    }

    return (
        <div>
            <Typography variant={'h4'}>Our vegetarians Picks</Typography>
            <Splide options={{
                perPage: 3,
                drag: 'free',
                gap: '5rem',
                type: 'loop',
                pagination: false,
                direction: 'ltr',
                wheel: true,
                releaseWheel: true,
                wheelMinThreshold: 5,
                arrows: false
            }}>
                {veggie.map(item => {
                    return (
                        <SplideSlide key={item.id}>
                            <Link to={`/recipe/${item.id}`}>
                                <Box sx={{ borderRadius: '2rem', minHeight: '25rem', overflow: 'hidden', position: 'relative' }}>
                                    <Typography variant='h6' sx={{
                                        position: 'absolute',
                                        zIndex: 1,
                                        left: '50%',
                                        bottom: '30%',
                                        transform: 'translate(-50%,0%)',
                                        width: '100 %',
                                        color: 'white',
                                        fontWeight: 600,

                                    }}>
                                        {item.title}
                                    </Typography>
                                    <img src={item.image} style={
                                        {
                                            borderRadius: '2rem',
                                            width: '400px',
                                            height: '300px',
                                            left: 0,
                                            position: 'absolute',
                                            objectFit: 'cover'
                                        }} />
                                </Box>
                            </Link>
                        </SplideSlide>
                    )
                })}
            </Splide>

        </div >
    )
}

export default Veggie