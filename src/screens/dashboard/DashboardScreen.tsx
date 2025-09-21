import { FC, memo, useCallback, useMemo, useRef } from 'react';
import {
    ActivityIndicator,
    FlatList,
    ListRenderItem,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {
    BACKGROUND_COLOR,
    GREEN_COLOR,
    WHITE_COLOR,
} from '../../constants/colors.constants.ts';
import { Course } from '../../api/dashboard/dashboard.models.ts';
import DashboardCard from './components/DashboardCard.tsx';
import { typography } from '../../constants/typography.constants.ts';
import DashboardThemesButton from './components/DashboardThemesButton.tsx';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
    NavigationType,
    RouteType,
} from '../../navigation/navigation.models.ts';
import { useCourses } from './hooks/useCourses.ts';

const DashboardScreen: FC = () => {
    const flatListRef = useRef<FlatList>(null);
    const navigation = useNavigation<NavigationType>();
    const routeParams = useRoute<RouteType<'Dashboard'>>().params;

    const { courses, tags, isLoading, error } = useCourses(
        routeParams?.selectedTheme,
    );

    const renderItem = useCallback<ListRenderItem<Course>>(
        ({ item }) => <DashboardCard course={item} />,
        [],
    );

    const handleThemesPress = useCallback(
        () =>
            navigation.navigate('Themes', {
                themes: tags,
                selectedTheme: routeParams?.selectedTheme,
            }),
        [navigation, routeParams?.selectedTheme, tags],
    );

    const content = useMemo(() => {
        if (isLoading) {
            return <ActivityIndicator size="large" color={GREEN_COLOR} />;
        }

        if (error) {
            return <Text style={styles.text}>error</Text>;
        }

        return (
            <>
                <DashboardThemesButton
                    selectedTheme={routeParams?.selectedTheme}
                    onPress={handleThemesPress}
                />
                <FlatList
                    ref={flatListRef}
                    horizontal
                    removeClippedSubviews
                    contentContainerStyle={styles.list}
                    keyExtractor={item => item.id}
                    data={courses}
                    renderItem={renderItem}
                    onContentSizeChange={() =>
                        flatListRef.current?.scrollToIndex({
                            index: 0,
                            animated: true,
                        })
                    }
                    ListEmptyComponent={
                        <Text style={styles.text}>Тут пусто...</Text>
                    }
                />
            </>
        );
    }, [
        courses,
        error,
        handleThemesPress,
        isLoading,
        renderItem,
        routeParams?.selectedTheme,
    ]);

    return <View style={styles.container}>{content}</View>;
};

const styles = StyleSheet.create({
    text: {
        color: WHITE_COLOR,
        ...typography[18],
    },
    container: {
        flex: 1,
        padding: 32,
        alignItems: 'center',
        backgroundColor: BACKGROUND_COLOR,
    },
    list: {
        alignItems: 'center',
    },
});

export default memo(DashboardScreen);
