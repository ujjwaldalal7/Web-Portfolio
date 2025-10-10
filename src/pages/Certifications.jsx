import { useState } from "react";

const certificates = [
  {
    title: "Amazon ML Summer School 2025",
    url: "https://raw.githubusercontent.com/ujjwaldalal7/Certificates/main/Amazon%20ML%20School.jpeg",
    type: "image",
  },
  {
    title: "Flipkart GRiD 7.0",
    url: "https://raw.githubusercontent.com/ujjwaldalal7/Certificates/main/FKT%20GRID%207.0-1.png",
    type: "image",
  },
  {
    title: "Problem Solving (Intermediate) - HackerRank",
    url: "https://raw.githubusercontent.com/ujjwaldalal7/Certificates/main/problem_solving_intermediate%20certificate.png",
    type: "image",
  },
  {
    title: "SQL (Intermediate) - HackerRank",
    url: "https://raw.githubusercontent.com/ujjwaldalal7/Certificates/main/sql_intermediate%20certificate.png",
    type: "image",
  },
  {
    title: "BSNL Summer Industry Training",
    url: "https://raw.githubusercontent.com/ujjwaldalal7/Certificates/main/BSNL%20Trainee.jpg",
    type: "image",
  },
  {
    title: "Xebia Frontend Module-1",
    url: "https://raw.githubusercontent.com/ujjwaldalal7/Certificates/main/Xebia%20Frontend%20Module1-1.png",
    type: "image",
  },
  {
    title: "Xebia Frontend Module-3",
    url: "https://raw.githubusercontent.com/ujjwaldalal7/Certificates/main/Xebia%20Frontend%20Module3-1.png",
    type: "image",
  },
  {
    title: "Xebia MERN Auth Bootcamp",
    url: "https://raw.githubusercontent.com/ujjwaldalal7/Certificates/main/Xebia%20Bootcamp-1.png",
    type: "image",
  },
  {
    title: "Scaler Reactjs Course",
    url: "https://raw.githubusercontent.com/ujjwaldalal7/Certificates/main/Scaler%20Reactjs.png",
    type: "image",
  }
];

export default function Certifications() {
  const [preview, setPreview] = useState(null);

  const handlePreview = (cert) => setPreview(cert);
  const handleClose = () => setPreview(null);

  return (
    <section
      id="certifications"
      className="min-h-screen py-16 px-4 bg-transparent flex flex-col items-center"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
        <span className="text-cyan-400">Certifications</span>
      </h2>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer flex flex-col items-center p-5"
            onClick={() => handlePreview(cert)}
          >
            <div className="w-full h-40 flex items-center justify-center mb-4 bg-white/10 rounded-lg overflow-hidden">
              {cert.type === "image" ? (
                <img
                  src={cert.url}
                  alt={cert.title}
                  className="max-h-36 max-w-full object-contain rounded-md"
                />
              ) : (
                <embed
                  src={cert.url}
                  type="application/pdf"
                  className="w-full h-36 rounded-md bg-white"
                />
              )}
            </div>
            <div className="font-semibold text-white text-center">{cert.title}</div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {preview && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80"
          onClick={handleClose}
        >
          <div className="mb-4 text-cyan-400 font-bold text-xl">{preview.title}</div>
          <div
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 shadow-2xl border border-gray-700 max-w-[90vw] max-h-[80vh] flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            {preview.type === "image" ? (
              <img
                src={preview.url}
                alt={preview.title}
                className="max-w-[80vw] max-h-[70vh] rounded-lg object-contain"
              />
            ) : (
              <embed
                src={preview.url}
                type="application/pdf"
                width="800px"
                height="600px"
                className="max-w-[80vw] max-h-[70vh] rounded-lg bg-white"
              />
            )}
          </div>
          <button
            onClick={handleClose}
            className="mt-8 px-6 py-2 rounded-full bg-cyan-400 text-gray-900 font-bold shadow hover:bg-cyan-300 transition"
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
}