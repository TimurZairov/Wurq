import { spacing } from "app/theme"
import { colors } from "app/theme/colors"
import React from "react"
import { View, Text, ViewStyle, TextStyle } from "react-native"
import { LineChart } from "react-native-chart-kit"
import { Svg } from "react-native-svg"

export const LineChartComponent: any = () => {
  const labelTT = () => {}

  return (
    <>
      <Text style={$title}>Points per Wod</Text>
      <View style={$lineChartContainer}>
        <Svg height={"100%"} width={"100%"} style={$svgContainer}></Svg>
      </View>
      <Text style={$history}>History:</Text>
    </>
  )
}

const $lineChartContainer: ViewStyle = {
  width: 366,
  height: 255,

  justifyContent: "center",
  alignItems: "center",
}

const $svgContainer: ViewStyle = {
  backgroundColor: colors.palette.lineChartBackground,
}

const $title: TextStyle = {
  fontSize: spacing.lg,
  fontWeight: "600",
  color: "white",
  marginBottom: spacing.xs,
}

const $history: TextStyle = {
  fontSize: spacing.lg,
  fontWeight: "600",
  color: "white",
  marginBottom: spacing.xs,
  textDecorationLine: "underline",
}
