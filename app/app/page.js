import SectionFirstLook from "@/components/SectionFirstLook"

export default function Home() {
  const bannerList = [
    {
      index: 0,
      background: "/images/product_05.jpg",
      title: "online shop",
    },
    {
      index: 1,
      background: "/images/product_01.png",
      title: "exclusive collection",
    },
    {
      index: 2,
      background: "/images/product_02.jpg",
      title: "new sale",
    }
  ]

  return (
    <div>
      <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="banner-item-01">
        <div className="text-content">
          <h4>Best Offer</h4>
          <h2>New Arrivals On Sale</h2>
        </div>
      </div>
      <div>
        {bannerList.map((banner) => (
          <SectionFirstLook
            key={banner.index}
            image={banner.background}
            title={banner.title}
          />
        ))}
      </div>
        </div>
      </main>
      
    </div>

  )
}
