import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useMqtt from 'src/mqtt';
import './index.css';
interface Props {}

const LoginForm = (props: Props) => {
	const history = useHistory();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { client, isConnected } = useMqtt();

	useEffect(() => {
		if (!isConnected) return;
		client.subscribe('LoginSuccess', (err: any) => {
			if (err) {
				alert('Login failed');
				return;
			}
			history.push('/home');
		});
	}, []);

	const handleLogin = (e: any) => {
		e.preventDefault();
		console.log('LOG ~ handleLogin ~ isConnected:', isConnected);
		if (!isConnected) return;

		client.publish('GsmClientTest/led', `${username}:${password}`, { qos: 0, retain: true }, (error: any) => {
			if (error) {
				console.log(error);
				return;
			}
			console.log('LOG ~ :', 'Login');
		});
	};
	return (
		<form onSubmit={handleLogin}>
			<div className={'login-form'}>
				<div className={'login-form__input'}>
					<input
						type="text"
						placeholder={'Username'}
						value={username}
						required
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className={'login-form__input'}>
					<input
						type="password"
						placeholder={'Password'}
						value={password}
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button className={'login-form__button'} type="submit">
					Login
				</button>
			</div>
		</form>
	);
};
export default LoginForm;
