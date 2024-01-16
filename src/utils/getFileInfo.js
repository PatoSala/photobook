import * as FileSystem from 'expo-file-system';
import { PICTURES_DIR } from './env';

export async function getFileInfo(uri) {
    try {
        const fileInfo = await FileSystem.getInfoAsync(uri);
        return fileInfo;
    } catch (err) {
        console.error('getFileInfo', err);
    }
}