export type Ayah = {
  number: number;
  text: string;
  translation: string;
};

export type Surah = {
  id: number;
  name: string;
  arabicName: string;
  ayahsCount: number;
  revelation: "Meccan" | "Medinan";
  ayahs?: Ayah[];
};
