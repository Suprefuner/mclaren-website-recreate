import useSnap from "../../../hooks/useSnap"
import ModelPageSwiper from "./ModelPageSwiper"
import { modelData } from "../../../data"
import ceoPhoto from "../../../assets/image/Zak-Brown.webp"

const ModelPageDetailSection = () => {
  const snap = useSnap()
  const { name, slogan, articles, modelArticleImages, modelSwiperImages } =
    modelData[snap.currentModel]

  return (
    <section className="pt-[12rem] lg:py-[12rem] bg-slate-50 relative">
      <div className="container">
        <p className="text-[1.8rem] capitalize">{slogan}</p>
        <h2 className="mb-5 text-5xl uppercase">{name}</h2>
        <div className="relative h-full gap-3 lg:grid lg:grid-cols-3 ">
          <div className="lg:col-start-1 lg:h-screen">
            <div className="w-full mb-5 lg:mb-0 lg:sticky top-10">
              <p>{articles[0].content}</p>
              <h4 className="mt-3 mb-1 font-semibold">McLaren CEO</h4>
              <img
                src={ceoPhoto}
                alt="mclaren CEO photo"
                className="w-1/2 h-[200px] object-cover"
              />
            </div>
          </div>

          <div className="space-y-5">
            {articles.slice(1).map((article, i) => {
              const { title, content } = article
              return (
                <div key={i} className="last:pb-5 last:lg:pb-0">
                  {title ? (
                    <h3 className="mb-1 text-[1.8rem] font-semibold uppercase">
                      {title}
                    </h3>
                  ) : null}
                  <p>{content}</p>
                </div>
              )
            })}
          </div>

          <div className="hidden h-full col-span-2 col-start-2 row-span-2 row-start-1 lg:block">
            {modelArticleImages.map((img, i) => {
              const height = 100 / modelArticleImages.length + "%"
              return (
                <img
                  src={img}
                  key={i}
                  alt={`${name} photo ${i + 1}`}
                  className={`object-cover`}
                  style={{ height }}
                />
              )
            })}
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <ModelPageSwiper images={modelArticleImages} slidesPerView={1} />
      </div>
    </section>
  )
}
export default ModelPageDetailSection
