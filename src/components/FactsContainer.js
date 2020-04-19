import * as React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import BigStatistic from "./BigStatistic";
import Colors from "../constants/Colors";

export default function FactsContainer({ data }) {
  console.log("Facts container", data);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Quick Facts</Text>
        <View style={styles.statContainer}>
          <BigStatistic
            title="Total Confirmed Cases"
            number={data[0].cases.total}
            style={{ color: "#2ff746" }}
          />
          <BigStatistic
            title="Total Deceased"
            number={data[0].deaths.total}
            style={{ color: "#f23535" }}
          />
          <BigStatistic
            title="Total Recovered"
            number={data[0].cases.recovered}
            style={{ color: "#35dff2" }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.primary
  },
  titleContainer: {
    flex: 1,
    width: "75%",
    height: 300,
    marginBottom: 20,
    borderRadius: 24,
    marginVertical: 25,
    backgroundColor: "#8AB9B5",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 26
  },
  statContainer: {
    flex: 1,
    paddingTop: 20
  }
});
