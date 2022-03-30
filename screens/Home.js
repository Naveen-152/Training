import { Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function HomeScreen({ navigation }) {
  return (
    <>
      <Text>Hello World</Text>
      <Button
        title="profile screen"
        onPress={() => navigation.navigate("Profile")}
      />
    </>
  );
}
