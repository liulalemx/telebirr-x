import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { ArrowsRightLeftIcon } from "react-native-heroicons/solid"

const TransactionCard = ({ name, time, value }) => {
  return (
    <TouchableOpacity className="flex-row space-x-4 items-center pt-4">
      <View className="bg-[#5565FF] p-4 rounded-3xl">
        <ArrowsRightLeftIcon color="white" />
      </View>
      <View className="flex-1">
        <Text className="text-white font-semibold">{name}</Text>
        <Text className="text-gray-400">{time}</Text>
      </View>
      <Text className="text-white font-semibold text-lg">{value}</Text>
    </TouchableOpacity>
  )
}

export default TransactionCard
