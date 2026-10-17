import { ImageResponse } from "next/og";

export const alt = "Siddhant Vishnu · Applied AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Link-preview card, in the site's colours: paper background, blueprint blue, teal accent. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#eef0ea",
          backgroundImage:
            "linear-gradient(rgba(31,95,224,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(31,95,224,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          color: "#14181b",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, color: "#6a717a" }}>
          APPLIED AI ENGINEER · PUNE
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 700, lineHeight: 1.05 }}>Siddhant Vishnu</div>
          <div style={{ display: "flex", fontSize: 44, marginTop: 28 }}>
            I build AI agents and&nbsp;<span style={{ color: "#1f5fe0" }}>the evals that prove they work.</span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#0c7a70" }}>
          Building Mirage · ex-Lead Engineer, Froncort.AI · siddhant-vishnu.vercel.app
        </div>
      </div>
    ),
    size
  );
}
