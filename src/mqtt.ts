import mqtt from 'mqtt/dist/mqtt';
import { useEffect, useState } from 'react';

const initUrl = 'ws://broker.emqx.io:8083/mqtt';
const initOptions = {
	clean: true,
	connectTimeout: 4000,
	clientId: 'emqx_test',
	username: 'mobile',
	password: 'mobile488456',
};

const useMqtt = (url = initUrl, options = initOptions) => {
	const [client, setClient] = useState<any>();
	const connect = () => {
		const client = mqtt.connect(url, options).on('connect', () => {
			console.log('LOG ~ :', 'MQTT connected');
		});
		setClient(client);
	};
	useEffect(() => {
		connect();
	}, []);
	return {
		isConnected: !!client,
		client,
		connect,
	};
};

export default useMqtt;
