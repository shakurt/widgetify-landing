import ClockWidgetImage from "@/assets/features/clock-widget.png";
import ComboWidgetImage from "@/assets/features/combo-widget_news_currencies.png";
import NoteWidgetImage from "@/assets/features/note-widget.png";
import PomodoroWidgetImage from "@/assets/features/pomodoro-widget.png";
import TodoWidgetImage from "@/assets/features/todo-widget.png";
import WeatherWidgetImage from "@/assets/features/weather-widget.png";

import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="my-10 flex flex-col gap-6">
      <h2 className="mb-2 text-center text-3xl font-bold text-gray-900 md:text-4xl">
        ویژگی‌های افزونه ویجتیفای 🎯
      </h2>

      <p className="mx-auto max-w-2xl text-center text-lg text-gray-600">
        این بهترین افزونه نیو تب با ویجت‌های کاربردی زندگی دیجیتالت رو راحت‌تر
        می‌کنه. افزونه مرورگر ویجتیفای همه چیزی که نیاز داری رو داره!
      </p>

      <section
        aria-label="Feature Cards Container"
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
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
      </section>
    </section>
  );
};

export default Features;
