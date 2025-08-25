import { Button } from "@/components/ui/button";
import crackChicken from "@/assets/crack-chicken-mascot.jpg";
import { Rocket, TrendingUp, DollarSign } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden p-8">
      {/* Chaotic Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 animate-bounce">
          <Rocket className="w-16 h-16 text-accent animate-wiggle" />
        </div>
        <div className="absolute top-40 right-32 animate-float">
          <TrendingUp className="w-12 h-12 text-secondary animate-pulse" />
        </div>
        <div className="absolute bottom-32 left-40 animate-shake">
          <DollarSign className="w-20 h-20 text-meme-yellow" />
        </div>
        <div className="absolute top-60 left-1/2 animate-bounce">
          <div className="text-6xl animate-wiggle">🚀</div>
        </div>
        <div className="absolute bottom-20 right-20 animate-float">
          <div className="text-4xl animate-pulse">💸</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 max-w-4xl">
        {/* Main Title */}
        <h1 className="font-impact text-8xl md:text-9xl gradient-chaos bg-clip-text text-transparent animate-pulse-chaos mb-4 leading-tight">
          $CRACK
        </h1>
        
        {/* Subtitle */}
        <div className="text-2xl md:text-4xl font-bold text-meme-yellow animate-bounce mb-8 shadow-glow">
          VIBE CODED SOLANA GAME
        </div>

        {/* Chicken Mascot */}
        <div className="my-12 animate-float">
          <img 
            src={crackChicken} 
            alt="Cracked Out Chicken Mascot" 
            className="w-80 h-80 md:w-96 md:h-96 mx-auto rounded-3xl shadow-chaos hover-chaos border-8 border-primary"
          />
        </div>

        {/* Ticker Animation */}
        <div className="flex items-center justify-center gap-4 mb-12 text-xl font-bold">
          <span className="animate-bounce text-primary">$CRACK</span>
          <span className="animate-pulse text-secondary">📈</span>
          <span className="animate-wiggle text-accent">TO THE MOON</span>
          <span className="animate-shake text-meme-yellow">🌙</span>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Button 
            variant="chaos" 
            size="chaotic"
            className="font-comic animate-pulse-chaos"
          >
            🚀 ENTER THE CHAOS 🚀
          </Button>
          
          <Button 
            variant="fire" 
            size="xl"
            className="font-comic"
          >
            🔥 BUY $CRACK 🔥
          </Button>
        </div>

        {/* Chaos Disclaimer */}
        <div className="mt-12 text-lg font-bold text-muted-foreground animate-pulse">
          ⚠️ WARNING: MAXIMUM CHAOS AHEAD ⚠️
        </div>
      </div>

      {/* Floating Emojis */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl animate-bounce">🐔</div>
        <div className="absolute top-20 right-10 text-3xl animate-wiggle">💎</div>
        <div className="absolute bottom-20 left-10 text-5xl animate-float">🌕</div>
        <div className="absolute bottom-10 right-40 text-4xl animate-shake">💰</div>
      </div>
    </section>
  );
};

export default HeroSection;