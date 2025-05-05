const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const bgImageUrl = `${basePath}/images/top-01.webp`;

export default function TopView() {
  return (
    <>
      <div
        className="relative w-full h-[300vh] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
        <div
          className="absolute bottom-0 left-0 right-0 h-[30%]
                     bg-gradient-to-t from-[var(--background)] to-transparent
                     pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-10 w-full h-screen flex items-center justify-center p-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-white">Coexist with fashionable</h2>
          </div>
        </div>
        <div className="relative z-10 container-narrow w-full h-[150vh] flex flex-col justify-center">
          <h2 className="text-white">Concept</h2>
          <div className="flex flex-col md:flex-row gap-4 ">
            <div className="md:w-[45%] zen-kaku-gothic text-white [font-size:var(--font-size-xl)]">
              おしゃれと共存する
            </div>
            <div className="md:w-[51%] text-white [font-size:var(--font-size-xs)]">
              「おしゃれと共存する」をコンセプトに、不動産・建築を中心とした事業を展開しています。
              <br />
              <br />
              住まいや空間は、ただ機能的であるだけでなく、美しさや心地よさを兼ね備えてこそ、真に豊かな暮らしを実現できると私たちは考えます。
              <br />
              <br />
              住宅設計から内装デザイン、リノベーション、物件のご提案まで、暮らしのあらゆるシーンで“おしゃれ”を意識したご提案を行います。
              <br />
              <br />
              シンプルで洗練されたデザインと、住む人のライフスタイルに寄り添う柔軟な設計。私たちは、実用性と美意識のバランスを大切にしながら、お客様一人ひとりにとって最適な空間をかたちにしていきます。
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
