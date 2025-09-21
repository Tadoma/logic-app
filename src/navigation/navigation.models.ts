import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Course } from '../api/dashboard/dashboard.models.ts';

export type NavigationType = NativeStackNavigationProp<MainStackParamListType>;

export type RouteType<T extends keyof MainStackParamListType> = RouteProp<
    MainStackParamListType,
    T
>;

export type MainStackParamListType = {
    Dashboard: {
        selectedTheme?: string;
    };
    Themes: {
        themes: Course['tags'];
        selectedTheme?: string;
    };
};
