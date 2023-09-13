export const pallete = [
  {
    // brown
    text: "#A52A2A",
    bgColor: (opacity) => `rgba(165,42,42, ${opacity})`,
  },
  {
    // brown
    text: "#800000",
    bgColor: (opacity) => `rgba(128,0,0, ${opacity})`,
  },

  {
    // orange
    text: "#f97316",
    bgColor: (opacity) => `rgba(251, 146, 60, ${opacity})`,
  },
  {
    // dark gray
    text: "#334155",
    bgColor: (opacity) => `rgba(30, 41, 59, ${opacity})`,
  },
  {
    // purple
    text: "#7c3aed",
    bgColor: (opacity) => `rgba(167, 139, 250, ${opacity})`,
  },
  {
    // green
    text: "#009950",
    bgColor: (opacity) => `rgba(0, 179, 89, ${opacity})`,
  },
  {
    // teal
    text: "#14b8a6",
    bgColor: (opacity) => `rgba(45, 212, 191, ${opacity})`,
  },
  {
    // teal
    text: "#008080",
    bgColor: (opacity) => `rgba(0,128,128, ${opacity})`,
  },
  {
    // red
    text: "#dc2626",
    bgColor: (opacity) => `rgba(248, 113, 113, ${opacity})`,
  }, 
];
export const themeColors = {
  ...pallete[0],
};
export const themes = {
  fonts: {
    text: 'Pacifico_400Regular'
  }
}
