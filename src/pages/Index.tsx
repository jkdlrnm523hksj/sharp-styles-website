import { Scissors, Phone, MapPin, Clock, Star, CheckCircle, Users, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-barber.jpg";
import galleryFade from "@/assets/gallery-fade.jpg";
import galleryBeard from "@/assets/gallery-beard.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryTools from "@/assets/gallery-tools.jpg";
import { useState } from "react";

const services = [
  { name: "Haircut", price: "$25", icon: Scissors, description: "Classic and modern cuts tailored to your style" },
  { name: "Beard Trim", price: "$15", icon: Scissors, description: "Precision beard shaping and grooming" },
  { name: "Line-up & Fade", price: "$30", icon: Scissors, description: "Sharp edges and seamless fades" },
  { name: "Kids Haircut", price: "$18", icon: Scissors, description: "Friendly service for young gentlemen" },
  { name: "Hair Wash & Style", price: "$20", icon: Sparkles, description: "Relaxing wash with professional styling" },
];

const whyChooseUs = [
  { title: "Experienced Barbers", description: "15+ years of expertise in precision cuts", icon: Award },
  { title: "Clean & Hygienic", description: "Sanitized tools and pristine environment", icon: CheckCircle },
  { title: "Modern & Classic", description: "From fresh fades to timeless styles", icon: Scissors },
  { title: "Friendly Service", description: "Relaxed atmosphere, great conversations", icon: Users },
];

const testimonials = [
  { name: "Marcus Johnson", rating: 5, text: "Best barber shop in town. Leonard and his team always deliver clean, precise cuts. Been coming here for 3 years now." },
  { name: "David Chen", rating: 5, text: "Finally found a barber who understands what I want. The attention to detail is incredible. Highly recommend the fade!" },
  { name: "James Williams", rating: 5, text: "Professional, friendly, and they actually listen. My go-to spot for haircuts. The hot towel treatment is a nice touch." },
  { name: "Michael Rodriguez", rating: 5, text: "Clean shop, skilled barbers, and fair prices. What more could you ask for? The beard trim here is top-notch." },
];

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for booking! We will confirm your appointment shortly.");
    setFormData({ name: "", phone: "", service: "", date: "", time: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="container-narrow">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center gap-2">
              <Scissors className="w-6 h-6 text-gold" />
              <span className="font-display text-xl md:text-2xl font-semibold text-foreground">Leonard Hair Cut</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-muted-foreground hover:text-gold transition-colors">About</a>
              <a href="#services" className="text-muted-foreground hover:text-gold transition-colors">Services</a>
              <a href="#gallery" className="text-muted-foreground hover:text-gold transition-colors">Gallery</a>
              <a href="#contact" className="text-muted-foreground hover:text-gold transition-colors">Contact</a>
              <Button variant="gold" size="sm" asChild>
                <a href="#booking">Book Now</a>
              </Button>
            </div>
            <Button variant="gold" size="sm" className="md:hidden" asChild>
              <a href="#booking">Book</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional barber cutting hair at Leonard Hair Cut" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        
        <div className="relative container-narrow py-20 md:py-32">
          <div className="max-w-2xl animate-fade-up">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-medium tracking-wider uppercase text-sm">Premium Grooming</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
              Leonard<br />
              <span className="text-gold-gradient">Hair Cut</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 font-light">
              Sharp Styles. Clean Cuts. Professional Grooming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="xl" asChild>
                <a href="#booking">Book Appointment</a>
              </Button>
              <Button variant="goldOutline" size="xl" asChild>
                <a href="#services">View Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-12 bg-gold" />
                <span className="text-gold font-medium tracking-wider uppercase text-sm">About Us</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Where Precision Meets Style
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                At Leonard Hair Cut, we believe every client deserves a grooming experience that goes beyond the ordinary. Founded with a passion for precision and an eye for style, our shop has become the go-to destination for gentlemen who appreciate quality craftsmanship.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our team of skilled barbers combines traditional techniques with modern trends, ensuring you leave looking sharp and feeling confident. From classic cuts to contemporary fades, we take pride in delivering exceptional results every time.
              </p>
            </div>
            <div className="relative">
              <img 
                src={galleryInterior} 
                alt="Leonard Hair Cut shop interior" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-lg shadow-xl">
                <p className="font-display text-4xl font-bold text-primary-foreground">15+</p>
                <p className="text-primary-foreground/80 text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-medium tracking-wider uppercase text-sm">Our Services</span>
              <div className="h-px w-12 bg-gold" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Premium Grooming Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From sharp fades to classic cuts, our skilled barbers deliver precision and style for every gentleman.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={service.name}
                className="card-premium p-8 hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{service.name}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <p className="text-gold text-2xl font-bold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-medium tracking-wider uppercase text-sm">Why Choose Us</span>
              <div className="h-px w-12 bg-gold" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              The Leonard Difference
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={item.title} className="text-center group">
                <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-10 h-10 text-gold group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-medium tracking-wider uppercase text-sm">Our Work</span>
              <div className="h-px w-12 bg-gold" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Gallery
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Take a look at some of our finest work and our premium shop environment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <img 
                src={galleryInterior} 
                alt="Leonard Hair Cut interior" 
                className="w-full h-full object-cover rounded-lg hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div>
              <img 
                src={galleryFade} 
                alt="Precision fade haircut" 
                className="w-full h-full object-cover rounded-lg hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div>
              <img 
                src={galleryBeard} 
                alt="Professional beard trim" 
                className="w-full h-full object-cover rounded-lg hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div>
              <img 
                src={galleryTools} 
                alt="Professional barber tools" 
                className="w-full h-full object-cover rounded-lg hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div>
              <img 
                src={heroImage} 
                alt="Barber at work" 
                className="w-full h-full object-cover rounded-lg hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-12 bg-gold" />
                <span className="text-gold font-medium tracking-wider uppercase text-sm">Book Now</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Schedule Your Visit
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Ready for a fresh look? Book your appointment online and skip the wait. Our team is ready to give you the perfect cut.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Business Hours</p>
                    <p className="text-muted-foreground">Mon-Sat: 9AM - 8PM | Sun: 10AM - 6PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Call Us</p>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">123 Main Street, Downtown City, ST 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-premium p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-foreground font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-foreground"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-foreground"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">Service</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-foreground"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.name} value={service.name}>
                        {service.name} - {service.price}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-foreground font-medium mb-2">Date</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Time</label>
                    <select
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-foreground"
                    >
                      <option value="">Select time</option>
                      <option value="9:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                    </select>
                  </div>
                </div>
                <Button type="submit" variant="gold" size="lg" className="w-full">
                  Book Appointment
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-medium tracking-wider uppercase text-sm">Testimonials</span>
              <div className="h-px w-12 bg-gold" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="card-premium p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground text-lg mb-6 italic">"{testimonial.text}"</p>
                <p className="font-display text-lg font-semibold text-foreground">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-12 bg-gold" />
                <span className="text-gold font-medium tracking-wider uppercase text-sm">Contact</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Visit Our Shop
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Walk-ins welcome, but appointments are recommended for the best experience.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">Address</p>
                    <p className="text-muted-foreground">123 Main Street<br />Downtown City, ST 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">Phone</p>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 8:00 PM<br />
                      Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative rounded-lg overflow-hidden h-[400px] bg-charcoal-light border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gold mx-auto mb-4" />
                  <p className="text-foreground font-display text-2xl font-semibold mb-2">Leonard Hair Cut</p>
                  <p className="text-muted-foreground">123 Main Street, Downtown City</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Scissors className="w-6 h-6 text-gold" />
              <span className="font-display text-xl font-semibold text-foreground">Leonard Hair Cut</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#about" className="text-muted-foreground hover:text-gold transition-colors">About</a>
              <a href="#services" className="text-muted-foreground hover:text-gold transition-colors">Services</a>
              <a href="#gallery" className="text-muted-foreground hover:text-gold transition-colors">Gallery</a>
              <a href="#booking" className="text-muted-foreground hover:text-gold transition-colors">Book</a>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Leonard Hair Cut. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
