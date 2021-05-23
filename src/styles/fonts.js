import { css } from 'styled-components'

import BebasNeueRegular from '../fonts/Bebas_Neue/BebasNeue-Regular.ttf'
import FredokaOneRegular from '../fonts/Fredoka_One/FredokaOne-Regular.ttf'

import RobotoThin from '../fonts/Roboto/Roboto-Thin.ttf'
import RobotoLight from '../fonts/Roboto/Roboto-Light.ttf'
import RobotoRegular from '../fonts/Roboto/Roboto-Regular.ttf'
import RobotoMedium from '../fonts/Roboto/Roboto-Medium.ttf'
import RobotoBold from '../fonts/Roboto/Roboto-Bold.ttf'
import RobotoBlack from '../fonts/Roboto/Roboto-Black.ttf'

import RobotoThinItalic from '../fonts/Roboto/Roboto-ThinItalic.ttf'
import RobotoLightItalic from '../fonts/Roboto/Roboto-LightItalic.ttf'
import RobotoRegularItalic from '../fonts/Roboto/Roboto-RegularItalic.ttf'
import RobotoMediumItalic from '../fonts/Roboto/Roboto-MediumItalic.ttf'
import RobotoBoldItalic from '../fonts/Roboto/Roboto-BoldItalic.ttf'
import RobotoBlackItalic from '../fonts/Roboto/Roboto-BlackItalic.ttf'


const BebasNeueNormalWeights = {
     
    400: BebasNeueRegular
}

const FredokaOneNormalWeights = {
     
    400: FredokaOneRegular
}

const RobotoNormalWeights = {
    100: RobotoThin,
    300: RobotoLight,
    400: RobotoRegular,
    500: RobotoMedium,
    700: RobotoBold,
    900: RobotoBlack
}

const RobotoItalicWeights = {
    100: RobotoThinItalic,
    300: RobotoLightItalic,
    400: RobotoRegularItalic,
    500: RobotoMediumItalic,
    700: RobotoBoldItalic,
    900: RobotoBlackItalic
}

const bebasNeue = {
    name: 'Bebas Neue',
    normal: BebasNeueNormalWeights,
}

const fredokaOne = {
    name: 'Fredoka One',
    normal: FredokaOneNormalWeights,
}

const roboto = {
    name: 'Roboto',
    normal: RobotoNormalWeights,
    italic: RobotoItalicWeights
}


const createFontFaces = (family, style = 'normal') => {
    let styles = ''

    for (const [weight, format] of Object.entries(family[style])) {

        styles += `
            @font-face {
                font-family: '${family.name}';
                src: url(${format}) format('ttf'),
                font-weight: ${weight};
                font-style: ${style};
                font-display: auto;
            }
        `
    }

    return styles;
}

const bebasNeueNormal = createFontFaces(bebasNeue)
const fredokaOneNormal = createFontFaces(fredokaOne)

const robotoNormal = createFontFaces(roboto)
const robotoItalic = createFontFaces(roboto, 'italic')


const Fonts = css`
    ${bebasNeueNormal + fredokaOneNormal + robotoNormal + robotoItalic}
`

export default Fonts