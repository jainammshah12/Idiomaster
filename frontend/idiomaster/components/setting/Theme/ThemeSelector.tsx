import React from 'react';
import { ThemeKey } from '../../../types/theme';
import { themeColors } from '../../../data/themeData';

interface ThemeSelectorProps {
  selectedTheme: ThemeKey;
  onThemeChange: (theme: ThemeKey) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ selectedTheme, onThemeChange }) => {
  return (
    <div>
      <h3 className="text-base font-medium mb-4" id="color-theme">Color Theme</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4" role="radiogroup" aria-labelledby="color-theme">
        {Object.entries(themeColors).map(([key, theme]) => (
          <button 
            key={key}
            style={{ 
              backgroundColor: `hsl(${theme.colors.background})`,
              color: `hsl(${theme.colors.foreground})`
            }}
            className={`aspect-square border flex flex-col items-center justify-center rounded-md transition-all ${selectedTheme === key ? 'ring-2 ring-primary' : ''}`}
            onClick={() => onThemeChange(key as ThemeKey)}
            aria-pressed={selectedTheme === key}
            aria-label={`${theme.name} theme`}
          >
            <div 
              className="w-8 h-8 rounded-full mb-2"
              style={{ backgroundColor: `hsl(${theme.colors.primary})` }}
            ></div>
            <span className="text-sm">{theme.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;