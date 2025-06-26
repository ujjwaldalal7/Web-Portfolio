import { FaUser, FaBirthdayCake, FaMapMarkerAlt, FaGraduationCap, FaCogs, FaMusic } from "react-icons/fa";
import { useEffect, useState } from "react";

const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} years, ${months} months, ${days} days`;
};

export default function About() {
  const [age, setAge] = useState("");

  useEffect(() => {
    setAge(calculateAge("2005-11-16"));
  }, []);

  const data = [
    {
      title: "Full Name",
      value: "Ujjwal Dalal",
      icon: <FaUser className="text-3xl text-cyan-400" />,
    },
    {
      title: "Age",
      value: age,
      icon: <FaBirthdayCake className="text-3xl text-cyan-400" />,
    },
    {
      title: "Location",
      value: "Rohtak, Haryana, India",
      icon: <FaMapMarkerAlt className="text-3xl text-cyan-400" />,
    },
    {
      title: "Education",
      value: "B.E. in Computer Engineering (2023-2027)\nThapar Institute of Engineering and Technology, Patiala",
      icon: <FaGraduationCap className="text-3xl text-cyan-400" />,
    },
    {
      title: "Skills",
      value:
        "C/C++, JS, Python, React, Express, Node.js, Tailwind, MongoDB, APIs",
      icon: <FaCogs className="text-3xl text-cyan-400" />,
    },
    {
      title: "Hobbies",
      value: "Reading tech books, discovering music",
      icon: <FaMusic className="text-3xl text-cyan-400" />,
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4  text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          <span className="text-cyan-400">About</span> Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 border border-white/10 bg-white/5 rounded-xl shadow-lg backdrop-blur-md hover:scale-[1.02] transition duration-300"
            >
              {item.icon}
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-300 whitespace-pre-line">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}