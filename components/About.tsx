import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12 space-y-12">
      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h1>

      {/* Company Overview */}
      <motion.div
        className="max-w-5xl mx-auto text-lg space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <p>
          <strong>Navni Post Tensioning Systems Pvt. Ltd</strong> is a specialised post-tensioning company which
          experts in Post tensioning structures Design and Execution. Established in 2019,
          we focus on providing value-added Engineering solutions. Our team possesses
          extensive design and field experience, forming a strong foundation for the company.
        </p>
        <p>
          Since inception, Navni has grown remarkably from a small startup to a leading post-tensioning
          service provider in India. We have delivered over <strong>12 million+ Sq.ft</strong> of PT Slab area,
          with <strong>7 million Sq.ft</strong> completed and <strong>5 million Sq.ft</strong> under progress.
        </p>
        <p>
          Our strategic operations span Telangana, Andhra Pradesh, Orissa, Karnataka, and Tamil Nadu, with a
          goal to expand across India. This geographical reach underscores our efficient project
          execution and commitment to timelines.
        </p>
      </motion.div>

      {/* Our Values */}
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Integrity", text: "Maintaining structural integrity through meticulous design and precise execution." },
            { title: "Excellence", text: "Striving for excellence in every aspect for optimal structural performance." },
            { title: "Collaboration", text: "Fostering partnerships to seamlessly integrate post-tensioning solutions." },
            { title: "Innovation", text: "Pioneering innovative approaches to elevate structural efficiency." },
          ].map((value, i) => (
            <motion.div
              key={value.title}
              className="bg-gray-100 p-4 rounded-xl shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-bold text-xl mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Explore Our Works */}
      <motion.div
        className="max-w-6xl mx-auto text-center space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold">Explore Our Works</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["Designing & Implementation", "70"],
            ["Residential Buildings", "93"],
            ["Architecture", "93"],
            ["Construction", "82"]
          ].map(([label, value], i) => (
            <motion.div
              key={label}
              className="bg-blue-50 p-4 rounded-lg shadow"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-lg font-bold">{label}</p>
              <p className="text-3xl text-blue-600 font-bold">{value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Strategy Section */}
      <motion.div
        className="max-w-6xl mx-auto text-center space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold">Strategies</h2>
        <p className="text-lg text-gray-600">
          Planning • Competitive Analysis • Execution • Growth
        </p>
        <p className="max-w-3xl mx-auto text-gray-600">
          Expanding expertise and capabilities to meet evolving project demands and client needs.
        </p>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="max-w-4xl mx-auto text-center text-sm text-gray-500 mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4">Build with NAVNI</h2>
        <p>
          <strong>Navni Post Tensioning Systems Pvt. Ltd</strong> is a specialised post-tensioning company
          which experts in Post tensioning structures Design and Execution. Established in 2019,
          we focus on providing value-added Engineering solutions.
        </p>
        <p className="mt-4">
          <strong>Hours:</strong> 09:00 AM to 07:00 PM, Sunday - CLOSED
        </p>
        <p className="mt-2">
          <strong>Quick Links:</strong> About Us | Services | Our Clients | Portfolio | Blogs
        </p>
        <p className="mt-4">
          <strong>Address 1:</strong> Plot No.9,10, Manikonda, Rangareddy Dist, Hyderabad, Telangana – 500089, India
        </p>
        <p>
          <strong>Address 2:</strong> 435, OU Colony Main Road, Shaikpet, Rangareddy, Telangana – 500089, India
        </p>
        <p>
          <strong>Contact:</strong> +91 9100945658 / +91 9697799299 | info@navni.in
        </p>
        <p className="mt-4">© 2024 Navni Post Tensioning Systems Pvt. Ltd, All Rights Reserved</p>
      </motion.div>
    </div>
  );
}
