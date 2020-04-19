import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import FactsContainer from "../components/FactsContainer";
import Colors from "../constants/Colors";

export default function HomeScreen() {
  const [page, setPage] = React.useState(0);
  const [covidData, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://covid-193.p.rapidapi.com/statistics?country=all", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "bb2ffe9afcmsh550d83e1f016281p1ce881jsn7b890fb4f1b4"
      }
    })
      .then(response => response.json())
      .then(responseJSON => {
        setData(responseJSON.response);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [page]);

  const refresh = () => {
    setPage(page + 1);
  };
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {!loading && <FactsContainer data={covidData} />}
        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>Learn more about COVID-19</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Button onPress={refresh} title="Get Data" />
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync("https://ncov2019.live/wiki");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary
  },
  factsContainer: {
    flex: 1,
    backgroundColor: "blue"
  },
  contentContainer: {
    paddingTop: 30
  },

  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 18,
    color: "#2e78b7"
  }
});
