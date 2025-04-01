import { useEffect, useState } from 'react'
import WebView from 'react-native-webview'
import querystring from 'query-string'

const endpoint = '/wc-auth/v1/authorize'

const WCWebView = ({ route, navigation }) => {
  const { storeUrl } = route.params || {}

  const [url, setURL] = useState(storeUrl)

  useEffect(() => {
    const params = {
      app_name: 'Woolens',
      scope: 'read_write',
      user_id: 123,
      return_url: 'https://woolens.app/wc-auth-return',
      callback_url: 'https://woolens.app/wc-auth-callback'
    }

    const queryString = querystring.stringify(params).replace(/%20/g, '+')
    const url = `${storeUrl}${endpoint}?${queryString}`

    setURL(url)
  }, [storeUrl])
  return <WebView source={{ uri: url }} style={styles.webview} />
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

export default WCWebView
