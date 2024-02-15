import { useState } from 'react';
import { useMutation } from '@apollo/client'

import { ADD_USER } from '../../../../utils/mutations';

const textStyle = {
    color: 'black'
  } 



const SignupForm = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    localStorage.setItem('auth-token', token);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <form className="mb-3" onSubmit={handleFormSubmit}>
      <input 
        className='col-6 m-3 bg-light text-black'
        placeholder="First Name"
        name="firstName"
        type="text"
        value={formState.firstName}
        onChange={handleChange}
      />
      <input
        className='col-6 m-3 bg-light text-black'
        placeholder="Last Name"
        name="lastName"
        type="text"
        value={formState.lastName}
        onChange={handleChange}
      />
      <input
        className='col-6 m-3 bg-light text-black'
        placeholder="Username"
        name="username"
        type="text"
        value={formState.username}
        onChange={handleChange}
      />
      <input
        className='col-6 m-3 bg-light text-black'
        placeholder="Email"
        name="email"
        type="email"
        value={formState.email}
        onChange={handleChange}
      />
      <input
        className='col-6 m-3 bg-light text-black'
        placeholder="Password"
        name="password"
        type="password"
        value={formState.password}
        onChange={handleChange}
      />
      <button className="col-6 my-5 " type="submit">Submit</button>
    </form>
  );
}
export default SignupForm;