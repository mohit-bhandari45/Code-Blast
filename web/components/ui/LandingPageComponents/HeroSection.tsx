import { Button } from '../button';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-black text-white py-20 px-6">
      <h1 className="text-5xl font-bold mb-4 text-center">
        Welcome to CodeDuel
      </h1>
      <p className="text-lg mb-6 text-center">
        Challenge your friends and developers across the globe in real-time
        coding duels!
      </p>
      <Button className="bg-white text-black border-2 border-black hover:bg-gray-300 px-6 py-3">
        Start a Duel
      </Button>
    </section>
  );
};

export default HeroSection;