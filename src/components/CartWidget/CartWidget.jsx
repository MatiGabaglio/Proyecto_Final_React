import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Icon } from '@mui/material'
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <div>
    <Link to="/compra" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Badge 
        badgeContent={4} 
        color="primary"
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
            <Icon
                size="large"
                edge="start"
                aria-label="menu"
                color='inherit'
                sx={{ mr: 2 }}
            >
                <ShoppingCartOutlinedIcon />
            </Icon>
        </Badge>
        </Link>
    </div>
  )
}

export default CartWidget
