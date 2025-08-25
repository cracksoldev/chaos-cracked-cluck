import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Rocket, TrendingUp, Moon, Frown, RefreshCw } from "lucide-react";

const HowToPlaySection = () => {
  const steps = [
    {
      icon: <Rocket className="w-12 h-12 animate-bounce" />,
      title: "BUY CRACK",
      description: "Get your hands on some $CRACK tokens and prepare for absolute chaos!",
      emoji: "🚀",
      color: "text-primary",
      bgColor: "bg-primary/20"
    },
    {
      icon: <TrendingUp className="w-12 h-12 animate-wiggle" />,
      title: "VIBE",
      description: "Enter the vibe zone where logic goes to die and chaos reigns supreme!",
      emoji: "✨",
      color: "text-secondary",
      bgColor: "bg-secondary/20"
    },
    {
      icon: <div className="text-4xl animate-shake">🔥</div>,
      title: "CHAOS",
      description: "Watch as your portfolio becomes a beautiful disaster of pure chaos energy!",
      emoji: "🌪️",
      color: "text-accent",
      bgColor: "bg-accent/20"
    },
    {
      icon: <Moon className="w-12 h-12 animate-float" />,
      title: "MOON",
      description: "Ride the chaos rocket to the moon (or maybe crash spectacularly)!",
      emoji: "🌙",
      color: "text-meme-yellow",
      bgColor: "bg-meme-yellow/20"
    },
    {
      icon: <Frown className="w-12 h-12 animate-pulse" />,
      title: "REGRET",
      description: "Question all your life choices while the chicken laughs maniacally!",
      emoji: "😭",
      color: "text-destructive",
      bgColor: "bg-destructive/20"
    },
    {
      icon: <RefreshCw className="w-12 h-12 animate-wiggle" />,
      title: "MORE CRACK",
      description: "Buy more $CRACK because the chaos addiction is real!",
      emoji: "🔄",
      color: "text-primary",
      bgColor: "bg-primary/20"
    }
  ];

  return (
    <section className="py-20 px-8 relative overflow-hidden">
      {/* Chaotic Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl animate-bounce">📈</div>
        <div className="absolute top-20 right-20 text-4xl animate-wiggle">💎</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-float">🚀</div>
        <div className="absolute bottom-10 right-10 text-6xl animate-shake">💸</div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-impact text-6xl md:text-8xl gradient-toxic bg-clip-text text-transparent animate-pulse-chaos mb-4">
            HOW TO PLAY
          </h2>
          <div className="text-2xl font-bold text-muted-foreground animate-bounce">
            The Roadmap of Absolute Chaos! 🎮
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className={`h-full gradient-chaos border-4 border-${step.color.split('-')[1]} hover-fire animate-float`} 
                   style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader className="text-center">
                  <div className={`${step.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <div className={step.color}>
                      {step.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-black text-white">
                    STEP {index + 1}: {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white font-bold text-center text-lg leading-relaxed">
                    {step.description}
                  </p>
                  <div className="text-center text-4xl mt-4 animate-bounce">
                    {step.emoji}
                  </div>
                </CardContent>
              </Card>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-meme-yellow animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Chaos Cycle Visualization */}
        <div className="text-center mb-16">
          <div className="gradient-fire p-8 rounded-3xl border-4 border-meme-yellow shadow-chaos">
            <h3 className="text-4xl font-impact text-white mb-6 animate-wiggle">
              THE ETERNAL CHAOS CYCLE
            </h3>
            <div className="flex items-center justify-center gap-4 text-2xl font-bold flex-wrap">
              <span className="animate-bounce">🚀</span>
              <ArrowRight className="text-white animate-pulse" />
              <span className="animate-wiggle">✨</span>
              <ArrowRight className="text-white animate-pulse" />
              <span className="animate-shake">🔥</span>
              <ArrowRight className="text-white animate-pulse" />
              <span className="animate-float">🌙</span>
              <ArrowRight className="text-white animate-pulse" />
              <span className="animate-bounce">😭</span>
              <ArrowRight className="text-white animate-pulse" />
              <span className="animate-wiggle">🔄</span>
            </div>
            <div className="mt-6 text-meme-yellow font-bold text-xl animate-pulse">
              REPEAT UNTIL MOON OR BROKE! 💎🙌
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            variant="meme" 
            size="xl" 
            className="font-comic animate-pulse-chaos mr-4"
            onClick={() => window.open("https://pump.fun/coin/BuB5bKwuPmFqEQX8twcJ6irZyV8pgo6TJ8PzF2wLpump", "_blank")}
          >
            🎮 BUY $CRACK & START 🎮
          </Button>
          <Button 
            variant="fire" 
            size="lg" 
            className="font-comic animate-shake"
            onClick={() => window.open("https://dexscreener.com/solana", "_blank")}
          >
            📊 CHECK CHARTS 📊
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToPlaySection;