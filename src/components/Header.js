import React from 'react'
import HeaderButton from './HeaderButton'



export default function Header() {

    const action_onclick = (event) => console.log(event.target.textContent)

  return (
    <>
    <div className='header_title'>
        Gối Phú Khánh
    </div>
    <div className='header border'>
        <HeaderButton 
            attributes = {{
                className : 'header_btn' ,
                
            }}
            clicking = {action_onclick}
        >
            Home
        </HeaderButton>
        <HeaderButton 
            attributes = {{
                className : 'header_btn' ,
                
            }}
            clicking = {action_onclick}
        >
            About
        </HeaderButton>
        <HeaderButton 
            attributes = {{
                className : 'header_btn' ,
            }}
            clicking = {action_onclick}
        >
            Contact
        </HeaderButton>
        <HeaderButton 
            attributes = {{
                className : 'header_btn' ,
            }}
            clicking = {action_onclick}
        >
            Order
        </HeaderButton>
    </div>
    </>
  )
}
