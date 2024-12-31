export interface Wallpaper {
  url: string;
  name: string;
}

interface ExtWallpaper extends Wallpaper {
    liked: boolean;
    library: boolean;
    suggested: boolean;
}

export const useLikedWallpapers = () : ExtWallpaper[] => useWallpapers().filter(w => w.liked);
export const useLibraryWallpapers = () : ExtWallpaper[] => useWallpapers().filter(w => w.library);
export const useSuggestedWallpapers = () : ExtWallpaper[] => useWallpapers().filter(w => w.suggested);

export const useWallpapers = () : ExtWallpaper[] => [
  {
    url: "https://ideogram.ai/assets/progressive-image/balanced/response/7RsUvFRfQsyPrC3Is7FeAw",
    name: "Heritage",
    liked: false,
    library: false,
    suggested: true
  },
  {
    url: "https://ideogram.ai/assets/image/lossless/response/STUBaXL4QF6oQyDW0B6-sg",
    name: "Late Night",
    liked: true,
    library: false,
    suggested: true
  },
  {
    url: "https://ideogram.ai/assets/progressive-image/balanced/response/U7-Pn_ApT-KoJHAzN5tj2g",
    name: "Sunset",
    liked: false,
    library: true,
    suggested: true
  },
  {
    url: "https://ideogram.ai/assets/progressive-image/balanced/response/oSopAZShSMCHODwsBKW6Kw",
    name: "Sunrise",
    liked: true,
    library: true,
    suggested: false
  },
  {
    url: "https://ideogram.ai/assets/progressive-image/balanced/response/d1GIJS23QXqE0Qf_NHkauA",
    name: "Forest",
    liked: false,
    library: false,
    suggested: true
  },
  {
    url: "https://ideogram.ai/assets/progressive-image/balanced/response/RgmEkjiHQcyB1phpW63_ow",
    name: "Mountains",
    liked: true,
    library: false,
    suggested: true
  },
];
