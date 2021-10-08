import React, {FunctionComponent} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import { useTranslation } from 'react-i18next';
import {Loading} from "@components";

interface OwnProps {}

type Props = OwnProps;

export const Home: FunctionComponent<Props> = props => {
  const {t} = useTranslation();

  return <SafeAreaView style={{flex: 1}} >
   <Loading/>
  </SafeAreaView>
};
