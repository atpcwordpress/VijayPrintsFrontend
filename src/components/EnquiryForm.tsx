import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  price: string;
}

interface EnquiryFormProps {
  product?: Product;
}

const EnquiryForm = ({ product }: EnquiryFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "",
    message: "",
    productName: product?.name || ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Enquiry submitted:", formData);
    
    toast({
      title: "Enquiry Submitted Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      quantity: "",
      message: "",
      productName: product?.name || ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {product && (
        <div className="p-3 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">Product:</p>
          <p className="font-medium">{product.name}</p>
          <p className="text-sm text-primary">{product.price}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
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
        <Label htmlFor="quantity">Required Quantity</Label>
        <Select onValueChange={(value) => handleChange("quantity", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select quantity range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="100-500">100-500 meters</SelectItem>
            <SelectItem value="500-1000">500-1000 meters</SelectItem>
            <SelectItem value="1000-5000">1000-5000 meters</SelectItem>
            <SelectItem value="5000+">5000+ meters</SelectItem>
            <SelectItem value="custom">Custom quantity</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Please provide any specific requirements, preferred delivery timeline, or other details..."
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          rows={4}
        />
      </div>

      <Button type="submit" variant="enquire" className="w-full">
        Submit Enquiry
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our terms and privacy policy
      </p>
    </form>
  );
};

export default EnquiryForm;