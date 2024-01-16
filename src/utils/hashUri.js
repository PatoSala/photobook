import * as Crypto from 'expo-crypto';

export async function hashUri(uri) {
    const digest = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        uri
    );
    return digest;
}