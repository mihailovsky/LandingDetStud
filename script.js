$(document).ready(function () {
    const translations = {
        en: {
            title: "Auto Detailing Studio",
            header: "Welcome to Our Auto Detailing Studio",
            hero_title: "Premium Auto Detailing Services",
            hero_desc: "We provide high-quality detailing for all types of vehicles.",
            hero_cta: "Book Now",
            services_title: "Our Services",
            service1: "Exterior Wash & Wax",
            service2: "Interior Deep Cleaning",
            service3: "Ceramic Coating",
            service4: "Paint Correction",
            gallery_title: "Our Work",
            contact_title: "Get in Touch",
            contact_desc: "Contact us to book your detailing appointment today.",
            contact_submit: "Send Message"
        },
        es: {
            title: "Estudio de Detallado de Autos",
            header: "Bienvenido a Nuestro Estudio de Detallado de Autos",
            hero_title: "Servicios de Detallado de Autos Premium",
            hero_desc: "Brindamos detallado de alta calidad para todo tipo de vehículos.",
            hero_cta: "Reservar Ahora",
            services_title: "Nuestros Servicios",
            service1: "Lavado y Encerado Exterior",
            service2: "Limpieza Interior Profunda",
            service3: "Revestimiento Cerámico",
            service4: "Corrección de Pintura",
            gallery_title: "Nuestro Trabajo",
            contact_title: "Contáctanos",
            contact_desc: "Contáctanos para reservar tu cita de detallado hoy.",
            contact_submit: "Enviar Mensaje"
        },
        ru: {
            title: "Студия Автодетейлинга",
            header: "Добро пожаловать в нашу студию автодетейлинга",
            hero_title: "Премиальные услуги автодетейлинга",
            hero_desc: "Мы предоставляем услуги высокого качества для всех видов автомобилей.",
            hero_cta: "Записаться",
            services_title: "Наши Услуги",
            service1: "Мойка и восковая полировка",
            service2: "Глубокая чистка интерьера",
            service3: "Керамическое покрытие",
            service4: "Коррекция ЛКП",
            gallery_title: "Наши Работы",
            contact_title: "Свяжитесь с нами",
            contact_desc: "Свяжитесь с нами, чтобы записаться на детейлинг.",
            contact_submit: "Отправить сообщение"
        },
        uk: {
            title: "Студія Автодетейлінгу",
            header: "Ласкаво просимо до нашої студії автодетейлінгу",
            hero_title: "Преміальні послуги автодетейлінгу",
            hero_desc: "Ми надаємо послуги високої якості для всіх типів автомобілів.",
            hero_cta: "Записатися",
            services_title: "Наші Послуги",
            service1: "Мийка та воскова поліровка",
            service2: "Глибоке очищення салону",
            service3: "Керамічне покриття",
            service4: "Корекція фарбування",
            gallery_title: "Наші Роботи",
            contact_title: "Зв’яжіться з нами",
            contact_desc: "Зв’яжіться з нами, щоб записатися на детейлінг.",
            contact_submit: "Надіслати повідомлення"
        }
    };

    function updateLanguage(lang) {
        $("[data-i18n]").each(function () {
            let key = $(this).data("i18n");
            $(this).text(translations[lang][key]);
        });
    }

    // Change language on dropdown selection
    $("#language-switcher").on("change", function () {
        let selectedLang = $(this).val();
        updateLanguage(selectedLang);
        localStorage.setItem("selectedLanguage", selectedLang); // Save language preference
    });

    // Load saved language preference
    let savedLang = localStorage.getItem("selectedLanguage") || "en";
    $("#language-switcher").val(savedLang);
    updateLanguage(savedLang);
});