import { FC, memo } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const DownPointerIcon: FC<SvgProps> = props => {
    return (
        <Svg width={10} height={7} viewBox="0 0 10 7" fill="none" {...props}>
            <Path
                d="M1.539 1.615L5 5.077l3.462-3.462"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default memo(DownPointerIcon);
