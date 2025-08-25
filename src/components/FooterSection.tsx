import { Button } from "@/components/ui/button";
import { Heart, Zap, Rocket } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 px-8 relative overflow-hidden">
      {/* Chaotic Background */}
      <div className="absolute inset-0 gradient-chaos opacity-90"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl animate-bounce">🚀</div>
        <div className="absolute top-20 right-20 text-3xl animate-wiggle">💎</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-float">🐔</div>
        <div className="absolute bottom-10 right-10 text-4xl animate-shake">⚡</div>
        <div className="absolute top-1/2 left-1/4 text-3xl animate-pulse">🔥</div>
        <div className="absolute top-1/3 right-1/4 text-4xl animate-bounce">🌙</div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Disclaimer */}
        <div className="mb-12">
          <h3 className="font-impact text-5xl md:text-6xl text-meme-yellow animate-pulse-chaos mb-8">
            🚨 CHAOS DISCLAIMER 🚨
          </h3>
          
          <div className="bg-black/50 border-4 border-meme-yellow rounded-3xl p-8 shadow-chaos animate-float">
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-6 animate-wiggle">
              $CRACK is a <span className="text-primary animate-bounce inline-block">VIBE-CODED</span> experiment 
              in <span className="text-secondary animate-shake inline-block">PURE CHAOS!</span>
            </p>
            
            <p className="text-xl md:text-2xl font-bold text-meme-yellow mb-6 animate-pulse">
              Nothing makes sense. Everything is chaos. 
              <br />
              <span className="animate-bounce inline-block">🤪</span> Logic has left the building! <span className="animate-wiggle inline-block">🤪</span>
            </p>
            
            <p className="text-lg md:text-xl font-bold text-accent animate-shake">
              This is not financial advice - this is FINANCIAL CHAOS! 
              <br />
              Only invest what you can afford to lose in the chaos vortex! 💸
            </p>
          </div>
        </div>

        {/* Chaos Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-primary/20 border-2 border-primary rounded-xl p-6 hover-chaos">
            <Rocket className="w-12 h-12 mx-auto mb-4 text-primary animate-bounce" />
            <div className="text-2xl font-black text-white">MAXIMUM</div>
            <div className="text-lg font-bold text-primary">Chaos Level</div>
          </div>
          
          <div className="bg-secondary/20 border-2 border-secondary rounded-xl p-6 hover-chaos">
            <Zap className="w-12 h-12 mx-auto mb-4 text-secondary animate-wiggle" />
            <div className="text-2xl font-black text-white">INFINITE</div>
            <div className="text-lg font-bold text-secondary">Vibe Energy</div>
          </div>
          
          <div className="bg-meme-yellow/20 border-2 border-meme-yellow rounded-xl p-6 hover-chaos">
            <Heart className="w-12 h-12 mx-auto mb-4 text-meme-yellow animate-pulse" />
            <div className="text-2xl font-black text-white">PURE</div>
            <div className="text-lg font-bold text-meme-yellow">Madness</div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="mb-12">
          <Button 
            variant="meme" 
            size="chaotic" 
            className="font-comic animate-pulse-chaos mb-4"
            onClick={() => window.open("https://pump.fun/coin/BuB5bKwuPmFqEQX8twcJ6irZyV8pgo6TJ8PzF2wLpump", "_blank")}
          >
            🎪 BUY $CRACK NOW 🎪
          </Button>
          
          <div className="text-xl font-bold text-white animate-bounce">
            Built with <span className="text-primary animate-pulse">❤️</span> and 
            <span className="text-secondary animate-wiggle"> PURE INSANITY</span> by the 
            <span className="text-meme-yellow animate-shake"> CRACK TEAM</span>! 🐔
          </div>
        </div>

        {/* Copyright Chaos */}
        <div className="border-t-4 border-meme-yellow pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-lg font-bold text-muted-foreground animate-pulse">
              © 2024 $CRACK - All Chaos Reserved 🎭
            </div>
            
            <div className="flex items-center gap-4 text-2xl">
              <span className="animate-bounce">🚀</span>
              <span className="animate-wiggle">💎</span>
              <span className="animate-float">🌙</span>
              <span className="animate-shake">🔥</span>
              <span className="animate-pulse">⚡</span>
            </div>
          </div>
          
          <div className="mt-4 text-sm font-bold text-muted-foreground animate-wiggle">
            Remember: In chaos we trust, in vibes we invest! 🎪✨
          </div>
        </div>

        {/* Hidden Easter Egg */}
        <div className="mt-8 opacity-20 text-xs animate-pulse">
          <div className="animate-bounce inline-block">🐔</div> 
          The chicken sees all, the chicken knows all, the chicken IS all! 
          <div className="animate-wiggle inline-block">🐔</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;