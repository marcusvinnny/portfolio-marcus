// DADOS DO CURRÍCULO EXTRAÍDOS DO PDF
const dados = {
    nome: "Marcus Vinycius Carvalho Barbosa",
    email: "vinyciusm42@gmail.com",
    telefone: "(98) 98279-5517",
    linkedin: "https://www.linkedin.com/in/marcus-vinycius-carvalho-barbosa-7b68a51a2",

    resumo:
"Sou apaixonado pela área de Tecnologia da Informação e dedicado ao aprendizado contínuo. Tenho base sólida em lógica de programação, estruturas de dados e experiência prática com Python, Fortran e bancos de dados SQL.",

    sobre:
"Tenho experiência com programação, pesquisa acadêmica, LaTeX e desenvolvimento Back-End. Busco ingressar no mercado de TI, aplicando meus conhecimentos e evoluindo profissionalmente.",

    formacao: [
        "Bacharelado em Física — Universidade Federal do Piauí (UFPI) — 2022–Atual",
        "Tecnologia em ADS — Centro Universitário Santo Agostinho — 2025–Atual",
        "Técnico em Administração — IFMA — 2019–2021"
    ],

    skills: [
        "Python", "Java", "Fortran", "HTML", "CSS", "JavaScript",
        "PostgreSQL", "MySQL", "Git", "VSCode", "Linux", "LaTeX"
    ]
};

// INJETAR NO HTML
document.getElementById("nome").textContent = dados.nome;
document.getElementById("email").textContent = dados.email;
document.getElementById("telefone").textContent = dados.telefone;

const link = document.getElementById("linkedin");
link.textContent = "Meu LinkedIn";
link.href = dados.linkedin;

document.getElementById("resumo").textContent = dados.resumo;
document.getElementById("sobreTexto").textContent = dados.sobre;

// Formação
const listaFormacao = document.getElementById("listaFormacao");
dados.formacao.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    listaFormacao.appendChild(li);
});

// Skills
const listaSkills = document.getElementById("listaSkills");
dados.skills.forEach(skill => {
    const div = document.createElement("div");
    div.classList.add("skill");
    div.textContent = skill;
    listaSkills.appendChild(div);
});

