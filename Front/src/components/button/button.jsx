/* eslint-disable react/prop-types */
import  './button.css'

export const Button =({name='',onClick})=>{
    return <button className="btn" onClick={onClick}>{name}</button>
}