// 确保在 DOM 加载完成后，脚本才能找到 .title-icon 元素
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
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        complaints: "投诉书",
        joinUs: "加入我们",

        // ✅ Join Us 弹窗
        joinus_title: "填写餐厅信息",
        joinus_subtitle: "我们将为您提供一份专属的<strong>数字化转型方案</strong>",
        joinus_name: "名字",
        joinus_restaurant_name: "餐厅名称",
        joinus_email: "邮箱",
        joinus_phone: "电话号码",
        joinus_address: "餐厅地址",
        joinus_submit: "提交",
        joinus_notice: "注册即表示您同意接收营销电子邮件和优惠信息。有关详细信息，请查看我们的隐私政策和服务条款。",

        // 成功提示标题 (新增)
        success_title: "信息已提交成功！"
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
        complaints: "Complaint Book",
        joinUs: "Join us",

        // ✅ Join Us Popup
        joinus_title: "Fill in Restaurant Information",
        joinus_subtitle: "We’ll provide you with a personalized <strong>digital transformation plan</strong>",
        joinus_name: "Name",
        joinus_restaurant_name: "Restaurant Name",
        joinus_email: "Email",
        joinus_phone: "Phone Number",
        joinus_address: "Restaurant Address",
        joinus_submit: "Submit",
        joinus_notice: "By registering, you agree to receive marketing emails and offers. For details, please see our Privacy Policy and Terms of Service.",

        // 成功提示标题 (新增)
        success_title: "Submission successful!"
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
        complaints: "Livro de Reclamações",
        joinUs: "Junte-se a nós",

        // ✅ Join Us Popup
        joinus_title: "Preencha as informações do restaurante",
        joinus_subtitle: "Oferecemos um <strong>plano de transformação digital personalizado</strong> para si",
        joinus_name: "Nome",
        joinus_restaurant_name: "Nome do Restaurante",
        joinus_email: "E-mail",
        joinus_phone: "Número de Telefone",
        joinus_address: "Endereço do Restaurante",
        joinus_submit: "Enviar",
        joinus_notice: "Ao registar-se, concorda em receber e-mails promocionais e ofertas. Para mais detalhes, consulte a nossa Política de Privacidade e Termos de Serviço.",

        // 成功提示标题 (新增)
        success_title: "Submissão bem-sucedida!"
    }
};

const langPopup = document.getElementById('langPopup');
const flags = document.querySelectorAll('.lang-flag');
const langMask = document.getElementById('langMask');

let currentLang = 'en'; // 默认语言

function renderLang() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    // ✅ 支持 HTML 内容（例如带 <strong> 的副标题）
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    // ✅ 支持输入框 placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });

    // ✅ 支持按钮文字
    document.querySelectorAll('[data-i18n-value]').forEach(el => {
        const key = el.getAttribute('data-i18n-value');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.value = translations[currentLang][key];
        }
    });
    
    // ✅ 更新成功弹窗标题 (新增)
    const successTitleEl = document.getElementById('successTitle');
    if (successTitleEl && translations[currentLang].success_title) {
        successTitleEl.textContent = translations[currentLang].success_title;
    }
}

