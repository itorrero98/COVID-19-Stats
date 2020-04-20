import * as React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Colors from "../constants/Colors";

export function CountryItem({ data, index }) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: index % 2 ? Colors.accent : Colors.primary
        }
      ]}
    >
      <Text style={[styles.dataCell, { color: "white" }]}>{data.country}</Text>
      <Text style={[styles.dataCell, { color: Colors.total }]}>
        {data.cases.total}
      </Text>
      <Text style={[styles.dataCell, { color: Colors.dead }]}>
        {data.deaths.total}
      </Text>
      <Text style={[styles.dataCell, { color: Colors.recovered }]}>
        {data.cases.recovered}
      </Text>
    </View>
  );
}
export function CountryHeader() {
  return (
    <View style={styles.headerContainer}>
      <Text style={[styles.dataCell, { color: "white" }]}>Country</Text>
      <Text style={[styles.dataCell, { color: Colors.total }]}>Total</Text>
      <Text style={[styles.dataCell, { color: Colors.dead }]}>Dead</Text>
      <Text style={[styles.dataCell, { color: Colors.recovered }]}>
        Recovered
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 5,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.primary
  },
  headerContainer: {
    flex: 1,
    paddingLeft: 5,
    paddingVertical: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.accent
  },
  dataCell: {
    flex: 1,
    fontSize: 22
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
