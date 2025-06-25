export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">Contact Us</h1>
        <p className="text-lg mb-6 text-gray-300">
          We’d love to hear from you. Reach out to us for consultations, inquiries, or partnerships.
        </p>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-yellow-300 mb-2">📍 Office Location</h2>
          <p className="text-gray-400">
            <strong>Address:</strong><br />
            No 180, Rajiv Gandhi Nagar,<br />
            Madhavaram, Chennai – 600052
          </p>
          <p className="mt-4 text-gray-400">
            <strong>Phone:</strong> +91-7418729305<br />
            <strong>Email:</strong> ssssglobalconsultants@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
