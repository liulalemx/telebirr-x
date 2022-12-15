import { View, Text, ScrollView } from "react-native"
import React from "react"
import TransactionCard from "./TransactionCard"

const LatestTransactions = () => {
  return (
    <ScrollView className="px-4">
      <TransactionCard
        name="Public Transport"
        time="5 hours ago"
        value="- $5.51"
      />
      <TransactionCard name="Netflix" time="6 hours ago" value="- $39" />
      <TransactionCard
        name="Gas Station"
        time="10 hours ago"
        value="- $126.95"
      />
      <TransactionCard
        name="Transfer form Kaleb"
        time="12 hours ago"
        value="+ $700"
      />
      <TransactionCard
        name="Transfer to Abate"
        time="12 hours ago"
        value="- $200"
      />
    </ScrollView>
  )
}

export default LatestTransactions
