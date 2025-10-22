// 地图icon 闪烁
const mapIcon = document.querySelector('.title-icon');

mapIcon.addEventListener('click', () => {
    mapIcon.classList.remove('edge-glow-animation'); // 移除类以便重复点击

    // 强制触发重绘
    void mapIcon.offsetWidth;

    mapIcon.classList.add('edge-glow-animation'); // 添加闪烁类
});



// SPA导航
function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(sec => sec.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    closeMenu();
}

// 菜单开关
function openMenu() {
    document.getElementById("sideMenu").style.width = "250px";
    document.getElementById("overlay").style.display = "block";
    document.body.style.overflow = "hidden";
}
function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = "auto";
}

// 回到顶部
const backToTopBtn = document.getElementById("backToTopBtn");
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top:0, behavior:"smooth" });
});
window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 200 ? "flex" : "none";
});

// ====== 多语言支持 ======
const translations = {
    "zh": {
        announcement: "📯 公告：欢迎来到 The Liberated Zone Map！Authentic Flavors Around You...",
        title: "解放区地图 ...🗺",
        subtitle: "发觉你身边的真实美食",
        nav_home: "首页",
        nav_vip: "VIP",
        nav_about: "关于我们",
        takeaway: "外卖",
        reserve: "预定",
        vip_login: "VIP 登录",
        vip_desc: "VIP 登录",
        about_title: "关于我们",
        about_subtitle: "XIAOXIONG 餐饮 SaaS 系统 | 餐饮私域新时代的引领者",
        about_desc:
            "在竞争激烈的餐饮时代，我们相信——每一家餐厅都应拥有属于自己的根据地。\n" +
            "我们帮助商家摆脱高抽成平台的束缚，让顾客、数据和利润回归到餐厅手中。\n" +
            "\n" +
            "我们的系统不仅是一套工具，而是一场「私域革命」的作战武器：\n" +
            "二维码点餐连接顾客，会员体系强化粘性，预定系统提升效率，私域外卖重获主动。\n" +
            "\n" +
            "我们致力于让每一家餐厅从被动等待，走向主动经营；\n" +
            "让数据助力战略，让科技成为餐厅的战友。\n" +
            "\n" +
            "加入我们，一起点燃属于餐厅的新时代。",
        info: "信息:",
        contact: "联系方式: 968815050",
        email: "邮箱: comercial@xiaoxiong.pt",
        links: "有用链接",
        privacy: "隐私政策",
        terms: "服务条款",
        complaints: "投诉书"
    },
    "en": {
        announcement: "📯 Announcement: Welcome to The Liberated Zone Map!",
        title: "The Liberated Map ...🗺",
        subtitle: "Authentic Flavors Around You",
        nav_home: "Home",
        nav_vip: "VIP",
        nav_about: "About",
        takeaway: "Take Away",
        reserve: "Reserve",
        vip_login: "VIP Login",
        vip_desc: "VIP Login",
        about_title: "About Us",
        about_subtitle: "XIAOXIONG Restaurant SaaS | Leading the New Era of Private Dining Domains",
        about_desc:
            "In today’s highly competitive restaurant world, we believe every restaurant deserves its own territory.\n" +
            "We help merchants break free from high-commission delivery platforms, regaining control over customers, data, and profit.\n" +
            "\n" +
            "Our system is more than just software — it’s a strategy for revolution.\n" +
            "QR ordering builds connections, membership strengthens loyalty, reservations improve efficiency, and private delivery puts power back in your hands.\n" +
            "\n" +
            "We empower restaurants to shift from waiting to acting,\n" +
            "from relying on luck to winning through strategy.\n" +
            "\n" +
            "Join us and ignite your restaurant’s new era.",
        info: "Information:",
        contact: "Contact: 968815050",
        email: "Email: comercial@xiaoxiong.pt",
        links: "Useful Links",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        complaints: "Complaint Book"
    },
    "pt": {
        announcement: "📯 Aviso: Bem-vindo ao The Liberated Zone Map! Sabores autênticos à sua volta...",
        title: "O Mapa Liberado ...🗺",
        subtitle: "Sabores autênticos à sua volta",
        nav_home: "Início",
        nav_vip: "VIP",
        nav_about: "Sobre Nós",
        takeaway: "Para levar",
        reserve: "Reservar",
        vip_login: "Login VIP",
        vip_desc: "Login VIP",
        about_title: "Sobre Nós",
        about_subtitle: "XIAOXIONG Sistema SaaS de Restauração | Líder da Nova Era do Domínio Privado",
        about_desc:
            "Num mercado cada vez mais competitivo, acreditamos que cada restaurante deve ter a sua própria base.\n" +
            "Ajudamos os parceiros a libertarem-se das plataformas com altas comissões, devolvendo aos restaurantes o controlo sobre clientes, dados e lucros.\n" +
            "\n" +
            "O nosso sistema não é apenas uma ferramenta — é uma estratégia de revolução.\n" +
            "Pedidos por QR aproximam clientes, o sistema de membros cria fidelização, as reservas aumentam eficiência e o delivery privado devolve autonomia.\n" +
            "\n" +
            "Queremos que cada restaurante passe da espera à ação,\n" +
            "da incerteza à estratégia.\n" +
            "\n" +
            "Junte-se a nós e acenda a nova era da restauração.",
        info: "Informações:",
        contact: "Contacto: 968815050",
        email: "E-mail: comercial@xiaoxiong.pt",
        links: "Links úteis",
        privacy: "Política de Privacidade",
        terms: "Termos de Serviço",
        complaints: "Livro de Reclamações"
    }
};

