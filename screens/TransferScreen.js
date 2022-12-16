import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import LatestTransactions from "../components/TransactionList"
import { ArrowLeftIcon, CalendarDaysIcon } from "react-native-heroicons/solid"
import { useNavigation } from "@react-navigation/native"

const TransferScreen = () => {
  const navigation = useNavigation()

  return (
    <View className="bg-[#232323] py-10 flex-1">
      <View className="px-2 flex-row space-x-2 items-center">
        <TouchableOpacity onPress={navigation.goBack}>
          <ArrowLeftIcon color="white" />
        </TouchableOpacity>
        <Text className="text-white text-center font-extrabold text text-2xl flex-1">
          Transfers
        </Text>
        <TouchableOpacity>
          <CalendarDaysIcon color="white" />
        </TouchableOpacity>
      </View>
      <View>
        <LatestTransactions />
      </View>
    </View>
  )
}

export default TransferScreen
