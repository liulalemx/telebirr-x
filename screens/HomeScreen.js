import { View, Text, Image, TouchableOpacity } from "react-native"
import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import {
  ArrowRightIcon,
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  ChevronDoubleDownIcon,
  ChevronDownIcon,
  UserIcon,
} from "react-native-heroicons/solid"
import LatestTransactions from "../components/TransactionList"

const HomeScreen = () => {
  const [pressed, setPressed] = useState(false)

  return (
    <>
      <StatusBar style="dark" />

      <View className="bg-[#232323] flex-1">
        {/* User Info */}
        <View className="pt-10 space-y-4 bg-white pb-2 rounded-2xl">
          <View className=" flex-row items-center space-x-3 px-4">
            <View className="flex-1">
              <Text className="font-bold text-xl">Hello, Liul!</Text>
              <Text className="text-gray-500 ">Wellcome to telebirr-x</Text>
            </View>
            <UserIcon size={40} color="black" />
          </View>

          <View className="px-4">
            <View className="flex-row items-center">
              <Text className="font-extrabold text-3xl">$35,450.87</Text>
              <Text className="text-[#5565FF] ">ETB</Text>
            </View>

            <Text className="text-gray-500">$26 Reward</Text>
          </View>

          <View className="flex-row space-x-2 px-4 justify-center">
            <TouchableOpacity className="bg-[#5565FF] rounded-xl py-2 px-6">
              <Text className="text-white font-bold">Send</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-black rounded-xl py-2 px-6">
              <Text className="text-white font-bold">Receive</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Monthly Stats */}
        <TouchableOpacity onPress={() => setPressed(!pressed)}>
          <View>
            {pressed && (
              <View className="px-4 flex-row items-center space-x-8  justify-center ">
                <View>
                  <View className="flex-row space-x-1 items-center">
                    <Text className="text-white font-semibold">
                      Income
                      <Text className="text-gray-500 font-semibold">
                        {" "}
                        / month
                      </Text>
                    </Text>
                    <ChevronDownIcon color="white" size={18} />
                  </View>
                  <Text className="text-white font-extrabold text-xl">
                    $3,345.22
                  </Text>
                </View>

                <View className="border-l-2 border-gray-200 px-1-1 py-4"></View>

                <View>
                  <View className="flex-row space-x-1 items-center">
                    <Text className="text-white font-semibold">
                      Spendings
                      <Text className="text-gray-500 font-semibold">
                        {" "}
                        / month
                      </Text>
                    </Text>
                    <ChevronDownIcon color="white" size={18} />
                  </View>
                  <Text className="text-white font-extrabold text-xl">
                    $1,406.98
                  </Text>
                </View>
              </View>
            )}
          </View>

          <View className=" px-4 flex-row border-4 rounded-3xl rounded-t-none border-white border-t-0 justify-around space-x-10 items-center">
            <View className="flex-row items-center px-2 m-2 space-x-1 border-2 border-green-500 rounded-3xl ">
              <ArrowTrendingUpIcon size={20} color="green" />
              <Text className="text-green-500 font-bold">+ 10.2%</Text>
            </View>
            {!pressed && <ChevronDoubleDownIcon color="white" size={20} />}
            <View className="flex-row items-center px-2 m-2 space-x-1 border-2 border-red-500 rounded-3xl">
              <ArrowTrendingDownIcon size={20} color="red" />
              <Text className="text-red-500 font-bold">- 4.7%</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Latest Transactions */}
        <View className="mt-4 flex-1">
          <View className="px-4 flex-row items-center">
            <Text className="text-white font-bold text-lg flex-1">
              Latest Transactions
            </Text>
            <View className="bg-gray-700 py-2 px-4 rounded-3xl">
              <ArrowRightIcon size={24} color="white" />
            </View>
          </View>
          <View>
            <LatestTransactions />
          </View>
        </View>
      </View>
    </>
  )
}

export default HomeScreen
