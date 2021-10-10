/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import './untils/languages/index';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NetInfo from '@react-native-community/netinfo';
import DropdownAlert from 'react-native-dropdownalert';
import {useTranslation} from 'react-i18next';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar, View } from "react-native";
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import {RootNavigator} from '@navigation';
import {Alert, DropdownMessageHolder} from '@helpers';
import {Loading} from '@components';
const App = () => {
  const {t} = useTranslation();
  // const loading = useSelector(
  //   (state: IRootState) => state.account.loading,
  // ) as boolean;

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        Alert.error(t('noInternet'));
        //dispatch(updateNetwork({network: true}));
      } else {
        //dispatch(updateNetwork({network: false}));
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <View style={{flex: 1}}>
          <StatusBar backgroundColor="transparent" translucent />
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </View>
        <DropdownAlert
          ref={(ref: DropdownAlert) => DropdownMessageHolder.setDropDown(ref)}
          updateStatusBar={false}
          translucent
        />
        {/*{loading && <LoadingView />}*/}
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
