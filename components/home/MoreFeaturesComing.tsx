const MoreFeaturesComing = () => {
  return (
    <section
      className="animate-fade-in-delayed mx-auto my-10 max-w-4xl rounded-3xl border border-purple-100 bg-linear-to-r from-purple-50 to-blue-50 p-8 shadow-lg"
      aria-label="More features coming"
    >
      <h3 className="mb-4 text-center text-2xl font-bold text-gray-900 md:text-3xl">
        🚀 ویژگی‌های جدید افزونه ویجتیفای
      </h3>
      <p className="mx-auto mb-6 max-w-2xl text-center text-lg text-gray-600">
        هر روز داریم فیچرهای جدید و باحال اضافه می‌کنیم. پس همیشه چیز جدیدی برای
        کشف کردن داری!
      </p>
      <div className="flex flex-wrap justify-center gap-3 text-sm">
        <span className="rounded-full bg-white/70 px-3 py-1 text-gray-700">
          👥 مدیریت دوستان
        </span>
        <span className="rounded-full bg-white/70 px-3 py-1 text-gray-700">
          🔖 بوکمارک هوشمند
        </span>
        <span className="rounded-full bg-white/70 px-3 py-1 text-gray-700">
          🎨 تم‌های مختلف
        </span>
        <span className="rounded-full bg-white/70 px-3 py-1 text-gray-700">
          ✨ و خیلی بیشتر...
        </span>
      </div>
    </section>
  );
};

export default MoreFeaturesComing;
