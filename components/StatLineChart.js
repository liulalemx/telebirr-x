import { View, Text, Dimensions } from "react-native"
import React from "react"
import { LineChart } from "react-native-chart-kit"

const StatLineChart = () => {
  const screenWidth = Dimensions.get("window").width - 16

  return (
    <LineChart
      data={{
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
          },
        ],
      }}
      width={screenWidth} // from react-native
      height={220}
      yAxisLabel="$"
      yAxisSuffix=""
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "#353535",
        backgroundGradientFrom: "#353535",
        backgroundGradientTo: "#404040",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#5565FF",
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  )
}

export default StatLineChart
