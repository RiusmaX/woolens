import { useState } from 'react'
import {
  TextInput as Base,
  Text,
  View
} from 'react-native'

import styles from './TextInputStyle'

function TextInput ({
  value,
  onChangeText,
  placeholder,
  label = null,
  error = null,
  textarea = false,
  ...props
}) {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label} :</Text>}
      <View style={styles.inputWrapper}>
        <Base
          {...props}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          multiline={textarea}
          numberOfLines={textarea ? 6 : 1}
          value={value}
          onChangeText={onChangeText}
          style={
            [styles.input,
              error
                ? styles.inputError
                : isFocus
                  ? styles.inputFocused
                  : null,
              textarea && styles.textarea,
              props.style
            ]
          }
          placeholder={placeholder}
        />
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    </View>
  )
}

export default TextInput
