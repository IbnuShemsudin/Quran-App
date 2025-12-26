import { Surah } from "../types/quran";

export const surahs: Surah[] = [
  {
    id: 1,
    name: "Al-Fatihah",
    arabicName: "الفاتحة",
    ayahsCount: 7,
    revelation: "Meccan",
    ayahs: [
      {
        number: 1,
        text: "بسم الله الرحمن الرحيم",
        translation: "In the name of Allah, the Most Gracious, the Most Merciful."
      }
    ]
  },
  {
    id: 36,
    name: "Ya-Sin",
    arabicName: "يس",
    ayahsCount: 83,
    revelation: "Meccan"
  }
];
