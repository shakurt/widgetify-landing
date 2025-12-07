import FullLogo from "@/components/logo/FullLogo";

const Brand = () => {
  return (
    <div itemScope itemType="https://schema.org/Organization" className="mb-6">
      <div className="mb-4 flex justify-center">
        <FullLogo />
      </div>
      <p
        className="mb-3 text-center font-light text-gray-600"
        itemProp="description"
      >
        محیط خسته کننده خودتون رو با ویجتی‌فای به یک محیط جذاب و کاربرپسند تبدیل
        کنید.
      </p>
      <meta itemProp="name" content="ویجتی‌فای" />
      <meta itemProp="url" content="https://widgetify.ir" />
    </div>
  );
};

export default Brand;
