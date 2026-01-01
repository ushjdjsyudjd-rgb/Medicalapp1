
import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitLeadToSheet } from '../services/sheetService';

const LeadForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setStatus('loading');
    const success = await submitLeadToSheet({ name, phone });

    if (success) {
      setStatus('success');
      setName('');
      setPhone('');
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="appointment" className="py-20 bg-blue-50">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-blue-600 p-12 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">مشاوره رایگان</h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              برای دریافت مشاوره اولیه و رزرو نوبت، کافیست مشخصات خود را وارد کنید. کارشناسان ما در کوتاه‌ترین زمان ممکن با شما تماس خواهند گرفت.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-300" />
                <span>تماس کمتر از ۳۰ دقیقه</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-300" />
                <span>مشاوره کاملاً تخصصی</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-300" />
                <span>بررسی اولیه پرونده سلامت</span>
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/2 p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">نام و نام خانوادگی</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="مثلاً: علی رضایی"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-1000 mb-2">شماره تماس</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="مثلاً: ۰۹۱۲۳۴۵۶۷۸۹"
                  dir="ltr"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-right"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-3 ${
                  status === 'loading' ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    در حال ارسال...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    درخواست نوبت و مشاوره
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5" />
                  اطلاعات شما با موفقیت ثبت شد. به زودی با شما تماس می‌گیریم.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-3">
                  <AlertCircle className="w-5 h-5" />
                  متاسفانه خطایی رخ داد. لطفاً دوباره تلاش کنید.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
