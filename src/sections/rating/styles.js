import { StyleSheet } from "react-native"
import * as colors from "../../commons/colors"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  label: {
    fontSize: 16,
    color: colors.label,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 10
},
  picker:{
    fontSize: 16, 
    marginHorizontal: 16,
    color: colors.label
  }
})