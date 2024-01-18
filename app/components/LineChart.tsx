import { spacing } from "app/theme"
import { colors } from "app/theme/colors"
import React from "react"
import { View, Text, ViewStyle, TextStyle } from "react-native"

import { Circle, G, Line, Svg, Text as SvgText } from "react-native-svg"

interface ILineChartProps {
  pointsPerWood: [] | undefined
}

export const LineChartComponent: React.ElementType = ({ pointsPerWood = [] }: ILineChartProps) => {
  const containeHeigth = 255

  const data = [{ marker: 20 }, { marker: 10 }, { marker: 0 }, { marker: -10 }, { marker: -20 }]

  const maxY = 20
  const zeroMarker = containeHeigth / 2
  const paddingMarker = 7
  const margin = 10

  // x and y axis
  const renderXaxis = () => {
    return (
      <G key="x axis">
        <Line stroke="white" x1={0} y1={255} y2={255} x2={366} />
        <Line stroke="white" y1={0} y2={255} />
      </G>
    )
  }

  // horizontal line
  const renderHorizontalLine = () => {
    return pointsPerWood.map((_, index) => {
      const x1 = (containeHeigth / pointsPerWood.length) * index
      return (
        <G key={`marker ${index}`}>
          {index !== 0 ? (
            <Line
              stroke={"white"}
              x1={0}
              x2={366}
              y1={x1}
              y2={x1}
              strokeWidth={index !== 4 ? "0.5" : "2"}
              strokeDasharray="4 4"
            />
          ) : null}
        </G>
      )
    })
  }
  // markers
  const renderMarker = () => {
    return data.map((item, index) => {
      const y = ((containeHeigth - paddingMarker) / (data.length - 1)) * index

      return (
        <SvgText
          key={index}
          fill={"white"}
          y={y - index + margin}
          x={10}
          fontWeight={"400"}
          textAnchor="middle"
        >
          {item.marker}
        </SvgText>
      )
    })
  }
  // LineChart
  const chartRender = () => {
    return pointsPerWood.map((item: number, index: number) => {
      const yAxis = ((containeHeigth / maxY) * Math.abs(item)).toFixed(0)
      const xAxis = 366 / pointsPerWood.length
      const y2 = containeHeigth - (containeHeigth / maxY) * Math.abs(pointsPerWood[index + 1])

      const x2 = xAxis * (index + 1) + 1

      return (
        <G key={`chart${index}`}>
          <Circle
            r={5}
            y={containeHeigth - Number(yAxis) - 20}
            x={xAxis * index + 1}
            fill={+yAxis > zeroMarker ? colors.palette.points : "white"}
          />
          <Line
            y1={containeHeigth - Number(yAxis) - 20}
            y2={y2 - 20}
            x1={xAxis * index + 1}
            x2={x2}
            stroke={"white"}
            strokeWidth={"2"}
          />
        </G>
      )
    })

    // return (
    //   <G key={"chart"}>
    //     <Circle r={5} y={50} x={60} fill={colors.palette.points} />
    //     <Line x1={60} x2={110} y1={50} y2={170} stroke={"white"} strokeWidth={"2"} />
    //     <Circle r={5} y={170} x={110} fill={"white"} />
    //     <Circle r={5} y={180} x={130} fill={"white"} />
    //     <Line x1={110} x2={130} y1={170} y2={180} stroke={"white"} strokeWidth={"2"} />
    //     <Circle r={5} y={80} x={180} fill={colors.palette.points} />
    //     <Line x1={130} x2={180} y1={180} y2={80} stroke={"white"} strokeWidth={"2"} />
    //     <Circle r={5} y={70} x={200} fill={colors.palette.points} />
    //     <Line x1={180} x2={200} y1={80} y2={70} stroke={"white"} strokeWidth={"2"} />
    //     <Circle r={5} y={100} x={230} fill={colors.palette.points} />
    //     <Line x1={200} x2={230} y1={70} y2={100} stroke={"white"} strokeWidth={"2"} />
    //     <Circle r={5} y={160} x={260} fill={"white"} />
    //     <Line x1={230} x2={260} y1={100} y2={160} stroke={"white"} strokeWidth={"2"} />
    //     <Circle r={5} y={70} x={320} fill={colors.palette.points} />
    //     <Line x1={260} x2={320} y1={160} y2={70} stroke={"white"} strokeWidth={"2"} />
    //   </G>
    // )
  }

  return (
    <>
      <Text style={$title}>Points per Wod</Text>
      <View style={$lineChartContainer}>
        <Svg height="255" width={"8%"}>
          {renderMarker()}
        </Svg>
        <Svg height={"100%"} width={"92%"} style={$svgContainer}>
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
