import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Headphones, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Contact form submitted:", formData);
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      inquiryType: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["123 Textile Hub, Industrial Area", "Mumbai, Maharashtra 400001", "India"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 22 2642 8590", "Mon-Sat: 9:00 AM - 6:00 PM"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@vijayprints.com", "sales@vijayprints.com", "export@vijayprints.com"],
      action: "Send Email"
    }
  ];

  const services = [
    {
      icon: MessageSquare,
      title: "General Inquiries",
      description: "Questions about our company, products, or services"
    },
    {
      icon: FileText,
      title: "Quote Requests",
      description: "Get detailed quotations for bulk orders"
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Support for existing orders and shipments"
    },
    {
      icon: Send,
      title: "Export Inquiries",
      description: "International shipping and export services"
    }
  ];

  return (
    <div className="min-h-screen pt-6 md:pt-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 md:mb-4">
            Contact Vijay Prints
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your textile journey? Get in touch with our experts for personalized solutions
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-3 md:mb-4 p-2 md:p-3 rounded-full bg-primary/10 w-fit">
                  <info.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <CardTitle className="text-lg md:text-xl">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm md:text-base text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="text-xs md:text-sm">
                  {info.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Send Us a Message</CardTitle>
              <CardDescription className="text-sm md:text-base">
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm md:text-base">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="text-sm md:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm md:text-base">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="text-sm md:text-base"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type</Label>
                  <Select onValueChange={(value) => handleChange("inquiryType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="quote">Quote Request</SelectItem>
                      <SelectItem value="support">Customer Support</SelectItem>
                      <SelectItem value="export">Export Services</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your requirements, quantities, delivery timeline, or any specific questions..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" variant="enquire" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our terms and privacy policy
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="space-y-8">
            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-muted-foreground">Closed</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> We respond to all inquiries within 24 hours during business days
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle>How Can We Help?</CardTitle>
                <CardDescription>
                  Choose the service that best matches your needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-card">
                      <div className="p-2 rounded-full bg-primary/10">
                        <service.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gradient-card rounded-lg">
                    <div className="text-2xl font-bold text-primary">24hr</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-card rounded-lg">
                    <div className="text-2xl font-bold text-primary">35+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-card rounded-lg">
                    <div className="text-2xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-card rounded-lg">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Countries Served</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Find Us Here</CardTitle>
            <CardDescription>
              Visit our manufacturing facility and showroom in Mumbai
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map would be embedded here</p>
                <p className="text-sm text-muted-foreground mt-2">
                  123 Textile Hub, Industrial Area, Mumbai, Maharashtra 400001
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;