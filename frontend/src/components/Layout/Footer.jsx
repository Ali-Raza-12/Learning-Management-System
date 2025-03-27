import { Link } from 'react-router-dom';
import { 
  BookOpen,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  GraduationCap
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'FAQ', href: '/faq' },
  ];

  const programs = [
    { name: 'Web Development', href: '/category/web-development' },
    { name: 'Data Science', href: '/category/data-science' },
    { name: 'Business Analytics', href: '/category/business' },
    { name: 'UX/UI Design', href: '/category/design' },
    { name: 'Digital Marketing', href: '/category/marketing' },
    { name: 'Mobile Development', href: '/category/mobile' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <BookOpen className="h-9 w-9 text-blue-500" />
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                Byway
              </span>
            </Link>
            <p className="text-lg leading-relaxed">
              Empowering learners worldwide through accessible, engaging, and high-quality online education. Join millions of students transforming their lives through learning.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full hover:bg-gray-800 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-7">Quick Links</h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="flex items-center group text-lg hover:text-blue-400 transition-colors"
                  >
                    <ChevronRight className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Programs */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-7">Popular Programs</h3>
            <ul className="space-y-3.5">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    to={program.href}
                    className="flex items-center group text-lg hover:text-blue-400 transition-colors"
                  >
                    <GraduationCap className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-7">Contact Us</h3>
            <ul className="space-y-5">
              <li>
                <a
                  href="mailto:contact@byway.edu"
                  className="flex items-center text-lg hover:text-blue-400 transition-colors"
                >
                  <Mail className="h-6 w-6 mr-3 flex-shrink-0" />
                  contact@byway.edu
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center text-lg hover:text-blue-400 transition-colors"
                >
                  <Phone className="h-6 w-6 mr-3 flex-shrink-0" />
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg">
                  123 Learning Street,<br />
                  San Francisco, CA 94105<br />
                  United States
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-lg">
              © {currentYear} Byway. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-base hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-lg hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-lg hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;