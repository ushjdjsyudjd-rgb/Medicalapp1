
import React from 'react';
import { Stethoscope, Activity, Brain, Bone, Thermometer, UserCheck } from 'lucide-react';
import { Service } from '../types';

const SERVICES: Service[] = [
  {
    id: 1,
    title: 'قلب و عروق',
    description: 'چک‌آپ کامل قلب، نوار قلب و اکو با پیشرفته‌ترین دستگاه‌ها.',
    icon: <Activity className="w-8 h-8" />,
    color: 'bg-red-50 text-red-600'
  },
  {
    id: 2,
    title: 'داخلی و گوارش',
    description: 'درمان تخصصی بیماری‌های گوارشی، کبد و غدد درون‌ریز.',
    icon: <Stethoscope className="w-8 h-8" />,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    id: 3,
    title: 'اعصاب و روان',
    description: 'مشاوره و درمان اختلالات خواب، اضطراب و افسردگی.',
    icon: <Brain className="w-8 h-8" />,
    color: 'bg-purple-50 text-purple-600'
  },
  {
    id: 4,
    title: 'ارتوپدی',
    description: 'درمان دردهای مفصلی، شکستگی‌ها و آسیب‌های ورزشی.',
    icon: <Bone className="w-8 h-8" />,
    color: 'bg-orange-50 text-orange-600'
  },
  {
    id: 5,
    title: 'عمومی و اورژانس',
    description: 'ویزیت‌های دوره‌ای، تزریقات و پانسمان در تمام ساعات.',
    icon: <Thermometer className="w-8 h-8" />,
    color: 'bg-green-50 text-green-600'
  },
  {
    id: 6,
    title: 'سلامت خانواده',
    description: 'پایش سلامت مادران، کودکان و سالمندان توسط پزشک خانواده.',
    icon: <UserCheck className="w-8 h-8" />,
    color: 'bg-teal-50 text-teal-600'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">خدمات تخصصی ما</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            ما مجموعه‌ای گسترده از خدمات پزشکی را با بالاترین استانداردهای جهانی به شما ارائه می‌دهیم.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <button className="mt-6 text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                بیشتر بدانید
                <span className="text-xl">←</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
