    const translations = {
        pt: {
            navbar: ["Quem Sou", "Formações", "Projetos", "Contatos"],
            languageLabel: "Linguagem:",
            title: "Richard Masayuki",
            subtitle: "Desenvolvedor Web",
            softSkills: "Soft Skills:",
            about: `Sou desenvolvedor web em início de carreira, com grande interesse em tecnologias voltadas à criação de soluções inovadoras. Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas, com experiência prática no desenvolvimento de sistemas web para otimizar processos em setores públicos, por meio do trabalho no Departamento de Tecnologia da Prefeitura Municipal de Três Lagoas.
        
        Durante minha trajetória acadêmica e profissional, desenvolvi habilidades em tecnologias como JavaScript, React e TypeScript. Além disso, tenho familiaridade com metodologias ágeis como Scrum e sou um defensor do desenvolvimento sustentável em soluções tecnológicas. Acredito no poder da colaboração e busco me atualizar constantemente com as melhores práticas de desenvolvimento, visando soluções eficientes, escaláveis e de fácil manutenção.
        
        Apesar de estar em início de carreira como desenvolvedor júnior, dedico-me ao aprimoramento contínuo, aplicando meus conhecimentos em projetos reais e buscando a excelência. Meu objetivo é crescer profissionalmente, aprender continuamente e contribuir para o avanço da tecnologia e das equipes com as quais colaboro.`,
            formacoes: "Formações",
            formacoesList: [
                { title: "UNESP - 2019", description: "Graduação em Análise e Desenvolvimento de Sistemas." },
                { title: "UNICESUMAR - 2022 - 2025.1", description: "MBA em Desenvolvimento de Sistemas." },
                { title: "Alura - 2022", description: "Curso de Desenvolvimento Frontend com React." },
                { title: "Alura - 2023", description: "Curso de Backend com Node.js." },
                { title: "DIO - 2024", description: "Curso de Engenharia de Software com foco em práticas ágeis." },
                { title: "Linux Foundation - 2024", description: "Certificação em Green Software para práticas sustentáveis no desenvolvimento." }
            ],
            projetos: [
                "Pesquisa de Clima",
                "Página de Login",
                "Jogo Mario",
                "Sistema de Pedido de Comida",
                "Landing Page",
                "Trâmite de Licitação"
            ],
            
            contatos: ["Contatos", "Vamos nos conectar! 🌐"],
        },
        
        en: {
            navbar: ["About Me", "Education", "Projects", "Contacts"],
            languageLabel: "Language:",
            title: "Richard Masayuki",
            subtitle: "Web Developer",
            softSkills: "Soft Skills:",
            about: "I am an early-career web developer with a strong interest in technologies focused on creating innovative solutions. I am currently a student of Systems Analysis and Development, with practical experience in developing web systems to optimize processes in public sectors through my work at the Technology Department of the Municipality of Três Lagoas. Throughout my academic and professional journey, I have developed skills in technologies such as JavaScript, React, and TypeScript. Additionally, I am familiar with agile methodologies like Scrum and advocate for sustainable development in technological solutions. I believe in the power of collaboration and strive to stay updated on best development practices, aiming for efficient, scalable, and easily maintainable solutions. Although I am at the beginning of my career as a junior developer, I am dedicated to continuous improvement, applying my knowledge to real-world projects and pursuing excellence. My goal is to grow professionally, keep learning, and contribute to the advancement of technology and the teams I work with.",
            formacoes: "Education",
            formacoesList: [
                { title: "UNESP - 2019", description: "Bachelor's in Systems Analysis and Development." },
                { title: "UNICESUMAR - 2022 - 2025.1", description: "MBA in Systems Development." },
                { title: "Alura - 2022", description: "Frontend Development with React." },
                { title: "Alura - 2023", description: "Backend Development with Node.js." },
                { title: "DIO - 2024", description: "Software Engineering course with a focus on agile practices." },
                { title: "Linux Foundation - 2024", description: "Green Software certification for sustainable development practices." }
            ],
            projetos: ["Weather Search", "Login Page", "Mario Game", "Food Ordering System", "Landing Page", "Bid Tracking"],
            contatos: ["Contacts", "Let's connect! 🌐"],
        },
        
        jp: {
            navbar: ["自己紹介", "学歴", "プロジェクト", "連絡先"],
            languageLabel: "言語:",
            title: "リチャード・マサユキ",
            subtitle: "ウェブ開発者",
            softSkills: "ソフトスキル:",
            about: `私はキャリアを始めたばかりのウェブ開発者であり、革新的なソリューションを生み出す技術に強い関心を持っています。現在、システム分析と開発を学ぶ学生であり、Três Lagoas市の技術部門での仕事を通じて、公共部門のプロセスを最適化するためのウェブシステム開発に実践的な経験があります。

            学業や職業の過程で、JavaScript、React、TypeScriptといった技術に関するスキルを身に付けました。また、Scrumのようなアジャイル手法に精通しており、技術ソリューションにおける持続可能な開発を推進しています。協力の力を信じ、効率的で拡張性があり、メンテナンスが容易なソリューションを目指して、最新の開発手法を常に学び続けています。
            
            ジュニア開発者としてキャリアを始めたばかりではありますが、継続的な改善に取り組み、実際のプロジェクトに知識を応用しながら、卓越性を追求しています。私の目標は、専門的に成長し続け、学び続け、技術の進歩と協力するチームに貢献することです。`,
            formacoes: "学歴",
            formacoesList: [
                { title: "UNESP - 2019", description: "システム分析と開発の学士号。" },
                { title: "UNICESUMAR 2022 - 2025.1", description: "システム開発のMBA。" },
                { title: "Alura - 2022", description: "Reactによるフロントエンド開発。" },
                { title: "Alura - 2023", description: "Node.jsによるバックエンド開発。" },
                { title: "DIO - 2024", description: "アジャイル手法に焦点を当てたソフトウェアエンジニアリングのコース。" },
                { title: "Linux Foundation - 2024", description: "持続可能な開発手法のためのグリーンソフトウェア認定。" }
            ],
            projetos: ["天気検索", "ログインページ", "マリオゲーム", "フード注文システム", "ランディングページ", "入札管理"],
            contatos: ["連絡先", "つながりましょう！🌐"],
        },
    };

    const elements = {
        navbar: document.querySelectorAll(".navbar-nav .nav-link"),
        languageLabel: document.querySelector("label[for='language']"),
        title: document.querySelector(".card-apresent h1"),
        subtitle: document.querySelector(".card-apresent h3"),
        softSkills: document.querySelector(".card-apresent p"),
        about: document.querySelector(".text-apresent"),
        formacoes: document.querySelector(".formacoes h2"),
        projetos: document.querySelectorAll(".projetos-cards .card-title"),
        contatos: [document.querySelector(".contatos h2"), document.querySelector(".contatos p")],
    };

    document.getElementById("language").addEventListener("change", (event) => {
        const lang = event.target.value;
        const translation = translations[lang];

        // Navbar
        elements.navbar.forEach((el, index) => (el.textContent = translation.navbar[index]));

        // Labels and sections
        elements.languageLabel.textContent = translation.languageLabel;
        elements.title.textContent = translation.title;
        elements.subtitle.textContent = translation.subtitle;
        elements.softSkills.textContent = translation.softSkills;
        elements.about.textContent = translation.about;
        elements.formacoes.textContent = translation.formacoes;

        // Projects
        elements.projetos.forEach((el, index) => (el.textContent = translation.projetos[index]));

        // Contacts
        elements.contatos[0].textContent = translation.contatos[0];
        elements.contatos[1].textContent = translation.contatos[1];

         // Formações
    document.getElementById("formacoes-title").textContent = translation.formacoes;
    document.getElementById("unesp-title").textContent = translation.formacoesList[0].title;
    document.getElementById("unesp-description").textContent = translation.formacoesList[0].description;
    document.getElementById("unicesumar-title").textContent = translation.formacoesList[1].title;
    document.getElementById("unicesumar-description").textContent = translation.formacoesList[1].description;
    document.getElementById("alura-title-1").textContent = translation.formacoesList[2].title;
    document.getElementById("alura-description-1").textContent = translation.formacoesList[2].description;
    document.getElementById("alura-title-2").textContent = translation.formacoesList[3].title;
    document.getElementById("alura-description-2").textContent = translation.formacoesList[3].description;
    document.getElementById("dio-title").textContent = translation.formacoesList[4].title;
    document.getElementById("dio-description").textContent = translation.formacoesList[4].description;
    document.getElementById("linux-foundation-title").textContent = translation.formacoesList[5].title;
    document.getElementById("linux-foundation-description").textContent = translation.formacoesList[5].description;

    // Projetos
    document.getElementById("projetos-title").textContent = translation.projetosTitle;
    document.getElementById("projetos-subtitle").textContent = translation.projetosSubtitle;
    document.getElementById("projetos-design").textContent = translation.projetosDesign;

    const projectCards = [
        { id: "clima-title", title: translation.projetos[0] },
        { id: "login-title", title: translation.projetos[1] },
        { id: "mario-title", title: translation.projetos[2] },
        { id: "yakissoba-title", title: translation.projetos[3] },
        { id: "landingPage-title", title: translation.projetos[4] },
        { id: "tramite-title", title: translation.projetos[5] }
    ];

    projectCards.forEach(card => {
        document.getElementById(card.id).textContent = card.title;
    });








    
    });
