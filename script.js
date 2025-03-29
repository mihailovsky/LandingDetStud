$(document).ready(function () {
    const translations = {
        en: {
            title: "Auto Detailing Studio",
            header_title: "Auto Detailing Studio",
            hero_title: "Premium Auto Detailing Services",
            hero_desc: "We provide high-quality detailing for all types of vehicles.",
            hero_cta: "Book Now",
            services_title: "Our Services",
            tab1: "Exterior",
            tab2: "Interior",
            tab3: "Ceramic Coating",
            tab4: "Paint Protection",
            service1_desc: "Complete exterior detailing including wash, wax, and polishing.",
            service2_desc: "Deep cleaning of seats, carpets, dashboard, and air vents.",
            service3_desc: "Long-lasting ceramic coating to protect your car’s paint.",
            service4_desc: "Paint correction and scratch removal for a flawless look."
        },
        ru: {
            title: "Студия Автодетейлинга",
            header_title: "Студия Автодетейлинга",
            hero_title: "Премиальные услуги автодетейлинга",
            hero_desc: "Мы предоставляем услуги высокого качества для всех видов автомобилей.",
            hero_cta: "Записаться",
            services_title: "Наши Услуги",
            tab1: "Экстерьер",
            tab2: "Интерьер",
            tab3: "Керамическое покрытие",
            tab4: "Защита краски",
            service1_desc: "Полная мойка, восковая полировка и защита кузова.",
            service2_desc: "Глубокая чистка сидений, ковров, приборной панели и вентиляции."
        }
    };

    function updateLanguage(lang) {
        $("[data-i18n]").each(function () {
            let key = $(this).data("i18n");
            $(this).text(translations[lang][key]);
        });
    }

    $("#language-switcher").on("change", function () {
        let lang = $(this).val();
        updateLanguage(lang);
        localStorage.setItem("selectedLanguage", lang);
    });

    updateLanguage(localStorage.getItem("selectedLanguage") || "en");
});