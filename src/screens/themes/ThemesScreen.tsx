import { FC, memo, useMemo } from 'react';
import ThemesHeader from './components/ThemesHeader.tsx';
import { StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteType } from '../../navigation/navigation.models.ts';
import ThemesList from './components/ThemesList.tsx';
import { ALL_THEMES } from './constants/themes.contants.ts';

const ThemesScreen: FC = () => {
    const routeParams = useRoute<RouteType<'Themes'>>().params;
    const themes = useMemo(
        () => [ALL_THEMES, ...(routeParams?.themes ?? [])],
        [routeParams?.themes],
    );
    return (
        <View style={styles.container}>
            <ThemesHeader />
            <ThemesList
                themes={themes}
                selectedTheme={routeParams?.selectedTheme}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 48, alignItems: 'center' },
});

export default memo(ThemesScreen);
