import { observer } from "mobx-react-lite"
import React, { FC, useState, useEffect } from "react"
import { SafeAreaView, ScrollView, View, ViewStyle } from "react-native"

import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { LineChartComponent } from "app/components/LineChart"
import { Button, Card } from "app/components"
import { Input } from "app/components/Input"
import { set } from "date-fns"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(_props) {
  const [text, setText] = useState("")
  const [pointsInput, setPointsInput] = useState("")
  const [title, setTitle] = useState("WOD Newton")
  const [points, setPoints] = useState("189")
  // set to card Points ant Title
  const submitHandler = () => {
    setTitle(text)
    setPoints(pointsInput)
  }

  const [data, setData] = useState(null)
  // get data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "https://awqgdt2ss8.execute-api.us-east-1.amazonaws.com/Prod/history"

        const response = await fetch(apiUrl)

        if (!response.ok) {
          throw new Error("Network response was not ok")
        }

        const result = await response.json()

        setData(result)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <SafeAreaView style={$saveArea}>
      <ScrollView style={$scroll}>
        <View style={$container}>
          {/* LineChart */}
          <LineChartComponent />
          {/* Card */}
          <Card title={title} points={points} data={data} />
          {/* Inputs */}
          <View style={$footerInput}>
            <Input
              isNumber={"numeric"}
              title={"Points"}
              placeholder={"number"}
              setPointsInput={setPointsInput}
            />
            <Input title={"Name "} placeholder={"string"} setText={setText} />
            {/* Button */}
            <Button style={$button} onPress={submitHandler}>
              Submit
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
})

const $saveArea: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $container: ViewStyle = {
  paddingHorizontal: spacing.sm,
}

const $scroll: ViewStyle = {
  flex: 1,
}

const $footerInput: ViewStyle = {
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
}

const $button: ViewStyle = {
  width: "50%",
  marginTop: spacing.md,
}
