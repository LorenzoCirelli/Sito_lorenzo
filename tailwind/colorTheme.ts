export default {
    primaryCta: "#FFB703",
    images: "#FFBD53",
    cards: {
      orange: "#ECE0D3",
      green: "ECE7D3",
    },
    colors: {
      text: {
        main: "#1B1B1B",
        subtext: "#595151",
        color: "#C54C20",
        gray: "#989898",
      },
      menu: {
        deSelected: "#D9D9D9",
        selected1: "#ECE7D3",
        selected2: "#ECDFD3",
      },
      // Custom dark mode colors
      dark: {
        text: {
          main: "#F5F5F5", // Light text for dark mode
          subtext: "#B0B0B0", // Light subtext for dark mode
          color: "#FFB703", // Same primary Cta color for contrast in dark mode
          gray: "#B0B0B0", // Light gray for dark mode
        },
        menu: {
          deSelected: "#333333", // Darker deSelected menu item
          selected1: "#444444", // Darker selected1
          selected2: "#555555", // Darker selected2
        },
        cards: {
          orange: "#3C3C3C", // Darker background for cards in dark mode
          green: "#4C4C4C", // Darker green background for cards
        },
      },
    },
    extend: {
      // You can also add custom dark mode extensions here
    },
  }