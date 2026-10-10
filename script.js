(function(){
  'use strict';

  /* ==========================================================
     1. EDIT EVERYTHING HERE  ✏️
     ========================================================== */
  const CONFIG = {
    // 🔐 LOGIN
    login: {
      username: 'TaeTae',
      password: 'mhsnlttn146615'
    },

    herName: 'TaeTae',
    startDate: '2022-02-25T00:00:00',

    // 🎂 HER BIRTHDAY (month 1-12, day 1-31)
    birthday: {
      month: 10,
      day: 14,
      message: 'ကိုကိုရဲ့ကောင်မလေး လင်းသက်သက်နိုင်ရဲ့ မွေ့နေ့ကစပြီး လိုချင်တဲ့ဆုတွေကို ပြည့်ပါစေ အဲ့လိုပြည့်အောင်လည်း ဒီက ကိုကိုထောသျှန်က တခုမကျန်ဖြည့်စည်းပေးမှာမလို့ ကိုကို့ရဲ့ဘေးနားမှာ ပူးမလေးအဖြစ်ဆက်ရှိပေးပါအုံး ကိုကိုချစ်ပေးတာလေးတွေကို ခံပေးပါအုံး အချစ်တွေများကြီးပေးချင်သေးလို့🥺🎂💗'
    },

    // 📸 HERO BACKGROUND PHOTO (set to '' to disable)
    heroPhoto: 'photos/together1.jpg',

    // 📸 DECORATIVE POLAROIDS ON THE LOGIN SCREEN
    // These float in the 4 corners of the login page.
    // Put your images in the "photos" folder and list the paths here.
    // Up to 4 photos will be used.
    loginPhotos: [
      { src: 'photos/cat1.jpg' },
      { src: 'photos/dog1.jpg' },
      { src: 'photos/cat2.jpg' },
      { src: 'photos/cat3.jpg' }
    ],

    // 📸 PHOTO GALLERY
    // caption  = short title shown INSIDE the polaroid frame
    // loveNote = a sweet sentence shown BELOW the polaroid when you open it
    photos: [
      {
        src: 'photos/firstdate.jpg',
        caption: 'KhwyPk tot yae first date ly>/3',
        loveNote: 'မှတ်မိသေးလား တျဲတျဲ. ခွေးပေါက်လေးကို တျဲတျဲစတွေ့တော့လေ ပုန်းနေတာ တိုင်နောက်မှာရှက်လို့ပါတဲ့🙄 ပြီးတော့မှ ခွေးပေါက်က တျဲတျဲလက်ကို ကိုင်လိုက်မှ တျဲတျဲကမရှက်တော့တာသိပ်ပြီး။ တျဲတျဲနဲ့စတွေ့တဲ့နေ့လေးကို လုံးဝမမေ့နိုင်ဘူးရယ် မနေ့တနေ့ကလိုပဲ ပုံလေးပြန်ကြည့်ရင်ပြန်သတိရတယ် အဲ့အခိုက်အတန့်လေးကို🥺'
      },
      {
        src: 'photos/crying.jpg',
        caption: 'TaeTae ko Lwn loh Ngo:(',
        loveNote: 'ပထမတစ်ခါရန်ကုန်ကိုလာတော့ ပြန်ခါနီးတစ်ခါထပ်တွေ့ကြတယ်။ အဲ့ခါမှာတင် တျဲတျဲနဲ့ခွဲရတော့မယ်လို့တွေးလိုက်တာနဲ့တင် မျက်ရည်တွေဝဲလာတော့တယ် ဘယ်လိုမှကို မဟန်ဆောင်နိုင်တော့ဘူး တျဲတျဲရင်ခွင်ထဲငိုချပလိုက်တော့တယ် တျဲတျဲကလဲ ထွေးပွေ့ပေးထားတယ် ခွေးပေါက်လေးကို🥺 နောက်၅လလောက်နေရင် ပြန်တွေ့ရမှာတဲ့ တျဲတျဲကပြောပေးရှာတယ်အဲ့လိုလေး'
      },
      {
        src: 'photos/together.jpg',
        caption: 'Lan shk lr twae tk moment ly Hee><',
        loveNote: 'တျဲတျဲလေးကို ခွေးပေါက်မှာတွေ့ချင်လွန်းလို့ ခြေကျင်ကိုအပြေးလာတွေ့တာ အဝေးကြီးကို😭 တကယ်အချစ်နဲ့ဆိုရင်ဘာမဆိုမပင်ပန်းဘူးဆိုတာတကယ်ပါလားဆိုတာ ကိုယ်တိုင်လက်တွေ့ကျမှသိတယ်။ဒီလောက်အဝေးကြီးလမ်းလျှောက်လာတာတောင် တျဲတျဲမျက်နှာလေးကိုတွေ့လိုက်ရတာနဲ့တင် ချွေးထွက်တာရောဘာရောမသိတော့ဘူး ပျော်တာပဲသိတော့တယ်🥺 ပျော်လိုက်တာအရမ်းပျော်တယ် တျဲတျဲနဲ့တွေ့ရတာ'
      },
      {
        src: 'photos/date.jpg',
        caption: 'Nout Ta Kout Date"♡',
        loveNote: 'ဒီတစ်ခါကတော့ အဖြူရောင်ဆင်တူလေးဝတ်ပြီးဒိတ်ခဲ့တာ ခွေးပေါက်ဝယ်ပေးတဲ့ အင်္ကျီလေးနဲ့shoeလေးနဲ့ တျဲတျဲလေးကလှနေခဲ့တာ🥺 ပုံထဲကအနမ်းလေးတော့ ပြန်ပြီးအမှတ်ရစေအောင်လို့🫢'
      },
      {
        src: 'photos/phGift.jpg',
        caption: 'TaeTaely htet koko po pyw tk day ly♥︎',
        loveNote: 'တျဲငယ်လေးမှာပျော်တာခမျာ anniversary giftလေးပေးလို့တဲ့🥺 မှတ်မိသေးတယ်အဲ့ခံစားချက်လေးကို။ အဲ့ချိန်လေးကတည်းကလေ ကိုကိုသိလိုက်တာက ပူတူးလေးပျော်ရင် ကိုကိုနှစ်ဆပိုပျော်ရတယ်ဆိုတာကိုပဲ။ ကိုကို့ကောင်မလေးအတွက်ဘာမဆိုကို မတောင့်မတပဲဖြည့်စည်းပေးချင်တဲ့အတွက် ကိုကိုများကြီးကြိုးစားပါ့မယ်ဗျာ'
      },
      {
        src: 'photos/secretDate.jpg',
        caption: 'Khoe Date tk Nout Ta yat:3',
        loveNote: 'ကိုကိုနဲ့တွေ့ရမယ်ဆိုဘာမဆိုလုပ်ရဲတဲ့ပူတူးလေးကို စိတ်ဓာတ်လေးကို သဘောကျတယ်။ ကိုကို့ကို များကြီးယုံပေးချစ်ပေးတဲ့အတွက်လည်း ကျေးဇူးများကြီးတင်တယ် ပိုပြီးလည်းချစ်တယ်ရယ်။ ကိုကို့ဘဝရဲ့ အကောင်းဆုံးအခိုက်အတန့်လေးတွေကို ပြောပြပါဆိုရင် တျဲတျဲလေးနဲ့ တွေ့ရတဲ့နေ့ရက်တွေပဲ အဲ့တာကြောင့်လာမတွေ့ပဲ ဘေးနားမှာအမြဲခေါ်ထားချင်နေပြီတျဲတျဲရေ🥺❤️'
      },
      {
        src: 'photos/date2.jpg',
        caption: "More Date𑣲𝄞",
        loveNote: 'ဒီတခါကကျတော့ တျဲတျဲကို စိတ်ကောက်မိတာလေ ခွေးပေါက်စလေးက🥺 မှတ်မိသေးတယ် တျဲတျဲကချော့တာကို ခွေးပေါက်လေးက မူနေခဲ့တာ။ ဒါပေမယ့်လေ ခွေးပေါက်လေးစိတ်ကောက်တာက တျဲတျဲကိုမဟုတ်ပဲ တွေ့ရတဲ့အချိန်လေးနည်းသွားတော့ ကလေးလိုတွေးပြီး တည့်တိုးကြီးစိတ်ကောက်မိတာ။ အဲ့တုန်းကအတွက် တျဲတျဲကိုခုတခါထပ်ပြိးအာဘွားပေးမယ်ခွေးပေါက်စလေးဆိုးလို့😭'
      },
      {
        src: 'photos/date3.jpg',
        caption: "KhwyPk Malaysia ma htwt khin Date❤︎",
        loveNote: 'တျဲတျဲကိုခွဲပြီး လေယာဥ်ပျံကြီးနဲ့ နိုင်ငံခြားထွက်ရတော့မယ်လို့ သိတဲ့အချိန်အရမ်းဝမ်းနည်းတာပဲ ဖြစ်နိုင်ရင် ဘေးနားမှာပဲ တသက်လုံးနေချင်တယ် ဘယ်မှာလဲမသွားချင်ဘူး။ ဒါပေမယ့် တျဲတျဲနဲ့တွေ့တဲ့အခါလေးတော့ ခွေးပေါက်လေးကတိလေးပေးခဲ့ပါတယ် ခွေးပေါက်ဘယ်သူကိုမှ စိတ်မကစားသလို တျဲတျဲမကြိုက်တာတွေကိုလည်း လုံးဝမလုပ်ပါဘူးဆိုတာကိုလေ။ တျဲတျဲလေးက စိတ်မချဖြစ်နေခဲ့တာ ခွေးပေါက်လေးမှတ်မိပါသေးတယ်'
      },
      {
        src: 'photos/date4.jpg',
        caption: "Thu ly ko lr sone ma ya tr🙄",
        loveNote: 'ဆိုးသွမ်းနေတဲ့ကောင်မလေးကို လာဆုံးမရတာပါပေါ့။ ကိုကိုနိုင်ငံခြားမထွက်ခင်တော့ သူလေးက ကတိတွေပေးတယ်ဗျာ။ ကိုကိုကလေ တျဲငယ်လေးဘယ်လိုပဲဖြစ်နေနေ ကိုကိုကအမြဲဘေးနားရှိပေးမှာ။ ဘာပကာသနာမှမလိုသလို ဘာမှလဲပူတူးလေးဆီက တောင်းဆိုချင်ဘူး။ တစ်ခုပဲ... ဒီကကိုကိုမင်းထောသျှန်ကိုပဲ သစ္စာရှိရှိအများကြီးချစ်ပေးပါလို့🥺🤍'
      }
    ],

    // 💌 Things you love about her
    reasons: [
      'တျဲတျဲဘက်ကနေ ခွေးပေါက်ကို သူများတွေထက် ပိုပြီးဦးစားပေးတာ သဘောကျတယ်ဗျ',
      'တျဲတျဲရဲ့စကားပြောတဲ့ပုံစံလေးနဲ့ လေသံလေးကို သိပ်သဘောကျတယ် မြတ်နိုးတယ်ဗျ',
      'ခွေးပေါက်စိတ်ညစ်တဲ့အခါတိုင်းမှာ ဘေးနားမှာ တျဲတျဲရှိပေးတာ အရမ်းပျော်ရတယ်ဗျ',
      'တျဲတျဲရဲ့ ရီသံလေးတွေကို သိပ်ချစ်တယ် ပိုလဲကြားချင်တယ် စွဲမက်စရာကောင်းတယ်ရယ်',
      'ခွေးပေါက်နဲ့ပတ်သတ်ပြီး အသေးစိတ်လေးတွေကို မှတ်ပေးထားတာ သိပ်သဘောကျတယ်ဗျ',
      'ဖုန်းလေးခေါ်ပြီးတူတူအိပ်တုန်းကဆို တျဲတျဲလေးရဲ့မနက်နိုးလာတဲ့အသံလေး အရမ်းအူယားစရာကောင်းတာပဲ',
      'အနေဝေးနေပေမယ့် တျဲတျဲရဲ့စာလေးတွေနဲ့ ခွေးပေါက်ကိုနွေးထွေးပေးတာ အရမ်းချစ်စရာကောင်းတာပဲဗျာ',
      'ခွေးပေါက်ရဲ့သာမာန်နေ့ရက်တိုင်းကို တျဲတျဲကဘေးနားမှာ ရှိနေတဲ့ဆိုတာနဲ့တင် တန်ဖိုးရှိစေတယ်အရမ်း',
      'တျဲငယ်ရဲ့ တခုခုဆိုဝမ်းနည်းတတ်တဲ့အကျင့်လေးကြောင့် ဒီက ကိုကိုခွေးပေါက်က ဘေးနားတသက်လုံးရှိနေပေးမှာ',
      'တျဲငယ်ဘက်ကနေ တခုခုကြောင့်ပျော်လို့ ကို့ကို့ကို ထခေါ်လိုက်တဲ့အသံလေးတွေ...',
      'ကိုကို့ကို များကြီးချစ်ပေးယုံကြည်ပေးတဲ့ တျဲတျဲလေးရဲ့စိတ်ပိစိလေး...',
      'တျဲငယ်ရဲ့ ကောင်းတဲ့အချက်နေနေ မကောင်းတာနေနေ ကိုကိုကတော့ သဘောအရမ်းကျရပါတယ် အမျိုးသမီးလေး'
    ],

    // ✅ Things you want to do together
    bucket: [
      'နေလုံးကြီးဝင်တာကို တူတူကြည့်ပြီး တူတူနိုးထချင်တယ်',
      'ခရီးတစ်ခုကို မစီစဥ်ပဲနဲ့ တူတူနှစ်ယောက်တည်းထွက်ချင်တယ်',
      'တျဲငယ်နဲ့ကိုကို နှစ်ယောက်တူတူ ဟင်းချက်ချင်တယ်',
      'ဂိမ်းတူတူ ဘေးနားမှာထိုင်ပြီး ရီရီမောမောဆော့ချင်တယ်',
      'တျဲငယ်လေးကိုဖက်ထားပြီး တူတူဇာတ်ကားတွေကြည့်ချင်တယ်',
      'မြို့ပြနဲ့ဝေးတဲ့တစ်နေရာမှာ ကြယ်တွေတူတူကြည့်ချင်တယ်',
      'Photo boothထဲမှာ ပေါက်ကရဓာတ်ပုံတွေ လျှောက်ရိုက်ချင်တယ်',
      'ကြောင်လေးတွေ ခွေးလေးတွေ တူတူမွေးပြီး စောင့်ရှောက်ချင်တယ်',
      'သားသားလေးတစ်ယောက် မီးမီးလေးတစ်ယောက် မွေးပြီး တူတူပြိုးထောင်ချင်တယ်'
    ],

    // 💝 Random love notes
    notes: [
      'တျဲတျဲစာလေးတက်လာရင် အရမ်းပျော်ရတယ်',
      'တျဲတျဲနဲ့ခွေးပေါက် ကျော်ဖြတ်ခဲ့ရတာတွေကို တဖန်ပြန်လုပ်ရမယ်ဆိုရင်တောင် ပျော်ပျော်ကြီးပြန်လုပ်ပလိုက်မယ်',
      'တျဲတျဲအတွက် ခွေးပေါက်လေး အရမ်းဂုဏ်ယူသလို အရမ်းလည်းချစ်တယ်',
      'သာမာန်အချိန်မှာတောင် တျဲငယ်ရဲ့စကားသံလေးတွေက ကိုကို့ကို ရင်ခုန်စေတယ်',
      'ခွေးပေါက်လေးအပေါ်သည်းခံပေးတာ များကြီးကျေးဇူးတင်သလို ပိုလည်းချစ်တယ်',
      'တျဲတျဲကိုဘယ်လိုအခြေအနေမျိုးမှာမဆို သိပ်ချစ်တယ်',
      'ခွေးပေါက်ရဲ့ မကောင်းတဲ့နေ့ရက်တွေမှာတောင် တျဲတျဲရှိတာနဲ့တင် ပျော်စေတယ်',
      'တျဲတျဲကြီးက ခွေးပေါက်လေးအတွက် အိမ်တစ်ခုလိုပဲ...',
      'တျဲတျဲနဲ့ ဘယ်လိုအရာတွေနဲ့ ယှဥ်ရွေးခိုင်းခိုင်း တျဲတျဲကိုပဲ အမြဲ မျက်လုံးမှိတ်ရွေးချယ်ဖြစ်မှာရယ်',
      'တျဲငယ်နဲ့ပတ်သတ်တဲ့အသေးစိတ်ကိစ္စလေးတိုင်းက ခွေးပေါက်အတွက် favourite အခိုက်အတန့်လေးတွေပဲ',
      'တျဲတျဲနဲ့ပဲ တသက်လုံးနေသွားချင်တယ် ဘာတွေပဲဖြစ်နေဖြစ်နေ ဂရုစိုက်ဘူး'
    ],

    // 🎵 PLAYLISTS — put mp3 files in a "songs" folder
    playlists: [
      {
        name: 'Memory Songs>/3',
        songs: [
          { title: 'A Lin Si', note: 'taetae ka khwyPk athet shin ya tr yae reason pll𑣲𝄞', src: 'songs/A Lin Si.mp3',  cover: '🎸',coverImg : 'covers/A Lin Si.jpg'},
          { title: 'Ta Nay Nay Tot Chit Lar Late Myi',  note: 'ta thet lone chit twr kya ml gya✮⋆˙',  src: 'songs/ChitLr.mp3', cover: '🌙',coverImg:'covers/ChitLr.jpg' },
          { title: 'Sway Tl',  note: 'la yaung htl taetae nk lat ly twl pee ln shk chin dl𓆉 ',  src: 'songs/Swaytl.mp3', cover: '🌙',coverImg:'covers/Swaytl.jpg' }
        ]
      },
      {
        name: 'Our songsᢉ𐭩',
        songs: [
          { title: 'Anime Luv',  note: 'Taetae nk pa hta ma so kya tr ly',  src: 'songs/Anime Luv.mp3', cover: '🌙',coverImg:'covers/Anime Luv.jpg' },
          { title: 'A Chit Ko Sate Htl Mr Mht', note: '1 year anniversary♡', src: 'songs/AchitKoSateHtl.mp3', cover: '🚗',coverImg: 'covers/Achit.jpg' },
          { title: 'Nga Doe A Twal', note: 'Tu" pa hta ma sone lok tk edit pk sa na𓏲ּ𝄢', src: 'songs/Ngrtot a twl.mp3', cover: '🚗',coverImg: 'covers/YanPyit.jpg' },
          { title: 'Bad Boy',  note: 'Dr ka tot nout edit song ta ku Hee><',  src: 'songs/Bad Boy.mp3', cover: '🌙',coverImg:'covers/Bad Boy.jpg' }
        ]
      },
      {
        name: 'Late night৻ꪆ',
        songs: [
          { title: 'Here With Me',   note: 'TaeNgl ly ko lwn lohhhh˙◠˙', src: 'songs/Here with me.mp3', cover: '🌌', coverImg :'covers/Here with me.jpg' },
          { title: 'Hurt',  note: 'TaeTae m shi loh ma phyit phu so tr thi yae lh:‹ ',  src: 'songs/Hurt.mp3', cover: '🌙',coverImg:'covers/Hurt.jpg' }
        ]
      }
    ]
  };

  /* ==========================================================
     2. HELPERS
     ========================================================== */
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const pad = n => String(n).padStart(2, '0');
  const fmt = t => {
    if (!isFinite(t) || t < 0) t = 0;
    const m = Math.floor(t / 60), s = Math.floor(t % 60);
    return m + ':' + pad(s);
  };

  /* ==========================================================
     3. LOGIN SCREEN — decorative corner polaroids
     ========================================================== */
  function buildLoginPolaroids(){
    const container = $('#loginPolaroids');
    if (!container) return;

    // Use CONFIG.loginPhotos if set, otherwise first 4 gallery photos
    let list = (CONFIG.loginPhotos && CONFIG.loginPhotos.length)
      ? CONFIG.loginPhotos
      : (CONFIG.photos || []).slice(0, 4);

    list = list.slice(0, 4); // max 4 (one per corner)
    const rotations = [-8, 7, -6, 9];

    container.innerHTML = '';
    list.forEach((p, i) => {
      const el = document.createElement('div');
      el.className = 'login-polaroid pos-' + i;
      el.style.setProperty('--r', rotations[i] + 'deg');

      const img = document.createElement('img');
      img.src = p.src;
      img.alt = '';
      img.loading = 'eager';
      img.draggable = false;

      el.appendChild(img);
      container.appendChild(el);
    });
  }

  /* ==========================================================
     4. LOGIN
     ========================================================== */
  const loginEl = $('#login');
  const appEl   = $('#app');
  const errEl   = $('#err');
  const form    = $('#loginForm');
  let built = false, heartsOn = false, counterOn = false, bdayOn = false;

  function enterApp(){
    loginEl.classList.add('hide');
    setTimeout(() => { loginEl.style.display = 'none'; }, 650);
    appEl.classList.add('show');
    if (!built)     { buildApp();      built = true; }
    if (!heartsOn)  { startHearts();   heartsOn = true; }
    if (!counterOn) { startCounter();  counterOn = true; }
    if (!bdayOn)    { startBirthday(); bdayOn = true; }
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const u = $('#userInput').value.trim().toLowerCase();
    const p = $('#passInput').value;

    if (u === CONFIG.login.username.toLowerCase() && p === CONFIG.login.password) {
      try { localStorage.setItem('lovesite_auth', 'yes'); } catch(e){}
      errEl.textContent = '';
      enterApp();
    } else {
      errEl.textContent = 'TaeTae mhr ny pi pyn sin srr🥺...';
      const card = $('.login-card');
      card.classList.remove('shake');
      void card.offsetWidth;
      card.classList.add('shake');
      $('#passInput').value = '';
    }
  });

  $('#logoutBtn').addEventListener('click', function(){
    try { localStorage.removeItem('lovesite_auth'); } catch(e){}
    location.reload();
  });

  // Build login polaroids on page load
  buildLoginPolaroids();

  // Auto-login if already authenticated
  try {
    if (localStorage.getItem('lovesite_auth') === 'yes') enterApp();
  } catch(e){}

  /* ==========================================================
     5. FLOATING HEARTS
     ========================================================== */
  function startHearts(){
    const layer = $('#hearts');
    const glyphs = ['💗','💕','💖','🌸','💞','🩷','💝'];
    setInterval(() => {
      if (document.hidden) return;
      if (layer.childElementCount > 22) return;
      const h = document.createElement('span');
      h.className = 'heart';
      h.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
      h.style.left = Math.random() * 100 + 'vw';
      h.style.fontSize = (13 + Math.random() * 18) + 'px';
      const dur = 9 + Math.random() * 8;
      h.style.animationDuration = dur + 's';
      layer.appendChild(h);
      setTimeout(() => h.remove(), dur * 1000 + 200);
    }, 900);
  }

  /* ==========================================================
     6. DAYS TOGETHER COUNTER
     ========================================================== */
  function startCounter(){
    const start = new Date(CONFIG.startDate);
    const sinceLine = $('#sinceLine');
    if (isNaN(start)) { sinceLine.textContent = ''; return; }

    sinceLine.textContent = 'together since ' + start.toLocaleDateString(undefined, {
      day: 'numeric', month: 'long', year: 'numeric'
    });

    function tick(){
      let diff = Date.now() - start.getTime();
      const future = diff < 0;
      diff = Math.abs(diff);
      $('#cD').textContent = Math.floor(diff / 86400000);
      $('#cH').textContent = pad(Math.floor(diff / 3600000) % 24);
      $('#cM').textContent = pad(Math.floor(diff / 60000) % 60);
      $('#cS').textContent = pad(Math.floor(diff / 1000) % 60);
      if (future) sinceLine.textContent = 'counting down to us 💗';
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ==========================================================
     7. BUILD APP
     ========================================================== */
  function buildApp(){
    $('#herName').textContent = CONFIG.herName;
    $('#brandName').textContent = 'Arr Bwrr ' + CONFIG.herName;

    buildHeroPhoto();
    buildReasons();
    buildPlaylists();
    buildPhotos();
    buildBucket();
    buildNotes();
    buildTabs();
  }

  /* ---------- Hero background photo ---------- */
  function buildHeroPhoto(){
    const hero = $('#hero');
    if (!hero || !CONFIG.heroPhoto) return;
    const bg = document.createElement('div');
    bg.className = 'hero-bg';
    bg.style.backgroundImage = "url('" + CONFIG.heroPhoto.replace(/'/g, "%27") + "')";
    hero.insertBefore(bg, hero.firstChild);
    hero.classList.add('has-photo');
  }

  /* ---------- Tabs ---------- */
  function buildTabs(){
    $$('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        $$('.tab').forEach(t => t.classList.remove('active'));
        $$('.panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        const panel = document.getElementById(tab.dataset.target);
        if (panel) panel.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }

  /* ---------- Reasons ---------- */
  function buildReasons(){
    const grid = $('#reasonGrid');
    grid.innerHTML = '';
    CONFIG.reasons.forEach((text, i) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'flip';
      card.setAttribute('aria-label', 'Reason number ' + (i + 1));
      card.innerHTML =
        '<div class="flip-inner">' +
          '<div class="face front"><span class="num">' + (i + 1) + '</span><span class="hh">💗</span></div>' +
          '<div class="face back"><p>' + esc(text) + '</p></div>' +
        '</div>';
      card.addEventListener('click', () => card.classList.toggle('flipped'));
      grid.appendChild(card);
    });
  }

  /* ---------- Music ---------- */
  const audio = new Audio();
  audio.preload = 'metadata';
  let plIndex = 0;
  let songIndex = 0;

  const coverEl   = $('#cover');
  const titleEl   = $('#songTitle');
  const noteEl    = $('#songNote');
  const seekEl    = $('#seek');
  const curTimeEl = $('#curTime');
  const durTimeEl = $('#durTime');
  const playBtn   = $('#playBtn');

  function currentSongs(){
    const pl = CONFIG.playlists[plIndex];
    return (pl && pl.songs) ? pl.songs : [];
  }

  function buildPlaylists(){
    const tabsEl = $('#playlistTabs');
    tabsEl.innerHTML = '';
    CONFIG.playlists.forEach((pl, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip' + (i === plIndex ? ' active' : '');
      b.textContent = pl.name;
      b.addEventListener('click', () => {
        plIndex = i;
        songIndex = 0;
        buildPlaylists();
        buildSongList();
        loadSong(0, false);
      });
      tabsEl.appendChild(b);
    });
    buildSongList();
    loadSong(0, false);
  }

  function buildSongList(){
    const listEl = $('#songList');
    listEl.innerHTML = '';
    const songs = currentSongs();

    if (!songs.length) {
      listEl.innerHTML = '<div class="empty">No songs in this playlist yet 🎵</div>';
      return;
    }

    songs.forEach((s, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'song';
      btn.dataset.i = i;
      btn.innerHTML =
        '<span class="sIcon">▶</span>' +
        '<span class="sMeta"><b>' + esc(s.title) + '</b>' +
        (s.note ? '<small>' + esc(s.note) + '</small>' : '') + '</span>';
      btn.addEventListener('click', () => {
        if (i === songIndex && !audio.paused) togglePlay();
        else loadSong(i, true);
      });
      listEl.appendChild(btn);
    });
    highlight();
  }

  function highlight(){
    $$('#songList .song').forEach((el, i) => {
      const active = (i === songIndex);
      el.classList.toggle('playing', active && !audio.paused);
      const icon = el.querySelector('.sIcon');
      if (icon) icon.textContent = (active && !audio.paused) ? '❚❚' : '▶';
    });
  }

  function loadSong(i, autoplay){
    const songs = currentSongs();
    if (!songs.length) {
      titleEl.textContent = 'No songs yet';
      noteEl.textContent = 'Add mp3 files to the "songs" folder and list them in CONFIG.playlists.';
      return;
    }
    songIndex = ((i % songs.length) + songs.length) % songs.length;
    const s = songs[songIndex];

    audio.src = s.src;
    titleEl.textContent = s.title || 'Untitled';
    noteEl.textContent = s.note || '';
    if (s.coverImg) {
      coverEl.innerHTML = '<img src="' + s.coverImg + '" alt="Cover">';
    } else {
        coverEl.textContent = s.cover || '🎵';
    }
    seekEl.value = 0;
    seekEl.style.setProperty('--p', '0%');
    curTimeEl.textContent = '0:00';
    durTimeEl.textContent = '0:00';
    highlight();

    if (autoplay) {
      audio.play().catch(() => {
        noteEl.textContent = 'Could not play this file — check the path in CONFIG.playlists 🎧';
      });
    }
  }

  function togglePlay(){
    if (!currentSongs().length) return;
    if (!audio.src) { loadSong(0, true); return; }
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  }

  playBtn.addEventListener('click', togglePlay);
  $('#nextBtn').addEventListener('click', () => loadSong(songIndex + 1, true));
  $('#prevBtn').addEventListener('click', () => {
    if (audio.currentTime > 3) { audio.currentTime = 0; return; }
    loadSong(songIndex - 1, true);
  });

  audio.addEventListener('play',  () => { playBtn.textContent = '❚❚'; coverEl.classList.add('spin'); highlight(); });
  audio.addEventListener('pause', () => { playBtn.textContent = '▶';  coverEl.classList.remove('spin'); highlight(); });
  audio.addEventListener('ended', () => loadSong(songIndex + 1, true));
  audio.addEventListener('loadedmetadata', () => { durTimeEl.textContent = fmt(audio.duration); });
  audio.addEventListener('timeupdate', () => {
    if (!audio.duration || !isFinite(audio.duration)) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    seekEl.value = pct;
    seekEl.style.setProperty('--p', pct + '%');
    curTimeEl.textContent = fmt(audio.currentTime);
  });
  audio.addEventListener('error', () => {
    if (!audio.src) return;
    noteEl.textContent = '⚠️ Could not load this file. Check the file name and path.';
    playBtn.textContent = '▶';
    coverEl.classList.remove('spin');
  });

  seekEl.addEventListener('input', () => {
    if (!audio.duration || !isFinite(audio.duration)) return;
    const pct = parseFloat(seekEl.value);
    seekEl.style.setProperty('--p', pct + '%');
    curTimeEl.textContent = fmt((pct / 100) * audio.duration);
  });
  seekEl.addEventListener('change', () => {
    if (!audio.duration || !isFinite(audio.duration)) return;
    audio.currentTime = (parseFloat(seekEl.value) / 100) * audio.duration;
  });

  /* ---------- Photos gallery + lightbox ---------- */
  let lbIndex = 0;

  function buildPhotos(){
    const gallery = $('#gallery');
    gallery.innerHTML = '';

    if (!CONFIG.photos.length) {
      gallery.innerHTML = '<div class="empty">No photos yet 📸 Add some to the "photos" folder and list them in CONFIG.photos.</div>';
      return;
    }

    CONFIG.photos.forEach((p, i) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'polaroid';
      const tilt = (Math.random() * 6 - 3).toFixed(2);
      card.style.setProperty('--tilt', tilt + 'deg');
      card.setAttribute('aria-label', 'Open photo ' + (i + 1));

      const img = document.createElement('img');
      img.src = p.src;
      img.alt = p.caption || ('Photo ' + (i + 1));
      img.loading = 'lazy';

      const cap = document.createElement('span');
      cap.className = 'cap';
      cap.textContent = p.caption || '';

      card.appendChild(img);
      card.appendChild(cap);
      card.addEventListener('click', () => openLightbox(i));
      gallery.appendChild(card);
    });

    // Lightbox wiring
    $('#lbClose').addEventListener('click', closeLightbox);
    $('#lbPrev').addEventListener('click', () => stepLightbox(-1));
    $('#lbNext').addEventListener('click', () => stepLightbox(1));
    $('#lightbox').addEventListener('click', (e) => {
      if (e.target.id === 'lightbox') closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (!$('#lightbox').classList.contains('open')) return;
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowLeft')  stepLightbox(-1);
      if (e.key === 'ArrowRight') stepLightbox(1);
    });
  }

  function openLightbox(i){
    if (!CONFIG.photos.length) return;
    lbIndex = i;
    const lb = $('#lightbox');
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    renderLightbox();
  }

  function closeLightbox(){
    const lb = $('#lightbox');
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function stepLightbox(dir){
    if (!CONFIG.photos.length) return;
    lbIndex = (lbIndex + dir + CONFIG.photos.length) % CONFIG.photos.length;
    renderLightbox();
  }

  function renderLightbox(){
    const p = CONFIG.photos[lbIndex];
    if (!p) return;

    const img = $('#lbImg');
    img.src = p.src;
    img.alt = p.caption || '';
    img.style.animation = 'none';
    void img.offsetWidth;
    img.style.animation = '';

    // caption INSIDE the polaroid
    $('#lbCaption').textContent = p.caption || '';

    // love sentence BELOW the polaroid
    const loveEl = $('#lbLove');
    loveEl.textContent = p.loveNote || '';
    loveEl.style.animation = 'none';
    void loveEl.offsetWidth;
    loveEl.style.animation = '';
  }

  /* ---------- Bucket list ---------- */
  function buildBucket(){
    const ul = $('#bucketList');
    ul.innerHTML = '';
    let saved = [];
    try { saved = JSON.parse(localStorage.getItem('lovesite_bucket') || '[]'); } catch(e){ saved = []; }

    CONFIG.bucket.forEach((item, i) => {
      const li = document.createElement('li');
      if (saved.indexOf(i) > -1) li.classList.add('done');
      li.innerHTML = '<span class="box">✓</span><span class="txt">' + esc(item) + '</span>';
      li.addEventListener('click', () => {
        li.classList.toggle('done');
        const done = $$('#bucketList li').map((el, idx) => el.classList.contains('done') ? idx : -1).filter(x => x > -1);
        try { localStorage.setItem('lovesite_bucket', JSON.stringify(done)); } catch(e){}
      });
      ul.appendChild(li);
    });
  }

  /* ---------- Love notes ---------- */
  let lastNote = -1;
  function buildNotes(){
    const box = $('#noteBox');
    function show(){
      let i = Math.floor(Math.random() * CONFIG.notes.length);
      if (CONFIG.notes.length > 1) {
        while (i === lastNote) i = Math.floor(Math.random() * CONFIG.notes.length);
      }
      lastNote = i;
      box.textContent = '“' + CONFIG.notes[i] + '”';
      box.classList.remove('flash');
      void box.offsetWidth;
      box.classList.add('flash');
    }
    $('#newNote').addEventListener('click', show);
    show();
  }

  /* ==========================================================
     8. BIRTHDAY
     ========================================================== */
  let bdayInterval = null;

  function startBirthday(){
    const cfg = CONFIG.birthday;
    if (!cfg || !cfg.month || !cfg.day) return;

    $('#bdayMsg').textContent = cfg.message || '';

    function isBirthdayToday(){
      const n = new Date();
      return (n.getMonth() + 1) === cfg.month && n.getDate() === cfg.day;
    }

    function nextBirthday(){
      const now = new Date();
      const y = now.getFullYear();
      let next = new Date(y, cfg.month - 1, cfg.day, 0, 0, 0);
      if (next.getTime() < now.getTime()) next = new Date(y + 1, cfg.month - 1, cfg.day, 0, 0, 0);
      return next;
    }

    function tick(){
      const hint = $('#bdayHint');
      if (isBirthdayToday()) {
        hint.textContent = "🎉 It's your birthday today! Happy Birthday, my love 🎉";
        $('#bD').textContent = '🎂';
        $('#bH').textContent = '🎈';
        $('#bM').textContent = '💗';
        $('#bS').textContent = '✨';
        return;
      }
      const next = nextBirthday();
      let diff = next.getTime() - Date.now();
      if (diff < 0) diff = 0;
      $('#bD').textContent = Math.floor(diff / 86400000);
      $('#bH').textContent = pad(Math.floor(diff / 3600000) % 24);
      $('#bM').textContent = pad(Math.floor(diff / 60000) % 60);
      $('#bS').textContent = pad(Math.floor(diff / 1000) % 60);
      hint.textContent = 'counting down to your birthday 🎂';
    }

    if (bdayInterval) clearInterval(bdayInterval);
    tick();
    bdayInterval = setInterval(tick, 1000);

    buildCake();
  }

  const CANDLE_COUNT = 5;
  let blownCount = 0;

  function buildCake(){
    const candlesEl = $('#candles');
    const hint      = $('#cakeHint');
    const relight   = $('#relightBtn');
    if (!candlesEl) return;

    function reset(){
      candlesEl.innerHTML = '';
      blownCount = 0;
      hint.textContent = 'Tap each candle to blow it out 🕯️';
      relight.style.display = 'none';

      for (let i = 0; i < CANDLE_COUNT; i++) {
        const c = document.createElement('button');
        c.type = 'button';
        c.className = 'candle';
        c.setAttribute('aria-label', 'Blow out candle ' + (i + 1));
        c.innerHTML = '<span class="flame"></span><span class="stick"></span>';
        c.addEventListener('click', () => {
          if (c.classList.contains('out')) return;
          c.classList.add('out');
          blownCount++;
          if (blownCount >= CANDLE_COUNT) {
            hint.textContent = '🎉 Your wish is on its way 💗';
            relight.style.display = 'inline-block';
            launchConfetti();
          }
        });
        candlesEl.appendChild(c);
      }
    }

    relight.addEventListener('click', reset);
    reset();
  }

  /* ---------- Confetti ---------- */
  function launchConfetti(){
    const layer = $('#confetti');
    if (!layer) return;
    const colors = ['#ff7ba9','#e4508a','#ffd0e0','#ffd700','#ff8db4','#ffffff','#ffb347'];
    const total = 90;

    for (let i = 0; i < total; i++) {
      const p = document.createElement('span');
      p.className = 'confetti-piece';
      p.style.left = (Math.random() * 100) + 'vw';
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.width  = (6 + Math.random() * 8) + 'px';
      p.style.height = (10 + Math.random() * 10) + 'px';
      p.style.animationDelay    = (Math.random() * 0.6) + 's';
      p.style.animationDuration = (2.2 + Math.random() * 2) + 's';
      p.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
      layer.appendChild(p);
      setTimeout(() => p.remove(), 5000);
    }
  }

})();