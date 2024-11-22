export default function LocationPage() {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">오시는 길</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">L65호텔웨딩컨벤션</h2>
          {/* 카카오맵 또는 네이버맵 API 연동 */}
        </div>
        <div className="space-y-2">
          <p>주소: [호텔 주소 입력]</p>
          <p>지하철: [가까운 지하철역 정보]</p>
          <p>버스: [버스 노선 정보]</p>
          <p>주차: [주차 안내]</p>
        </div>
      </div>
    )
  }