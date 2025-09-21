import Svg, { Path, SvgProps } from 'react-native-svg';
import { FC, memo } from 'react';
import { LIGHT_GREY_COLOR } from '../constants/colors.constants.ts';

const CrossIcon: FC<SvgProps> = props => {
    return (
        <Svg width={14} height={14} viewBox="0 0 14 14" fill="none" {...props}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.172 1.05A1.5 1.5 0 001.05 3.172L4.878 7 1.05 10.828a1.5 1.5 0 102.122 2.122L7 9.12l3.828 3.829a1.5 1.5 0 102.121-2.122L9.121 7l3.828-3.828a1.5 1.5 0 10-2.121-2.122L7 4.88 3.172 1.05z"
                fill={LIGHT_GREY_COLOR}
            />
        </Svg>
    );
};

export default memo(CrossIcon);
