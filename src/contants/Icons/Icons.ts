import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';

const icoMoonConfig = require('./selection.json');
const CharityIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  'icomoon.ttf',
);

export const Icons = {
  AntDesign: AntDesign,
  Entypo: Entypo,
  EvilIcons: EvilIcons,
  Fontisto: Fontisto,
  Feather: Feather,
  FontAwesome: FontAwesome,
  FontAwesome5Icon: FontAwesome5Icon,
  Foundation: Foundation,
  Ionicons: Ionicons,
  MaterialIcons: MaterialIcons,
  MaterialCommunityIcons: MaterialCommunityIcons,
  Octicons: Octicons,
  Zocial: Zocial,
  SimpleLineIcons: SimpleLineIcons,
  CharityIcon: CharityIcon,
};
