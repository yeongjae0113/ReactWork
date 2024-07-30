import React from 'react';

const JoinForm = ({join}) =>  {

    const onJoin = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        console.log(username, password);

        join ({username, password});
    };

    return (
    <div className="form">
        <h2 className="login-title">Join</h2>


        <form className="login-form" onSubmit={(e) => onJoin(e)}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              name="username"
              autoComplete="username"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="current-password"
              required
            />
          </div>     
        
          <button className="btn btn--form btn-login" type="submit">
            Join
          </button>


        </form>
    </div>

    );
};

export default JoinForm;