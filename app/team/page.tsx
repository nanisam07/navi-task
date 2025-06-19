import { motion } from "framer-motion";

export default function Home() {
  const team = [
    {
      name: "ViishhnuVardhan Sunkari, B.E (Civil)",
      role: "Founder & Managing Director",
      description:
        "Mr. Vishnuvardhan Sunkari, Founder and Managing Director of Navni Post Tensioning Systems Pvt Ltd, boasting over 23 years of experience in Civil Operational Works and PMC...",
      image: "/vishnu.jpg",
    },
    {
      name: "Danakoti Raja, M.E (Stru.Engg)",
      role: "Director, Designs",
      description:
        "Mr. Dhanakoti Raja, Director of Designs at Navni Post Tensioning Systems Pvt Ltd, boasting 15+ years of experience in Structural Engineering...",
      image: "/raja.jpg",
    },
    {
      name: "B. Vinoth, M.tech (Stru.Engg)",
      role: "Associate Director, Designs",
      description:
        "Mr. B. Vinoth, Associate Director of Designs at Navni Post Tensioning Systems Pvt Ltd, with 12+ years of industry experience...",
      image: "/vinoth.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-24 px-6 text-left"
        style={{ backgroundImage: "url('/engineers.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl mx-auto text-white"
        >
          <p className="text-sm uppercase tracking-widest mb-2">
            Explore the features
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="opacity-30 tracking-tight block">SCHEDULE</span>
            <span className="text-white">OUR TEAM</span>
          </h1>
          <p className="mt-4 text-lg font-light max-w-xl">
            Etiam scelerisque tortor at lectus dapibus, nec fermentum diam
            feugiat. Morbi rutrum magna et dui.
          </p>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          PROFESSIONALS
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md flex flex-col md:flex-row gap-6 items-center p-6"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-indigo-600 font-semibold">
                  {member.role}
                </p>
                <p className="mt-2 text-gray-700 text-sm">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-2">Build with NAVNI</h4>
            <p className="text-sm leading-relaxed">
              Navni Post Tensioning Systems Pvt. Ltd is a specialised
              post-tensioning company which experts in Post tensioning
              structures Design and Execution which was established in the year
              2019 with a focus on providing value-added Engineering solutions.
            </p>
            <p className="mt-4 text-sm">
              🕒 09:00 AM to 07:00 PM, Sunday - CLOSED
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Quick Links</h4>
            <ul className="text-sm space-y-1">
              <li>About Us</li>
              <li>Services</li>
              <li>Our Clients</li>
              <li>Portfolio</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Our Offices</h4>
            <p className="text-sm">
              Plot No.9,10, Manikonda, Hyderabad - 500089
            </p>
            <p className="text-sm mt-2">
              435, OU Colony, Shaikpet, Hyderabad - 500089
            </p>
            <p className="text-sm mt-2">
              📞 +91 9100945658 / +91 9697799299
            </p>
            <p className="text-sm mt-2">📧 info@navni.in</p>
          </div>
        </div>
        <div className="text-center text-sm mt-8 border-t border-purple-700 pt-4">
          © 2024 Navni Post Tensioning Systems Pvt. Ltd, All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
