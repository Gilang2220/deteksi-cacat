import { View, Text, Image, TouchableOpacity, ScrollView, Linking } from "react-native";

export default function About() {
  return (
    <ScrollView className="flex-1 bg-[#f5f9f7] p-6 pt-14">

      {/* HEADER */}
      <View className="bg-green-600 p-7 rounded-3xl shadow-lg">
        <Text className="text-3xl font-extrabold text-white text-center">
          Tentang Aplikasi 🥑
        </Text>
        <Text className="text-green-100 text-center mt-2">
          Informasi lengkap mengenai teknologi dan developer aplikasi ini.
        </Text>
      </View>

      {/* INTRO */}
      <View className="mt-8 bg-white p-6 rounded-3xl shadow-md">
        <Text className="text-xl font-bold text-green-700">Apa ini?</Text>
        <Text className="text-gray-700 mt-3 leading-6">
          Aplikasi ini dirancang untuk mendeteksi cacat pada buah alpukat 
          menggunakan teknologi Computer Vision dengan bantuan model YOLOv11 
          dari Roboflow. Dibangun menggunakan Expo React Native dan TypeScript.
        </Text>
      </View>

      {/* FEATURES */}
      <View className="mt-8 bg-white p-6 rounded-3xl shadow-md">
        <Text className="text-xl font-bold text-green-700 mb-3">Fitur Utama</Text>

        <View className="space-y-3">
          <View className="flex-row items-center">
            <Text className="text-2xl mr-3">🔍</Text>
            <Text className="text-gray-700 text-base">Deteksi cacat alpukat secara otomatis</Text>
          </View>

          <View className="flex-row items-center">
            <Text className="text-2xl mr-3">📸</Text>
            <Text className="text-gray-700 text-base">Input gambar dari kamera & galeri</Text>
          </View>

          <View className="flex-row items-center">
            <Text className="text-2xl mr-3">⚡</Text>
            <Text className="text-gray-700 text-base">Proses cepat dan ringan</Text>
          </View>

          <View className="flex-row items-center">
            <Text className="text-2xl mr-3">📊</Text>
            <Text className="text-gray-700 text-base">Menampilkan confidence level setiap deteksi</Text>
          </View>
        </View>
      </View>

      {/* TECHNOLOGY */}
      <View className="mt-8 bg-white p-6 rounded-3xl shadow-md">
        <Text className="text-xl font-bold text-green-700 mb-4">Teknologi yang Digunakan</Text>

        <View className="space-y-4">
          <View className="p-4 bg-green-50 rounded-2xl shadow-sm border border-green-200">
            <Text className="font-bold text-green-700">🖥️ Expo React Native</Text>
            <Text className="text-gray-600 mt-1">Framework utama untuk membuat aplikasi mobile.</Text>
          </View>

          <View className="p-4 mt-4 bg-green-50 rounded-2xl shadow-sm border border-green-200">
            <Text className="font-bold text-green-700">⚙️ TypeScript</Text>
            <Text className="text-gray-600 mt-1">Menambah keamanan dan stabilitas kode.</Text>
          </View>

          <View className="p-4 mt-4 bg-green-50 rounded-2xl shadow-sm border border-green-200">
            <Text className="font-bold text-green-700">🤖 YOLOv11 - Roboflow</Text>
            <Text className="text-gray-600 mt-1">Model AI untuk deteksi cacat buah alpukat.</Text>
          </View>
        </View>
      </View>


      {/* FOOTER */}
      <View className="mt-10 mb-20">
        <Text className="text-center text-gray-500">
          © {new Date().getFullYear()} – Semua Hak Cipta Dilindungi
        </Text>
      </View>
    </ScrollView>
  );
}
