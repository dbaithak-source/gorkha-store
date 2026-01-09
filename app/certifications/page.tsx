'use client';

import { Mail, CheckCircle, Award } from 'lucide-react';

const CertificationsPage = () => {
  const certifications = [
    {
      title: 'ISO 22000:2018 - Food Safety Management',
      description: 'Ensures all products meet international food safety standards with rigorous testing and quality control protocols.',
      icon: CheckCircle,
    },
    {
      title: 'Organic Certification',
      description: 'Certified organic by international bodies. All products are grown without synthetic pesticides or fertilizers, ensuring pure, natural quality.',
      icon: Award,
    },
    {
      title: 'Fair Trade Certified',
      description: 'Committed to ethical sourcing practices that benefit farmers and sustainable agriculture across Nepal and the Himalayas.',
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Certifications & Quality Assurance</h1>
          <p className="text-lg text-teal-100">Gorkha Jaibik is committed to the highest standards of quality, purity, and ethical sourcing.</p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-teal-500"
                >
                  <IconComponent className="w-12 h-12 text-teal-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.title}</h3>
                  <p className="text-gray-700">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="bg-teal-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Quality Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Product Testing</h3>
              <p className="text-gray-700 mb-4">
                Every batch of our products undergoes rigorous third-party laboratory testing to ensure purity, potency, and safety. We test for heavy metals, microbial contamination, and pesticide residues.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainable Sourcing</h3>
              <p className="text-gray-700 mb-4">
                We work directly with farmers in the Himalayan regions to ensure ethical practices, fair compensation, and sustainable agricultural methods that protect the environment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cold-Chain Storage</h3>
              <p className="text-gray-700 mb-4">
                Products are stored in temperature-controlled facilities to maintain optimal freshness and potency from production to delivery to your doorstep.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transparency</h3>
              <p className="text-gray-700 mb-4">
                We provide full traceability for all products, including source information, testing results, and batch numbers, so you know exactly what you're getting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions About Our Certifications?</h2>
          <p className="text-gray-700 mb-8">We're happy to provide detailed information about our testing procedures, sourcing, and certifications.</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage;
