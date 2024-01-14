import React from "react"
import { View } from "react-native"
import { Svg, Defs } from "react-native-svg"

export const Logo = () => {
  return (
    <View>
      <Svg width="136" height="31" viewBox="0 0 136 31" fill="none">
        <rect width="136" height="31" fill="url(#pattern0)" />
        <Defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use transform="matrix(0.000569801 0 0 0.00248756 -0.487749 -2.27861)" />
          </pattern>
        </Defs>
      </Svg>
    </View>
  )
}
