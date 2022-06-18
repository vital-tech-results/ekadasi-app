import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function UnityInDiversity() {
  return (
    <View className='flex-1 items-center justify-center px-8'>
      <Text className='text-lg font-bold'>Hare Krsna</Text>
      <View className='my-4  h-1 w-4/5' lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="/screens/ModalScreen.tsx" /> */}

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      
      <Text className='text-base tracking-wider leading-8 font-normal'>All dates are for Vrndavana, India. For your local dates tap
          "PureBhakti" below. Configure your local time on purebhatki.com right
          here in this app. Every time you open this app in the future, you will
          see your time zone in the Pure Bhakti tab. Haribol!</Text>
    </View>
  );
}

