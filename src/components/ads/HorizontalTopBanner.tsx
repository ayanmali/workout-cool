import { AdPlaceholder } from "@/components/ads/AdPlaceholder";

import { GoogleAdSense } from "./GoogleAdSense";
import { AdWrapper } from "./AdWrapper";

export function HorizontalTopBanner() {
  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <AdWrapper>
      <div className="w-full max-w-full" style={{ minHeight: "90px", maxHeight: "100px", width: "100%" }}>
        <div className="px-4 py-2">
          {isDevelopment ? (
            <AdPlaceholder height="90px" type="Ad Banner (Top)" width="100%" />
          ) : (
            <GoogleAdSense
              adClient="ca-pub-3437447245301146"
              adFormat="horizontal"
              adSlot="7555914556"
              style={{ display: "block", minHeight: "50px", maxHeight: "90px", width: "100%" }}
            />
          )}
        </div>
      </div>
    </AdWrapper>
  );
}
