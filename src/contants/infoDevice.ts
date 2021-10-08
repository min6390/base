import {useState} from 'react';
import DeviceInfo from 'react-native-device-info';
const infoDevice = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [deviceName, setDeviceName] = useState<string>();
  DeviceInfo.getDeviceName().then(device => {
    setDeviceName(device);
  });
  const deviceId = DeviceInfo.getUniqueId();
  return {
    deviceName,
    deviceId,
  };
};
export default infoDevice;
