import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaCarSide, FaSubway, FaTrain } from 'react-icons/fa';

declare global {
  interface Window {
    naver: any;
    kakao: any;
  }
}

export default function Location() {
  const mapElement = useRef(null);
  const location = {
    lat: 37.5798901828732,
    lng: 127.04616117771,
    name: 'L65호텔웨딩컨벤션'
  };

  useEffect(() => {
    if (!mapElement.current) return;

    const naverLocation = new window.naver.maps.LatLng(location.lat, location.lng);
    const mapOptions = {
      center: naverLocation,
      zoom: 17,
    };
    const map = new window.naver.maps.Map(mapElement.current, mapOptions);

    new window.naver.maps.Marker({
      position: naverLocation,
      map: map,
      title: location.name
    });
  }, []);

  const openNaverMap = () => {
    const naverMapUrl = `nmap://place?lat=${location.lat}&lng=${location.lng}&name=${location.name}&appname=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`;
    window.open(naverMapUrl);
  };

  const openTmap = () => {
    const tmapUrl = `tmap://route?goalname=${location.name}&goallat=${location.lat}&goallng=${location.lng}`;
    window.open(tmapUrl);
  };

  const openKakaoMap = () => {
    const kakaoMapUrl = `kakaomap://place?lat=${location.lat}&lng=${location.lng}&name=${location.name}`;
    window.open(kakaoMapUrl);
  };

  return (
    <div className="w-full py-16 bg-white" id="location-section">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">오시는 길</h2>
        
        {/* 주소 정보 */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold mb-2">L65호텔웨딩컨벤션</h3>
          <p className="mb-1">가든홀</p>
          <p className="text-gray-600">도로명주소: 서울특별시 OO구 OO로 65</p>
        </div>

        {/* 네이버 지도 */}
        <div ref={mapElement} className="w-full h-96 mb-4" />

        {/* 지도 앱 아이콘 */}
        <div className="flex justify-center gap-8 mb-8">
          <button onClick={openNaverMap} className="flex flex-col items-center">
            <Image src={'/images/naver-map.png'} alt="네이버 지도" width={40} height={40} />
            <span className="text-sm mt-1">네이버 지도</span>
          </button>
          <button onClick={openTmap} className="flex flex-col items-center">
            <Image src={'/images/tmap.png'} alt="T map" width={40} height={40} />
            <span className="text-sm mt-1">T map</span>
          </button>
          <button onClick={openKakaoMap} className="flex flex-col items-center">
            <Image src={'/images/kakao-map.png'} alt="카카오 지도" width={40} height={40} />
            <span className="text-sm mt-1">카카오 지도</span>
          </button>
        </div>

        {/* 교통 안내 */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <FaCarSide className="text-2xl mt-1" />
            <div>
              <h4 className="font-semibold mb-2">자차 이용</h4>
              <p>내비게이션에서 'L65호텔웨딩컨벤션' 검색</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <FaSubway className="text-2xl mt-1" />
            <div>
              <h4 className="font-semibold mb-2">지하철 이용</h4>
              <p>OO역 O번 출구에서 도보 5분</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <FaTrain className="text-2xl mt-1" />
            <div>
              <h4 className="font-semibold mb-2">KTX 이용</h4>
              <p>OO역에서 하차 후 지하철 O호선 이용</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 