import { colors, spacing } from "app/theme"

import React, { Dispatch, SetStateAction, useState } from "react"
import {
  StyleProp,
  TextInput,
  TextStyle,
  Text,
  View,
  ViewStyle,
  KeyboardTypeOptions,
  Alert,
} from "react-native"

interface IInputProps {
  isNumber?: KeyboardTypeOptions
  title: string
  placeholder: string
  setText?: Dispatch<SetStateAction<string>>
  setPointsInput?: Dispatch<SetStateAction<string>>
}

export const Input = ({ isNumber, title, placeholder, setText, setPointsInput }: IInputProps) => {
  const [inputText, setInputText] = useState("")

  const checkTextHandler = (text: any) => {
    const regex = /^[a-zA-Z]+$/
    if (isNumber?.length && setPointsInput !== undefined) {
      setInputText(text)
      setPointsInput(inputText)
    } else {
      if (regex.test(text) && setText !== undefined) {
        setInputText(text)
        setText(inputText)
      } else {
        Alert.alert("Type text")
        setInputText("")
      }
    }
  }

  return (
    <View style={$inputContainer}>
      <Text style={$points}>{title}</Text>
      <TextInput
        style={$input}
        placeholder={placeholder}
        placeholderTextColor={"white"}
        keyboardType={isNumber}
        value={inputText}
        onChangeText={(text) => checkTextHandler(text)}
      />
    </View>
  )
}

const $inputContainer: ViewStyle = {
  width: 193,
}

const $points: TextStyle = {
  fontSize: spacing.md,
  color: "white",

  marginTop: spacing.xs,
}

const $input: StyleProp<TextStyle> = {
  width: "100%",
  height: 46,
  backgroundColor: colors.palette.lineChartBackground,
  alignSelf: "center",
  marginTop: spacing.xs,
  borderRadius: spacing.xs,
  padding: spacing.xs,
}
