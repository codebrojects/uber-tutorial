import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <View className='flex-1 items-center justify-center bg-white'>
        <Text>aaa!</Text>
        <StatusBar style='auto' />
      </View>
    </Provider>
  );
}
