import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Lock,
  Shield,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-purple-800 via-purple-700 to-purple-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl translate-x-1/4 translate-y-1/4"></div>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-28 flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Banking Made Simple
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl text-purple-100">
            Manage your finances with ease using our modern banking platform.
            Secure, fast, and user-friendly.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Button
              asChild
              size="lg"
              className="bg-white font-bold text-purple-800 hover:bg-purple-100 hover:scale-105 transition-transform shadow-lg"
            >
              <Link href="/register">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white bg-transparent font-bold text-white hover:bg-white/10 hover:scale-105 transition-transform shadow-lg"
            >
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold uppercase tracking-wider">
              Features
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Why Choose SafeXBank?
            </h2>
            <p className="text-lg text-gray-600 dark:text-purple-200 max-w-2xl mx-auto">
              Our modern banking platform offers everything you need to manage
              your finances effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Secure Banking",
                desc: "Bank with confidence knowing your data is protected with industry-leading security.",
              },
              {
                icon: CreditCard,
                title: "Easy Payments",
                desc: "Send money, pay bills, and manage transactions with just a few clicks.",
              },
              {
                icon: Wallet,
                title: "Financial Insights",
                desc: "Get detailed analytics and insights to help you make better financial decisions.",
              },
              {
                icon: Lock,
                title: "Privacy First",
                desc: "Your privacy matters. We never sell your data or share it with third parties.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-xl border border-purple-100 dark:border-purple-800 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-14 w-14 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-5">
                  <feature.icon className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-purple-200">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="text-purple-600 font-semibold uppercase tracking-wider">
                Benefits
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Experience Modern Banking
              </h2>
              <p className="text-lg text-gray-600 dark:text-purple-200 mb-8">
                SafeXBank combines cutting-edge technology with user-friendly
                design to provide you with the best banking experience possible.
              </p>

              <ul className="space-y-5">
                {[
                  "24/7 access to your accounts",
                  "Real-time transaction notifications",
                  "Seamless transfers between accounts",
                  "Automated savings and budgeting tools",
                  "Dedicated customer support",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="mt-10 bg-purple-600 hover:bg-purple-700 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Link href="/register">
                  Open an Account <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-2xl border border-purple-100 dark:border-purple-900">
              <Image
                src="/banking.jpeg"
                alt="Banking App Interface"
                className="w-full h-auto"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-purple-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-purple-100">
            Join thousands of satisfied customers who trust SafeXBank with their
            finances.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-700 font-bold hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/register">Create Account</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white bg-transparent font-bold text-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {[
              {
                title: "SafeXBank",
                links: [
                  { label: "About Us", href: "#" },
                  { label: "Careers", href: "#" },
                  { label: "Press", href: "#" },
                  { label: "Blog", href: "#" },
                ],
              },
              {
                title: "Products",
                links: [
                  { label: "Checking", href: "#" },
                  { label: "Savings", href: "#" },
                  { label: "Credit Cards", href: "#" },
                  { label: "Loans", href: "#" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { label: "Help Center", href: "#" },
                  { label: "FAQs", href: "#" },
                  { label: "Security", href: "#" },
                  { label: "Contact Us", href: "#" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Service", href: "#" },
                  { label: "Cookie Policy", href: "#" },
                  { label: "Licenses", href: "#" },
                ],
              },
            ].map((column, i) => (
              <div key={i}>
                <h3 className="text-lg font-bold mb-4 text-purple-300">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 SafeXBank. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
