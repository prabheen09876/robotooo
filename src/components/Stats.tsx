import { motion } from 'framer-motion';
import { Users, ShoppingCart, Award, Clock } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Active Users",
    delay: 0
  },
  {
    icon: ShoppingCart,
    value: "10K+",
    label: "Robots Sold",
    delay: 0.1
  },
  {
    icon: Award,
    value: "99.9%",
    label: "Satisfaction Rate",
    delay: 0.2
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support",
    delay: 0.3
  }
];

export function Stats() {
  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: stat.delay }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 bg-gray-900/30 rounded-2xl backdrop-blur-sm border border-gray-800"
            >
              <div className="p-3 rounded-full bg-purple-500/10 mb-4">
                <stat.icon className="w-6 h-6 text-purple-500" />
              </div>
              <motion.span
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-2"
              >
                {stat.value}
              </motion.span>
              <span className="text-gray-400 text-sm text-center">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}