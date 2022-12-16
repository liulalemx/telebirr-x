import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import {
  ArrowDownLeftIcon,
  ArrowLeftIcon,
  ArrowUpRightIcon,
  EllipsisHorizontalIcon,
} from "react-native-heroicons/solid"
import { useNavigation } from "@react-navigation/native"
import StatLineChart from "../components/StatLineChart"

const StatisticsScreen = () => {
  const navigation = useNavigation()

  return (
    <View className="bg-[#232323] py-10 flex-1">
      <View className="px-2 flex-row space-x-2 items-center">
        <TouchableOpacity onPress={navigation.goBack}>
          <ArrowLeftIcon color="white" />
        </TouchableOpacity>
        <Text className="text-white text-center font-extrabold text text-2xl flex-1">
          Statistic
        </Text>
        <TouchableOpacity>
          <EllipsisHorizontalIcon color="white" />
        </TouchableOpacity>
      </View>

      {/* Body */}
      <View className="px-4">
        {/* Toggle */}
        <View className="bg-[#353535] mt-2 rounded-2xl flex-row items-center justify-between px-2 ">
          <TouchableOpacity className="flex-1">
            <Text className="text-white text-lg py-3 px-8 bg-[#5565FF] rounded-2xl text-center">
              Income
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1">
            <Text className="text-white text-lg p-4 text-center">Expense</Text>
          </TouchableOpacity>
        </View>

        {/* Chart Header */}
        <View className="mt-4 flex-row space-x-2">
          <Text className="text-white font-bold text-3xl flex-1">$ 272.99</Text>
        </View>

        {/* Chart */}
        <View>
          <StatLineChart />
        </View>

        {/* Time Picker */}
        <View className="bg-[#353535] my-2 rounded-2xl flex-row items-center justify-between px-2 ">
          <TouchableOpacity className="flex-1">
            <Text className="text-white py-3 px-4 bg-[#5565FF] rounded-2xl text-center">
              Daily
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1">
            <Text className="text-white  p-4 text-center">Weekly</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1">
            <Text className="text-white  p-4 text-center">Monthly</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1">
            <Text className="text-white  p-4 text-center">Yearly</Text>
          </TouchableOpacity>
        </View>

        {/* Income/Expense Stats */}
        <View className="flex-row space-x-2 justify-around">
          <View className="bg-[#404040] p-4 rounded-3xl space-y-2">
            <View className="p-4 bg-green-600 rounded-3xl w-16">
              <ArrowUpRightIcon color="black" size={30} />
            </View>
            <Text className="text-lg text-gray-300">Income</Text>
            <Text className="text-3xl font-bold text-green-600">$2,512.40</Text>
          </View>

          <View className="bg-[#404040] p-4 rounded-3xl space-y-2">
            <View className="p-4 bg-red-600 rounded-3xl w-16">
              <ArrowDownLeftIcon color="black" size={30} />
            </View>
            <Text className="text-lg text-gray-300">Expense</Text>
            <Text className="text-3xl font-bold text-red-600">$1,215.25</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default StatisticsScreen
