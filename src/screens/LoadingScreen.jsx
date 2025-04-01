import { StyleSheet, Text, View } from 'react-native'

function LoadingScreen () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loading...</Text>
      <Text style={styles.subtitle}>Please wait while we load the app.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  title: {
    fontSize: 20
  },
  subtitle: {
    fontSize: 16
  }
})

export default LoadingScreen
