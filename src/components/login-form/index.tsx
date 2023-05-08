import { useHistory } from 'react-router-dom';
import './index.css';
interface Props {}

const LoginForm = (props: Props) => {
	const history = useHistory();

	const handleClick = () => {
		console.log('LOG ~ :', 'login');
		history.push('/home');
	};
	return (
		<div className={'login-form'}>
			<div className={'login-form__input'}>
				<input type="text" placeholder={'Username'} />
			</div>
			<div className={'login-form__input'}>
				<input type="password" placeholder={'Password'} />
			</div>
			<button className={'login-form__button'} onClick={handleClick}>
				Login
			</button>
		</div>
	);
};
export default LoginForm;
