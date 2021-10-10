import React, {FunctionComponent} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Loading} from '@components';
import {Icons} from '@contants';
interface OwnProps {}

type Props = OwnProps;

export const Home: FunctionComponent<Props> = props => {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'pink'}}>
      <Icons.Entypo name={'500px'} size={20} />
    </SafeAreaView>
  );
};
