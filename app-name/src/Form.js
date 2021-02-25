import React from 'react'

export default function Form(props) {
    const {values, submit, change, disabled, errors} = props
    const onSubmit = evt => {
        evt.preventDefault()
        submit(values)
    }
    console.log(values)
    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='form-submit'>
                <h2>Add a User</h2>

                <div className='form-inputs'>
                    <div>
                    <label>Name&nbsp;
                        <input 
                            value={values.name}
                            onChange={onChange}
                            name='name'
                            type='text'
                        /><br /><br />
                    </label>
                    </div>
                    <div>
                    <label>Email&nbsp;
                        <input 
                            value={values.email}
                            onChange={onChange}
                            name='email'
                            type='text'
                        /><br /><br />
                    </label>
                    </div>
                    <div>
                    <label>Password&nbsp;
                        <input 
                            value={values.password}
                            onChange={onChange}
                            name='password'
                            type='password'
                        />
                    </label>
                    </div>
                    <div>
                    <label>Confirm Password&nbsp;
                        <input 
                            value={values.confirm}
                            onChange={onChange}
                            name='confirm'
                            type='password'
                        /><br />{`(Confirm Password must exactly match Password, or Submit button will not activate)`}<br /><br />
                    </label>
                    </div>
                    <div>
                    <label>{`Accept Terms of Service (required for Submit button to activate)`}
                        <input 
                            checked={values.terms}
                            onChange={onChange}
                            name='terms'
                            type='checkbox'
                        /><br /><br />
                    </label>
                    </div>
                    <button disabled={disabled}>Submit</button>
                    <div className='errors'>
                        <div>{errors.name}</div>
                        <div>{errors.email}</div>
                        <div>{errors.password}</div>
                        <div>{errors.confirm}</div>
                        <div>{errors.terms}</div>
                    </div>

                </div>

            </div>
        </form>
    )
    
}