import { Button, Text, View } from 'react-native'
import TextInput from '../components/form/inputs/TextInput'
import { Colors } from '../styles/Colors'
import { useState } from 'react'

function WCAuthScreen ({ navigation }) {
  const [storeUrl, setStoreUrl] = useState('https://artizanantes.com')
  const handleLogin = () => {
    navigation.navigate('WCWebView', { storeUrl })
  }

  return (
    <View style={styles.container}>
      <Text>Please enter your store URL</Text>
      <TextInput
        value={storeUrl}
        onChangeText={setStoreUrl}
        placeholder='https://example.com'
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='url'
        textContentType='URL'
        returnKeyType='next'
        style={styles.input}
      />
      <Button
        title='Login'
        onPress={handleLogin}
        color={Colors.primary}
      />
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  input: {
    minWidth: 250
  },
  webview: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
}

export default WCAuthScreen
