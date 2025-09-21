import { FC, memo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Course } from '../../../api/dashboard/dashboard.models.ts';
import { cn } from '../../../utils/style.utils.ts';
import { typography } from '../../../constants/typography.constants.ts';
import {
    GREY_COLOR,
    SHADOW_BLUE_COLOR,
    WHITE_COLOR,
} from '../../../constants/colors.constants.ts';

type DashboardCardProps = {
    course: Course;
};
const DashboardCard: FC<DashboardCardProps> = ({ course }) => {
    return (
        <View style={styles.card}>
            <View style={styles.innerCard}>
                <Image
                    style={cn(styles.cardImage, {
                        backgroundColor: course.bgColor,
                    })}
                    source={{
                        uri: course.image,
                    }}
                />
                <View style={styles.cardText}>
                    <Text style={styles.name}>{course.name}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 18,
    },
    innerCard: {
        backgroundColor: SHADOW_BLUE_COLOR,
        paddingBottom: 8,
        borderRadius: 24,
    },
    cardImage: {
        resizeMode: 'contain',
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        height: 162,
        width: 210,
    },
    cardText: {
        alignItems: 'center',
        paddingVertical: 12,
        backgroundColor: WHITE_COLOR,
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24,
    },
    name: {
        color: GREY_COLOR,
        ...typography[14],
    },
});

export default memo(DashboardCard);
