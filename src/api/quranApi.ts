export async function getAyahPage(
  surah: number,
  ayah: number
): Promise<number> {
  const res = await fetch(
    `https://api.alquran.cloud/v1/ayah/${surah}:${ayah}`
  );
  const json = await res.json();
  return json.data.page;
}
