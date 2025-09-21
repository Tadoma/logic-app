import { FC, memo, useCallback } from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import ThemeCard from './ThemeCard.tsx';

type ThemesListProps = {
    themes?: string[];
    selectedTheme?: string;
};
const ThemesList: FC<ThemesListProps> = ({ themes, selectedTheme }) => {
    const renderItem = useCallback<ListRenderItem<string>>(
        ({ item }) => <ThemeCard name={item} selectedTheme={selectedTheme} />,
        [selectedTheme],
    );
    return (
        <FlatList
            style={styles.list}
            data={themes}
            renderItem={renderItem}
            keyExtractor={item => item}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        width: 336,
        marginVertical: 18,
    },
});

export default memo(ThemesList);
