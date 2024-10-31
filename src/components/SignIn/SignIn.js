import { useState } from 'react';
import './SignIn.css';

export function SignIn({setSignIn}) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (login === 'admin' && password === 'admin') {
      localStorage.setItem('todoList_SignIn', true);
      return setSignIn(true);
    } else {
      document.querySelectorAll('.form__input').forEach((el) => el.classList.add('form__input_wrong'));
    }
  }

	return (
		<form className='form' onSubmit={onSubmit}>
      <span className='form__label'>Выполните вход</span>
      <span className='form__text'>подсказка "admin/admin"</span>
			<input className='form__input' type='text' id='sign-in_login_form' placeholder='Login' onChange={onChangeLogin} autoFocus />
			<input className='form__input' type='password' id='sign-in_password_form' placeholder='Password' onChange={onChangePassword} />
			<button className='form__button-submit' type='submit'>Вход</button>
		</form>
	)
}