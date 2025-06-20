'use client';
import { MotionDiv, MotionH2 } from "@/components/MotionWrapper";
import { useEffect } from "react";

export default function Home() {
  const team = [
    {
      name: "ViishhnuVardhan Sunkari, B.E (Civil)",
      role: "Founder & Managing Director",
      description:
        "Mr. Vishnuvardhan Sunkari, Founder and Managing Director of Navni Post Tensioning Systems Pvt Ltd, boasting over 23 years of experience in Civil Operational Works and PMC...",
      image: "/images/team1.jpg",
    },
    {
      name: "Danakoti Raja, M.E (Stru.Engg)",
      role: "Director, Designs",
      description:
        "Mr. Dhanakoti Raja, Director of Designs at Navni Post Tensioning Systems Pvt Ltd, boasting 15+ years of experience in Structural Engineering...",
      image: "/images/team2.png",
    },
    {
      name: "B. Vinoth, M.tech (Stru.Engg)",
      role: "Associate Director, Designs",
      description:
        "Mr. B. Vinoth, Associate Director of Designs at Navni Post Tensioning Systems Pvt Ltd, with 12+ years of industry experience...",
      image: "/images/team3.png",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-gray-100 to-purple-100 text-gray-800 min-h-screen overflow-hidden">
      {/* Floating Background Blob */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse-slow z-0" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-indigo-300 opacity-30 rounded-full blur-2xl animate-pulse-slower z-0" />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-32 px-6 text-left z-10"
        style={{ backgroundImage: "url('/engineers.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70 z-0" />
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl mx-auto text-white backdrop-blur-md bg-white/10 p-10 rounded-2xl shadow-xl"
        >
          <p className="text-sm uppercase tracking-widest mb-2 text-purple-200">
            Explore the features
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="opacity-30 tracking-tight block">SCHEDULE</span>
            <span className="text-white">OUR TEAM</span>
          </h1>
          <p className="mt-4 text-lg font-light max-w-xl text-purple-100">
            We are a team of structural engineering professionals dedicated to
            post-tensioning excellence and innovation.
          </p>
        </MotionDiv>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 relative z-10">
        <MotionH2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-purple-800"
        >
          PROFESSIONALS
        </MotionH2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-center p-6"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 object-cover rounded-lg shadow-md"
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
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-4xl mx-auto mt-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl py-12 px-8 shadow-2xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to bring innovation to your next project?
        </h2>
        <p className="mt-4 text-sm md:text-base">
          Connect with our structural experts today to build the future.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-purple-700 rounded-full font-semibold shadow hover:shadow-lg transition">
          Contact Us
        </button>
      </MotionDiv>

      {/* Footer */}
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 bg-gradient-to-r from-purple-900 to-purple-700 text-white py-12 px-6 mt-24"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-2">Build with NAVNI</h4>
            <p className="text-sm leading-relaxed">
              Navni Post Tensioning Systems Pvt. Ltd is a specialised
              post-tensioning company with expertise in structural design and
              execution, providing value-driven engineering since 2019.
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
        <div className="text-center text-sm mt-8 border-t border-purple-600 pt-4">
          © 2024 Navni Post Tensioning Systems Pvt. Ltd, All Rights Reserved
        </div>
      </MotionDiv>
    </div>
  );
}
