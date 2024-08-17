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
        <Link href="/chord-practice">
          <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer hover:shadow-2xl">
            <h2 className="text-2xl font-semibold mb-2">코드 연습</h2>
            <p>다양한 기타 코드를 연습할 수 있습니다.</p>
          </div>
        </Link>

        <Link href="/scale-practice">
          <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer hover:shadow-2xl">
            <h2 className="text-2xl font-semibold mb-2">스케일 연습</h2>
            <p>기본 기타 스케일을 연습할 수 있습니다.</p>
          </div>
        </Link>
        {/**추후 추가예정 */}
      </section>
    </div>
  )
}

export default Home
