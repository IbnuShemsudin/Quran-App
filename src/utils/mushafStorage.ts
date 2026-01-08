import * as FileSystem from "expo-file-system";

const MUSHAF_DIR = FileSystem.documentDirectory + "mushaf/";

export async function ensureMushafPage(page: number) {
  const fileUri = `${MUSHAF_DIR}page_${page}.png`;

  // Create directory if not exists
  const dirInfo = await FileSystem.getInfoAsync(MUSHAF_DIR);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(MUSHAF_DIR, { intermediates: true });
  }

  // Check page
  const fileInfo = await FileSystem.getInfoAsync(fileUri);
  if (fileInfo.exists) {
    return fileUri;
  }


  // Download page
  const remoteUri = `https://everyayah.com/data/quranpngs/Page${page}.png`;
  await FileSystem.downloadAsync(remoteUri, fileUri);

  return fileUri;
}
