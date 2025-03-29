$(document).ready(function () {
    const translations = {
        en: {
            title: "Auto Detailing Studio",
            hero_title: "Premium Auto Detailing Services",
            hero_desc: "We provide high-quality detailing for all types of vehicles.",
            hero_cta: "Book Now",
            services_title: "Our Services",
            service1: "Exterior Wash & Wax",
            service2: "Interior Deep Cleaning",
            service3: "Ceramic Coating",
            service4: "Paint Correction"
        },
        es: {
            title: "Estudio de Detallado de Autos",
            hero_title: "Servicios de Detallado de Autos Premium",
            hero_desc: "Brindamos detallado de alta calidad para todo tipo de vehículos.",
            hero_cta: "Reservar Ahora",
            services_title: "Nuestros Servicios",
            service1: "Lavado y Encerado Exterior",
            service2: "Limpieza Interior Profunda",
            service3: "Revestimiento Cerámico",
            service4: "Corrección de Pintura"
        },
        ru: {
            title: "Студия Автодетейлинга",
            hero_title: "Премиальные услуги автодетейлинга",
            hero_desc: "Мы предоставляем услуги высокого качества для всех видов автомобилей.",
            hero_cta: "Записаться",
            services_title: "Наши Услуги",
            service1: "Мойка и восковая полировка",
            service2: "Глубокая чистка интерьера",
            service3: "Керамическое покрытие",
            service4: "Коррекция ЛКП"
        },
        uk: {
            title: "Студія Автодетейлінгу",
            hero_title: "Преміальні послуги автодетейлінгу",
            hero_desc: "Ми надаємо послуги високої якості для всіх типів автомобілів.",
            hero_cta: "Записатися",
            services_title: "Наші Послуги",
            service1: "Мийка та воскова поліровка",
            service2: "Глибоке очищення салону",
            service3: "Керамічне покриття",
            service4: "Корекція фарбування"
        }
    };

    function updateLanguage(lang) {
        $("[data-i18n]").each(function () {
            let key = $(this).data("i18n");
            $(this).text(translations[lang][key]);
        });
    }

    $("#language-switcher").on("change", function () {
        let selectedLang = $(this).val();
        updateLanguage(selectedLang);
        localStorage.setItem("selectedLanguage", selectedLang);
    });

    let savedLang = localStorage.getItem("selectedLanguage") || "en";
    $("#language-switcher").val(savedLang);
    updateLanguage(savedLang);
});