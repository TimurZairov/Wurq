import { spacing } from "app/theme"
import { colors } from "app/theme/colors"
import React, { useEffect, useState } from "react"
import { View, Text, ViewStyle, TextStyle } from "react-native"
import { Hart } from "app/assets/svg/Hart"

interface ICard {
  title: string
  points: string
  data: any
}

export const Card = ({ title, points, data }: ICard) => {
  const [formatDate, setFormatDate] = useState("")
  const [exercises, setExercises] = useState("")
  useEffect(() => {
    if (data) {
      const inputDate = data.history[0].date_time
      const parsedDate = new Date(inputDate)

      const month = String(parsedDate.getMonth() + 1).padStart(2, "0")
      const day = String(parsedDate.getDate()).padStart(2, "0")
      const year = parsedDate.getFullYear()

      const formattedDate = `${month}/${day}/${year}`
      setFormatDate(formattedDate)
      setExercises(data.history[0].exercises)
    }
  }, [data])

  return (
    <View style={$cardContainer}>
      <View style={$leftInfo}>
        {/* Header Card */}
        <View style={$header}>
          <View>
            {data && <Text style={$date}>{formatDate}</Text>}

            <Text style={$subTitle}>{title}</Text>
          </View>
          <Hart />
        </View>
        {/* Numbers */}
        <View style={$numbers}>
          <Text style={$timeText}>Time:</Text>
          <Text style={$time}>12:53</Text>
          <Text style={$timeText}>Rest:</Text>
          <Text style={$time}>
            0:37<Text style={$percents}> | 5%</Text>
          </Text>
          <Text style={$num}>167</Text>
        </View>
        {/* Footer Card */}
        <View style={$footer}>
          <Text style={[$timeText, $whiteText]}>{exercises}</Text>
          {/* <Text style={[$timeText, $whiteText]}>40 Kb Swings (53/35)</Text>
          <Text style={[$timeText, $whiteText]}>30 Ab-Mat</Text>
          <Text style={[$timeText, $whiteText]}>20 Barbell Thruster 95/65</Text>
          <Text style={[$timeText, $whiteText]}>10 Barbell Hang Clean 95/65</Text> */}
        </View>
      </View>
      <View style={$rightInfo}>
        <Text style={$points}>{`+${points}`}</Text>
        <Text style={$total}>Total Points</Text>
      </View>
    </View>
  )
}

const $cardContainer: ViewStyle = {
  width: "100%",
  height: 201,
  backgroundColor: colors.palette.lineChartBackground,
  borderRadius: spacing.xs,
  flexDirection: "row",
  overflow: "hidden",
}

const $leftInfo: ViewStyle = {
  width: "75%",
  padding: spacing.sm,
}

const $header: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

const $rightInfo: ViewStyle = {
  width: "25%",
  backgroundColor: colors.palette.neutral900,
  justifyContent: "center",
  alignItems: "center",
}

const $points: TextStyle = {
  color: colors.palette.points,
  fontSize: spacing.lg,
  fontWeight: "800",
}

const $total: TextStyle = {
  color: colors.palette.textGray,
  fontSize: spacing.sm,
  fontWeight: "800",
  margin: spacing.xs,
}

const $date: TextStyle = {
  color: colors.palette.textGray,
  fontSize: spacing.sm,
  fontWeight: "800",
}

const $subTitle: TextStyle = {
  color: "white",
  fontSize: spacing.md,
  fontWeight: "800",
}

const $numbers: ViewStyle = {
  flexDirection: "row",
  marginTop: spacing.sm,
  alignItems: "center",
}

const $timeText: TextStyle = {
  color: colors.palette.textGray,
}

const $time: TextStyle = {
  color: "white",
  marginLeft: spacing.xxs,
  fontSize: spacing.md,
  fontWeight: "900",
}

const $percents: TextStyle = {
  fontWeight: "300",
}

const $num: TextStyle = {
  marginLeft: "auto",
  color: "white",
  fontSize: spacing.md,
}

const $footer: ViewStyle = {
  marginTop: "auto",
}

const $whiteText: TextStyle = {
  color: "white",
}
