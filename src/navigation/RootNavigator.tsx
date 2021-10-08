import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SCREENS} from "@configs";
import {Home} from "@container";

export type RootParamList = {
    [SCREENS.HOME]: undefined;

};

const RootStack = createNativeStackNavigator<RootParamList>();

export function RootNavigator() {
    return (
        <RootStack.Navigator
            initialRouteName={SCREENS.HOME}
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
            }}
        >
            <RootStack.Screen name={SCREENS.HOME} component={Home} />

        </RootStack.Navigator>
    );
}
