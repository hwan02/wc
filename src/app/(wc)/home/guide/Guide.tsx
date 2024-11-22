export default function GuidePage() {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">안내사항</h1>
        <div className="space-y-4">
          <section>
            <h2 className="text-xl font-semibold">식사 안내</h2>
            <p>식사 시간 및 장소 안내</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">코로나19 예방 수칙</h2>
            <p>방역 관련 안내사항</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">주차 안내</h2>
            <p>주차 관련 안내사항</p>
          </section>
        </div>
      </div>
    )
  }