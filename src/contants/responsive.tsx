import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;

// develop on iPhone 11
export const BASE_WIDTH = 414;
export const BASE_HEIGHT = 896;

const wRatio = SCREEN_WIDTH / BASE_WIDTH;
const hRatio = SCREEN_HEIGHT / BASE_HEIGHT;

export const wScale = (size: number, minFactor: number = 0.9) => {
  const minSize = size * minFactor;
  const scaledSize = wp(((100 * size) / BASE_WIDTH) * wRatio);
  return Math.floor(scaledSize > minSize ? scaledSize : minSize);
};

export const hScale = (size: number, minFactor: number = 0.9) => {
  const minSize = size * minFactor;
  const scaledSize = hp(((100 * size) / BASE_HEIGHT) * hRatio);
  return Math.ceil(scaledSize > minSize ? scaledSize : minSize);
};

export const fontScale = (size: number) => {
  return RFValue(size);
};
