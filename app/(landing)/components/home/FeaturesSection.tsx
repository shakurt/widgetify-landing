import FeatureCard from "@landing/components/home/FeatureCard";

import ClockWidgetImage from "@/assets/features/clock-widget.png";
import ComboWidgetImage from "@/assets/features/combo-widget_news_currencies.png";
import NoteWidgetImage from "@/assets/features/note-widget.png";
import PomodoroWidgetImage from "@/assets/features/pomodoro-widget.png";
import TodoWidgetImage from "@/assets/features/todo-widget.png";
import WeatherWidgetImage from "@/assets/features/weather-widget.png";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="my-8 flex flex-col gap-4 px-4 md:my-12 md:gap-6 md:px-6 lg:my-16 lg:px-8"
      aria-labelledby="features-heading"
    >
      <div className="mb-2 text-center md:mb-4">
        <h2
          id="features-heading"
          className="mb-3 text-2xl leading-tight font-bold tracking-tight text-gray-900 md:mb-4 md:text-3xl lg:text-4xl"
        >
          ویژگی‌های افزونه ویجتیفای 🎯
        </h2>

        <p className="animate-fade-in-up mx-auto max-w-3xl text-center text-sm leading-relaxed font-light text-gray-600 md:text-base md:leading-relaxed lg:text-lg">
          این بهترین افزونه نیو تب با ویجت‌های کاربردی زندگی دیجیتالت رو راحت‌تر
          می‌کنه. افزونه مرورگر ویجتیفای همه چیزی که نیاز داری رو داره!
        </p>
      </div>

      <div
        role="list"
        aria-label="لیست ویژگی‌های افزونه ویجتیفای"
        className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8"
      >
        <FeatureCard
          title="💰 مدیریت مالی هوشمند"
          description="قیمت لحظه‌ای ارزها، رمزارزها و بازارها رو ببین"
          image={ComboWidgetImage.src}
          alt="ویجت مالی افزونه ویجتیفای - قیمت ارز و رمزارز"
        />
        <FeatureCard
          title="✅ مدیریت وظایف"
          description="کارها و یادداشت‌هات رو راحت سازماندهی کن"
          image={TodoWidgetImage.src}
          alt="ویجت مدیریت وظایف افزونه نیو تب ویجتیفای"
        />
        <FeatureCard
          title="🛠️ ابزارهای کاربردی"
          description="ساعت، تقویم و آب و هوا همیشه در دسترس"
          image={ClockWidgetImage.src}
          alt="ویجت ساعت و تقویم در افزونه مرورگر ویجتیفای"
        />
        <FeatureCard
          title="📝 یادداشت‌ها"
          description="یادداشت‌های سریع بنویس و مدیریت کن"
          image={NoteWidgetImage.src}
          alt="ویجت یادداشت افزونه ویجتیفای - بهترین افزونه ها"
        />
        <FeatureCard
          title="🍅 پومودورو"
          description="زمانت رو بهتر مدیریت کن و روی کارها متمرکز باش"
          image={PomodoroWidgetImage.src}
          alt="ویجت پومودورو افزونه نیو تب - مدیریت زمان"
        />
        <FeatureCard
          title="🌤️ آب و هوا"
          description="هوا چطوره؟ قبل از بیرون رفتن چک کن!"
          image={WeatherWidgetImage.src}
          alt="ویجت آب و هوا افزونه مرورگر ویجتیفای"
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
