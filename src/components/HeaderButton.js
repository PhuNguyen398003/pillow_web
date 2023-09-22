import React from 'react'

export default function HeaderButton(props) {

    const { attributes , style , children , clicking } = props

    

  return (
    <>
        <div className='header_btn_div'>
            <div { ...attributes } style={style} onClick={clicking} >
                { children }
            </div>
        </div>
    </>
  )
}
