<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مطب پزشکی هلث‌بریج</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;400;700&display=swap');
        body { font-family: 'Vazirmatn', sans-serif; }
        .service-card:hover { transform: translateY(-10px); }
    </style>
</head>
<body class="bg-gray-50 text-gray-900">

    <nav class="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <div class="flex items-center gap-2">
                <div class="bg-blue-600 p-2 rounded-lg">
                    <div class="w-6 h-6 text-white border-2 border-white rounded-full flex items-center justify-center font-bold">H</div>
                </div>
                <span class="text-xl font-bold text-gray-800">هلث‌بریج</span>
            </div>
            <div class="hidden md:flex gap-8 text-gray-600 font-medium">
                <a href="#" class="hover:text-blue-600">صفحه اصلی</a>
                <a href="#services" class="hover:text-blue-600">خدمات</a>
                <a href="#contact" class="hover:text-blue-600">ارتباط با ما</a>
            </div>
            <a href="tel:02112345678" class="bg-blue-50 text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-100 flex items-center gap-2">
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
            </a>
        </div>
    </nav>

    <section class="py-20 bg-gradient-to-b from-blue-50 to-white text-center">
        <div class="container mx-auto px-4">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">پیشرو در خدمات پزشکی نوین</h1>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-10">تجربه‌ای متفاوت از مراقبت‌های بهداشتی با بهره‌گیری از تکنولوژی‌های روز دنیا و کادری دلسوز.</p>
            <div class="flex justify-center gap-4">
                <a href="#services" class="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition">مشاهده خدمات</a>
                <a href="#contact" class="bg-white border border-gray-200 px-8 py-3 rounded-full font-bold hover:shadow-lg transition">دریافت نوبت</a>
            </div>
        </div>
    </section>

    <section class="py-12 bg-gray-900 text-white">
        <div class="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
                <div class="text-3xl font-bold text-blue-400 mb-2">+۱۵,۰۰۰</div>
                <div class="text-gray-400">بیمار بهبود یافته</div>
            </div>
            <div>
                <div class="text-3xl font-bold text-blue-400 mb-2">+۲۰</div>
                <div class="text-gray-400">پزشک متخصص</div>
            </div>
            <div>
                <div class="text-3xl font-bold text-blue-400 mb-2">+۱۰</div>
                <div class="text-gray-400">سال تجربه</div>
            </div>
            <div>
                <div class="text-3xl font-bold text-blue-400 mb-2">۴.۹</div>
                <div class="text-gray-400">امتیاز رضایت</div>
            </div>
        </div>
    </section>

    <section id="services" class="py-20 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold mb-4">خدمات تخصصی ما</h2>
                <div class="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all bg-white service-card">
                    <div class="w-16 h-16 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 text-2xl">❤️</div>
                    <h3 class="text-xl font-bold mb-3">قلب و عروق</h3>
                    <p class="text-gray-600">چک‌آپ کامل قلب، نوار قلب و اکو با پیشرفته‌ترین دستگاه‌ها.</p>
                </div>
                <div class="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all bg-white service-card">
                    <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 text-2xl">🩺</div>
                    <h3 class="text-xl font-bold mb-3">داخلی و گوارش</h3>
                    <p class="text-gray-600">درمان تخصصی بیماری‌های گوارشی، کبد و غدد درون‌ریز.</p>
                </div>
                <div class="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all bg-white service-card">
                    <div class="w-16 h-16 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 text-2xl">🧠</div>
                    <h3 class="text-xl font-bold mb-3">اعصاب و روان</h3>
                    <p class="text-gray-600">مشاوره و درمان اختلالات خواب، اضطراب و افسردگی.</p>
                </div>
            </div>
        </div>
    </section>

    <footer id="contact" class="bg-gray-900 text-gray-400 py-16">
        <div class="container mx-auto px-4 text-center">
            <h3 class="text-white font-bold text-2xl mb-6 text-center">اطلاعات تماس</h3>
            <p class="mb-4">تهران، خیابان ولیعصر، نرسیده به میدان ونک، مجتمع پزشکی سلامت</p>
            <p class="mb-8 font-bold text-white text-xl">تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
            <div class="text-sm border-t border-gray-800 pt-8">
                تمامی حقوق مادی و معنوی برای مطب هلث‌بریج محفوظ است.
            </div>
        </div>
    </footer>

</body>
</html>
