import DropdownAlert from "react-native-dropdownalert";
import {isEmpty} from "lodash";

export class DropdownMessageHolder {
  static dropDown: DropdownAlert;
  static setDropDown(dropDown: DropdownAlert) {
    this.dropDown = dropDown;
  }
  static getDropDown() {
    return this.dropDown;
  }
}

export const Alert = {
  error(message: string) {
    if (!isEmpty(message)) {
      DropdownMessageHolder.dropDown.alertWithType(
        "error",
       'Error',
        message,
      );
    }
  },
  //
  // warning(message: string) {
  //   if (!isEmpty(message)) {
  //     DropdownMessageHolder.dropDown.alertWithType(
  //       "warn",
  //       DATA_CONSTANT.ALERT.WARNING,
  //       message,
  //     );
  //   }
  // },
  //
  // success(message: string) {
  //   if (!isEmpty(message)) {
  //     DropdownMessageHolder.dropDown.alertWithType(
  //       "success",
  //       DATA_CONSTANT.ALERT.SUCCESS,
  //       message,
  //     );
  //   }
  // },
};
