import { useState } from "react";
import { View, Text, Image, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Camera from "expo-camera";
import { detectImage } from "../../utils/detect";

export default function Detection() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [base64, setBase64] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  // === PICK FROM GALLERY ===
  const pickGallery = async () => {
    const data = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      quality: 0.7,
    });

    if (!data.canceled) {
      setImageUri(data.assets[0].uri);
      setBase64(data.assets[0].base64 || null);
      setResult(null);
    }
  };

  // === PICK FROM CAMERA ===
  const pickCamera = async () => {
    const permission = await Camera.Camera.requestCameraPermissionsAsync();

    if (!permission.granted) {
      alert("Izin kamera diperlukan!");
      return;
    }

    const data = await ImagePicker.launchCameraAsync({
      base64: true,
      quality: 0.7,
    });

    if (!data.canceled) {
      setImageUri(data.assets[0].uri);
      setBase64(data.assets[0].base64 || null);
      setResult(null);
    }
  };

  // === PROSES DETEKSI ===
  const processDetection = async () => {
    if (!base64) return;
    setLoading(true);

    const response = await detectImage(base64);
    setResult(response);
    setLoading(false);
  };

  return (
    <ScrollView className="flex-1 bg-[#f7f9fb] px-6 pt-14">
      {/* HEADER */}
      <View className="bg-green-600 p-6 rounded-3xl shadow-lg">
        <Text className="text-2xl font-bold text-white text-center">
          Deteksi Cacat Alpukat
        </Text>
        <Text className="text-green-100 text-center mt-2">
          Upload gambar atau ambil foto untuk memulai deteksi.
        </Text>
      </View>

      {/* BUTTON INPUT */}
      <View className="flex-row justify-center mt-6">
        <TouchableOpacity
          onPress={pickCamera}
          className="bg-green-600 px-5 py-3 rounded-2xl mx-2"
        >
          <Text className="text-white font-medium">📸 Kamera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={pickGallery}
          className="bg-green-100 px-5 py-3 rounded-2xl mx-2"
        >
          <Text className="text-green-700 font-medium">🖼️ Galeri</Text>
        </TouchableOpacity>
      </View>

      {/* IMAGE PREVIEW */}
      {imageUri && (
        <View className="mt-6 bg-white p-4 rounded-3xl shadow-lg">
          <Image
            source={{ uri: imageUri }}
            className="w-full h-72 rounded-2xl"
            resizeMode="cover"
          />
        </View>
      )}

      {/* PROCESS BUTTON */}
      {imageUri && !loading && (
        <TouchableOpacity
          onPress={processDetection}
          className="mt-6 bg-blue-600 px-5 py-3 rounded-2xl self-center shadow-md"
        >
          <Text className="text-white font-medium text-lg">
            🔍 Proses Deteksi
          </Text>
        </TouchableOpacity>
      )}

      {/* LOADING */}
      {loading && (
        <ActivityIndicator size="large" color="green" className="mt-8" />
      )}

      {/* RESULT */}
      {result && (
        <View className="mt-10 bg-white p-6 rounded-3xl shadow-lg">
          <Text className="text-xl font-bold text-green-700 mb-4">
            Hasil Deteksi
          </Text>

          {result.predictions.length === 0 ? (
            <Text className="text-red-500 text-center text-lg">
              Tidak ada cacat terdeteksi.
            </Text>
          ) : (
            result.predictions.map((item: any, index: number) => (
              <View
                key={index}
                className="p-4 mb-3 border rounded-2xl bg-gray-100 shadow-sm"
              >
                <Text className="font-bold text-lg capitalize">
                  {item.class}
                </Text>
                <Text className="text-gray-600">
                  Confidence: {(item.confidence * 100).toFixed(1)}%
                </Text>
              </View>
            ))
          )}
        </View>
      )}

      <View className="h-10" />
    </ScrollView>
  );
}
