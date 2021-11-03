var quiztitle = "Teste seu conhecimento sobre Covid-19";

var quiz = [{
        "question": "Como é contraido o virus da COVID-19 ?",
        "image": "https://images.trustinnews.pt/uploads/sites/5/2021/02/GettyImages-157197936-1600x896.jpg",
        "choices": [
            "Gotículas de saliva",
            "Atraves de espirros",
            "Tosse secas",
            "Aperto de mão",
        ],
        "correct": "Atraves de espirros",
    },
    {
        "question": "Quais são os sintomas comuns de COVID-19?",
        "image": "https://p2.trrsf.com/image/fget/cf/600/400/images.terra.com/2020/03/20/111373397sintomasporcomparativa-covid-nc.png",
        "choices": [
            "Tosse sem para",
            "Febre",
            "Cansaço",
            "Perda de paladar",
            "Diarreia",
            "Tudo acima",
        ],
        "correct": "Tudo acima",
    },
    {
        "question": "Qual a Forma Correta Para se proteger contra a COVID-19?",
        "image": "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2020/04/03/cd81908342303b27ded44dfa847b5c00.jpg",
        "choices": [
            "Lavar as mãos e evitar aglomeração",
            "Só a máscara é o suficiente",
            "Usar máscara, lavar as mãos e evitar aglomerações, Mantenha o Ambientes bem Ventilados",
        ],
        "correct": "Usar máscara, lavar as mãos e evitar aglomerações, Mantenha o Ambientes bem Ventilados",
    },
    {
        "question": "Quem é o grupo de risco do COVID-19?",
        "image": "http://www.cruzeiro.sp.gov.br/images/noticias/546.jpg",
        "choices": [
            "Crianças",
            "Pessoas com condições de saúde precária, principalmente idosos",
            "Atletas",
            "Pessoas com sangue tipo A ",
        ],
        "correct": "Pessoas com condições de saúde precária, principalmente idosos",


    },
    {
        "question": "Quantas vacinas ja foram criadas Para diminuição do COVID-19?",
        "image": "https://wp.rededorsaoluiz.com.br/wp-content/uploads/2021/02/vacina-coronavirus.jpg",
        "choices": [
            "5",
            "6",
            "8",
            "3",
        ],
        "correct": "6",
    },
    {
        "question": "Quantas Pessoas Foram a obito por culpa da COVID-19 no RJ?",
        "image": "https://static.poder360.com.br/2020/11/Coronavirus-Covid19-14.out_.2020-1-868x644.jpg",
        "choices": [
            "11.273",
            "125.451",
            "68.229",
            "75.214",
        ],
        "correct": "68.229",
    },
    {
        "question": "A partir de qual temperatura, pode se considerar que a pessoa esta infectada ?",
        "image": "https://agencia.fapesp.br/agencia-novo/imagens/noticia/34386.jpg",
        "choices": [
            "36 ° C",
            "33 ° C",
            "38 ° C",
        ],
        "correct": "38 ° C",
    },
    {
        "question": "Quando foi decretado isolamento total RJ?",
        "image": "https://f.i.uol.com.br/fotografia/2021/03/14/1615728193604e0e412871a_1615728193_3x2_rt.jpg",
        "choices": [
            "25/10/2019",
            "11/03/2020",
            "02/04/2020",
            "19/03/2020",
            "15/04/2020",
        ],
        "correct": "19/03/2020",
    },
    {
        "question": "Em qual cidade da china a COVID-19 Foi identificada ?",
        "image": "https://imagens.brasil.elpais.com/resizer/aVrpFORHLG1Aw0i-mHb7Nd8UxJI=/1200x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/L3OCJMMGNQJLLAFQ3EJKBIX2B4.jpg",
        "choices": [
            "cidade de xangai",
            "cidade de Wuhan",
            "Yangzhou",
            "Xiamen",
        ],
        "correct": "cidade de Wuhan",
    },
    {
        "question": "Qual a vacina que da 60% de segurança contra o COVID-19",
        "image": "https://exame.com/wp-content/uploads/2020/10/outubro_sem_vacina.jpg",
        "choices": [
            "CoronaVAC",
            "Astrozenca",
            "PFizer e Biontech",
            "janssen",
            "Sputinik v",
            "Covaxin",
        ],
        "correct": "CoronaVAC",
    },
];

/******* No need to edit below this line *********/
var currentquestion = 0,
    score = 0,
    submt = true,
    picked;
