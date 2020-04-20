import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import FactsContainer from "../components/FactsContainer";
import { DataConsumer } from "../contexts/DataContext";
import Colors from "../constants/Colors";

export default function HomeScreen() {
  const [page, setPage] = React.useState(0);

  const refresh = () => {
    setPage(page + 1);
  };
  return (
    <DataConsumer>
      {context => {
        return (
          <View style={styles.container}>
            <ScrollView
              style={styles.container}
              contentContainerStyle={styles.contentContainer}
            >
              <FactsContainer data={context[189]} title="The World" />
              <FactsContainer data={context[216]} title="North America" />
              <FactsContainer data={context[217]} title="Europe" />
              <FactsContainer data={context[218]} title="Asia" />
              <FactsContainer data={context[219]} title="South America" />
              <FactsContainer data={context[220]} title="Oceania" />
              <FactsContainer data={context[221]} title="Africa" />
            </ScrollView>
          </View>
        );
      }}
    </DataConsumer>
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
    paddingTop: 15
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
