import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Globe, Users, CheckCircle, Star, Truck, Shield } from "lucide-react";
import heroImage from "@/assets/hero-textile.jpg";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Cotton Collection",
      description: "High-quality cotton fabrics for garments",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      category: "Cotton",
      price: "₹450/meter"
    },
    {
      id: 2,
      name: "Luxury Silk Series",
      description: "Elegant silk fabrics with premium finish",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop",
      category: "Silk",
      price: "₹1,200/meter"
    },
    {
      id: 3,
      name: "Designer Patterns",
      description: "Exclusive designer prints and patterns",
      image: "https://images.unsplash.com/photo-1566479179817-0b2fb4eedc13?w=400&h=300&fit=crop",
      category: "Printed",
      price: "₹680/meter"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "35+ Years Experience",
      description: "Decades of expertise in textile manufacturing"
    },
    {
      icon: Globe,
      title: "Global Export",
      description: "Exporting to 15+ countries worldwide"
    },
    {
      icon: Users,
      title: "1000+ Clients",
      description: "Trusted by businesses globally"
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "ISO certified manufacturing processes"
    }
  ];

  const stats = [
    { label: "Years of Excellence", value: "35+" },
    { label: "Happy Clients", value: "1000+" },
    { label: "Products Delivered", value: "50K+" },
    { label: "Countries Served", value: "15+" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-10 sm:pt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Premium Textile Manufacturing
            <span className="block text-textile-accent mt-2">Since 1985</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-white/90 max-w-3xl mx-auto">
            Your trusted partner for high-quality fabrics and textiles
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button variant="hero" size="xl" asChild className="text-sm sm:text-base">
              <Link to="/products">
                Explore Products <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" /></Link>
            </Button>
            <Button size="xl" className="bg-textile-accent text-white hover:bg-textile-accent/90 text-sm sm:text-base">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
              Why Choose Vijay Prints?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine traditional craftsmanship with modern technology to deliver exceptional textiles
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-3 md:mb-4 p-2 md:p-3 rounded-full bg-primary/10 w-fit">
                    <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-base md:text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm md:text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 md:mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
                Featured Products
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Discover our premium textile collections
              </p>
            </div>
            <Button variant="outline" asChild className="text-sm md:text-base">
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden group">
                <div className="relative h-48 sm:h-56 md:h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary text-xs md:text-sm">
                    {product.category}
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base md:text-lg">{product.name}</CardTitle>
                  <CardDescription className="text-sm md:text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <span className="text-base md:text-lg font-semibold text-primary">
                      {product.price}
                    </span>
                    <Button variant="enquire" size="sm" className="text-xs md:text-sm w-full sm:w-auto">
                      Enquire Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 md:p-6 bg-gradient-card rounded-lg">
              <Star className="h-6 w-6 md:h-8 md:w-8 text-textile-accent flex-shrink-0" />
              <div className="text-center sm:text-left">
                <div className="text-xl md:text-2xl font-bold text-primary">4.8/5</div>
                <div className="text-sm md:text-base text-muted-foreground">Customer Rating</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 md:p-6 bg-gradient-card rounded-lg">
              <Truck className="h-6 w-6 md:h-8 md:w-8 text-textile-accent flex-shrink-0" />
              <div className="text-center sm:text-left">
                <div className="text-xl md:text-2xl font-bold text-primary">On-Time</div>
                <div className="text-sm md:text-base text-muted-foreground">98% Delivery Rate</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 md:p-6 bg-gradient-card rounded-lg">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-textile-accent flex-shrink-0" />
              <div className="text-center sm:text-left">
                <div className="text-xl md:text-2xl font-bold text-primary">ISO</div>
                <div className="text-sm md:text-base text-muted-foreground">Certified Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Ready to Start Your Textile Journey?
          </h2>
          <p className="text-lg sm:text-xl mb-6 md:mb-8 text-white/90 max-w-2xl mx-auto">
            Get in touch with our experts for custom requirements and bulk orders
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button size="xl" className="bg-textile-accent text-white hover:bg-textile-accent/90 text-sm sm:text-base" asChild>
              <Link to="/contact">Request Quote</Link>
            </Button>
            <Button variant="secondary" size="xl" asChild className="text-sm sm:text-base">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;