// 切换语言
function setLanguage(lang){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
        const key = el.getAttribute('data-i18n');
        if(translations[lang] && translations[lang][key]){
            el.textContent = translations[lang][key];
        }
    });
}
const langPopup = document.getElementById('langPopup');
const flags = document.querySelectorAll('.lang-flag');
const langMask = document.getElementById('langMask');

let currentLang = 'en'; // 默认语言

function renderLang() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[currentLang] && translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
}

// 默认语言
let savedLang = localStorage.getItem('userLang');
if(savedLang && translations[savedLang]) {
    currentLang = savedLang;
}

// 渲染页面文本
renderLang();

// 高亮当前语言
flags.forEach(f => f.classList.remove('active'));
document.getElementById(`flag-${currentLang}`).classList.add('active');

// 点击图标显示/隐藏语言选择
mapIcon.addEventListener('click', () => {
    const isShown = langPopup.classList.toggle('show');
    langMask.style.display = isShown ? 'block' : 'none';
});

// 点击遮罩隐藏语言选择
langMask.addEventListener('click', () => {
    langPopup.classList.remove('show');
    langMask.style.display = 'none';
});

// 点击旗帜切换语言
flags.forEach(flag => {
    flag.addEventListener('click', () => {
        currentLang = flag.dataset.lang;

        // 更新光圈
        flags.forEach(f => f.classList.remove('active'));
        flag.classList.add('active');

        // 隐藏弹窗和遮罩
        langPopup.classList.remove('show');
        langMask.style.display = 'none';

        // 渲染页面文本
        renderLang();

        // 保存到 localStorage
        localStorage.setItem('userLang', currentLang);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    //console.log("✅ 页面加载完成，开始请求数据...");
    fetchData();

    // 如果想每隔30秒刷新一次，可以取消注释
    setInterval(fetchData, 30000);
});

async function fetchData() {
    //console.log("🔍 正在向服务器请求 takeaway/reserve 数据...");
    try {
        // ✅ 注意：去掉多余的 “https://”
        const response = await fetch("https://v.xiaoxiong.pt/api/get_info");

        //console.log("🌐 请求已发送，等待响应...");

        if (!response.ok) {
            throw new Error("❌ 网络响应错误: " + response.status);
        }

        const data = await response.json();
        //console.log("📦 收到的数据：", data);

        if (typeof data.order_count !== "undefined" && typeof data.reserve_count !== "undefined") {
            updateValues(data.order_count, data.reserve_count);
        } else {
            //console.warn("⚠️ API 数据格式异常：", data);
        }
    } catch (error) {
        //console.error("🚨 获取数据失败：", error);
    }
}

function updateValues(takeaway, reserve) {
    const takeawayEl = document.getElementById("takeaway");
    const reserveEl = document.getElementById("reserve");

    if (takeawayEl) animateFlip(takeawayEl, takeaway);
    if (reserveEl) animateFlip(reserveEl, reserve);
}

/**
 * 数字翻转动画函数
 * @param {HTMLElement} element - 要更新的元素
 * @param {number|string} newValue - 新的数值
 */
function animateFlip(element, newValue) {
    if (element.textContent === String(newValue)) return;

    // 添加动画类，让它向内翻转
    element.classList.add("animate");

    // 动画中途更新数字
    setTimeout(() => {
        element.textContent = newValue;
    }, 200);

    // 再翻转回来
    setTimeout(() => {
        element.classList.remove("animate");
    }, 400);
}