jQuery(document).ready(function(e) {
    function h(i) { return e(document.createElement("div")).text(i).html() }

    function b(k) { if (typeof k !== "undefined" && e.type(k) == "array") { e("#choice-block").empty(); for (var j = 0; j < k.length; j++) { e(document.createElement("li")).addClass("choice choice-box").attr("data-index", j).text(k[j]).appendTo("#choice-block") } } }

    function d() {
        submt = true;
        e("#explanation").empty();
        e("#question").text(quiz[currentquestion]["question"]);
        e("#pager").text("Questão " + Number(currentquestion + 1) + " de " + quiz.length);
        if (quiz[currentquestion].hasOwnProperty("image") && quiz[currentquestion]["image"] != "") { if (e("#question-image").length == 0) { e(document.createElement("img")).addClass("question-image").attr("id", "question-image").attr("src", quiz[currentquestion]["image"]).attr("alt", h(quiz[currentquestion]["question"])).insertAfter("#question") } else { e("#question-image").attr("src", quiz[currentquestion]["image"]).attr("alt", h(quiz[currentquestion]["question"])) } } else { e("#question-image").remove() }
        b(quiz[currentquestion]["choices"]);
        c()
    }

    function f(i) {
        if (quiz[currentquestion]["choices"][i] == quiz[currentquestion]["correct"]) {
            e(".choice").eq(i).css({ "background-color": "#50D943" });
            e("#explanation").html("<strong>Correto!</strong> " + h(quiz[currentquestion]["explanation"]));
            score++
        } else {
            e(".choice").eq(i).css({ "background-color": "#D92623" });
            e("#explanation").html("<strong>Incorreto!</strong> " + h(quiz[currentquestion]["explanation"]))
        }
        currentquestion++;
        e("#submitbutton").html("PRÓXIMA QUESTÃO &raquo;").on("click", function() {
            if (currentquestion == quiz.length) { a() } else {
                e(this).text("Verifique a resposta").css({ color: "#222" }).off("click");
                d()
            }
        })
    }

    function c() {
        e(".choice").on("mouseover", function() { e(this).css({ "background-color": "#e1e1e1" }) });
        e(".choice").on("mouseout", function() { e(this).css({ "background-color": "#fff" }) });
        e(".choice").on("click", function() {
            picked = e(this).attr("data-index");
            e(".choice").removeAttr("style").off("mouseout mouseover");
            e(this).css({ "border-color": "#222", "font-weight": 700, "background-color": "#c1c1c1" });
            if (submt) {
                submt = false;
                e("#submitbutton").css({ color: "#000" }).on("click", function() {
                    e(".choice").off("click");
                    e(this).off("click");
                    f(picked)
                })
            }
        })
    }

    function a() {
        e("#explanation").empty();
        e("#question").empty();
        e("#choice-block").empty();
        e("#submitbutton").remove();
        e("#question").text("você acertou " + score + " de " + quiz.length + " Questões.");
        e(document.createElement("h2")).css({ "text-align": "center", "font-size": "4em" }).text(Math.round(score / quiz.length * 100) + "%").insertAfter("#question")
    }

    function g() {
        if (typeof quiztitle !== "undefined" && e.type(quiztitle) === "string") { e(document.createElement("h1")).text(quiztitle).appendTo("#frame") } else { e(document.createElement("h1")).text("Quiz").appendTo("#frame") }
        if (typeof quiz !== "undefined" && e.type(quiz) === "array") {
            e(document.createElement("p")).addClass("pager").attr("id", "pager").text("Questão 1 of " + quiz.length).appendTo("#frame");
            e(document.createElement("h2")).addClass("question").attr("id", "question").text(quiz[0]["question"]).appendTo("#frame");
            if (quiz[0].hasOwnProperty("image") && quiz[0]["image"] != "") { e(document.createElement("img")).addClass("question-image").attr("id", "question-image").attr("src", quiz[0]["image"]).attr("alt", h(quiz[0]["question"])).appendTo("#frame") }
            e(document.createElement("p")).addClass("explanation").attr("id", "explanation").html("&nbsp;").appendTo("#frame");
            e(document.createElement("ul")).attr("id", "choice-block").appendTo("#frame");
            b(quiz[0]["choices"]);
            e(document.createElement("div")).addClass("choice-box").attr("id", "submitbutton").text("Verifique a resposta").css({ "font-weight": 700, color: "#222", padding: "30px 0" }).appendTo("#frame");
            c()
        }
    }
    g()
});
