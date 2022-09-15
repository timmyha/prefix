export const defaultTheme = {
  color: {
    background: "#222222",
    foreground: "#c0c0c0",
    accent: "pink",
  },
  font: {
    serif: "IBM Plex Serif",
    sans: "IBM Plex Sans",
  },
};

export interface Theme {
  color: Color,
  font: Font
}

interface Color {
  background: string;
  foreground: string;
  accent: string;
}

interface Font {
  serif: string;
  sans: string;
}
