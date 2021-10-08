import {BASE_URL} from './endPoint';
import AsyncStorage from '@react-native-async-storage/async-storage';

type servicesType = {
  query?: string;
  input?: object;
  onSuccess?: (res: unknown) => void;
  onError?: (err: any) => void;
  token?: string;
  method?: any;
};
const axios = require('axios');

async function FETCH({query, input, onError, onSuccess, method}: servicesType) {
  const token = await AsyncStorage.getItem('jwt');
  const dataService = JSON.stringify({
    query: query,
    variables: {
      input: input,
    },
  });
  const config = {
    method,
    url: BASE_URL,
    timeout: 5000,
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    data: dataService,
  };

  axios(config)
    .then((res: any) => {
      onSuccess && onSuccess(res);
    })
    .catch((err: any) => {
      if (err.message == 'Network Error' || err.code == 'ECONNABORTED') {
      }
      onError && onError(err);
    });
}

const POST = (data: servicesType) => {
  data.method = 'post';
  return FETCH(data);
};

export default {POST};
