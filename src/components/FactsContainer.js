import * as React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import BigStatistic from "./BigStatistic";
import Colors from "../constants/Colors";

export default function FactsContainer({ data, title }) {
  console.log("Facts container", data);
  return (
    <View style={styles.container}>
      <View style={styles.factsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <BigStatistic
          title="Total Confirmed Cases"
          number={data.cases.total}
          style={{ color: Colors.total }}
        />
        <BigStatistic
          title="Total Deceased"
          number={data.deaths.total}
          style={{ color: Colors.dead }}
        />
        <BigStatistic
          title="Total Tested"
          number={125447}
          style={{ color: Colors.tested }}
        />
        <BigStatistic
          title="Total Recovered"
          number={data.cases.recovered}
          style={{ color: Colors.recovered }}
        />
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
  factsContainer: {
    flex: 1,
    width: "75%",
    marginBottom: 20,
    borderRadius: 24,
    marginVertical: 25,
    backgroundColor: Colors.accent,
    alignItems: "center"
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.light
  },
  title: {
    color: Colors.light,
    marginTop: 8,
    fontWeight: "bold",
    fontSize: 26
  },
  statContainer: {
    flex: 1,
    paddingTop: 20
  }
});
