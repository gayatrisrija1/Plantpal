import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Heart, 
  Shield, 
  Truck, 
  Users, 
  Award,
  CheckCircle,
  Sprout
} from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: "Passion for Plants",
      description: "We believe every space deserves the beauty and benefits of plants. Our passion drives us to source the healthiest, most beautiful plants for your home."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Quality Guarantee",
      description: "Every plant comes with our 30-day health guarantee. We stand behind the quality of our plants and provide ongoing support for your plant journey."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Community First",
      description: "We're building a community of plant lovers. From beginners to experts, everyone is welcome in our growing family of plant enthusiasts."
    },
    {
      icon: <Sprout className="h-8 w-8 text-green-600" />,
      title: "Sustainable Growth",
      description: "We're committed to sustainable practices, from eco-friendly packaging to supporting local growers and promoting environmental consciousness."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "500+", label: "Plant Varieties" },
    { number: "50+", label: "Cities Served" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  const team = [
    {
      name: "Sarah Green",
      role: "Founder & Plant Expert",
      description: "With over 15 years in horticulture, Sarah founded Plant Pal to make plant parenthood accessible to everyone."
    },
    {
      name: "Mike Chen",
      role: "Head of Operations",
      description: "Mike ensures every plant reaches you in perfect condition, managing our supply chain and quality control."
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Success Manager",
      description: "Emily leads our customer support team, helping plant parents succeed with personalized care guidance."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-green-600">Plant Pal</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to bring the joy and benefits of plants into every home. 
              Founded by plant enthusiasts, for plant enthusiasts, Plant Pal is your trusted 
              companion in creating beautiful, healthy indoor spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Plant Pal began in 2020 when our founder, Sarah, noticed how difficult it was 
                  for people to find healthy plants and reliable care information. After years 
                  of helping friends and family with their plant struggles, she decided to create 
                  a solution that would make plant parenthood accessible to everyone.
                </p>
                <p>
                  What started as a small local nursery has grown into a thriving online community 
                  of plant lovers. We've helped thousands of people transform their spaces with 
                  beautiful, healthy plants while providing the knowledge and support they need 
                  to succeed.
                </p>
                <p>
                  Today, Plant Pal is more than just a plant store – we're your partners in 
                  creating the green, peaceful spaces you've always dreamed of. Every plant we 
                  sell comes with our commitment to quality, care, and ongoing support.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Plant collection"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">4+ Years</p>
                    <p className="text-sm text-gray-600">Growing Together</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at Plant Pal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-green-100 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Plant Pal who make your plant journey possible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              To make plant parenthood accessible, enjoyable, and successful for everyone. 
              We believe that everyone deserves to experience the joy, beauty, and wellness 
              benefits that plants bring to our lives and spaces.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-700">Quality Plants</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-700">Expert Guidance</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-700">Community Support</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-700">Sustainable Practices</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;