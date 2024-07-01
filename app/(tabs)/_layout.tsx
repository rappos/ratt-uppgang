import { Tabs } from 'expo-router';

import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
          <Tabs.Screen name="index"
              options={{
                title: 'Hem',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="calculator" color={color} />,
              }}
          />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Om appen',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="info-circle" color={color} />,
        }}
      />
    </Tabs>
  );
}
