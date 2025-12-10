import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { Prediction } from "../utils/detect";

export default function Result() {
  const { result } = useLocalSearchParams();
  const data = JSON.parse(result as string) as { predictions: Prediction[] };

  return (
    <ScrollView className="flex-1 p-6 bg-white pt-14">
      <Text className="text-2xl font-bold text-green-700">Hasil Deteksi</Text>

      {data?.predictions?.length === 0 && (
        <Text className="text-red-500 mt-4">Tidak ada cacat terdeteksi.</Text>
      )}

      {data?.predictions?.map((item, index) => (
        <View
          key={index}
          className="p-4 my-3 border rounded-xl bg-gray-100 shadow-sm"
        >
          <Text className="font-bold text-lg">{item.class}</Text>
          <Text className="text-gray-600">
            Confidence: {(item.confidence * 100).toFixed(1)}%
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
