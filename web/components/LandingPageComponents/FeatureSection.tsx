import { features } from '@/utils/utils';

const FeatureSection = () => {
  return (
    <section className="py-10 px-6">
      <h2 className="text-3xl text-center font-semibold mb-8 text-white">
        Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="p-6 border-2 border-white rounded-lg bg-black text-white shadow-md h-[40vh] flex flex-col justify-center items-center"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
