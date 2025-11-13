import {StyleSheet, Text, View} from 'react-native'

const styles = StyleSheet.create({
  repoName: { fontSize: 20 },
  text: { fontSize: 15 }
})

const RepositoryItem = ({repo}) =>
  <View>
    <Text style={styles.repoName}>Full name: {repo.fullName}</Text>
    <Text style={styles.text}>Description: {repo.description}</Text>
    <Text style={styles.text}>Language: {repo.language}</Text>
    <Text style={styles.text}>Stars: {repo.stargazersCount}</Text>
    <Text style={styles.text}>Forks: {repo.forksCount}</Text>
    <Text style={styles.text}>Reviews: {repo.reviewCount}</Text>
    <Text style={styles.text}>Rating: {repo.ratingAverage}</Text>
  </View>

export default RepositoryItem
