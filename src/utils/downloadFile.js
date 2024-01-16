import * as FileSystem from 'expo-file-system';

export async function downloadFile(uri, fileUri, filename) {

    // create fileUri dir
    try {
        await FileSystem.makeDirectoryAsync(fileUri, { intermediates: true });
    } catch (err) {
        console.log(err);
    }

    // download file to fileUri dir
    try {
        const response = await FileSystem.downloadAsync(
            uri,
            fileUri
        )
        return response
    } catch (err) {
        console.error('downloadFile', err);
    }
}