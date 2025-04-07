import React from 'react';
import { FontKey, DensityKey, ThemeKey } from '../../../types/theme';
import { themeColors, fontDisplayNames } from '../../../data/themeData';

interface ThemePreviewProps {
  theme: ThemeKey;
  fontSize: number;
  fontFamily: FontKey;
  layoutDensity: DensityKey;
}

const ThemePreview: React.FC<ThemePreviewProps> = ({
  theme,
  fontSize,
  fontFamily,
  layoutDensity
}) => {
  const themeData = themeColors[theme];
  
  return (
    <div className="mt-8 p-4 border rounded-lg bg-background shadow">
      <h3 className="text-base font-medium mb-4">Settings Preview</h3>
      
      <div 
        className="p-4 border rounded"
        style={{
          fontFamily: fontDisplayNames[fontFamily].split(" ")[0],
          fontSize: `${fontSize}px`,
          backgroundColor: `hsl(${themeData.colors.background})`,
          color: `hsl(${themeData.colors.foreground})`
        }}
      >
        {/* Dynamic spacing based on layout density */}
        <div className={layoutDensity === "compact" ? "space-y-2" : layoutDensity === "comfortable" ? "space-y-6" : "space-y-4"}>
          <h4 className="font-medium">This is a preview of your settings</h4>
          <p>This text shows how content will look with your selected font, size, and spacing.</p>
          <div className={`grid grid-cols-2 ${layoutDensity === "compact" ? "gap-2" : layoutDensity === "comfortable" ? "gap-6" : "gap-4"}`}>
            <div className={`${layoutDensity === "compact" ? "p-1" : layoutDensity === "comfortable" ? "p-4" : "p-2"} rounded`} 
                 style={{ 
                   backgroundColor: `hsl(${themeData.colors.primary})`,
                   color: themeData.isDark ? `hsl(${themeData.colors.background})` : 'white'
                 }}>
              Panel item 1
            </div>
            <div className={`${layoutDensity === "compact" ? "p-1" : layoutDensity === "comfortable" ? "p-4" : "p-2"} rounded`}
                 style={{ 
                   backgroundColor: `hsl(${themeData.colors.secondary})`,
                   color: themeData.isDark ? `hsl(${themeData.colors.background})` : 'white'
                 }}>
              Panel item 2
            </div>
          </div>
          <p style={{ opacity: 0.7 }}>Changes won't be applied globally until you save.</p>
        </div>
      </div>
    </div>
  );
};

export default ThemePreview;