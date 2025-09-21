import { FC, memo } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { typography } from '../../../constants/typography.constants.ts';
import {
    GREEN_COLOR,
    GREY_COLOR_COLOR_2,
    LIGHT_GREY_COLOR_2,
    WHITE_COLOR,
} from '../../../constants/colors.constants.ts';
import { cn } from '../../../utils/style.utils.ts';
import { useNavigation } from '@react-navigation/native';
import { NavigationType } from '../../../navigation/navigation.models.ts';
import { ALL_THEMES } from '../constants/themes.contants.ts';

type ThemeCardProps = {
    name: string;
    selectedTheme?: string;
};
const ThemeCard: FC<ThemeCardProps> = ({
    name,
    selectedTheme = ALL_THEMES,
}) => {
    const isActive = selectedTheme === name;
    const navigation = useNavigation<NavigationType>();
    const handlePress = () =>
        navigation.popTo('Dashboard', { selectedTheme: name });
    return (
        <Pressable
            style={cn(styles.card, isActive && styles.activeCard)}
            onPress={handlePress}
        >
            <Text style={cn(styles.text, isActive && styles.activeText)}>
                {name}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        marginBottom: 6,
        borderRadius: 12,
        borderColor: LIGHT_GREY_COLOR_2,
        borderWidth: 2,
        paddingHorizontal: 18,
        paddingVertical: 15,
    },
    activeCard: {
        backgroundColor: GREEN_COLOR,
        borderColor: GREEN_COLOR,
    },
    text: {
        color: GREY_COLOR_COLOR_2,
        ...typography[18],
    },
    activeText: {
        color: WHITE_COLOR,
    },
});

export default memo(ThemeCard);
