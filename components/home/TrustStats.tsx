const TrustStats = () => {
  return (
    <section
      className="animate-fade-in-up flex flex-wrap justify-center gap-4 py-4"
      aria-label="آمار اعتماد"
    >
      <div className="flex flex-col items-center justify-center border-l-2 border-l-gray-200 pl-2 text-center md:pl-6">
        <span className="text-lg font-bold text-blue-600 md:text-xl lg:text-2xl">
          +20 هزار
        </span>
        <span className="text-xs font-medium text-gray-500 md:text-sm">
          نصب فعال
        </span>
      </div>

      <div className="flex flex-col items-center justify-center border-l-2 border-l-gray-200 pl-2 text-center md:pl-6">
        <span className="text-lg font-bold text-green-600 md:text-xl lg:text-2xl">
          ✓
        </span>
        <span className="text-xs font-medium text-gray-500 md:text-sm">
          تایید شده
        </span>
      </div>

      <div className="flex flex-col items-center justify-center border-l-2 border-l-gray-200 pl-2 text-center md:pl-6">
        <span className="text-lg font-bold text-purple-600 md:text-xl lg:text-2xl">
          👥
        </span>
        <span className="text-xs font-medium text-gray-500 md:text-sm">
          جامعه فعال
        </span>
      </div>

      <div className="flex flex-col items-center justify-center pl-2 text-center md:pl-6">
        <span className="text-lg font-bold text-orange-600 md:text-xl lg:text-2xl">
          🔓
        </span>
        <span className="text-xs font-medium text-gray-500 md:text-sm">
          متن باز
        </span>
      </div>
    </section>
  );
};

export default TrustStats;
