import {Pressable, TextInput, View, StyleSheet} from 'react-native'
import {useFormik} from 'formik'
import Text from './Text'
import * as yup from 'yup'

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'black'
  },
  signInButton: {
    backgroundColor: 'blue',
    textAlign: 'center',
    borderRadius: 5,
    padding: 10,
    color: 'white'
  }
})

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

const SignIn = () => {
  const initialValues = {
    username: '',
    password: '',
  }
  
  const onSubmit = (data) => {
    console.log(formik.values.username, formik.values.password)
    console.log(formik.touched)
    console.log(formik.errors)
    if (Object.keys(formik.errors).length > 0) {
      console.log('Formik errors', formik.errors)
    }
  }
  
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })
  
  return (
    <View style={{ padding: 10, backgroundColor: 'white', rowGap: 10 }}>
      <TextInput
        placeholder={'Username'}
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        style={{...styles.textInput, borderColor: formik.errors.username ? 'red' : 'black'}}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
      )}
      <TextInput
        placeholder={'Password'}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry
        style={{...styles.textInput, borderColor: formik.errors.password ? 'red' : 'black'}}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
      )}
      <Pressable onPress={onSubmit}>
        <Text style={styles.signInButton}>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default SignIn
