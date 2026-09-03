import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'سياسة الخصوصية — سوالف',
};

const sections = [
  {
    n: '١',
    title: 'البيانات التي نجمعها',
    list: [
      '<strong>بيانات حساب Google:</strong> عند التسجيل عبر Google نحصل على اسمك وبريدك الإلكتروني وصورة ملفك الشخصي.',
      '<strong>بيانات الملف الشخصي:</strong> الاسم الظاهر، العمر، الجنس، والدولة التي تدخلها عند التسجيل.',
      '<strong>محتوى المحادثات:</strong> الرسائل النصية والصوتية والصور والفيديوهات التي ترسلها، بما فيها الوسائط المؤقتة (تُعلَّم كمُشاهدة وتُخفى بعد المشاهدة).',
      '<strong>بيانات الاستخدام:</strong> معلومات تقنية أساسية لتشغيل الخدمة مثل حالة الاتصال وآخر ظهور.',
    ],
  },
  {
    n: '٢',
    title: 'كيف نستخدم البيانات',
    list: [
      'تشغيل التطابق العشوائي والمحادثات والمكالمات.',
      'عرض ملفك الشخصي للطرف الآخر عند التطابق.',
      'تحسين التجربة ومنع إساءة الاستخدام ومعالجة البلاغات.',
    ],
  },
  {
    n: '٣',
    title: 'مشاركة البيانات',
    body: 'لا نبيع بياناتك ولا نشاركها مع أي طرف ثالث لأغراض تسويقية. تُستخدم خدمات خارجية لتشغيل التطبيق فقط: تسجيل الدخول عبر Google، ومكالمات الصوت، وخدمات الإعلانات والمدفوعات من Google Play إن وُجدت.',
  },
  {
    n: '٤',
    title: 'التخزين والأمان',
    body: 'تُخزَّن البيانات على خوادمنا وتُنقل عبر اتصالات مشفّرة (HTTPS). نتخذ إجراءات تقنية معقولة لحماية بياناتك من الوصول غير المصرح به.',
  },
  {
    n: '٥',
    title: 'حذف البيانات',
    body: 'يمكنك طلب حذف حسابك وجميع بياناتك في أي وقت بمراسلتنا على البريد أدناه، وسنقوم بالحذف خلال ٣٠ يومًا كحد أقصى.',
  },
  {
    n: '٦',
    title: 'الفئة العمرية',
    body: 'التطبيق مخصص للبالغين (١٨ سنة فأكثر) ولا نجمع بيانات الأطفال عن قصد.',
  },
  {
    n: '٧',
    title: 'التغييرات على هذه السياسة',
    body: 'قد نحدّث هذه السياسة من وقت لآخر، وسننشر أي تغيير في هذه الصفحة مع تحديث التاريخ أعلاه.',
  },
];

export default function Privacy() {
  return (
    <>
      <Nav />
      <div className="doc-hero">
        <h1>
          سياسة <span className="grad-text">الخصوصية</span>
        </h1>
        <div className="updated">آخر تحديث: ٤ يوليو ٢٠٢٦</div>
      </div>
      <div className="container">
        <div className="doc">
          <p>
            تطبيق «سوالف - شات ودردشه مع مجهول» («سوالف») يحترم خصوصيتك. توضح
            هذه السياسة البيانات التي نجمعها وكيف نستخدمها ونحميها عند استخدامك
            للتطبيق.
          </p>
          <p>
            <strong>اسم التطبيق:</strong> سوالف - شات ودردشه مع مجهول
            <br />
            <strong>المطوّر:</strong> Ala&apos; Jamal Mahmoud Albayed
            <br />
            <strong>البريد:</strong>{' '}
            <a href="mailto:alaa.albayed2016@gmail.com">
              alaa.albayed2016@gmail.com
            </a>
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
                    <li
                      key={item}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
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
              لأي استفسار حول الخصوصية:{' '}
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
