import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { SearchBar } from "react-native-elements";

import CountriesList from "../components/CountriesList";
import { DataConsumer } from "../contexts/DataContext";
import Colors from "../constants/Colors";

export default function CountriesScreen() {
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = React.useState("");

  const refresh = () => {
    console.log("refreshing");
    setPage(page + 1);
  };

  const filterCountries = countries => {
    console.log("In filter countries", countries);
    returnArr = [];
    for (let i = 0; i < countries.length; i++) {
      let country = countries[i].country.toUpperCase();
      if (country.includes(search.toUpperCase().trim())) {
        returnArr.push(countries[i]);
      }
    }
    return returnArr;
  };
  return (
    <DataConsumer>
      {context => {
        let countries = context;
        if (search !== "" && search.length >= 2) {
          countries = filterCountries(context);
        }
        return (
          <View style={styles.container}>
            <SearchBar
              textContentType="countryName"
              placeholder="Search Country..."
              onChangeText={search => setSearch(search)}
              onBlur={refresh}
              onClear={refresh}
              value={search}
              containerStyle={styles.search}
            />
            <CountriesList data={countries} />
          </View>
        );
      }}
    </DataConsumer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.primary,
    alignItems: "center"
  },
  search: {
    width: "90%"
  }
});
