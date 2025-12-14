const MoreFeaturesComing = () => {
  return (
    <section
      className="animate-fade-in-delayed mx-auto my-8 max-w-4xl rounded-3xl border border-purple-100 bg-linear-to-r from-purple-50 to-blue-50 p-6 shadow-lg md:my-12 md:p-8 lg:my-16 lg:p-10"
      aria-label="ویژگی‌های جدید در راه است"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <h3
        className="mb-3 text-center text-xl leading-tight font-bold text-gray-900 md:mb-4 md:text-2xl lg:text-3xl"
        itemProp="name"
      >
        🚀 ویژگی‌های جدید افزونه ویجتیفای
      </h3>
      <p
        className="mx-auto mb-5 max-w-2xl text-center text-base leading-relaxed text-gray-600 md:mb-6 md:text-lg lg:leading-loose"
        itemProp="description"
      >
        هر روز داریم فیچرهای جدید و باحال اضافه می‌کنیم. پس همیشه چیز جدیدی برای
        کشف کردن داری!
      </p>
      <div className="flex flex-wrap justify-center gap-2 text-xs md:gap-3 md:text-sm lg:text-base">
        <span
          className="rounded-full bg-white/70 px-3 py-1.5 font-medium text-gray-700 md:px-4 md:py-2"
          itemProp="itemListElement"
        >
          👥 مدیریت دوستان
        </span>
        <span
          className="rounded-full bg-white/70 px-3 py-1.5 font-medium text-gray-700 md:px-4 md:py-2"
          itemProp="itemListElement"
        >
          🔖 بوکمارک هوشمند
        </span>
        <span
          className="rounded-full bg-white/70 px-3 py-1.5 font-medium text-gray-700 md:px-4 md:py-2"
          itemProp="itemListElement"
        >
          🎨 تم‌های مختلف
        </span>
        <span
          className="rounded-full bg-white/70 px-3 py-1.5 font-medium text-gray-700 md:px-4 md:py-2"
          itemProp="itemListElement"
        >
          ✨ و خیلی بیشتر...
        </span>
      </div>
    </section>
  );
};

export default MoreFeaturesComing;
