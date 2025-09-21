import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/dashboard/DashboardScreen.tsx';
import { createStaticNavigation } from '@react-navigation/native';
import ThemesScreen from '../screens/themes/ThemesScreen.tsx';
import { MainStackParamListType } from './navigation.models.ts';

const Stack = createNativeStackNavigator<MainStackParamListType>({
    screens: {
        Dashboard: DashboardScreen,
        Themes: ThemesScreen,
    },
    screenOptions: {
        orientation: 'landscape',
        headerShown: false,
    },
});

export const AppNavigation = createStaticNavigation(Stack);
