// Source: 21st.dev — Background Components / Woven Fabric pattern
// Query: "wallpaper pattern background repeating"
// Date: 2026-04-30
// Borrowed: layered repeating-linear-gradient stack to fake a textile/woven
// surface using only CSS — four stacked gradients at 0deg/90deg with
// different period and opacity. We use a recolored variant per section
// (terracotta, mustard, palm green) as the wallpapered backdrops.

import { cn } from "@/lib/utils";

export const WovenFabricBackground = () => (
  <div className="min-h-screen w-full bg-white relative text-gray-800">
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, rgba(75, 85, 99, 0.08), rgba(75, 85, 99, 0.08) 2px, transparent 2px, transparent 6px),
          repeating-linear-gradient(90deg, rgba(107, 114, 128, 0.06), rgba(107, 114, 128, 0.06) 2px, transparent 2px, transparent 6px),
          repeating-linear-gradient(0deg, rgba(55, 65, 81, 0.04), rgba(55, 65, 81, 0.04) 1px, transparent 1px, transparent 12px),
          repeating-linear-gradient(90deg, rgba(55, 65, 81, 0.04), rgba(55, 65, 81, 0.04) 1px, transparent 1px, transparent 12px)
        `,
      }}
    />
    {/* Your Content/Components */}
  </div>
);
