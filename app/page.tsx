import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

/** رابط المتجر — مكان واحد يُعدَّل منه في كل الصفحة. */
const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.sawalif.sawalif_app';

/** متجر هواوي — لأجهزة أندرويد بلا خدمات Google. */
const APPGALLERY_URL = 'https://appgallery.huawei.com/app/C118844637';

const tiles = [
  {
    icon: '🎲',
    title: 'تطابق عشوائي ذكي',
    body: 'اضغط ابدأ ويطلع لك شخص جديد كل مرة — والطرفان لازم يوافقان خلال ١٠ ثوانٍ وإلا ننتقل لغيره.',
    wide: true,
  },
  {
    icon: '🔥',
    title: 'صور وفيديو تختفي',
    body: 'مشاهدة واحدة أو مؤقت ٣، ٢، ١… ثم تختفي للأبد.',
  },
  {
    icon: '🎙️',
    title: 'رسائل صوتية',
    body: 'سجّل بضغطة، احذف أو أرسل، واسمعها داخل المحادثة.',
  },
  {
    icon: '📞',
    title: 'مكالمات صوتية',
    body: 'إذا حسيت بالراحة، حوّل السالفة لمكالمة صوتية مباشرة.',
  },
  {
    icon: '🌍',
    title: 'كل الدول بأعلامها',
    body: 'فلترة حسب الدولة والنوع باستخدام الجواهر — ١٩٥+ دولة.',
  },
  {
    icon: '🤝',
    title: 'طلبات صداقة',
    body: 'عجبتك السالفة؟ أرسل طلب صداقة وخلّوا التواصل مستمر بدل ما تضيعون.',
    wide: true,
  },
];

const steps = [
  {
    title: 'سجّل بحساب Google',
    body: 'ضغطة واحدة وتدخل — بعدها عرّفنا عليك: اسمك، عمرك، جنسك، ودولتك.',
  },
  {
    title: 'اضغط ابدأ',
    body: 'نبحث لك عن أفضل تطابق، وإذا وافقتوا الاثنين خلال ١٠ ثوانٍ تبدأ السالفة.',
  },
  {
    title: 'سولفوا براحتكم',
    body: 'كتابة، صوت، صور تختفي، أو مكالمة — وإذا تفاهمتوا صيروا أصدقاء.',
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <header className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">
              <span className="dot" />
              آلاف السوالف تبدأ كل يوم
            </span>
            <h1>
              سوالف جديدة،
              <br />
              <span className="grad-text">أصدقاء جدد</span> كل يوم
            </h1>
            <p className="lead">
              تطبيق عربي للتعارف العشوائي — سوالف كتابية، رسائل صوتية، صور
              تختفي، ومكالمات. كل شيء بخصوصية وبموافقة الطرفين.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#download">
                حمّل سوالف مجانًا
              </a>
              <a className="btn btn-ghost" href="#how">
                كيف يشتغل؟
              </a>
            </div>
          </div>

          <div className="phone-wrap">
            <div className="phone">
              <div className="screen">
                <div className="screen-top">
                  <span className="avatar">ن</span>
                  <div>
                    <div className="peer-name">نورة</div>
                    <div className="peer-status">متصلة الآن</div>
                  </div>
                </div>
                <div className="screen-body">
                  <div className="bubble them">هلا! من وين أنت؟ 👋</div>
                  <div className="bubble me">هلا والله، من عمّان. وأنتِ؟</div>
                  <div className="bubble them">
                    <span className="voice-line">
                      ▶
                      <span className="voice-bars">
                        <i /><i /><i /><i /><i /><i />
                      </span>
                      0:07
                    </span>
                  </div>
                  <div className="bubble me timer">
                    <span className="flame">🔥</span> صورة — مشاهدة واحدة
                  </div>
                  <div className="bubble them">😂😂 صارت سالفة</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container stats">
        <div className="stats-inner">
          <div className="stat">
            <b>١٠ ثوانٍ</b>
            <span>لقبول التطابق من الطرفين</span>
          </div>
          <div className="stat">
            <b>+١٩٥</b>
            <span>دولة بأعلامها في الفلاتر</span>
          </div>
          <div className="stat">
            <b>١٠٠٪</b>
            <span>مجاني — والجواهر للمميزات الإضافية</span>
          </div>
        </div>
      </div>

      <section id="features">
        <div className="container">
          <div className="sec-head">
            <h2>
              كل اللي تحتاجه <span className="grad-text">لسالفة ممتعة</span>
            </h2>
            <p>مصمم من أول ضغطة ليكون سريعًا وآمنًا وممتعًا.</p>
          </div>
          <div className="bento">
            {tiles.map((tile) => (
              <div
                className={tile.wide ? 'tile wide' : 'tile'}
                key={tile.title}
              >
                <div className="chip">{tile.icon}</div>
                <h3>{tile.title}</h3>
                <p>{tile.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how">
        <div className="container">
          <div className="sec-head">
            <h2>
              ثلاث خطوات <span className="grad-text">وتبدأ السالفة</span>
            </h2>
          </div>
          <div className="steps">
            {steps.map((step, index) => (
              <div className="step" key={step.title}>
                <span className="num">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="download">
        <div className="container">
          <div className="cta-panel">
            <h2>
              جاهز تبدأ <span className="grad-text">سالفتك الأولى؟</span>
            </h2>
            <p>حمّل سوالف الآن وتعرف على شخص جديد خلال ثوانٍ.</p>

            <div className="store-row">
              <a
                className="store-btn"
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#EA4335"
                    d="M3.6 1.8a1.6 1.6 0 0 0-.5 1.2v18a1.6 1.6 0 0 0 .5 1.2l.1.1L13.8 12v-.2z"
                  />
                  <path fill="#FBBC04" d="M17.2 15.4 13.8 12v-.2l3.4-3.4.1.1 4 2.3c1.2.6 1.2 1.8 0 2.5z" />
                  <path fill="#4285F4" d="m17.3 15.5-3.5-3.5L3.6 22.2c.4.4 1 .5 1.7.1z" />
                  <path fill="#34A853" d="M17.3 8.5 5.3 1.7C4.6 1.3 4 1.4 3.6 1.8L13.8 12z" />
                </svg>
                <span>
                  <small>حمّله من</small>
                  <strong>Google Play</strong>
                </span>
              </a>

              <a
                className="store-btn"
                href={APPGALLERY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" fill="#C7000B" />
                  <path
                    fill="#fff"
                    d="M12 6.4 16.9 17h-2.3l-.9-2.1H10.3L9.4 17H7.1zm0 3.9-1.1 2.7h2.2z"
                  />
                </svg>
                <span>
                  <small>حمّله من</small>
                  <strong>AppGallery</strong>
                </span>
              </a>

              {/* قريبًا: يُستبدل بالرابط فور قبول التطبيق على App Store */}
              <span className="store-btn is-soon" aria-disabled="true">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.8.8-3.6 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7 1.9-1 2.6-2c.8-1.2 1.2-2.3 1.2-2.4 0 0-2.2-.9-2.2-3.3M14.2 5.9c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.6.6-1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.2"
                  />
                </svg>
                <span>
                  <small>قريبًا على</small>
                  <strong>App Store</strong>
                </span>
              </span>
            </div>

            <span className="badge-soon">
              متاح الآن على Google Play و AppGallery · نسخة الآيفون قيد التجهيز
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
