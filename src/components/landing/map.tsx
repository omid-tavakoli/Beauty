"use client";
import { FC, useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

interface MapProps {
  onMapInit?: (map: L.Map, L: any, marker?: L.Icon<L.IconOptions>) => void;
  className: string;
  marker?: boolean;
}
// تابع تولید ID منحصر به فرد
const generateUniqueId = () => {
  return "map-" + Math.random().toString(36).slice(2, 11);
};
export const markerIcon = L.icon({
  iconUrl: "/assets/images/marker.png",
  iconSize: [30, 30],
});

const Map: FC<MapProps> = (props) => {
  const { onMapInit, className, marker } = props;
  const [mapId] = useState(generateUniqueId());
  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    if (!isMapReady) return;

    // ایجاد نقشه
    const map = L.map(mapId, { zoomControl: false }).setView(
      [33.43406047459431, 52.69050235306594],
      6
    );

    L.tileLayer(
      "https://raster.snappmaps.ir/styles/snapp-style/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 19,
        attribution: "",
      }
    ).addTo(map);

    L.tileLayer(
      "https://raster.snappmaps.ir/styles/snapp-style/{z}/{x}/{y}{r}.png",
      {
        minZoom: 0,
        maxZoom: 18,
        attribution: "",
      }
    ).addTo(map);
    onMapInit?.(map, L, markerIcon);

    return () => {
      map.remove();
    };
  }, [isMapReady, mapId]);

  // رندر اولیه
  useEffect(() => {
    setIsMapReady(true);
  }, []);

  return (
    <div className="h-full w-full">
      <div
        className={`container w-full h-full relative ${className}`}
        id={mapId}
      ></div>
      {marker && (
        <img
          alt=""
          src="/assets/images/marker.png"
          className="absolute z-[999] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          width={30}
          height={30}
        />
      )}
    </div>
  );
};

export default Map;
