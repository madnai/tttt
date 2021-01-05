import React, { useState } from 'react';

const EmailListForm = (props) => {

  const [email, setEmail] = useState('');

  return (
    <form name="contact"  method="POST" data-netlify="true" action={props.action} >
      <input type="hidden" name="form-name" value="contact" />

        <h1 style={{fontSize: '1.5em', marginBottom: '0.5714em'}}>Jestem zainteresowany!</h1>
        <div className="field" style={{display: 'inline-flex'}}>
            <div className="control">
                <input
                    class="input"
                    placeholder="Twój email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <button class="button is-black" 
                    style={{backgroundColor: 'black', color: 'white'}} 
                    type="submit">Wyślij</button>
        </div>
        </form>
);
};

export default EmailListForm;