/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Button, StyleSheet, useColorScheme, View, Switch } from 'react-native';
import { useState } from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import CustomNativeComponent from './specs/CustomNativeComponent';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [screen, setScreen] = useState('main');

  return (
    <SafeAreaProvider>
      {screen === 'main' ? (
        <CustomNativeComponent style={{flex: 1}}>
          <AppContent onNavigatePressed={() => setScreen('switch')} />
        </CustomNativeComponent>
      ) : null}

      {screen === 'switch' ? (
        <CustomNativeComponent style={{flex: 1}}>
          <SwitchScreen onBackPressed={() => setScreen('main')} />
        </CustomNativeComponent>
      ) : null}
    </SafeAreaProvider>
  );
}

function AppContent({ onNavigatePressed }: { onNavigatePressed: () => void }) {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { marginTop: safeAreaInsets.top }]}>
      <Button title="Navigate" onPress={onNavigatePressed} />
    </View>
  );
}

function SwitchScreen({ onBackPressed }: { onBackPressed: () => void }) {
  const safeAreaInsets = useSafeAreaInsets();
  const [value, setValue] = useState<boolean>(false);
  return (
    <View style={[styles.container, { marginTop: safeAreaInsets.top }]}>
      <Button title="Back" onPress={onBackPressed} />
      <Switch
        onValueChange={setValue}
        value={value}
        style={{ alignSelf: 'center' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
