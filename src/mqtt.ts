import mqtt from 'mqtt/dist/mqtt';
import { useEffect, useRef, useState } from 'react';

const initUrl = 'ws://broker.emqx.io:8083/mqtt';
const initOptions = {
	clean: true,
	connectTimeout: 4000,
	clientId: 'emqx_test',
	username: 'mobile',
	password: 'mobile488456',
	reconnectPeriod: 0,
};

const useMqtt = (url = initUrl, options = initOptions) => {
	const [client, setClient] = useState<any>();
	const isFirstConnect = useRef(true);
	const connect = () => {
		if (client) return;
		const newClient = mqtt.connect(url, options);
		console.log('LOG ~ connect ~ newClient:', newClient);
		setClient(newClient);
	};
	useEffect(() => {
		if (isFirstConnect.current) {
			isFirstConnect.current = false;
			connect();
		}
	}, []);
	return {
		isConnected: !!client,
		client,
		connect,
	};
};

export default useMqtt;
