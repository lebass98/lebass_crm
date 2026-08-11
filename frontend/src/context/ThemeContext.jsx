import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const COLOR_PRESETS = [
  { id: 'default', name: 'Emerald Green', primary: '#00A76F', ring: 'ring-[#00A76F]', bg: 'bg-[#00A76F]', text: 'text-[#00A76F]', border: 'border-[#00A76F]' },
  { id: 'cyan', name: 'Vibrant Cyan', primary: '#078DEE', ring: 'ring-[#078DEE]', bg: 'bg-[#078DEE]', text: 'text-[#078DEE]', border: 'border-[#078DEE]' },
  { id: 'purple', name: 'Royal Purple', primary: '#7635DC', ring: 'ring-[#7635DC]', bg: 'bg-[#7635DC]', text: 'text-[#7635DC]', border: 'border-[#7635DC]' },
  { id: 'blue', name: 'Deep Blue', primary: '#2065D1', ring: 'ring-[#2065D1]', bg: 'bg-[#2065D1]', text: 'text-[#2065D1]', border: 'border-[#2065D1]' },
  { id: 'orange', name: 'Amber Orange', primary: '#FDA92D', ring: 'ring-[#FDA92D]', bg: 'bg-[#FDA92D]', text: 'text-[#FDA92D]', border: 'border-[#FDA92D]' },
  { id: 'red', name: 'Crimson Red', primary: '#FF3030', ring: 'ring-[#FF3030]', bg: 'bg-[#FF3030]', text: 'text-[#FF3030]', border: 'border-[#FF3030]' },
];

export const DEVICE_PRESETS = [
  { id: 'pc', name: 'PC Desktop', width: 1920, height: 1080, icon: 'Monitor' },
  { id: 'tablet', name: 'Tablet', width: 1024, height: 768, icon: 'Tablet' },
  { id: 'mobile', name: 'Mobile Phone', width: 375, height: 667, icon: 'Smartphone' },
];

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState('dark');
  const [colorPreset, setColorPreset] = useState(COLOR_PRESETS[0]);
  const [deviceMode, setDeviceMode] = useState('pc');
  const [previewScale, setPreviewScale] = useState(100);
  const [viewLayout, setViewLayout] = useState('grid'); // 'grid' | 'table'
  const [gridColumns, setGridColumns] = useState(3); // 1~5
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [previewItem, setPreviewItem] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', colorPreset.primary);
  }, [colorPreset]);

  const toggleTheme = () => {
    setThemeMode(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        toggleTheme,
        colorPreset,
        setColorPreset,
        deviceMode,
        setDeviceMode,
        previewScale,
        setPreviewScale,
        viewLayout,
        setViewLayout,
        gridColumns,
        setGridColumns,
        isSearchOpen,
        setIsSearchOpen,
        previewItem,
        setPreviewItem,
      }}
    >
      <div className={themeMode === 'dark' ? 'dark' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useThemeSystem() {
  return useContext(ThemeContext);
}
