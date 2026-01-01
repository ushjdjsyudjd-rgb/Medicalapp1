
import React from 'react';
import { HeartPulse, ShieldCheck, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-blue-600 py-20 px-4 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-right">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            سلامتی شما، <span className="text-blue-200">اولویت اصلی ماست</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-50">
            مطب فوق تخصصی ما با کادری مجرب و تجهیزات پیشرفته، آماده ارائه بهترین خدمات درمانی در محیطی آرام و بهداشتی است.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#appointment" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg">
              رزرو نوبت آنلاین
            </a>
            <a href="#services" className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all">
              مشاهده خدمات
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-8 h-8 mb-2 text-blue-200" />
              <span className="text-sm">تضمین کیفیت</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 mb-2 text-blue-200" />
              <span className="text-sm">پاسخگویی ۲۴ ساعته</span>
            </div>
            <div className="flex flex-col items-center">
              <HeartPulse className="w-8 h-8 mb-2 text-blue-200" />
              <span className="text-sm">تجهیزات مدرن</span>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <img 
            src="https://picsum.photos/seed/doctor/600/400" 
            alt="Doctor" 
            className="rounded-2xl shadow-2xl border-4 border-white/20 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
