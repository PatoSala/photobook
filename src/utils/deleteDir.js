import * as FileSystem from 'expo-file-system';
import { hashUri } from './hashUri';

import { PICTURES_DIR } from './env';

export async function deleteDir(uri) {
    const key = await hashUri(uri);
    const fullPath = PICTURES_DIR + key + '/'

    try {
        await FileSystem.deleteAsync(fullPath)
        console.log("DELETED DIR: ", fullPath);
    } catch (err) {
        console.error('deleteDir', err);
    }
}