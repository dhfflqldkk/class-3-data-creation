import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Avatar, Text } from "react-native-paper";
import { bookStore } from "../data/books";

export default function About({ navigation }) {
  const [showComponents, setShowComponents] = useState(false);
  const [data, setData] = useState();

  const toggleComponents = () => {
    setShowComponents(!showComponents);
    setData(bookStore);
  };

  return (
    <View style={styles.container}>
      <Avatar.Text size={64} label="OF" style={styles.avatar} />
      <Text>Welcome to the dashboard</Text>
      <Button mode="contained" onPress={toggleComponents}>
        Show Data
      </Button>
      {showComponents && (
        <View style={styles.componentsContainer}>
          <Text>Here are some components:</Text>
          <Avatar.Text size={48} label="OF" />
          <Avatar.Text size={48} label="OF" />
        </View>
      )}
      {data &&
        data.books.map((b, index) => {
          if (b.category.toLowerCase() === "java") {
            return (
              <View key={index}>
                <Text>{b.title}</Text>
                {b.authors &&
                  b.authors.map((a, ind) => {
                    return <Text key={ind}>{a}</Text>;
                  })}
              </View>
            );
          }
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  avatar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  componentsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 24,
  },
});
