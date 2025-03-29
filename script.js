$(document).ready(function () {
    const translations = {
        en: {
            title: "Auto Detailing Studio",
            header_title: "Auto Detailing Studio",
            service1: "Exterior Cleaning",
            service2: "Interior Detailing",
            service3: "Paint Protection",
            service1_desc: "Complete exterior wash, waxing, and polishing for a shining car.",
            service2_desc: "Deep cleaning of car interiors, including seats and dashboard.",
            service3_desc: "High-quality ceramic coating to protect your paintwork."
        },
        ru: {
            title: "Студия Автодетейлинга",
            header_title: "Студия Автодетейлинга",
            service1: "Внешняя мойка",
            service2: "Чистка салона",
            service3: "Защита краски",
            service1_desc: "Полная внешняя мойка, полировка и восковая обработка.",
            service2_desc: "Глубокая чистка салона, включая сиденья и приборную панель.",
            service3_desc: "Высококачественное керамическое покрытие для защиты краски."
        },
        uk: {
            title: "Авто Детейлінг Студія",
            header_title: "Авто Детейлінг Студія",
            service1: "Зовнішнє очищення",
            service2: "Детейлінг салону",
            service3: "Захист фарби",
            service1_desc: "Повне миття, віскування та полірування автомобіля.",
            service2_desc: "Глибоке очищення салону, включаючи сидіння і панель приладів.",
            service3_desc: "Якісне керамічне покриття для захисту лакофарбового покриття."
        },
        es: {
            title: "Estudio de Detallado de Autos",
            header_title: "Estudio de Detallado de Autos",
            service1: "Limpieza Exterior",
            service2: "Detallado Interior",
            service3: "Protección de Pintura",
            service1_desc: "Lavado exterior completo, encerado y pulido para un brillo impecable.",
            service2_desc: "Limpieza profunda de interiores, incluyendo asientos y tablero.",
            service3_desc: "Recubrimiento cerámico de alta calidad para proteger la pintura."
        }
    };

    $(".lang-option").click(function () {
        let lang = $(this).data("lang");
        localStorage.setItem("selectedLanguage", lang);
        updateLanguage(lang);
    });

    function updateLanguage(lang) {
        $("[data-i18n]").each(function () {
            $(this).text(translations[lang][$(this).data("i18n")]);
        });
    }

    updateLanguage(localStorage.getItem("selectedLanguage") || "en");
});