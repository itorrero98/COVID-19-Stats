import * as React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { CountryItem, CountryHeader } from "./CountryItem";
import Colors from "../constants/Colors";

export default function CountriesList({ data }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return <CountryItem data={item} index={index} />;
        }}
        keyExtractor={item => item.country}
        ListHeaderComponent={CountryHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.primary
  },
  listSeperator: {
    borderBottomColor: "white",
    borderBottomWidth: 1
  }
});
