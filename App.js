import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Table from '@components/Table.tsx'

export default function App() {
  return (
      <PaperProvider>
    <View style={styles.container}>
      <Table></Table>
    </View>
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


AppRegistry.registerComponent('yact', () => Main);