import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { DataProvider } from "./src/contexts/DataContext";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import useLinking from "./src/navigation/useLinking";
import Colors from "./src/constants/Colors";

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const [covidData, setData] = React.useState([]);
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
        });

        //Load COVID Data
        const getData = await fetch(
          "https://covid-193.p.rapidapi.com/statistics",
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "covid-193.p.rapidapi.com",
              "x-rapidapi-key":
                "bb2ffe9afcmsh550d83e1f016281p1ce881jsn7b890fb4f1b4"
            }
          }
        );
        const countryjson = await getData.json();
        setData(countryjson.response);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <DataProvider value={covidData}>
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <NavigationContainer
            ref={containerRef}
            initialState={initialNavigationState}
          >
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: Colors.accent
                },
                headerTintColor: Colors.primary
              }}
            >
              <Stack.Screen name="Root" component={BottomTabNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </DataProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
