import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Coins, Gamepad2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-impact text-6xl md:text-7xl gradient-fire bg-clip-text text-transparent animate-bounce mb-4">
            WHAT IS $CRACK?
          </h2>
          <div className="text-xl text-meme-yellow animate-wiggle">
            The most chaotic meme coin in the Solana galaxy! 🪐
          </div>
        </div>

        {/* Story Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="gradient-chaos border-4 border-meme-yellow hover-fire animate-float">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-white">
                <Zap className="animate-bounce text-meme-yellow" />
                The Origin
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white font-bold text-lg leading-relaxed">
                Once upon a time, a deranged chicken discovered Solana and went completely INSANE! 🐔⚡ It started coding with pure VIBES and created the most chaotic token ever!
              </p>
            </CardContent>
          </Card>

          <Card className="gradient-toxic border-4 border-primary hover-fire animate-float" style={{ animationDelay: "0.5s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-black">
                <Coins className="animate-wiggle text-primary" />
                The Chaos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-black font-bold text-lg leading-relaxed">
                $CRACK isn't just a token - it's a LIFESTYLE! 💎 Pure chaos energy flowing through the Solana blockchain, causing maximum mayhem and moon missions!
              </p>
            </CardContent>
          </Card>

          <Card className="gradient-pink border-4 border-secondary hover-fire animate-float" style={{ animationDelay: "1s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-white">
                <Gamepad2 className="animate-shake text-secondary" />
                The Vibe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white font-bold text-lg leading-relaxed">
                No roadmaps, no promises, just pure VIBE-CODED CHAOS! 🚀 Join the madness and let the chicken guide you to financial chaos!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Chaos Stats */}
        <div className="text-center">
          <h3 className="text-4xl font-impact gradient-chaos bg-clip-text text-transparent mb-8 animate-pulse-chaos">
            CHAOS STATS
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-card border-4 border-primary rounded-xl hover-chaos">
              <div className="text-3xl font-black text-primary animate-bounce">∞</div>
              <div className="font-bold text-muted-foreground">Chaos Level</div>
            </div>
            
            <div className="p-6 bg-card border-4 border-secondary rounded-xl hover-chaos">
              <div className="text-3xl font-black text-secondary animate-wiggle">420T</div>
              <div className="font-bold text-muted-foreground">Supply</div>
            </div>
            
            <div className="p-6 bg-card border-4 border-accent rounded-xl hover-chaos">
              <div className="text-3xl font-black text-accent animate-pulse">100%</div>
              <div className="font-bold text-muted-foreground">Community</div>
            </div>
            
            <div className="p-6 bg-card border-4 border-meme-yellow rounded-xl hover-chaos">
              <div className="text-3xl font-black text-meme-yellow animate-shake">0%</div>
              <div className="font-bold text-muted-foreground">Sense Made</div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center mt-16">
          <Button variant="toxic" size="xl" className="font-comic animate-bounce">
            🐔 JOIN THE CHAOS 🐔
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;