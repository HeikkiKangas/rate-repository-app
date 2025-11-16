import {View, StyleSheet, ScrollView} from 'react-native'
import Constants from 'expo-constants'
import Text from './Text'
import theme from '../theme'
import {Link} from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBarBackground,
    paddingTop: Constants.statusBarHeight,
    marginBottom: 5
  },
  scrollView: {
    flexDirection: 'row',
    padding: 15
  },
  link: {
    marginLeft: 10
  }
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <Link to='/'>
          <Text fontSize='subheading' fontWeight='bold' color='white'>Repositories</Text>
        </Link>
        <Link to='/signin' style={styles.link}>
          <Text fontSize='subheading' fontWeight='bold' color='white'>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  )
}

export default AppBar
