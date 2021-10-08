import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from './languages/en.json';
import vi from './languages/vi.json';

type languageDetectorType = {
    type: string;
    async: boolean;
    detect: (callback: Function) => unknown;
    init: () => void;
    cacheUserLanguage: () => void;
};

const getDeviceLocale = async callback => {
    const language = await AsyncStorage.getItem('@appLanguage').catch(() => {
        return 'vi';
    });
    const defaultLanguage = 'vi';

    if (!language) {
        await AsyncStorage.setItem('@appLanguage', defaultLanguage);
        return callback(defaultLanguage);
    }

    return callback(language);
    // callback('vi');
};

const languageDetector: languageDetectorType = {
    type: 'languageDetector',
    async: true,
    detect: getDeviceLocale,
    init: () => {},
    cacheUserLanguage: () => {},
};

i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translations: en,
            },
            vi: {
                translations: vi,
            },
        },
        fallbackLng: 'vi',
        debug: true,
        ns: ['translations'],
        defaultNS: 'translations',
        keySeparator: '.', // Don't use keySeparator: true
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
            wait: false,
        },
    });

export default i18n;
