const TrustStats = () => {
  return (
    <section
      className="animate-fade-in-up flex flex-wrap justify-center gap-6 py-4"
      aria-label="Trust Stats"
    >
      <div className="flex flex-col items-center justify-center border-l-2 border-l-gray-200 pl-6 text-center">
        <span className="text-2xl font-bold text-blue-600">+20 هزار</span>
        <span className="text-xs text-gray-500">نصب فعال</span>
      </div>

      <div className="flex flex-col items-center justify-center border-l-2 border-l-gray-200 pl-6 text-center">
        <span className="text-2xl font-bold text-green-600">✓</span>
        <span className="text-xs text-gray-500">تایید شده</span>
      </div>

      <div className="flex flex-col items-center justify-center border-l-2 border-l-gray-200 pl-6 text-center">
        <span className="text-2xl font-bold text-purple-600">👥</span>
        <span className="text-xs text-gray-500">جامعه فعال</span>
      </div>

      <div className="flex flex-col items-center justify-center pl-6 text-center">
        <span className="text-2xl font-bold text-orange-600">🔓</span>
        <span className="text-xs text-gray-500">متن باز</span>
      </div>
    </section>
  );
};

export default TrustStats;
