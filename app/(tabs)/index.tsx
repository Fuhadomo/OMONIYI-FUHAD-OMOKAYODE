import { Text, View, StyleSheet, Pressable, Alert } from 'react-native';

export default function HomeScreen() {
  const handlePress = () => {
    Alert.alert('Hello 👋', 'You pressed the button!');
  };

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <Text style={styles.title}>🚀 SuperCool App</Text>
      <Text style={styles.subtitle}>
        Welcome to my supercool project
      </Text>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Homepage</Text>
        <Text style={styles.cardText}>
          This app was built using Expo React Native.
        </Text>

        <Pressable style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Click Me</Text>
        </Pressable>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        Built by Fuhad Omoniyi
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
    marginBottom: 30,
  },

  card: {
    width: '100%',
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },

  cardTitle: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '600',
  },

  cardText: {
    fontSize: 14,
    color: '#cbd5f5',
    marginVertical: 10,
    textAlign: 'center',
  },

  button: {
    marginTop: 15,
    backgroundColor: '#3b82f6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  footer: {
    marginTop: 40,
    fontSize: 12,
    color: '#64748b',
  },
});
