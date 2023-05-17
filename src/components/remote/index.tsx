import Button from 'src/elements/button/Button';
import useMqtt from 'src/mqtt';
import './index.css';

interface Props {}

const Remote = (props: Props) => {
	const { client, isConnected } = useMqtt();
	const handleClick = (id: string) => {
		console.log('LOG ~ :', 'click', id);
		if (isConnected) {
			client.publish('GsmClientTest/led', id, { qos: 0, retain: true }, (error: any) => {
				if (error) console.log(error);
				else console.log('Published', id);
			});
		}
	};
	return (
		<div className={'remote'}>
			<Button icon={1} label={'button 1'} onClick={() => handleClick('1')} />
			<Button icon={2} label={'button 2'} onClick={() => handleClick('2')} />
			<Button icon={3} label={'button 3'} onClick={() => handleClick('3')} />
			<Button icon={5} label={'button 5'} onClick={() => handleClick('5')} />
			<Button icon={6} label={'button 6'} onClick={() => handleClick('6')} />
			<Button icon={7} label={'button 7'} onClick={() => handleClick('7')} />
		</div>
	);
};
export default Remote;
