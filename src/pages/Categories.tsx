import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Package, Home, Shirt, Sparkles } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: "cotton",
      name: "Cotton Fabrics",
      description: "Premium cotton textiles for comfort and durability",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=400&fit=crop",
      icon: Package,
      productCount: "150+ Products",
      priceRange: "₹350 - ₹650/meter",
      features: ["100% Cotton", "Breathable", "Easy Care", "Durable"],
      subcategories: ["Pure Cotton", "Cotton Blends", "Organic Cotton", "Printed Cotton"]
    },
    {
      id: "silk",
      name: "Silk Textiles",
      description: "Luxurious silk fabrics with premium finish",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=400&fit=crop",
      icon: Sparkles,
      productCount: "80+ Products",
      priceRange: "₹800 - ₹2000/meter",
      features: ["Pure Silk", "Lustrous", "Elegant", "Premium"],
      subcategories: ["Raw Silk", "Tussar Silk", "Printed Silk", "Embroidered Silk"]
    },
    {
      id: "synthetic",
      name: "Synthetic Fabrics",
      description: "Modern synthetic textiles for various applications",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop",
      icon: Shirt,
      productCount: "200+ Products",
      priceRange: "₹250 - ₹550/meter",
      features: ["Wrinkle Free", "Quick Dry", "Stain Resistant", "Affordable"],
      subcategories: ["Polyester", "Nylon", "Blended Fabrics", "Technical Textiles"]
    },
    {
      id: "home-textiles",
      name: "Home Textiles",
      description: "Quality fabrics for home furnishing and decor",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop",
      icon: Home,
      productCount: "120+ Products",
      priceRange: "₹400 - ₹900/meter",
      features: ["Heavy Duty", "Fade Resistant", "Easy Clean", "Decorative"],
      subcategories: ["Curtain Fabrics", "Upholstery", "Bed Linens", "Table Linens"]
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Product Categories
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of textile categories, each crafted with expertise and attention to detail
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {categories.map((category) => (
            <Card key={category.id} className="overflow-hidden group hover:shadow-elegant">
              <div className="relative">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <div className="p-2 rounded-lg bg-white/90 backdrop-blur-sm">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <Badge className="absolute top-4 right-4 bg-primary">
                  {category.productCount}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl">{category.name}</CardTitle>
                <CardDescription className="text-base">
                  {category.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-primary">
                    {category.priceRange}
                  </span>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.features.map((feature, index) => (
                      <Badge key={index} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Subcategories:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {category.subcategories.map((sub, index) => (
                      <div key={index} className="text-sm text-muted-foreground">
                        • {sub}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="outline" className="flex-1" asChild>
                    <Link to={`/categories/${category.id}`}>
                      View Details
                    </Link>
                  </Button>
                  <Button variant="enquire" className="flex-1" asChild>
                    <Link to="/products">
                      Browse Products
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gradient-card rounded-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Why Choose Our Categories?
            </h2>
            <p className="text-lg text-muted-foreground">
              Each category is carefully curated to meet specific industry needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">
                Every fabric undergoes rigorous quality testing
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Latest Trends</h3>
              <p className="text-sm text-muted-foreground">
                Updated collections following global fashion trends
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Custom Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Tailored solutions for specific requirements
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-6 text-white/90">
            Our experts can help you find the perfect textile solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Contact Our Experts</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;