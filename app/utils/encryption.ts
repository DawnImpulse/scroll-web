import {
    decrypt,
    encrypt,
    type SimpleEncryptionType,
} from "@mryhryki/simple-encryption";

export default class Encryption {
    /**
     * encrypt data
     * @param key
     * @param data
     */
    static async encrypt(key: string, data: string) {
        const plainData = new TextEncoder().encode(data); // encode text
        const result = await encrypt({ key, plainData, crypto }); // encrypt data
        return btoa(JSON.stringify(result)); // convert to base64
    }

    /**
     * decrypt data
     * @param key
     * @param data
     */
    static async decrypt(key: string, data: string) {
        const decoded: SimpleEncryptionType.EncryptedData = JSON.parse(
            atob(data),
        ); // decode and parse encrypted data
        const decrypted = await decrypt({ ...decoded, key, crypto }); // perform decryption
        return new TextDecoder().decode(decrypted.plainData); // text decode and return
    }
}
