import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-[#f7f9fb]">
      {/* HEADER */}
      <View className="bg-green-600 rounded-b-3xl p-8 pb-16">
        <Text className="text-3xl font-bold text-white">Selamat Datang!</Text>
        <Text className="text-green-100 mt-2 text-base">
          Aplikasi Deteksi Cacat Buah Alpukat
        </Text>

        {/* Hero Image dari Assets */}
        <Image
          source={require("../../assets/images/home-alpukat.jpg")}
          className="w-full  h-48 rounded-2xl mt-6"
          resizeMode="cover"
        />
      </View>

      {/* CARD UTAMA */}
      <View className="-mt-10 px-6">
        <View className="bg-white rounded-3xl shadow-lg p-6">
          <Text className="text-xl font-bold text-gray-800">
            Apa yang bisa aplikasi ini lakukan?
          </Text>

          <View className="mt-4 space-y-3">
            <View className="flex flex-row items-center">
              <Text className="text-2xl mr-2">🥑</Text>
              <Text className="text-gray-700">Deteksi kualitas alpukat</Text>
            </View>

            <View className="flex flex-row items-center">
              <Text className="text-2xl mr-2">🖼️</Text>
              <Text className="text-gray-700">
                Input gambar dari galeri / kamera
              </Text>
            </View>

            <View className="flex flex-row items-center">
              <Text className="text-2xl mr-2">⚡</Text>
              <Text className="text-gray-700">Prediksi cepat & akurat</Text>
            </View>

            <View className="flex flex-row items-center">
              <Text className="text-2xl mr-2">✨</Text>
              <Text className="text-gray-700">
                UI modern & mudah digunakan
              </Text>
            </View>
          </View>
        </View>

        {/* CARD FITUR */}
        <Text className="mt-8 text-xl font-bold text-gray-800">
          Mulai Deteksi
        </Text>

        <View className="mt-3">
  <TouchableOpacity className="bg-green-600 p-5 rounded-2xl shadow-md mb-4">
    <Text className="text-center text-white font-semibold text-lg">
      Ambil Foto
    </Text>
  </TouchableOpacity>

  <TouchableOpacity className="bg-green-100 p-5 rounded-2xl shadow-sm">
    <Text className="text-center text-green-700 font-semibold text-lg">
      Pilih dari Galeri
    </Text>
  </TouchableOpacity>
</View>

      </View>

      <View className="h-10" />
    </ScrollView>
  );
}
