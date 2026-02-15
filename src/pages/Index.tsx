import { Link } from "react-router-dom";
import { Star, Crown, UtensilsCrossed, Sparkles, CalendarDays, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-hotel.jpg";
import exteriorImage from "@/assets/hotel-exterior.jpg";
import suiteImage from "@/assets/suite-presidential.jpg";
import diningImage from "@/assets/dining.jpg";
import spaImage from "@/assets/spa.jpg";
import eventsImage from "@/assets/events.jpg";

const experiences = [
  { icon: Crown, title: "Presidential Suites", desc: "Opulent accommodations with panoramic views and personal butler service.", image: suiteImage, link: "/rooms" },
  { icon: UtensilsCrossed, title: "Fine Dining", desc: "World-class cuisine crafted by award-winning chefs using the finest ingredients.", image: diningImage, link: "/dining" },
  { icon: Sparkles, title: "Spa & Wellness", desc: "Rejuvenate your senses with bespoke treatments and infinity pool retreats.", image: spaImage, link: "/spa" },
  { icon: CalendarDays, title: "Events & Conferences", desc: "Magnificent venues for celebrations, galas, and corporate gatherings.", image: eventsImage, link: "/events" },
];

const testimonials = [
  { name: "Victoria L.", text: "An unparalleled experience. The attention to detail and warmth of service made our stay truly extraordinary.", rating: 5 },
  { name: "James M.", text: "From the moment we arrived, we were treated like royalty. The Presidential Suite exceeded every expectation.", rating: 5 },
  { name: "Amara K.", text: "The spa was heavenly and the dining experience was world-class. We will return every year.", rating: 5 },
];

const galleryImages = [heroImage, exteriorImage, suiteImage, diningImage, spaImage, eventsImage];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})`, backgroundAttachment: "fixed" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
            ★★★★★ Luxury Hotel & Resort
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Where Luxury Meets{" "}
            <span className="gold-text-gradient">Majesty</span>
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Experience timeless elegance in the heart of Southern Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <Link
              to="/contact"
              className="gold-gradient text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-base tracking-wide hover:opacity-90 transition-opacity shadow-lg"
            >
              Book Your Stay
            </Link>
            <Link
              to="/rooms"
              className="border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-base tracking-wide hover:bg-primary-foreground/10 transition-all"
            >
              Explore Suites
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight size={24} className="text-primary-foreground/60 rotate-90" />
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src={exteriorImage}
                  alt="Royal East Wing exterior"
                  className="rounded-lg shadow-2xl w-full object-cover aspect-square"
                />
                <div className="absolute -bottom-6 -right-6 gold-gradient rounded-lg p-6 shadow-xl hidden md:block">
                  <p className="font-display text-3xl font-bold text-primary-foreground">25+</p>
                  <p className="text-primary-foreground/80 text-sm font-body">Years of Excellence</p>
                </div>
              </div>
              <div>
                <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Welcome to Royal East Wing</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  A Legacy of <span className="gold-text-gradient">Distinction</span>
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-8">
                  Nestled in the heart of Southern Africa, Royal East Wing stands as a beacon of refined luxury 
                  and world-class hospitality. Our commitment to excellence has earned us recognition among 
                  the finest hotels on the continent, offering guests an unforgettable experience that blends 
                  African warmth with international sophistication.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { label: "5-Star Service", value: "Excellence" },
                    { label: "Prime Location", value: "Southern Africa" },
                    { label: "Award-Winning", value: "Hospitality" },
                  ].map((item) => (
                    <div key={item.label} className="text-center p-4 rounded-lg bg-accent/50">
                      <p className="font-display text-sm font-bold text-primary">{item.value}</p>
                      <p className="text-xs text-muted-foreground font-body mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Luxury Experiences */}
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Curated Experiences</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Luxury <span className="gold-text-gradient">Redefined</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((exp, i) => (
              <ScrollReveal key={exp.title} delay={i * 100}>
                <Link
                  to={exp.link}
                  className="group block bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/30"
                >
                  <div className="h-52 overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <exp.icon className="text-primary mb-3" size={28} />
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">{exp.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Visual Journey</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Gallery
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="overflow-hidden rounded-lg group aspect-[4/3]">
                  <img
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Guest Reviews</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                What Our Guests Say
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="bg-card rounded-xl p-8 shadow-md border border-border">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                  <p className="font-display font-bold text-foreground">{t.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 gold-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Indulge in the Royal Experience
            </h2>
            <p className="text-primary-foreground/80 font-body text-lg mb-10 max-w-xl mx-auto">
              Your extraordinary journey awaits. Reserve your stay and discover the pinnacle of luxury.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary-foreground text-foreground px-10 py-4 rounded-full font-body font-semibold text-base hover:bg-primary-foreground/90 transition-colors shadow-lg"
            >
              Reserve Now
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
