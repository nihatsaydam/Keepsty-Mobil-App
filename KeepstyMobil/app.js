import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Ekran bileşenlerimizi tanımlıyoruz:

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>
      <TextInput 
        style={styles.input}
        placeholder="Kullanıcı adı" 
        value={username} 
        onChangeText={setUsername} 
      />
      <TextInput 
        style={styles.input}
        placeholder="Şifre" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
      />
      <Button 
        title="Giriş Yap" 
        onPress={() => {
          // Normalde burada girilen bilgileri doğrulardık.
          // Şimdilik doğrudan Home ekranına yönlendiriyoruz.
          navigation.navigate('Home');
        }} 
      />
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoş Geldiniz!</Text>
      {/* İsteğe bağlı: username bilgisini LoginScreen'den parametre olarak geçirip burada kullanabilirsiniz. */}
    </View>
  );
}

// Stack Navigator oluşturuyoruz
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Uygulamamızda iki ekran var: Login ve Home */}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Giriş Ekranı' }}  // Başlık yazısını özelleştirdik
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Ana Sayfa' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Basit bir stil tanımı
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 16
  },
  title: {
    fontSize: 24, 
    marginBottom: 16
  },
  input: {
    width: '80%', 
    padding: 8, 
    borderWidth: 1, 
    borderColor: '#ccc',
    marginBottom: 12, 
    borderRadius: 4
  }
});
