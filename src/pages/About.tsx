import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Globe, Users, Factory, CheckCircle, Heart, Target, Eye } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "1985", event: "Founded Vijay Prints with a vision for quality textiles" },
    { year: "1992", event: "Expanded operations to include synthetic fabric manufacturing" },
    { year: "1998", event: "Achieved ISO certification for quality management" },
    { year: "2005", event: "Started international exports to Southeast Asia" },
    { year: "2012", event: "Introduced eco-friendly manufacturing processes" },
    { year: "2018", event: "Expanded to European and American markets" },
    { year: "2024", event: "Celebrating 35+ years of textile excellence" }
  ];

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every fabric we produce, ensuring customer satisfaction."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Our clients' success is our priority. We build lasting relationships through reliable service."
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and sustainable manufacturing processes."
    },
    {
      icon: Users,
      title: "Innovation",
      description: "Continuously investing in new technologies and techniques to stay ahead of industry trends."
    }
  ];

  const stats = [
    { icon: Factory, label: "Manufacturing Units", value: "3" },
    { icon: Globe, label: "Countries Served", value: "15+" },
    { icon: Users, label: "Team Members", value: "500+" },
    { icon: Award, label: "Industry Awards", value: "12+" }
  ];

  return (
    <div className="min-h-screen pt-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Vijay Prints
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three decades of dedication to textile excellence, innovation, and customer satisfaction
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 1985 by visionary entrepreneurs, Vijay Prints began as a small textile 
                manufacturing unit with a big dream - to create the finest fabrics that combine 
                traditional craftsmanship with modern innovation.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Over the past 35+ years, we have grown from a local manufacturer to a globally 
                recognized textile company, serving clients across 15+ countries while maintaining 
                our commitment to quality and customer satisfaction.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we stand as a testament to the power of dedication, innovation, and 
                unwavering commitment to excellence in the textile industry.
              </p>
            </div>
            <Button variant="enquire" size="lg" asChild>
              <Link to="/contact">Start Your Journey With Us</Link>
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
              alt="Textile Manufacturing"
              className="w-full h-96 object-cover rounded-lg shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                To provide premium quality textiles that exceed customer expectations while 
                promoting sustainable manufacturing practices and contributing to the global 
                textile industry's growth.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                To be the world's most trusted textile manufacturer, known for innovation, 
                quality, and sustainability, while building lasting partnerships with clients 
                across the globe.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Quality excellence, customer satisfaction, environmental responsibility, 
                innovation, and integrity form the foundation of everything we do at Vijay Prints.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Company Stats */}
        <div className="bg-gradient-primary text-white rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Company at a Glance</h2>
            <p className="text-xl text-white/90">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-white/10 w-fit">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide our every decision and action
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our 35+ year journey of textile excellence
            </p>
          </div>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-card rounded-lg">
                <Badge variant="outline" className="mt-1 bg-primary text-primary-foreground">
                  {milestone.year}
                </Badge>
                <div className="flex-1">
                  <p className="text-muted-foreground">{milestone.event}</p>
                </div>
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-muted/50 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Certifications & Awards</h2>
            <p className="text-xl text-muted-foreground">
              Recognition of our commitment to quality and excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-card">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">ISO 9001:2015</h3>
              <p className="text-sm text-muted-foreground">Quality Management System</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-card">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">OEKO-TEX Standard</h3>
              <p className="text-sm text-muted-foreground">Eco-friendly Textile Certification</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-card">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Export Excellence</h3>
              <p className="text-sm text-muted-foreground">Government Recognition Award</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-card rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Join Our Textile Journey
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Experience the Vijay Prints difference - where tradition meets innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="enquire" size="lg" asChild>
              <Link to="/products">Explore Our Products</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;