// src/app/page.js
import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans">
      {/* Tambahkan Teks Nama */}
      <div className="text-center py-4">
        <h2 className="text-2xl font-semibold text-blue-600">My name is Pipit Wulandari</h2>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-green-400 to-green-600 text-white py-8 relative">
        <div className="container mx-auto flex justify-between items-center">
          {/* Teks Header */}
          <div className="text-left">
            <h1 className="text-4xl font-bold">Mental Wellness Center</h1>
            <p className="mt-2 text-lg">Your Mental Health Matters</p>
          </div>
          {/* Gambar Pemilik */}
          <div className="flex items-center">
            <Image
              src="/ner.jpg" // Ganti dengan gambar pemilik
              alt="Owner"
              className="rounded-full h-24 w-24 object-cover border-4 border-white shadow-lg"
              width={96} // Ganti sesuai dengan ukuran yang diinginkan
              height={96} // Ganti sesuai dengan ukuran yang diinginkan
            />
            {/* Ikon Media Sosial */}
            <div className="ml-6 space-x-4 flex">
              <a href="https://www.instagram.com/pipitwulandari_06/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/instagram-icon.jpg"
                  alt="Instagram"
                  className="h-8 w-8"
                  width={32}
                  height={32}
                />
              </a>
              <a href="https://github.com/Pipit3024" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/github-icon.jpg"
                  alt="GitHub"
                  className="h-8 w-8"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-green-700">Welcome to the Mental Wellness Center</h2>
            <p className="mt-4 text-lg text-gray-700">
              We provide essential services to support mental well-being. Visit us for comprehensive mental health support and resources.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 text-center">
            <Image
              src="/doctor.jpg"
              alt="Doctor"
              className="rounded-md shadow-lg w-full h-auto"
              width={500} // Ganti sesuai dengan ukuran yang diinginkan
              height={300} // Ganti sesuai dengan ukuran yang diinginkan
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-green-600">Our Mental Health Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-white shadow-md rounded-md">
              <h3 className="text-xl font-bold text-green-700">Individual Counseling</h3>
              <p className="text-gray-600">Personalized support to help you navigate life's challenges and improve your mental health.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-md">
              <h3 className="text-xl font-bold text-green-700">Group Therapy</h3>
              <p className="text-gray-600">Supportive environment to share experiences and learn from others facing similar issues.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-md">
              <h3 className="text-xl font-bold text-green-700">Mindfulness & Meditation</h3>
              <p className="text-gray-600">Techniques to promote relaxation and mental clarity for overall wellness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-r from-green-100 to-blue-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-green-700">Why Choose Our Center</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-white shadow-md rounded-md">
              <h3 className="text-xl font-bold text-green-700">Qualified Therapists</h3>
              <p className="text-gray-600">Our team consists of licensed mental health professionals.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-md">
              <h3 className="text-xl font-bold text-green-700">Supportive Environment</h3>
              <p className="text-gray-600">A safe space for individuals to express themselves freely.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-md">
              <h3 className="text-xl font-bold text-green-700">Tailored Approaches</h3>
              <p className="text-gray-600">Customized treatment plans to meet your unique needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-green-600">Meet Our Mental Health Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-white shadow-md rounded-md">
              <Image
                src="/doctor1.jpg"
                alt="Dr. Anna Lee"
                className="w-full h-48 object-cover rounded-md"
                width={300} // Ganti sesuai dengan ukuran yang diinginkan
                height={200} // Ganti sesuai dengan ukuran yang diinginkan
              />
              <h3 className="text-xl font-bold mt-4 text-green-700">Dr. Anna Lee, PhD</h3>
              <p className="text-gray-600">Clinical Psychologist</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-md">
              <Image
                src="/doctor2.jpg"
                alt="Dr. Michael Smith"
                className="w-full h-48 object-cover rounded-md"
                width={300} // Ganti sesuai dengan ukuran yang diinginkan
                height={200} // Ganti sesuai dengan ukuran yang diinginkan
              />
              <h3 className="text-xl font-bold mt-4 text-green-700">Dr. Michael Smith, LPC</h3>
              <p className="text-gray-600">Licensed Professional Counselor</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-md">
              <Image
                src="/doctor3.jpg"
                alt="Dr. William Jones Atmadja"
                className="w-full h-48 object-cover rounded-md"
                width={300} // Ganti sesuai dengan ukuran yang diinginkan
                height={200} // Ganti sesuai dengan ukuran yang diinginkan
              />
              <h3 className="text-xl font-bold mt-4 text-green-700">Dr. William Jones Atmadja, MD</h3>
              <p className="text-gray-600">Psychiatrist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Mental Wellness Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
