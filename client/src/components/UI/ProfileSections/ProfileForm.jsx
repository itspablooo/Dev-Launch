import { useState } from 'react';
import { useMutation } from '@apollo/client'

import { ADD_USER } from '../../../../utils/mutations';


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
    <form onSubmit={handleFormSubmit}>
      <input
        placeholder="Username"
        name="username"
        type="text"
        value={formState.username}
        onChange={handleChange}
      />
      <input
        placeholder="Email"
        name="email"
        type="email"
        value={formState.email}
        onChange={handleChange}
      />
      <input
        placeholder="Password"
        name="password"
        type="password"
        value={formState.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default SignupForm;