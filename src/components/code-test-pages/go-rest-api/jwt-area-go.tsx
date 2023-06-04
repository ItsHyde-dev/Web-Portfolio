import CommonListArea, { ListAreaTemplateProps } from '../common/components/list-area-template';
import colors from '../../../common/styles/colors.module.css'
import { useContext } from 'react';
import { JwtProvider } from '../common/components/connected_ul_object';
import styles from '../common/test-page-common-styles.module.css'

export default function JwtAreaGo() {

    const { jwt } = useContext(JwtProvider)

    const introText = <div>Once the user has logged in a JWT <b className={colors.baby_blue}>(json web token)</b> is generated</div>

    const leftBlockChildComponent = () => {
        return (
            <div>
                <div className={colors.baby_blue}>{jwt}</div>
                <div className={styles.italics_subtext}>Your JWT will be used to authenticate you henceforth</div>
            </div>
        )
    }

    const listAreaProps: ListAreaTemplateProps = {
        introText,
        title: 'JWT',
        leftBlockTitle: null,
        rightBlockTitle: null,
        leftBlockChildComponent: leftBlockChildComponent(),
        rightBlockChildComponent: undefined
    }

    return CommonListArea(listAreaProps)
}
