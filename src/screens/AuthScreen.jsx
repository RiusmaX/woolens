import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../styles/Colors'

function AuthScreen ({ navigation }) {
  const handleWCLogin = () => {
    navigation.navigate('WCAuth')
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to WooLens</Text>
      <Text style={styles.subtitle}>Please log in to continue.</Text>
      <Button
        title='Login with WooCommerce'
        onPress={handleWCLogin}
        color={Colors.primary}
      />
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
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 10
  }
})

export default AuthScreen
