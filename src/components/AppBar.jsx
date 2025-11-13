import {View, StyleSheet, Pressable} from 'react-native'
import Constants from 'expo-constants'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBarBackground,
    padding: 15,
    paddingTop: Constants.statusBarHeight + 15
  }
})

const AppBar = () => {
  return <View style={styles.container}>
    <Pressable><Text fontSize='subheading' fontWeight='bold' color='white'>Repositories</Text></Pressable>
  </View>
}

export default AppBar
