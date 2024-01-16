import * as FileSystem from 'expo-file-system';

// Checks if gif directory exists. If not, creates it
export async function ensureDirExists(dir) {

  try {
    const dirInfo = await FileSystem.getInfoAsync(dir);
    if (!dirInfo.exists) {
      await FileSystem.makeDirectoryAsync(dir, { intermediates: true });
    }
  } catch (err) {
    console.error('ensureDirExists', err);
  }
}