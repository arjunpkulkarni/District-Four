import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "D4's content strategy was a game-changer. They made AI feel human and brought in many new followers for us.",
    name: "Pavan Otthi",
    title: "CEO, Hanger",
    imageSrc: "/images/hanger.png",
  },
  {
    id: 2,
    quote: "The PR campaign they ran was instrumental in securing our partnership with the USCD. A huge win for our team.",
    name: "James Brisicone",
    title: "Founder, Culin",
    imageSrc: "/images/culin.png",
  },
  {
    id: 3,
    quote: "Our web traffic increased by 150% thanks to their targeted digital ad campaign. We've never seen results like this.",
    name: "David Chen",
    title: "Owner, Gloss Authority",
    imageSrc: "/images/glossauthority.png",
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted By <span className="text-blue-600">Leading Brands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            We partner with innovative companies to build brand trust and drive growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="h-48">
                <img 
                  src={testimonial.imageSrc} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <blockquote className="text-lg text-gray-700 font-inter flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <footer className="mt-8">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </footer>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
