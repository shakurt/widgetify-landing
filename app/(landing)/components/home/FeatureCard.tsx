import Image from "next/image";

type FeatureCardProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  alt,
  title,
  description,
}) => {
  return (
    <article
      role="listitem"
      className="group hover:border-primary/80 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
      itemScope
      itemType="https://schema.org/SoftwareFeature"
    >
      <div
        className="relative aspect-video overflow-hidden bg-linear-to-br from-blue-50 to-purple-50"
        aria-label="تصویر ویژگی"
      >
        <Image
          src={image}
          alt={alt}
          fill
          loading="lazy"
          className="scale-105 object-contain py-2.5 transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          itemProp="image"
        />
      </div>
      <div aria-label="محتوای ویژگی" className="p-4 text-right md:p-5 lg:p-6">
        <h3
          className="group-hover:text-primary mb-1.5 text-base leading-snug font-semibold text-gray-900 transition-colors md:mb-2 md:text-lg lg:text-xl"
          itemProp="name"
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed text-gray-600 md:text-base lg:leading-loose"
          itemProp="description"
        >
          {description}
        </p>
      </div>
    </article>
  );
};

export default FeatureCard;
