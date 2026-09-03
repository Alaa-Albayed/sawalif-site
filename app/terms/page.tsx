import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'الشروط والأحكام — سوالف',
};

const sections = [
  {
    n: '١',
    title: 'الأهلية',
    body: 'التطبيق مخصص لمن أعمارهم ١٨ سنة فأكثر. إدخال عمر غير صحيح يعرض حسابك للإيقاف.',
  },
  {
    n: '٢',
    title: 'قواعد الاستخدام',
    list: [
      'التعامل باحترام مع الطرف الآخر في جميع المحادثات.',
      'يُمنع إرسال أي محتوى مسيء أو تحرش أو تهديد أو محتوى غير قانوني أو غير لائق.',
      'يُمنع انتحال الشخصيات أو جمع بيانات المستخدمين الآخرين.',
      'يُمنع الإعلانات والرسائل المزعجة (سبام).',
    ],
  },
  {
    n: '٣',
    title: 'البلاغات والإشراف',
    body: 'يمكنك الإبلاغ عن أي مستخدم مسيء من داخل التطبيق. نحتفظ بحق إيقاف أو حذف أي حساب يخالف هذه الشروط دون إشعار مسبق.',
  },
  {
    n: '٤',
    title: 'الجواهر والمشتريات',
    body: '«الجواهر» عملة افتراضية داخل التطبيق تُستخدم لميزات مثل فلاتر البحث، وليس لها أي قيمة نقدية خارج التطبيق ولا يمكن استردادها.',
  },
  {
    n: '٥',
    title: 'المحتوى',
    body: 'أنت مسؤول عن المحتوى الذي ترسله. الوسائط «المؤقتة» تُخفى بعد المشاهدة لكن لا يمكننا منع الطرف الآخر تقنيًا من تصوير الشاشة، فكن حذرًا فيما تشارك.',
  },
  {
    n: '٦',
    title: 'إخلاء المسؤولية',
    body: 'يُقدَّم التطبيق «كما هو» دون أي ضمانات. لا نتحمل مسؤولية أي أضرار ناتجة عن استخدام التطبيق أو تعاملك مع مستخدمين آخرين.',
  },
  {
    n: '٧',
    title: 'التعديلات',
    body: 'قد نعدّل هذه الشروط في أي وقت وننشر النسخة المحدثة في هذه الصفحة.',
  },
];

export default function Terms() {
  return (
    <>
      <Nav />
      <div className="doc-hero">
        <h1>
          الشروط <span className="grad-text">والأحكام</span>
        </h1>
        <div className="updated">آخر تحديث: ٤ يوليو ٢٠٢٦</div>
      </div>
      <div className="container">
        <div className="doc">
          <p>
            باستخدامك تطبيق «سوالف» فأنت توافق على هذه الشروط. إن لم توافق
            عليها فلا تستخدم التطبيق.
          </p>
          {sections.map((section) => (
            <div className="doc-sec" key={section.n}>
              <h2>
                <span className="n">{section.n}</span>
                {section.title}
              </h2>
              {section.body && <p>{section.body}</p>}
              {section.list && (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="doc-sec">
            <h2>
              <span className="n">٨</span>التواصل
            </h2>
            <p>
              لأي استفسار:{' '}
              <a href="mailto:alaa.albayed2016@gmail.com">
                alaa.albayed2016@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
