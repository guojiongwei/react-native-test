'use strict';

import {Dimensions} from 'react-native'

const deviceH = Dimensions.get('window').height
const deviceW = Dimensions.get('window').width

const basePx = 375
// console.log(deviceH, deviceW)
export default function px2dp(px) {
    return px *  deviceW / basePx
}
