import React from 'react';

const TestimonialCard = ({ quote, name, role, image }) => {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="text-gray-600 italic mb-4">"{quote}"</div>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden mr-3">
            <img src={image || "/api/placeholder/40/40"} alt={name} className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="font-medium text-gray-900">{name}</div>
            <div className="text-gray-500 text-sm">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "FindYourHomie helped me find the perfect PG near my college and a roommate who is now my best friend. Couldn't be happier!",
      name: "Anjali Gupta",
      role: "Computer Science Student",
      image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      quote: "As a first-year student, I was worried about finding accommodation. This platform made it so easy and stress-free.",
      name: "Vikram Mehta",
      role: "Engineering Student",
      image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      quote: "The roommate matching feature is spot on! I found someone with similar interests and study habits.",
      name: "Neha Sharma",
      role: "Business Student",
      image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">What Students Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Hear from students who found their perfect living situation
          </p>
        </div>
        
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;