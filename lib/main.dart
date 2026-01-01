import 'package:flutter/material.dart';

void main() {
  runApp(const HealthBridgeApp());
}

class HealthBridgeApp extends StatelessWidget {
  const HealthBridgeApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'مطب پزشکی هلث‌بریج',
      locale: const Locale('fa', 'IR'),
      theme: ThemeData(
        fontFamily: 'Tahoma', // برای پشتیبانی بهتر از فارسی
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
        useMaterial3: true,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('هلث‌بریج', style: TextStyle(fontWeight: FontWeight.bold)),
        centerTitle: false,
        actions: [
          TextButton.icon(
            onPressed: () {},
            icon: const Icon(Icons.phone, size: 18),
            label: const Text('۰۲۱-۱۲۳۴۵۶۷۸'), // برگرفته از اطلاعات تماس
          )
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            _buildHeroSection(),
            _buildStatsSection(),
            _buildServicesSection(),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(Icons.chat_bubble), // نماد دستیار هوشمند AI
      ),
    );
  }

  Widget _buildHeroSection() {
    return Container(
      padding: const EdgeInsets.all(24),
      width: double.infinity,
      color: Colors.blue.shade50,
      child: const Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('پیشرو در خدمات پزشکی نوین', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: Colors.blue)),
          SizedBox(height: 12),
          Text('تجربه‌ای متفاوت از مراقبت‌های بهداشتی با بهره‌گیری از تکنولوژی روز دنیا.', style: TextStyle(fontSize: 16)),
        ],
      ),
    );
  }

  Widget _buildStatsSection() {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 20),
      color: Colors.grey.shade900,
      child: const Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          _statItem('+۱۵,۰۰۰', 'بیمار'), // آمار از فایل App.tsx
          _statItem('+۲۰', 'پزشک'),
          _statItem('۴.۹', 'رضایت'),
        ],
      ),
    );
  }

  static Widget _statItem(String value, String label) {
    return Column(
      children: [
        Text(value, style: const TextStyle(color: Colors.blueAccent, fontSize: 20, fontWeight: FontWeight.bold)),
        Text(label, style: const TextStyle(color: Colors.white70, fontSize: 12)),
      ],
    );
  }

  Widget _buildServicesSection() {
    // لیست خدمات استخراج شده از Services.tsx
    final services = [
      {'title': 'قلب و عروق', 'icon': Icons.monitor_heart, 'color': Colors.red},
      {'title': 'داخلی و گوارش', 'icon': Icons.medical_services, 'color': Colors.blue},
      {'title': 'اعصاب و روان', 'icon': Icons.psychology, 'color': Colors.purple},
      {'title': 'ارتوپدی', 'icon': Icons.accessibility, 'color': Colors.orange},
    ];

    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text('خدمات تخصصی ما', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
          const SizedBox(height: 16),
          GridView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 2,
              mainAxisSpacing: 10,
              crossAxisSpacing: 10,
            ),
            itemCount: services.length,
            itemBuilder: (context, index) {
              return Card(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(services[index]['icon'] as IconData, size: 40, color: services[index]['color'] as Color),
                    const SizedBox(height: 8),
                    Text(services[index]['title'] as String, style: const TextStyle(fontWeight: FontWeight.bold)),
                  ],
                ),
              );
            },
          ),
        ],
      ),
    );
  }
}
