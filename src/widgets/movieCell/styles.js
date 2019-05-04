import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  cell: {
    width: width / 2,
    height: width / 1.33
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  }
});
