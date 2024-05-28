// color design tokens export
export const tokensDark = {
    grey: {
        0: "#ffffff", // manually adjusted
        10: "#f6f6f6", // manually adjusted
        50: "#f0f0f0", // manually adjusted
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
        1000: "#000000", // manually adjusted
    },
    primary: {
        // blue
        100: "#d3d4de",
        200: "#a6a9be",
        300: "#7a7f9d",
        400: "#4d547d",
        500: "#21295c",
        600: "#191F45", // manually adjusted
        700: "#141937",
        800: "#0d1025",
        900: "#070812",
    },
    secondary: {
        // yellow
        50: "#f0f0f0", // manually adjusted
        100: "#fff6e0",
        200: "#ffedc2",
        300: "#ffe3a3",
        400: "#ffda85",
        500: "#ffd166",
        600: "#cca752",
        700: "#997d3d",
        800: "#665429",
        900: "#332a14",
    },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
    const reversedTokens = {};
    Object.entries(tokensDark).forEach(([key, val]) => {
        const keys = Object.keys(val);
        const values = Object.values(val);
        const length = keys.length;
        const reversedObj = {};
        for (let i = 0; i < length; i++) {
            reversedObj[keys[i]] = values[length - i - 1];
        }
        reversedTokens[key] = reversedObj;
    });
    return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        main: '#1976d2',
                        light: '#2196f3',
                        dark: '#0d47a1',
                        contrastText: '#fff',
                    },
                    secondary: {
                        light: '#FFEA41',
                        main: '#FFE102',
                        dark: '#DBBE01',
                        contrastText: 'rgba(0, 0, 0, 0.87)',
                    },
                    neutral: {
                        main: '#2D3748',
                        light: '#A0DEFF',
                        dark: '#E0E0E0',
                    },
                    text: {
                        primary: '#EEEEEF',
                        secondary: '#AEB0B4',
                    },
                    divider: 'rgba(255, 255, 255, 0.12)',
                    background: {
                        paper: '#222B45',
                        default: '#222B45',
                        level2: '#333',
                        level1: '#2D3748',
                    },
                }
                : {
                    // palette values for light mode
                    primary: {
                        main: '#377dff',
                        light: '#467de3',
                        dark: '#2f6ad9',
                        contrastText: '#fff',
                    },
                    secondary: {
                        light: '#ffb74d',
                        main: '#f9b934',
                        dark: '#FF9800',
                        contrastText: 'rgba(0, 0, 0, 0.87)',
                    },
                    neutral: {
                        ...tokensLight.grey,
                        main: '#f5f5f5',
                        light: '#ffffff',
                        dark: '#000000',
                    },
                    text: {
                        primary: '#1e2022',
                        secondary: '#677788',
                    },
                    divider: 'rgba(0, 0, 0, 0.12)',
                    background: {
                        paper: '#ffffff',
                        default: '#ffffff',
                        level2: '#f5f5f5',
                        level1: '#ffffff',
                    },
                }),
        },
        typography: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
        zIndex: {
            appBar: 1200,
            drawer: 1300,
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontWeight: 400,
                        borderRadius: 5,
                        paddingTop: 10,
                        paddingBottom: 10,
                    },
                    containedSecondary: mode === 'light' ? { color: 'white' } : {},
                },
            },
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        borderRadius: 5,
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        borderRadius: 5,
                    },
                    input: {
                        borderRadius: 5,
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 8,
                    },
                },
            },
        },
    };
};