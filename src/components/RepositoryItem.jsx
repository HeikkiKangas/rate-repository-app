import {Image, StyleSheet, View} from 'react-native'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  repoName: { fontSize: 20, marginTop: 10 },
  text: { fontSize: 15, flexShrink: 1 },
  image: {
    margin: 10,
    width: 50,
    height: 50,
    borderRadius: 5
  },
  container: {
    borderWidth: 2,
    borderRadius: 5,
    padding: 3,
    backgroundColor: theme.colors.repositoryItemBackground
  }
})

const RepositoryItem = ({repo}) =>
  <View style={styles.container}>
    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
      <Image source={{ uri: repo.ownerAvatarUrl }} style={styles.image} />
      <View style={{ rowGap: 5, flexGrow: 1 }}>
        <Text style={styles.repoName}>{repo.fullName}</Text>
        <View style={{ flexGrow: 1, flexDirection: 'row' }}>
          <Text style={{ ...styles.text, flex: 1, width: 1 }}>{repo.description}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{
            ...styles.text,
            color: 'white',
            backgroundColor: 'blue',
            flexGrow: 0,
            padding: 5,
            borderRadius: 5
          }}>{repo.language}</Text>
          <View style={{ flexGrow: 1 }}/>
        </View>
      </View>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
      <RepositoryStat title='Stars' count={repo.stargazersCount}/>
      <RepositoryStat title='Forks' count={repo.forksCount}/>
      <RepositoryStat title='Reviews' count={repo.reviewCount}/>
      <RepositoryStat title='Rating' count={repo.ratingAverage}/>
    </View>
  </View>

const RepositoryStat = ({ title, count }) => {
  const roundedCount = count < 1000 ? count : (count / 1000).toFixed(1) + 'k'
  return (
    <View style={{alignItems: 'center'}}>
      <Text fontWeight='bold'>{roundedCount}</Text>
      <Text>{title}</Text>
    </View>
  )
}
export default RepositoryItem
