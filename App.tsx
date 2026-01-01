
import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import LeadForm from './components/LeadForm';
import AIAssistant from './components/AIAssistant';
import { Phone, Mail, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <div className="w-6 h-6 text-white border-2 border-white rounded-full flex items-center justify-center font-bold">H</div>
            </div>
            <span className="text-xl font-bold text-gray-800">هلث‌بریج</span>
          </div>
          <div className="hidden md:flex gap-8 text-gray-600 font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">صفحه اصلی</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">خدمات</a>
            <a href="#appointment" className="hover:text-blue-600 transition-colors">مشاوره</a>
            <a href="#" className="hover:text-blue-600 transition-colors">درباره ما</a>
          </div>
          <a href="tel:02112345678" className="bg-blue-50 text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition-all flex items-center gap-2">
            <Phone className="w-4 h-4" />
            ۰۲۱-۱۲۳۴۵۶۷۸
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        
        {/* Stats Section */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">+۱۵,۰۰۰</div>
              <div className="text-gray-400">بیمار بهبود یافته</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">+۲۰</div>
              <div className="text-gray-400">پزشک متخصص</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">+۱۰</div>
              <div className="text-gray-400">سال تجربه</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">۴.۹</div>
              <div className="text-gray-400">امتیاز رضایت بماران</div>
            </div>
          </div>
        </section>

        <Services />
        
        {/* Testimonial Placeholder */}
        <section className="py-20 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">آنچه مراجعین می‌گویند</h2>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
              {[1, 2, 3].map((i) => (
                <div key={i} className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-gray-100 snap-center">
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "واقعا از خدمات و برخورد پرسنل راضی بودم. محیط بسیار تمیز و پروتکل‌های بهداشتی به خوبی رعایت می‌شد."
                  </p>
                  <div className="flex items-center gap-4">
                    <img src={`https://picsum.photos/seed/user${i}/50/50`} className="rounded-full" alt="User" />
                    <div>
                      <div className="font-bold">مراجعه کننده شماره {i}</div>
                      <div className="text-sm text-gray-500">یک ماه پیش</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LeadForm />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-gray-800 pb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <div className="w-5 h-5 text-white border border-white rounded-full flex items-center justify-center font-bold text-xs">H</div>
                </div>
                <span className="text-xl font-bold text-white">هلث‌بریج</span>
              </div>
              <p className="leading-relaxed">
                مطب هلث‌بریج پیشرو در ارائه خدمات پزشکی نوین با بهره‌گیری از تکنولوژی‌های روز دنیا و کادری دلسوز.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-6">اطلاعات تماس</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>تهران، خیابان ولیعصر، نرسیده به میدان ونک، مجتمع پزشکی سلامت</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>info@healthbridge.ir</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-6">ما را دنبال کنید</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
              <p className="mt-6 text-sm">
                ساعات کاری: شنبه تا پنجشنبه از ساعت ۹ صبح الی ۹ شب
              </p>
            </div>
          </div>
          
          <div className="text-center text-sm">
            تمامی حقوق مادی و معنوی برای مطب هلث‌بریج محفوظ است. طراحی شده با ❤️
          </div>
        </div>
      </footer>

      {/* AI Assistant FAB */}
      <AIAssistant />
    </div>
  );
};

export default App;
