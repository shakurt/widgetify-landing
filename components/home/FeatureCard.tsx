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
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:border-blue-200 hover:shadow-xl"
      aria-label={`Feature Card: ${title}`}
    >
      <section
        className="relative aspect-video overflow-hidden bg-linear-to-br from-blue-50 to-purple-50"
        aria-label={`image container of ${alt}`}
      >
        <Image
          src={image}
          alt={alt}
          fill
          className="object-contain py-2.5 transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </section>
      <section aria-label="body section of card" className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
          {title}
        </h3>
        <p className="leading-relaxed text-gray-600">{description}</p>
      </section>
    </article>
  );
};

export default FeatureCard;
