import React from "react";

const AIContact = () => {
  return (
    <div className="bg-black">
      <section className="py-16 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Left column: Info */}
            <div className="md:col-span-1">
              <h2 className="font-bold mb-3">Contact Us</h2>
              <p className="mb-4">
               If you'd like to know more about our services, or if you're interested in working with us, feel free to reach out. We’d love to discuss how we can help you achieve your business goals.
              </p>

              <p className="mb-2">
                <i className="text-primary bi bi-envelope-fill me-2"></i>
                <a
                  href="mailto:info@kiaantechnology.com"
                  className="text-light no-underline"
                >
                 info@kiaantechnology.com

                </a>
              </p>
              {/* <p className="mb-2">
                <i className="text-primary bi bi-telephone-fill me-2"></i>
                <a href="tel:+15551234567" className="text-light no-underline">
                  +1 (555) 123-4567
                </a>
              </p> */}
              <p className="mb-2">
                
                <a href="http://www.kiaantechnology.com" className="text-light no-underline">
                 kiaantechnology.com
                </a>
              </p>
              {/* <p className="mb-3">
                <i className="text-primary bi bi-geo-alt-fill me-2"></i>
                123 AI Street, Tech City, TC 12345
              </p> */}

              {/* <div className="mt-4">
                <h4>Follow us</h4>
                <a href="#" className="text-primary text-2xl me-3">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-primary text-2xl me-3">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="text-primary text-2xl me-3">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-primary text-2xl">
                  <i className="bi bi-instagram"></i>
                </a>
              </div> */}
            </div>

            {/* Right column: Form */}
            <div className="md:col-span-1">
              <form className="bg-gray-900 p-8 rounded-lg">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control bg-gray-700 text-white border-none p-2 rounded"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control bg-gray-700 text-white border-none p-2 rounded"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label text-gray-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="form-control bg-gray-700 text-white border-none p-2 rounded"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label text-gray-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="form-control bg-gray-700 text-white border-none p-2 rounded"
                    placeholder="Your message…"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn w-full py-2 bg-blue-500 hover:bg-blue-600 rounded text-white"
                >
                  Send Message <i className="bi bi-send ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIContact;
