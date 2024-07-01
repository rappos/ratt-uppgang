import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>Idén bakom appen kommer från Joakim Loxdal, som också utvecklade en tidigare version.</Text>
      <Text>Data för alla stationer kommer från Joakim, de som bidrog med data till honom, samt mig själv.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 24,
    padding: 12,
  },
});
