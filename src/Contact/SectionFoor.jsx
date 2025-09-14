import { useState } from "react";
import { motion } from "framer-motion";

export default function SectionFoor() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (formData.subject.trim().length === 0)
      newErrors.subject = "Subject is required";
    if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form submitted:", formData);
    setSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // 🔹 هنا ممكن تبعت البيانات لـ API أو EmailJS
  };

  return (
    <section className="bg-neutral-900 w-full flex items-center justify-center p-12">
      <div className=" container grid grid-cols-1 md:grid-cols-2">
        <div className="left flex flex-col w-full text-white gap-7 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <h1 className="text-7xl font-extrabold">Contact</h1>
          <p className="text-4xl ">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }} // يبدأ نازل وشفاف
          animate={{ opacity: 1, y: 0 }} // يطلع لفوق تدريجي
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mx-auto p-6 bg-neutral-900 shadow-xl rounded-2xl"
        >
          {success && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 p-3 text-green-700 bg-green-100 border border-green-300 rounded-lg"
            >
              Your message has been sent successfully ✅
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white">
                  Name
                </label>
                <input 
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1 w-full text-white rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your name"
                />
                {error.name && (
                  <p className="text-red-500 text-sm mt-1">{error.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1 text-white w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="you@example.com"
                />
                {error.email && (
                  <p className="text-red-500 text-sm mt-1">{error.email}</p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-white">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="mt-1 w-full rounded-lg border text-white border-white p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Subject"
              />
              {error.subject && (
                <p className="text-red-500 text-sm mt-1">{error.subject}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-white">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows="5"
                className="mt-1 w-full text-white  rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your message..."
              ></textarea>
              {error.message && (
                <p className="text-red-500 text-sm mt-1">{error.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-center"
            >
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-gray-900 font-semibold rounded-b-2xl shadow-md hover:bg-blue-900 hover:text-white transition cursor-pointer"
              >
                Send Message
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
