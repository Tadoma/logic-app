import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FC, memo } from 'react';
import {
    OPACITY_20_COLOR,
    WHITE_COLOR,
} from '../../../constants/colors.constants.ts';
import { typography } from '../../../constants/typography.constants.ts';
import DownPointerIcon from '../../../icons/DownPointerIcon.tsx';
import { ALL_THEMES } from '../../themes/constants/themes.contants.ts';

type DashboardThemeButtonProps = {
    onPress: () => void;
    selectedTheme?: string;
};
const DashboardThemesButton: FC<DashboardThemeButtonProps> = ({
    onPress,
    selectedTheme,
}) => {
    return (
        <Pressable style={styles.themesButton} onPress={onPress}>
            <Text style={styles.themesButtonText}>
                {selectedTheme ?? ALL_THEMES}
            </Text>
            <View style={styles.iconContainer}>
                <DownPointerIcon />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    themesButton: {
        paddingLeft: 10,
        paddingRight: 5,
        gap: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        height: 28,
        backgroundColor: OPACITY_20_COLOR,
    },
    themesButtonText: {
        color: WHITE_COLOR,
        ...typography[12],
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 18,
        width: 18,
        backgroundColor: OPACITY_20_COLOR,
        borderRadius: 40,
    },
});

export default memo(DashboardThemesButton);
