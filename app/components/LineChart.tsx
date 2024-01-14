import { spacing } from "app/theme"
import { colors } from "app/theme/colors"
import React from "react"
import { View, Text, ViewStyle, TextStyle } from "react-native"

import { Circle, G, Line, Svg, Text as SvgText } from "react-native-svg"

export const LineChartComponent: any = () => {
  const containeHeigth = 255

  const markerData = [
    { marker: 1 },
    { marker: 2 },
    { marker: 3 },
    { marker: 4 },
    { marker: 5 },
    { marker: 6 },
    { marker: 7 },
    { marker: 8 },
    { marker: 9 },
  ]

  const data = [{ marker: 20 }, { marker: 10 }, { marker: 0 }, { marker: -10 }, { marker: -20 }]

  const renderXaxis = () => {
    return (
      <G key="x axis">
        <Line stroke="white" x1={0} y1={255} y2={255} x2={366} />
        <Line stroke="white" y1={0} y2={255} />
      </G>
    )
  }
  const renderHorizontalLine = () => {
    return markerData.map((_, index) => {
      const x1 = (containeHeigth / markerData.length) * index
      console.log(index)
      console.log()
      return (
        <G key={`marker ${index}`}>
          {index !== 0 ? (
            <Line
              stroke={"white"}
              x1={0}
              x2={366}
              y1={x1}
              y2={x1}
              strokeWidth={index !== 5 ? "0.5" : "2"}
              strokeDasharray="4 4"
            />
          ) : null}
        </G>
      )
    })
  }

  const renderMarker = () => {
    return data.map((item, index) => {
      const x = (containeHeigth / data.length) * index
      // console.log(x)

      return (
        <G key={`marker ${index}`}>
          <SvgText fill={"white"} y={x + 45} textAnchor="start">
            {item.marker}
          </SvgText>
        </G>
      )
    })
  }

  const chartRender = () => {
    return (
      <G key={"chart"}>
        <Circle r={5} y={50} x={60} fill={colors.palette.points} />
        <Line x1={60} x2={110} y1={50} y2={170} stroke={"white"} strokeWidth={"2"} />
        <Circle r={5} y={170} x={110} fill={"white"} />
        <Circle r={5} y={180} x={130} fill={"white"} />
        <Line x1={110} x2={130} y1={170} y2={180} stroke={"white"} strokeWidth={"2"} />
        <Circle r={5} y={80} x={180} fill={colors.palette.points} />
        <Line x1={130} x2={180} y1={180} y2={80} stroke={"white"} strokeWidth={"2"} />
        <Circle r={5} y={70} x={200} fill={colors.palette.points} />
        <Line x1={180} x2={200} y1={80} y2={70} stroke={"white"} strokeWidth={"2"} />
        <Circle r={5} y={100} x={230} fill={colors.palette.points} />
        <Line x1={200} x2={230} y1={70} y2={100} stroke={"white"} strokeWidth={"2"} />
        <Circle r={5} y={160} x={260} fill={"white"} />
        <Line x1={230} x2={260} y1={100} y2={160} stroke={"white"} strokeWidth={"2"} />
        <Circle r={5} y={70} x={320} fill={colors.palette.points} />
        <Line x1={260} x2={320} y1={160} y2={70} stroke={"white"} strokeWidth={"2"} />
      </G>
    )
  }

  return (
    <>
      <Text style={$title}>Points per Wod</Text>
      <View style={$lineChartContainer}>
        <Svg height={"100%"} width={"6%"}>
          {renderMarker()}
        </Svg>
        <Svg height={"100%"} width={"94%"} style={$svgContainer}>
          {renderXaxis()}
          {renderHorizontalLine()}

          {chartRender()}
        </Svg>
      </View>
      <Text style={$history}>History:</Text>
    </>
  )
}

const $lineChartContainer: ViewStyle = {
  width: 366,
  height: 255,
  flexDirection: "row",

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
  fontSize: spacing.md,
  fontWeight: "600",
  color: "white",
  marginBottom: 50,
  textDecorationLine: "underline",
}
