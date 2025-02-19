import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about"><a className="text-gray-600 hover:text-primary">About Us</a></Link></li>
            <li><Link href="/case-studies"><a className="text-gray-600 hover:text-primary">Case Studies</a></Link></li>
            <li><Link href="/contact"><a className="text-gray-600 hover:text-primary">Contact</a></Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-3">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-primary">Custom Development</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary">Web Development</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary">Mobile Development</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Connect</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-primary">LinkedIn</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary">Twitter</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primary">GitHub</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <address className="text-gray-600 not-italic">
            <p>123 Tech Street</p>
            <p>Silicon Valley, CA 94025</p>
            <p className="mt-2">contact@orientsoft.com</p>
            <p>+1 (555) 123-4567</p>
          </address>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-6 text-center text-gray-600">
          <p>&copy; 2024 OrientSoft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
