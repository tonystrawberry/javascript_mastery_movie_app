import { Stack } from "expo-router";
import { useEffect } from "react";
import "./globals.css";
import { client } from "../services/appwrite";

export default function RootLayout() {
  useEffect(() => {
    // Ping Appwrite backend server to verify the setup
    client.ping();
  }, []);

  return <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="movie/[id]" options={{ headerShown: false }} />
  </Stack>;
}
