import './input.css'

export const Input =({placeholder='',value,setValue})=>{
    return <input value={value} onChange={setValue} className='input' type="text" placeholder={placeholder} />
}