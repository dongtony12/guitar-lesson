import Link from 'next/link'

const Home = () => {
  return (
    <div className="flex flex-col h-full  ">
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Guitar String Training
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          여기서는 기타 코드를 연습하고, 기본 스케일을 배울 수 있습니다. 기타
          실력을 향상시키기 위해 다양한 연습 도구를 제공할 예정입니다.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <Link
          href="/chord-practice"
          className="transition-transform duration-300 hover:scale-105"
        >
          <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">코드 연습</h2>
            <p className="text-gray-600">
              다양한 기타 코드를 연습할 수 있습니다.
              <span className="block mt-2 text-sm text-gray-500">
                • 오픈 코드 • 바레 코드 • 코드 진행
              </span>
            </p>
          </div>
        </Link>

        <Link
          href="/scale-practice"
          className="transition-transform duration-300 hover:scale-105"
        >
          <div className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">스케일 연습</h2>
            <p className="text-gray-600">
              기본 기타 스케일을 연습할 수 있습니다.
              <span className="block mt-2 text-sm text-gray-500">
                • 메이저/마이너 스케일 • 펜타토닉 스케일 • 모드별 연습
              </span>
            </p>
          </div>
        </Link>
      </section>
    </div>
  )
}

export default Home
