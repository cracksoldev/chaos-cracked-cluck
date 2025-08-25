import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Twitter, Users, Zap } from "lucide-react";

const CommunitySection = () => {
  const memes = [
    { text: "HODL TO THE MOON! 🚀", emoji: "🚀", className: "animate-bounce" },
    { text: "DIAMOND HANDS! 💎🙌", emoji: "💎", className: "animate-wiggle" },
    { text: "THIS IS THE WAY! 🌙", emoji: "🌙", className: "animate-float" },
    { text: "BUY THE DIP! 📈", emoji: "📈", className: "animate-shake" },
    { text: "CHAOS ENERGY! ⚡", emoji: "⚡", className: "animate-pulse" },
    { text: "VIBE CHECK! ✨", emoji: "✨", className: "animate-bounce" },
    { text: "CRACK ARMY! 🐔", emoji: "🐔", className: "animate-wiggle" },
    { text: "TO THE MARS! 🚀", emoji: "🔴", className: "animate-float" },
    { text: "CHAOS MODE ON! 🔥", emoji: "🔥", className: "animate-shake" },
    { text: "MAXIMUM VIBES! 💫", emoji: "💫", className: "animate-pulse" },
    { text: "CRACKED OUT! 🤪", emoji: "🤪", className: "animate-bounce" },
    { text: "SOLANA SPEED! ⚡", emoji: "💨", className: "animate-wiggle" }
  ];

  const animals = [
    { emoji: "🐔", name: "Crack Chicken", sound: "CLUCK!" },
    { emoji: "🐸", name: "Pepe Frog", sound: "RIBBIT!" },
    { emoji: "🐕", name: "Doge", sound: "WOOF!" },
    { emoji: "🦍", name: "Ape", sound: "HODL!" },
    { emoji: "🐭", name: "Rat", sound: "SQUEAK!" },
    { emoji: "🦎", name: "Lizard", sound: "HISS!" }
  ];

  return (
    <section className="py-20 px-8 relative overflow-hidden">
      {/* Chaotic Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-4xl animate-bounce`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {["🚀", "💎", "🌙", "🔥", "⚡", "✨"][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-impact text-6xl md:text-8xl gradient-pink bg-clip-text text-transparent animate-pulse-chaos mb-4">
            CHAOS COMMUNITY
          </h2>
          <div className="text-2xl font-bold text-meme-yellow animate-wiggle">
            Join the Maddest Community in Crypto! 🎪
          </div>
        </div>

        {/* Animated Meme Wall */}
        <div className="mb-16">
          <h3 className="text-4xl font-impact gradient-chaos bg-clip-text text-transparent text-center mb-8 animate-bounce">
            MEME WALL OF CHAOS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {memes.map((meme, index) => (
              <Card key={index} className={`gradient-fire border-4 border-meme-yellow hover-chaos ${meme.className}`}
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">{meme.emoji}</div>
                  <div className="font-bold text-white text-lg">{meme.text}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Crypto Animals Section */}
        <div className="mb-16">
          <h3 className="text-4xl font-impact gradient-toxic bg-clip-text text-transparent text-center mb-8 animate-shake">
            CHAOS ANIMAL ARMY
          </h3>
          
          <div className="flex flex-wrap justify-center gap-8">
            {animals.map((animal, index) => (
              <div key={index} className="text-center group hover-chaos cursor-pointer">
                <div className="text-8xl mb-2 animate-bounce group-hover:animate-wiggle"
                     style={{ animationDelay: `${index * 0.2}s` }}>
                  {animal.emoji}
                </div>
                <div className="font-bold text-xl text-meme-yellow">{animal.name}</div>
                <div className="font-bold text-lg text-secondary animate-pulse">{animal.sound}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="gradient-chaos border-4 border-primary hover-fire">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-meme-yellow animate-bounce" />
              <div className="text-3xl font-black text-white animate-pulse">42K+</div>
              <div className="font-bold text-white">Chaos Members</div>
            </CardContent>
          </Card>

          <Card className="gradient-toxic border-4 border-secondary hover-fire">
            <CardContent className="p-6 text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-primary animate-wiggle" />
              <div className="text-3xl font-black text-black animate-shake">999K+</div>
              <div className="font-bold text-black">Memes Shared</div>
            </CardContent>
          </Card>

          <Card className="gradient-fire border-4 border-accent hover-fire">
            <CardContent className="p-6 text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-meme-yellow animate-bounce" />
              <div className="text-3xl font-black text-white animate-float">∞</div>
              <div className="font-bold text-white">Chaos Level</div>
            </CardContent>
          </Card>

          <Card className="gradient-pink border-4 border-meme-yellow hover-fire">
            <CardContent className="p-6 text-center">
              <Twitter className="w-12 h-12 mx-auto mb-4 text-black animate-wiggle" />
              <div className="text-3xl font-black text-white animate-pulse">24/7</div>
              <div className="font-bold text-white">Vibe Mode</div>
            </CardContent>
          </Card>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-3xl font-impact text-meme-yellow mb-8 animate-bounce">
            JOIN THE MADNESS!
          </h3>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button variant="chaos" size="xl" className="font-comic animate-pulse-chaos">
              🐦 TWITTER CHAOS 🐦
            </Button>
            
            <Button variant="toxic" size="xl" className="font-comic animate-shake">
              💬 DISCORD MAYHEM 💬
            </Button>
            
            <Button variant="fire" size="xl" className="font-comic animate-bounce">
              📱 TELEGRAM VIBES 📱
            </Button>
          </div>
          
          <div className="mt-8 text-xl font-bold text-muted-foreground animate-wiggle">
            🎪 WHERE CHAOS MEETS COMMUNITY! 🎪
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;