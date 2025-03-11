import { Button, StyleSheet, View } from 'react-native'
import TextInput from './inputs/TextInput'
import { useState } from 'react'
import { productValidator } from '../../utils/validators/validators'

function AddProductForm ({ onSubmit }) {
  const [product, setProduct] = useState({
    name: '',
    short_description: '',
    price: 0
  })
  const [errors, setErrors] = useState(null)

  const handlePress = () => {
    const errors = productValidator(product)
    if (!errors) {
      onSubmit(product)
    } else {
      setErrors(errors)
    }
  }

  const handleChange = (field, value) => {
    setProduct({
      ...product,
      [field]: value
    })
    setErrors({
      ...errors,
      [field]: null
    })
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={product.name}
        onChange={(text) => handleChange('name', text)}
        placeholder='Nom du produit'
        error={errors?.name}
      />
      <TextInput
        keyboardType='number-pad'
        value={product.price}
        onChange={(text) => handleChange('price', text)}
        placeholder='Prix'
        error={errors?.price}
      />
      <TextInput
        textarea
        value={product.short_description}
        onChange={(text) => handleChange('short_description', text)}
        placeholder='Description courte'
        error={errors?.short_description}
      />
      <Button
        title='Ajouter le produit'
        onPress={handlePress}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    gap: 15,
    paddingVertical: 30,
    paddingHorizontal: 15
  }
})

export default AddProductForm