// 默认语言
let savedLang = localStorage.getItem('userLang');
if (savedLang && translations[savedLang]) {
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

function getBaseUrl() {
    // 检查当前域名是否是本地回环地址（如 localhost, 127.0.0.1）
    // 或者检查协议是否是 file: （直接打开文件）
    const isLocalDevelopment = (
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1' ||
        window.location.protocol === 'file:'
    );

    if (isLocalDevelopment) {
        // 开发模式：使用完整的后端地址
        return `http://localhost:80`;
    } else {
        // 生产模式：使用相对路径（假设部署在同一域名下，通过 Nginx 等代理）
        return 'https://v.xiaoxiong.pt';
    }
}

async function sendEmailRequest(content) {
    const apiPath = '/api/restaurant_send_email';
    const baseUrl = getBaseUrl();
    const url = baseUrl + apiPath; // 拼接最终的 URL

    try {
        const response = await fetch(url, {
            method: 'POST', // 指定方法为 POST

            // 必须设置 Content-Type 头部，告知服务器请求体是 JSON 格式
            headers: {
                'Content-Type': 'application/json'
            },

            // 🚀 关键步骤：将 JavaScript 对象转换为 JSON 字符串作为请求体

            body: JSON.stringify({
                data: content
            })
        });

        if (!response.ok) {
            // 处理 HTTP 错误状态（如 404, 500 等）
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }

        // 成功时，解析服务器返回的 JSON 响应
        const data = await response.json();
        console.log("Email sent response:", data);
        return data;

    } catch (error) {
        console.error("Error sending email:", error);
        // 您可以在这里抛出错误，让调用者处理
        throw error;
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

function openJoinUsPopup() {
    document.getElementById('joinUsOverlay').style.display = 'block';
    document.getElementById('joinUsPopup').style.display = 'block';
    closeMenu()
}

// 关闭成功模态框
function closeSuccessModal() {
    document.getElementById('successModalOverlay').style.display = 'none';
    document.getElementById('successModal').classList.remove('show');
}

/**
 * 显示成功消息的自定义模态框
 * @param {string} message - 要显示的消息文本
 */
function showSuccessMessage(message) {
    const modal = document.getElementById('successModal');
    const overlay = document.getElementById('successModalOverlay');
    const messageEl = document.getElementById('successMessage');

    // 设置内容
    messageEl.textContent = message;

    // 显示模态框和遮罩
    overlay.style.display = 'block';
    // 使用 class 'show' 触发 CSS 动画
    modal.classList.add('show');
}


function closeJoinUsPopup() {
    document.getElementById('joinUsOverlay').style.display = 'none';
    document.getElementById('joinUsPopup').style.display = 'none';
}


// 显示错误
function showError(inputName, message) {
    const div = document.querySelector(`[data-error-for="${inputName}"]`);
    if (div) {
        div.textContent = message;
        div.style.display = 'block'; // 显示
    }
};

// 清空错误
function clearErrors() {
    document.querySelectorAll('.error-message').forEach(div => {
        div.textContent = '';
        div.style.display = 'none'; // 隐藏
    });
};


function escapeHtml(str) {
    return str ? str.replace(/[&<>"']/g, m => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[m])) : "";
}

function buildJoinUsEmailHtml({ name, restaurant, email, countryCode, phone, address }) {
    const now = new Date();
    const localTime = now.toLocaleString();
    const utcTime = now.toISOString();
    const pageUrl = window.location.href;

    return `
        <html>
        <body style="font-family: Arial, sans-serif; color:#222;">
            <h2 style="color:#1b6ca8;">新用户加入我们（Join Us）</h2>

            <h3>用户信息</h3>
            <table cellpadding="6" cellspacing="0" style="font-size:14px;">
                <tr><td><b>姓名</b></td><td>${escapeHtml(name)}</td></tr>
                <tr><td><b>餐厅名称</b></td><td>${escapeHtml(restaurant)}</td></tr>
                <tr><td><b>邮箱</b></td><td>${escapeHtml(email)}</td></tr>
                <tr><td><b>电话</b></td><td>${escapeHtml(countryCode)} ${escapeHtml(phone)}</td></tr>
                <tr><td><b>餐厅地址</b></td><td>${escapeHtml(address)}</td></tr>
            </table>

            <h3 style="margin-top:15px;">提交信息</h3>
            <table cellpadding="6" cellspacing="0" style="font-size:14px;">
                <tr><td><b>提交时间（本地）</b></td><td>${escapeHtml(localTime)}</td></tr>
                <tr><td><b>提交时间（UTC）</b></td><td>${escapeHtml(utcTime)}</td></tr>
                <tr><td><b>来源页面</b></td><td>${escapeHtml(pageUrl)}</td></tr>
            </table>

            <hr/>
            <p style="color:#666; font-size:12px;">请妥善处理用户隐私信息</p>
        </body>
        </html>
    `;
}


async function submitJoinUsForm(event) {
    event.preventDefault();
    const form = event.target;

    clearErrors(); // 清空之前的错误

    // 获取用户输入
    const name = form.querySelector('input[name="name"]').value.trim();
    const restaurant = form.querySelector('input[name="restaurant"]').value.trim();
    const emailInput = form.querySelector('input[type="email"]');
    const phoneInput = form.querySelector('input[type="tel"]');
    const address = form.querySelector('input[name="address"]').value.trim();
    const countryCode = form.querySelector('select[name="countryCode"]').value;

    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    // 🎯 修复：使用全局 currentLang 变量
    const lang = currentLang; 

    // 多语言错误提示
    const errorTexts = {
        emailInvalid: { zh: "邮箱格式不正确", pt: "Email inválido", en: "Email is invalid" },
        phoneInvalid: { zh: "电话号码格式不正确", pt: "Número de telefone inválido", en: "Phone number is invalid" },
        alreadySubmitted: { zh: "您已经提交过此邮箱或电话号码", pt: "Você já enviou este e-mail ou telefone", en: "This email or phone has already been submitted" },
    };

    // 🎯 更新：使用 \n 实现美观的分行
    const successTexts = {
        zh: "信息已提交成功！\n感谢您的信任！\n我们的专属顾问将在 24小时工作日内\n通过电话与您联系。",
        en: "Submission successful!\nThank you for your trust.\nOur dedicated consultant will contact you by phone\nwithin 24 business hours.",
        pt: "Submissão bem-sucedida!\nAgradecemos a sua confiança.\nO nosso consultor entrará em contacto por telefone\ndentro de 24 horas úteis."
    };


    // 邮箱验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('email', errorTexts.emailInvalid[lang]);
        emailInput.focus();
        return;
    }

    // 电话验证（葡萄牙 +351 9 位）
    const phoneValid = countryCode === '+351'
        ? /^[0-9]{9}$/.test(phone)
        : /^[0-9]{6,15}$/.test(phone);

    if (!phoneValid) {
        showError('phone', errorTexts.phoneInvalid[lang]);
        phoneInput.focus();
        return;
    }

    // 检查 localStorage 是否已提交过
    const submittedData = JSON.parse(localStorage.getItem('joinUsSubmissions') || '[]');
    const alreadySubmitted = submittedData.some(item => item.email === email || item.phone === phone);
    if (alreadySubmitted) {
        showError('email', errorTexts.alreadySubmitted[lang]);
        showError('phone', errorTexts.alreadySubmitted[lang]);
        return;
    }

    // ✅ 生成邮件 HTML
    const emailHtml = buildJoinUsEmailHtml({
        name,
        restaurant,
        email,
        countryCode,
        phone,
        address
    });

    try {
        // ✅ 发邮件
        await sendEmailRequest(emailHtml);

        // ✅ 成功后：显示成功消息 (使用 currentLang)
        showSuccessMessage(successTexts[lang] || successTexts['en']);

        // ✅ 保存 localStorage 防重复提交
        submittedData.push({ email, phone });
        localStorage.setItem('joinUsSubmissions', JSON.stringify(submittedData));

        // ✅ 清空表单并关闭 Join Us 弹窗
        form.reset();
        closeJoinUsPopup();

    } catch (error) {
        // 🚨 错误处理
        console.error("Join Us Form submission failed:", error);

        // 可选：显示通用错误或网络错误
        // 注意：这里需要确保 translations 对象中有一个 'general_error' 键来显示通用错误
        showError('email', (translations[lang] || translations['en']).general_error || "Submission failed. Please try again.");
    }
}