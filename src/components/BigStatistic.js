import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function BigStatistic({ number, style, title }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.stat, style]}>{number}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 8
  },
  title: {
    color: "white",
    fontSize: 24
  },
  stat: {
    fontSize: 32
  }
});
