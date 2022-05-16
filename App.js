import * as React from 'react';
import 'react-native-gesture-handler'
import { NativeBaseProvider } from 'native-base'

import CustomNavigation from './Navigation';




export default function App() {
  return (
    <NativeBaseProvider>
      <CustomNavigation />
    </NativeBaseProvider>
  );
}
