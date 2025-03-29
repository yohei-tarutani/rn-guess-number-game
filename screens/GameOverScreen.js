import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import SecondaryButton from "../components/ui/SecondaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            source={require("../assets/images/dice.jpg")}
            style={styles.image}
          />
        </View>
        <Text style={styles.summaryText}>
          You needed <Text style={styles.hightlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.hightlight}>{userNumber}</Text>.
        </Text>
        <SecondaryButton onPress={onStartNewGame}>
          Start New Game
        </SecondaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  hightlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary600,
    fontSize: 30,
    fontWeight: "bold",
  },
});
