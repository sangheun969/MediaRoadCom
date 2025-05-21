import React from "react";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

const KakaoMap: React.FC = () => {
  const isLoaded = useKakaoLoader({
    appkey: process.env.REACT_APP_KAKAOMAP_KEY!,
  });
  if (!isLoaded) return <p>지도를 불러오는 중입니다..</p>;

  return (
    <Map
      center={{ lat: 37.523136, lng: 126.92709 }}
      style={{ width: "100%", height: "500px" }}
      level={3}
    >
      <MapMarker position={{ lat: 37.523136, lng: 126.92709 }}>
        <div style={{ padding: "5px", fontSize: "14px" }}>
          미디어로드 사무실
          <br />
          한서 리버파크 1209호
        </div>
      </MapMarker>
    </Map>
  );
};

export default KakaoMap;
