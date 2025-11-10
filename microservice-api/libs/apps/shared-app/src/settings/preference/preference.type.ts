export type PreferenceType = Record<string, string>;
export type RecordPreferenceType = Record<string, PreferenceType>;
export type SettingPreferenceType = PreferenceType | RecordPreferenceType | Record<string, PreferenceType | RecordPreferenceType>;