import React, {FunctionComponent} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';
import Colors from '../../contants/Colors';
interface OwnProps {}

type Props = OwnProps;
export const Loading: FunctionComponent<Props> = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={Colors.black} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.transparent,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
