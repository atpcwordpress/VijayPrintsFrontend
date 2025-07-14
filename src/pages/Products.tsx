import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Filter, ArrowRight } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    {
      id: 1,
      name: "Premium Cotton Fabric",
      description: "High-quality 100% cotton fabric perfect for garments",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      category: "Cotton",
      price: "₹450/meter",
      features: ["100% Cotton", "GSM: 120", "Width: 44 inches", "Shrinkage: <3%"],
      colors: ["White", "Black", "Navy", "Grey", "Beige"]
    },
    {
      id: 2,
      name: "Luxury Silk Collection",
      description: "Premium silk fabric with elegant finish",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop",
      category: "Silk",
      price: "₹1,200/meter",
      features: ["100% Silk", "GSM: 80", "Width: 42 inches", "Lustrous finish"],
      colors: ["Ivory", "Burgundy", "Royal Blue", "Emerald", "Gold"]
    },
    {
      id: 3,
      name: "Designer Print Fabric",
      description: "Exclusive designer prints for fashion garments",
      image: "https://images.unsplash.com/photo-1566479179817-0b2fb4eedc13?w=400&h=300&fit=crop",
      category: "Printed",
      price: "₹680/meter",
      features: ["Digital Print", "GSM: 140", "Width: 44 inches", "Fade resistant"],
      colors: ["Multi-color patterns", "Floral designs", "Geometric prints"]
    },
    {
      id: 4,
      name: "Synthetic Blend Fabric",
      description: "Durable synthetic blend for casual wear",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      category: "Synthetic",
      price: "₹320/meter",
      features: ["Polyester blend", "GSM: 180", "Width: 58 inches", "Easy care"],
      colors: ["Black", "White", "Navy", "Charcoal", "Brown"]
    },
    {
      id: 5,
      name: "Home Textile Collection",
      description: "Premium fabrics for home furnishing",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      category: "Home Textiles",
      price: "₹580/meter",
      features: ["Heavy duty", "GSM: 220", "Width: 54 inches", "Stain resistant"],
      colors: ["Cream", "Rust", "Olive", "Burgundy", "Teal"]
    },
    {
      id: 6,
      name: "Organic Cotton Range",
      description: "Eco-friendly organic cotton fabrics",
      image: "https://images.unsplash.com/photo-1524749292158-7540c2494485?w=400&h=300&fit=crop",
      category: "Cotton",
      price: "₹520/meter",
      features: ["Organic certified", "GSM: 160", "Width: 44 inches", "Chemical-free"],
      colors: ["Natural", "Stone", "Sage", "Terracotta", "Indigo"]
    }
  ];

  const categories = ["all", "Cotton", "Silk", "Printed", "Synthetic", "Home Textiles"];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-6 md:pt-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 md:mb-4">
            Our Product Collection
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our wide range of premium textiles crafted with precision and care
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 mb-6 md:mb-8 p-4 md:p-6 bg-gradient-card rounded-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <Filter className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {filteredProducts.map((product) => (
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
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-base md:text-lg font-semibold text-primary">
                      {product.price}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-xs md:text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="flex-1 text-xs md:text-sm">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md mx-4">
                        <DialogHeader>
                          <DialogTitle className="text-base md:text-lg">{product.name}</DialogTitle>
                          <DialogDescription className="text-sm md:text-base">{product.description}</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 sm:h-48 object-cover rounded-lg"
                          />
                          <div>
                            <h4 className="font-medium mb-2 text-sm md:text-base">Specifications:</h4>
                            <ul className="space-y-1">
                              {product.features.map((feature, index) => (
                                <li key={index} className="text-xs md:text-sm text-muted-foreground">
                                  • {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Available Colors:</h4>
                            <div className="flex flex-wrap gap-1">
                              {product.colors.map((color, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {color}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="text-lg font-semibold text-primary">
                            {product.price}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="enquire" 
                          size="sm" 
                          onClick={() => setSelectedProduct(product)}
                        >
                          Enquire Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Product Enquiry</DialogTitle>
                          <DialogDescription>
                            Get detailed information about {product.name}
                          </DialogDescription>
                        </DialogHeader>
                        <EnquiryForm product={product} />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No products found matching your criteria.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Custom Textiles?
          </h2>
          <p className="text-xl mb-6 text-white/90">
            We specialize in custom manufacturing for bulk orders
          </p>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            <ArrowRight className="mr-2 h-4 w-4" />
            Contact Our Experts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;