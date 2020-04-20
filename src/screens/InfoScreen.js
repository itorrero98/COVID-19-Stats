import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Colors from "../constants/Colors";

export default function HomeScreen() {
  const [page, setPage] = React.useState(0);
  const [covidData, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const refresh = () => {
    setPage(page + 1);
  };
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.header}>What is the Coronavirus?</Text>
          <Text style={{ width: "90%" }}>
            2019 Novel Coronavirus (2019-nCoV) is a virus (more specifically, a
            coronavirus) identified as the cause of an outbreak of respiratory
            illness first detected in Wuhan, China. Early on, many of the
            patients in the outbreak in Wuhan, China reportedly had some link to
            a large seafood and animal market, suggesting animal-to-person
            spread. However, a growing number of patients reportedly have not
            had exposure to animal markets, indicating person-to-person spread
            is occurring. The name coronavirus is derived from the Latin corona,
            meaning "crown" or "halo", which refers to the characteristic
            appearance reminiscent of a crown.
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.header}>How do you get infected?</Text>
          <Text style={{ width: "90%" }}>
            The main route of transmission is respiratory droplets and close
            contact. When you sneeze or cough, you send out droplets of fluid
            from your nose and mouth. Those droplets can carry infections, and
            when they enter someone else's enter the eyes, nose or mouth, the
            infection can make them sick. This is the way the flu and many
            viruses are spread. Most often, you need to be close to the person
            (within 6 feet) for it to spread this way. There is the possibility
            of aerosol transmission when exposed to high concentration aerosol
            for a long time in a relatively closed environment. The WHO has
            stated that the risk of spread from someone without symptoms is
            "very low" and that fecal transmission is "low".
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.header}>How can I protect myself?</Text>
          <Text style={styles.subHeader}>Handwashing</Text>
          <Text style={{ width: "90%" }}>
            A number of governments advise against all non-essential travel to
            countries and areas affected by the outbreak. There are
            misconceptions circulating about how to prevent infection: rinsing
            the nose, gargling with mouthwash, and eating garlic are not
            effective. The CDC recommends that people wash hands often with soap
            and water for at least 20 seconds, especially after going to the
            toilet or when hands are visibly dirty. It further recommended using
            an alcohol-based hand sanitiser with at least 60% alcohol by volume
            (or 120 proof) when soap and water are not readily available. The
            WHO also advise people to avoid touching the eyes, nose, or mouth
            with unwashed hands.
          </Text>
          <Text style={styles.subHeader}>Respiratory hygiene</Text>
          <Text style={{ width: "90%" }}>
            Health organizations recommended that people cover their mouth and
            nose with a tissue when coughing or sneezing (which should then be
            disposed of immediately), or with a sleeve if a tissue is not
            available. The use of surgical masks by those who may be infected
            has also been recommended, as they can limit the volume and travel
            distance of expiratory droplets dispersed when talking, sneezing,
            and coughing. There is no evidence to show that the wearing of
            surgical masks by uninfected people at low risk is effective. Only
            China has specifically recommended the use of masks by healthy
            members of the public, while face masks have been widely used by
            healthy people in Hong Kong, Japan, Malaysia, and Singapore.
          </Text>
          <Text style={styles.subHeader}>How to use a mask</Text>
          <Text style={{ width: "90%" }}>
            Wear a mask if you are coughing or sneezing. If you wear a mask,
            then you must know how to use it and dispose of it properly. Before
            putting on a mask, clean your hands with alcohol-based hand rub or
            soap and water. Cover your mouth and nose with the mask and make
            sure there are no gaps between your face and the mask. Avoid
            touching the mask while using it. Replace the mask with a new one as
            soon as it is damp and do not re-use single-use masks. To remove the
            mask, remove it from behind (do not touch the front of the mask),
            discard it immediately in a closed bin, and then clean your hands
            with alcohol-based hand rub or soap and water.
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.header}>Is there a cure?</Text>
          <Text style={{ width: "90%" }}>
            No vaccine is currently available. Several organisations around the
            world are developing vaccines, using several different methods. By
            early March 2020, 30 vaccine candidates were in development, with
            products by Gilead Sciences and Ascletis Pharma in Phase III
            clinical trials. Several compounds, which were previously approved
            for treatment of other viral diseases, such as favipiravir,
            ribavirin, remdesivir and galidesivir, are being investigated
            against the coronavirus. Clinical trials are underway in for
            lopinavir/ritonavir and of remdesivir. Bruce Aylward, an assistant
            director-general of the WHO, has stated "there is only one drug
            right now that we think may have real efficacy and that's
            remdesivir."
          </Text>
        </View>
      </ScrollView>
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
  contentContainer: {
    paddingTop: 15,
    alignContent: "center",
    alignItems: "center"
  },
  infoContainer: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: Colors.accent,
    width: "95%",
    marginBottom: 15,
    alignContent: "center",
    alignItems: "center"
  },
  header: {
    color: Colors.light,
    fontSize: 28,
    fontWeight: "bold"
  },
  subHeader: {
    color: Colors.light,
    fontSize: 22,
    fontWeight: "bold"
  }
});
