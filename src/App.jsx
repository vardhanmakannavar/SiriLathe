export default function HandPaintedStore() {
  const products = [
    {
      id: 1,
      name: 'Blush Bloom Saree',
      price: '₹4,999',
      image:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Rose Petal Tote',
      price: '₹1,499',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Elegant Wall Canvas',
      price: '₹2,299',
      image:
        'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Pink Handpainted Dupatta',
      price: '₹1,999',
      image:
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fff9fb] text-gray-800 font-sans overflow-x-hidden">

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-pink-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}Logo.png`}
              alt="SiriLathe Logo"
              className="w-14 h-14 rounded-full object-cover border-2 border-black-50 shadow-md"
            />

            <div>
              <h1 className="text-2xl font-black tracking-wide text-pink-500">
                SiriLathe
              </h1>

              <p className="text-xs text-gray-500">
                Handpainted Elegance
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#home" className="hover:text-pink-500 transition">
              Home
            </a>

            <a href="#collection" className="hover:text-pink-500 transition">
              Collections
            </a>

            <a href="#about" className="hover:text-pink-500 transition">
              About
            </a>

            <a href="#contact" className="hover:text-pink-500 transition">
              Contact
            </a>
          </nav>

          <button className="bg-gradient-to-r from-pink-400 to-rose-400 hover:scale-105 text-white px-6 py-2 rounded-full shadow-lg transition duration-300">
            Shop Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden py-28 px-6"
      >
        {/* Background Blur */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-30"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-200 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

          {/* Left Content */}
          <div>
            <p className="uppercase tracking-[5px] text-pink-400 text-sm font-semibold mb-5">
              Luxury Handpainted Collection
            </p>

            <h2 className="text-6xl md:text-7xl font-black leading-tight text-gray-900 mb-8">
              Elegant Fashion
              <span className="text-pink-500 block">
                For Modern Women
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl">
              Discover premium handpainted sarees designed with feminine elegance, artistic beauty, and timeless luxury.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="bg-gradient-to-r from-pink-400 to-rose-400 hover:scale-105 text-white px-10 py-4 rounded-full shadow-2xl font-semibold transition duration-300">
                Explore Collection
              </button>

              <button className="bg-white border border-pink-200 hover:border-pink-400 px-10 py-4 rounded-full shadow-md font-semibold transition">
                Custom Orders
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14">
              <div>
                <h3 className="text-3xl font-black text-pink-500">
                  5K+
                </h3>

                <p className="text-gray-500 text-sm">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-pink-500">
                  200+
                </h3>

                <p className="text-gray-500 text-sm">
                  Premium Designs
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-pink-500">
                  100%
                </h3>

                <p className="text-gray-500 text-sm">
                  Handmade
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-pink-200 rounded-[40px]"></div>

            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop"
              alt="Boutique Fashion"
              className="relative rounded-[40px] shadow-[0_20px_60px_rgba(236,72,153,0.25)] object-cover h-[650px] w-full"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-8 left-8 bg-white/90 backdrop-blur p-6 rounded-3xl shadow-2xl border border-pink-100">
              <p className="text-sm text-pink-400 font-semibold mb-2">
                Bestseller
              </p>

              <h3 className="text-xl font-black mb-1">
                Pink Blossom Saree
              </h3>

              <p className="text-pink-500 font-bold text-lg">
                ₹5,499
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            {
              title: 'Luxury Handcrafted',
              desc: 'Every design is individually painted with feminine artistic elegance.',
            },
            {
              title: 'Custom Fashion',
              desc: 'Personalized handpainted collections for weddings and gifting.',
            },
            {
              title: 'Premium Quality',
              desc: 'Soft fabrics and timeless designs made for modern girls.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur rounded-[36px] p-8 shadow-lg border border-pink-100 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-pink-500 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="collection" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-pink-400 text-sm font-semibold mb-4">
              Featured Collection
            </p>

            <h2 className="text-5xl font-black">
              Premium Boutique Collection
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white/90 backdrop-blur rounded-[36px] overflow-hidden shadow-[0_10px_40px_rgba(236,72,153,0.12)] hover:shadow-[0_20px_60px_rgba(236,72,153,0.25)] transition duration-500 hover:-translate-y-3 border border-pink-100"
              >
                <div className="overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute top-4 left-4 bg-pink-400 text-white px-4 py-2 rounded-full text-xs shadow-lg">
                    Bestseller
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-500 text-sm mb-5">
                    Elegant feminine handpainted fashion crafted with artistic charm.
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-pink-500 font-black text-xl">
                      {product.price}
                    </p>

                    <button className="bg-gradient-to-r from-pink-400 to-rose-400 hover:scale-105 text-white px-4 py-2 rounded-xl transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-24 px-6 bg-gradient-to-r from-pink-50 to-rose-50"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop"
            alt="Artist"
            className="rounded-[40px] shadow-2xl h-[550px] w-full object-cover"
          />

          <div>
            <p className="uppercase tracking-[4px] text-pink-400 text-sm font-semibold mb-4">
              Our Story
            </p>

            <h2 className="text-5xl font-black leading-tight mb-6">
              Inspired by Art.
              <span className="text-pink-500 block">
                Designed for Girls.
              </span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              SiriLathe celebrates feminine beauty through handcrafted fashion and artistic expression.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Every saree and accessory is thoughtfully designed to make women feel elegant, confident, and unique.
            </p>

            <button className="bg-gradient-to-r from-pink-400 to-rose-400 hover:scale-105 text-white px-8 py-4 rounded-2xl shadow-xl transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 rounded-[50px] p-14 md:p-20 text-center text-white shadow-[0_20px_80px_rgba(236,72,153,0.35)]">

          <p className="uppercase tracking-[5px] text-sm mb-5 text-pink-100">
            Luxury Fashion Updates
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Join Our Boutique World
          </h2>

          <p className="max-w-3xl mx-auto text-pink-100 mb-10 text-lg leading-relaxed">
            Be the first to discover exclusive handpainted collections, bridal launches, and boutique fashion inspiration.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center max-w-2xl mx-auto">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-5 rounded-full text-gray-800 outline-none shadow-lg"
            />

            <button className="bg-white text-pink-500 hover:bg-pink-100 px-10 py-5 rounded-full font-black transition shadow-xl">
              Subscribe
            </button>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-white border-t border-pink-100 py-14 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}Logo.png`} 
                alt="logo"
                className="w-12 h-12 rounded-full"
              />

              <h3 className="text-3xl font-black text-pink-500">
                SiriLathe
              </h3>
            </div>

            <p className="text-gray-500 max-w-md">
              Elegant handpainted fashion crafted for modern women who love beauty and tradition.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-pink-500">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3 text-gray-600">
              <a href="#home">Home</a>
              <a href="#collection">Collections</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-pink-500">
              Contact
            </h4>

            <div className="space-y-3 text-gray-600">
              <p>📍 Karnataka, India</p>
              <p>📞 +91 9876543210</p>
              <p>✉️ hello@sirilathe.com</p>
              <p>📷 Instagram: @sirilathe_</p>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-100 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2026 SiriLathe • Premium Boutique Fashion
        </div>
      </footer>
    </div>
  );
}