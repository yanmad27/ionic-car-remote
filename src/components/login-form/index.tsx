import { useHistory } from 'react-router-dom';
import useMqtt from 'src/mqtt';
import './index.css';
interface Props {}

const LoginForm = (props: Props) => {
	const history = useHistory();
	const { client } = useMqtt();

	const handleClick = () => {
		console.log('LOG ~ :', 'login');
		client.publish('GsmClientTest/led', 'login', { qos: 0, retain: true }, (error: any) => {
			if (error) {
				console.log(error);
				return;
			}
			history.push('/home');
			console.log('Published', 'login');
		});
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
