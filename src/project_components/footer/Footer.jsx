import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import provideIcon from "@/IconProvider/IconProvider";

export function Footer() {
  return (
    <div className="bg-transparent footer-glass text-white dark:text-gray-300">
      <div className=" mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Logo and Quick Links */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-white dark:text-white">
              Company Logo
            </h1>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white dark:text-gray-200">
              Quick Links
            </h3>
            <div className="flex gap-4">
              <div>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="/product-provisioning-services"
                      className="hover:text-white/70 transition-colors"
                    >
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className="hover:text-white/70 transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className="hover:text-white/70 transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="/blog"
                      className="hover:text-white/70 transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industrial-serve"
                      className="hover:text-white/70 transition-colors"
                    >
                      Industrial Serve
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white/70 transition-colors"
                    >
                      Featured Clients
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile App */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white dark:text-gray-200 ">
              Our Contact
            </h3>
            <div className="flex flex-col space-y-3">
              <p className="leading-6">
                Email: <br />
                <span className="font-bold">example@gmail.com</span>
              </p>

              <p className="leading-6">
                LinkedIn <br />
                <span className="font-bold">examplelinkedin.com</span>
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <div>
              <h3 className="text-3xl font-bold text-white dark:text-gray-200">
                Join Our Community
              </h3>
              <p className="text-sm mt-1">
                Receive pricing updates, shopping tips & more!
              </p>
            </div>

            <div className="flex flex-col space-y-2 max-w-full">
              <div className="footer-newsletter-gradient p-4 max-w-4/5 rounded-full flex gap-4">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="border-none focus:border-none shadow-none max-w-64 placeholder:text-blue-950"
                />
                <Button className="footer-signup-btn-gradient max-w-20 rounded-full">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2024 example.com. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Privacy Notice
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
