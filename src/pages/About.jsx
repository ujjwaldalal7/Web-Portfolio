import React, { useState, useEffect } from "react";
import { FaGraduationCap, FaBriefcase, FaUser, FaLaptopCode, FaMusic } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ProfileDetails() {
  const cardStyle =
    "bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl hover:scale-[1.02] transition-all duration-300";

  const titleStyle = "flex items-center gap-2 text-lg font-semibold text-white mb-3";
  const textStyle = "text-gray-300 leading-relaxed";

  // Compute precise calendar difference between birth date and now
  const computeAge = (birthDate, nowDate = new Date()) => {
    const birth = new Date(birthDate);
    const now = new Date(nowDate);

    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    let hours = now.getHours() - birth.getHours();
    let minutes = now.getMinutes() - birth.getMinutes();
    let seconds = now.getSeconds() - birth.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes -= 1;
    }
    if (minutes < 0) {
      minutes += 60;
      hours -= 1;
    }
    if (hours < 0) {
      hours += 24;
      days -= 1;
    }
    if (days < 0) {
      // days in previous month relative to `now`
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
      months -= 1;
    }
    if (months < 0) {
      months += 12;
      years -= 1;
    }

    return { years, months, days, hours, minutes, seconds };
  };

  // Live-updating age component using DOB: 16 Nov 2005 (month is 10 because Date months are 0-indexed)
  function AgeLive() {
    const DOB = new Date(2005, 10, 16, 0, 0, 0);
    const [age, setAge] = useState(() => computeAge(DOB));

    useEffect(() => {
      const tick = () => setAge(computeAge(DOB));
      const id = setInterval(tick, 1000);
      // run once immediately to avoid 1s flicker
      tick();
      return () => clearInterval(id);
    }, []);

    return (
      <p className={textStyle}>
        {`${age.years} years, ${age.months} months, ${age.days} days, ${String(age.hours).padStart(2, "0")}h ${String(age.minutes).padStart(2, "0")}m ${String(age.seconds).padStart(2, "0")}s`}
      </p>
    );
  }

  return (
    <div id="about">
    <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
           <span className="text-cyan-400">About</span> Me
         </h2>
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      {/* Top Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Name */}
        <div className={cardStyle}>
          <h3 className={titleStyle}>
            <FaUser className="text-blue-400" /> Full Name
          </h3>
          <p className={textStyle}>Ujjwal Dalal</p>
        </div>

        {/* Age */}
        <div className={cardStyle}>
          <h3 className={titleStyle}>🎂 Age</h3>
          <AgeLive />
        </div>

        {/* Location */}
        <div className={cardStyle}>
          <h3 className={titleStyle}>
            <FaMapMarkerAlt className="text-red-400" /> Location
          </h3>
          <p className={textStyle}>Rohtak, Haryana, India</p>
        </div>

        {/* Education */}
        <div className={cardStyle}>
          <h3 className={titleStyle}>
            <FaGraduationCap className="text-green-400" /> Education
          </h3>
          <p className={textStyle}>
            B.E. in Computer Engineering (2023–2027) 
            Thapar Institute of Engineering and Technology, Patiala
          </p>
          <br />
          <p className={textStyle}>
            Schooling: D.A.V. Centenary Public School, Rohtak (2009–2023)
          </p>
        </div>

        {/* Technical Skills */}
        <div className={cardStyle}>
          <h3 className={titleStyle}>
            <FaLaptopCode className="text-purple-400" /> Technical Skills
          </h3>
          <p className={textStyle}>
            <span className="font-semibold text-white">Languages:</span> C, C++, HTML, CSS, JavaScript, Python <br />
            <span className="font-semibold text-white">Frameworks:</span> React, Express, Node.js, Tailwind CSS <br />
            <span className="font-semibold text-white">Databases:</span> MongoDB, MySQL, PostgreSQL <br />
            <span className="font-semibold text-white">Tools:</span> Postman, VS Code, Git, GitHub
          </p>
        </div>

        {/* Hobbies */}
        <div className={cardStyle}>
          <h3 className={titleStyle}>
            <FaMusic className="text-pink-400" /> Hobbies
          </h3>
          <p className={textStyle}>
            Reading Tech books
            <br/><br/>
            Discovering music
            <br/><br/>
            Civic Engagement Study
            </p>
        </div>
      </div>

      {/* Full-width Experience */}
      <div className={cardStyle}>
  <h3 className={titleStyle}>
    <FaBriefcase className="text-yellow-400" /> Experience
  </h3>

    <div className="mb-4">
    <div className="flex justify-between items-start">
      <span className="font-semibold">Intern @ CreditSea</span>
      <span className="text-sm text-gray-400">Oct 2025 - Present</span>
    </div>
    <p className={textStyle}>Full Stack Developer Intern</p>
  </div>

  {/* Amazon ML Summer School */}
  <div className="mb-4">
    <div className="flex justify-between items-start">
      <span className="font-semibold">Amazon ML Summer School 2025</span>
      <span className="text-sm text-gray-400">Aug 2025</span>
    </div>
    <p className={textStyle}>Selected Participant</p>
  </div>

  {/* BSNL Training */}
  <div>
    <div className="flex justify-between items-start">
      <span className="font-semibold">Summer Industrial Training – BSNL</span>
      <span className="text-sm text-gray-400">Jun 2025</span>
    </div>
    <p className={textStyle}>Trainee – Telecommunications & Networking</p>
    <p className={`${textStyle} text-gray-400`}>Rohtak, Haryana, India</p>
  </div>
</div>

    </div>
    </div>
  );
}
