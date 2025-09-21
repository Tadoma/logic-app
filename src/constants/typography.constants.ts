import { Platform, StyleSheet, TextStyle } from 'react-native';

const fontFamily = 'Nunito';
const fontFamilyExtraBold = 'Nunito-ExtraBold';
const fontWeight = 800;

type TypographySizes = 12 | 14 | 18;
type TypographyStyle = Pick<
    TextStyle,
    'fontFamily' | 'fontSize' | 'lineHeight'
>;
const platformTypography: Record<TypographySizes, TypographyStyle> =
    Platform.select({
        android: {
            12: {
                fontFamily: fontFamilyExtraBold,
                fontSize: 12,
                lineHeight: 12,
            },
            14: {
                fontFamily: fontFamilyExtraBold,
                fontSize: 14,
                lineHeight: 12,
            },
            18: {
                fontFamily: fontFamilyExtraBold,
                fontSize: 18,
                lineHeight: 18,
            },
        },
        default: {
            12: {
                fontFamily,
                fontWeight,
                fontSize: 12,
                lineHeight: 12,
            },
            14: {
                fontFamily,
                fontWeight,
                fontSize: 14,
                lineHeight: 12,
            },
            18: {
                fontFamily,
                fontWeight,
                fontSize: 18,
                lineHeight: 18,
            },
        },
    });

export const typography = StyleSheet.create(platformTypography);
