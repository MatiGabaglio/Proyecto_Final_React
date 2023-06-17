import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Icon } from '@mui/material'
import Badge from '@mui/material/Badge';

const CartWidget = () => {
  return (
    <div>
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
    </div>
  )
}

export default CartWidget
