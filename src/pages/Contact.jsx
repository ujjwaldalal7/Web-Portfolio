import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin, FaGithub, FaReddit, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 md:px-20 py-24 text-white bg-transparent scroll-mt-24">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-cyan-400">Contact</span> Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        <form
          action="https://formspree.io/f/movwpbjj"
          className="space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-md bg-white/5 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-md bg-white/5 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-md bg-white/5 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 rounded-md font-semibold transition"
          >
            Send Message
          </button>
        </form>

        <div className="w-full md:w-1/2 px-6 py-10 flex flex-col justify-center items-center md:items-start text-white space-y-8">

  {/* Contact Info */}
  <div className="text-center md:text-left space-y-2">
    <p className="text-xl font-semibold">Email:</p>
    <p className="text-cyan-300 text-lg break-all">official.dalalujjwal@gmail.com</p>

    <p className="text-xl font-semibold mt-4">Phone:</p>
    <p className="text-cyan-300 text-lg">+91 8813865233</p>
  </div>

  <hr className="border-t border-gray-500 w-full my-4" />

  {/* Social Icons */}
  <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 w-full justify-items-center">
    {[
      {
        icon: FaEnvelope,
        label: "Email",
        href: "mailto:official.dalalujjwal@gmail.com",
        color: "bg-red-600",
      },
      {
        icon: FaPhone,
        label: "Phone",
        href: "tel:+918813865233",
        color: "bg-green-600",
      },
      {
        icon: FaInstagram,
        label: "Instagram",
        href: "https://instagram.com/ujjwaldalal0007",
        color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
      },
      {
        icon: FaLinkedin,
        label: "LinkedIn",
        href: "https://linkedin.com/in/dalal-ujjwal",
        color: "bg-[#0A66C2]",
      },
      {
        icon: FaGithub,
        label: "GitHub",
        href: "https://github.com/ujjwaldalal7",
        color: "bg-gray-800",
      },
      {
        icon: FaReddit,
        label: "Reddit",
        href: "https://reddit.com/user/ujjwaldalal0007",
        color: "bg-orange-500",
      },
      {
        icon: FaTwitter,
        label: "Twitter",
        href: "https://twitter.com/udalal7",
        color: "bg-[#1DA1F2]",
      },
    ].map(({ icon: Icon, label, href, color }, idx) => (
      <a
        key={idx}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-col items-center group`}
      >
        <div
          className={`w-14 h-14 ${color} rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-110`}
        >
          <Icon className="text-white text-2xl" />
        </div>
        <span className="text-sm mt-2 text-gray-300 group-hover:text-white text-center">
          {label}
        </span>
      </a>
    ))}
  </div>
</div>



      </div>
    </section>
  );
}
