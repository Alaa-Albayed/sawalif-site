import Link from 'next/link';

const features = [
  {
    icon: '🎲',
    title: 'تطابق عشوائي ذكي',
    body: 'اضغط ابدأ ويطلع لك شخص جديد كل مرة — والطرفان لازم يوافقان خلال ١٠ ثوانٍ.',
  },
  {
    icon: '🎙️',
    title: 'رسائل صوتية ومكالمات',
    body: 'سولف كتابة، أرسل تسجيلات صوتية، أو تكلم مباشرة بمكالمة صوتية.',
  },
  {
    icon: '🔥',
    title: 'صور تختفي',
    body: 'أرسل صورًا وفيديوهات بمشاهدة واحدة أو مؤقت ٣ ثوانٍ ثم تختفي للأبد.',
  },
  {
    icon: '🌍',
    title: 'كل الدول',
    body: 'فلترة حسب الدولة والنوع باستخدام الجواهر، وقائمة دول كاملة بالأعلام.',
  },
  {
    icon: '🤝',
    title: 'طلبات صداقة',
    body: 'عجبتك السالفة؟ أرسل طلب صداقة وخلوا التواصل مستمر.',
  },
  {
    icon: '🌙',
    title: 'وضع داكن',
    body: 'تصميم عصري مريح للعين بالوضعين الفاتح والداكن.',
  },
];

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="container">
          <div className="logo">💬</div>
          <h1>سوالف</h1>
          <p className="tagline">
            تعرف على أصدقاء جدد من كل مكان — سوالف كتابية ومكالمات صوتية ورسائل
            وصور تختفي، بكل خصوصية وأمان.
          </p>
          <a className="btn btn-light" href="#download">
            حمّل التطبيق
          </a>
        </div>
      </header>

      <section>
        <div className="container">
          <h2>وش يميز سوالف؟</h2>
          <div className="features">
            {features.map((feature) => (
              <div className="card" key={feature.title}>
                <div className="icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="download">
        <div className="container">
          <div className="cta">
            <h2>حمّل سوالف الآن</h2>
            <a className="btn btn-gradient" href="#">
              قريبًا على Google Play
            </a>
            <span className="soon">
              التطبيق قيد المراجعة على المتجر — الرابط سيُحدَّث فور صدوره.
            </span>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div>
            <Link href="/privacy/">سياسة الخصوصية</Link>·
            <Link href="/terms/">الشروط والأحكام</Link>·
            <a href="mailto:alaa.albayed2016@gmail.com">تواصل معنا</a>
          </div>
          <div style={{ marginTop: 8 }}>© 2026 سوالف — جميع الحقوق محفوظة</div>
        </div>
      </footer>
    </>
  );
}
