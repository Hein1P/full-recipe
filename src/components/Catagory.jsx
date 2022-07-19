import { List, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

const iconStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    background: 'linear-gradient(35deg,#bebebe,#d3d3d3)',
    width: '7rem',
    height: '7rem',
    cursor: 'pointer',
    transform: 'scale(0.8)',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 500,
}
function Catagory() {
    return (
        <List sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
            <NavLink to={'/cuisine/Italian'} style={iconStyle}>
                <FaPizzaSlice style={{ fontSize: '2rem' }} />
                <Typography variant='body' sx={{ color: 'white' }}>Italian</Typography>
            </NavLink>

            <NavLink to={'/cuisine/american'} style={iconStyle}>
                <FaHamburger style={{ fontSize: '2rem' }} />
                <Typography variant='body' sx={{ color: 'white' }}>Ameriacan</Typography>
            </NavLink>

            <NavLink to={'/cuisine/thai'} style={iconStyle}>
                <GiNoodles style={{ fontSize: '2rem' }} />
                <Typography variant='body' sx={{ color: 'white' }}>Thai</Typography>
            </NavLink>

            <NavLink to={'/cuisine/chinese'} style={iconStyle}>
                <GiChopsticks style={{ fontSize: '2rem' }} />
                <Typography variant='body' sx={{ color: 'white' }}>Chinese</Typography>
            </NavLink>
        </List>

    )
}

export default Catagory