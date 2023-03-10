import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        const formData = {
            title, 
            amount: `$${amount}`, 
            date: new Date(date)
        };
        props.addNewExpense(formData);
    };

    const onInputChangeHandler = (e, type) => {
        const value = e.target.value;
        switch (type) {
            case 'title':
                setTitle(value);
                break;
            case 'amount':
                setAmount(value);
                break;
            case 'date':
                setDate(value);
                break;
            default:
                console.error('unknown type');
                break;
        }
    };

    return(
        <form action="" onSubmit={onFormSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                    <input type="text" onChange={e => onInputChangeHandler(e, 'title')} value={title} />
                </div>

                <div className='new-expense__control'>
                    <label htmlFor="">Amount</label>
                    <input type="number" onChange={e => onInputChangeHandler(e, 'amount')} value={amount}/>
                </div>

                <div className='new-expense__control'>
                    <label htmlFor="">Date</label>
                    <input type="date" onChange={e => onInputChangeHandler(e, 'date')} value={date}/>
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;