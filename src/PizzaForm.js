import React from 'react'

function PizzaForm(props) {
     const {
         values,
         submit,
         change,
         disabled,
         errors
    } = props

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target
        const useValue = type === 'checkbox' ? checked : value;
        change(name, useValue)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }
    
    return (
        <div className='form-container'>
            <h2>Build Your Own Pizza!</h2>
            <form id='pizza-form' onSubmit={handleSubmit}>
                <div className='errors-div'>
                    <div>{errors.name}</div>
                    <div>{errors.sauce}</div>
                    <div>{errors.extras}</div>
                    <div>{errors.size}</div>
                </div>
                <div className='pizza-name'>
                    <label>Name your Pizza!</label>
                    <input type='text' onChange={onChange} id='name-input' name='name' value={values.pizzaName} placeholder='Name Your Pizza'/> 
                </div>
            <div className='pizza-size'>
                <label>Choose your size</label>
                <select id='size-dropdown'
                    onChange={onChange}
                    value={values.size}
                    name='size'
                >
                <option  value='' > - Select a size - </option>
                <option  value='small' > Small </option>
                <option  value='medium' > Medium </option>
                <option  value='large'> Large </option>
                </select>
            </div>
            <div className='pizza-sauce'>
                <label>Choose your sauce</label>
                <input type='radio' onChange={onChange} checked={values.sauce === 'Ranch'} id='sauce-Ranch' name='sauce' value='Ranch' /> Ranch
                <input type='radio' onChange={onChange} checked={values.sauce === 'BBQ'} id='sauce-BBQ' name='sauce' value='BBQ' /> BBQ
                <input type='radio' onChange={onChange} checked={values.sauce === 'Marinara'} id='sauce-Marinara' name='sauce' value='Marinara' /> Marinara
            </div>
            <div className='pizza-toppings'>
            <label>Choose your toppings</label>
            <input type='checkbox' onChange={onChange} checked={values.cheese} id='topping1' name='cheese' /> Cheese
            <input type='checkbox' onChange={onChange} checked={values.pepperoni} id='topping2' name='pepperoni' /> Pepperoni
            <input type='checkbox' onChange={onChange} checked={values.sausage} id='topping3' name='sausage' /> Sausage
            <input type='checkbox' onChange={onChange} checked={values.onion} id='topping4' name='onion' /> Onion
            <input type='checkbox' onChange={onChange} checked={values.pineapple} id='topping5' name='pineapple' /> Pineapple
            <input type='checkbox' onChange={onChange} checked={values.greenPepper} id='topping6' name='greenPepper' /> Green Pepper
            <input type='checkbox' onChange={onChange} checked={values.brusselSprouts} id='topping7' name='brusselSprouts' /> Brussel Sprouts
            <input type='text' onChange={onChange} id='special-text' name='extras' value={values.extras} placeholder='Add a special Request!'/> 
            </div>
            <div>
                <label>Submit Order!</label>
                <button disabled={disabled} id='order-button'>Order Now!</button>
            </div>
            </form>
        </div>
    )
}
export default PizzaForm
