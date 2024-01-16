import { useState, useEffect } from 'react';
import { Image, View, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { PICTURES_DIR } from './utils/env';
// Utils
import { downloadFile } from './utils/downloadFile';
import { getFileInfo } from './utils/getFileInfo';
import { hashUri } from './utils/hashUri';


export default function CachedImage({source, style}) {
    const [sourcePath, setSourcePath] = useState(null)

    const onLoad = async () => {
        const filePath = PICTURES_DIR + await hashUri(source.uri);
        const fileData = await getFileInfo(filePath);

        if (!fileData.exists) {
            let downloadedFile = await downloadFile(source.uri, filePath)
            setSourcePath({
                uri: downloadedFile.uri
            })
        } else {
            setSourcePath({
                uri: fileData.uri
            })
        }
    }

    useEffect(() => {
        onLoad();
    }, [])

    return (
        <View style={[styles.container, style]}>
            {
                sourcePath == null ? (
                    <View style={styles.loading}></View>
                    
                ) : (
                    <Image
                        style={{ flex: 1 }}
                        source={sourcePath}
                    />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    loading: {
        backgroundColor: 'lightgray',
        flex: 1
    }
})