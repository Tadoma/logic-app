import { FC, memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CrossIcon from '../../../icons/CrossIcon.tsx';
import { typography } from '../../../constants/typography.constants.ts';
import { useNavigation } from '@react-navigation/native';
import { NavigationType } from '../../../navigation/navigation.models.ts';
import { GREY_COLOR_COLOR_2 } from '../../../constants/colors.constants.ts';

const ThemesHeader: FC = () => {
    const navigation = useNavigation<NavigationType>();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Выбор темы</Text>
            </View>
            <CrossIcon
                height={22}
                width={22}
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    header: {
        flex: 1,
    },
    text: {
        alignSelf: 'center',
        color: GREY_COLOR_COLOR_2,
        ...typography[18],
    },
});

export default memo(ThemesHeader);
