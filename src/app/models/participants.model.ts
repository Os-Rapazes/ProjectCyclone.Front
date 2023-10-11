export interface Participant {
    name: string,
    fotoPath: string,
    role: string
    description: string
}

export const participants: Participant[] = [
    {
        name: "Gustavo Anacleto",
        fotoPath: "gustavo-img.jpg",
        role:"Full Stack",
        description:" Olá, meu nome é Gustavo Santimaria Anacleto, tenho 18 anos e sou um desenvolvedor Full-Stack. \n Sou formado em técnico em desenvolvimento de sistemas pelo Senai, atualmente curso Ciência da Computação na Unimetrocamp. \n Estas são algumas das tecnologias que sei e que utilizo nos meus projetos do trabalho: \n Competências: Scrum · Angular (Framework) · MySQL · RxJS · Entity Framework (EF) Core · OData · .NET Framework "
    },
    {
        name: "Keven Kebler",
        fotoPath: "keven-img.jfif",
        role:"Back End",
        description:" Olá, meu nome é Keven. Tenho 18 anos. Sou técnico em Desenvolvimento de Sistema pelo SENAI Zerbini. Atualmente trabalho na IMA (como estagiário) e sou desenvolvedor de software. Utilizo principalmente a linguagem PHP e JavaScript, e meu foco é no Back-end de aplicações."
    },
    {
        name: "Vitor Augusto",
        fotoPath: "vitor-img.jfif",
        role:"Front End",
        description:"Sou o Vitor Augusto Santana Dreger um jovem de 18 anos, estudante universitário de Ciências da Computação desde o início de 2023. Além de meus compromissos acadêmicos, eu também desempenho o papel de auxiliar administrativo na empresa Massima. sou dedicado aos estudos e busco me aprimorar constantemente em minha carreira e vida pessoal."
    },
    {
        name: "Thiago Lacerda",
        fotoPath: "thiago-img.jfif",
        role:"UI / UX",
        description:"Me chamo Thiago Lacerda, tenho 18 anos, atualmente estou cursando Ciência da Computação na Unimetrocamp. Faço estágio na empresa GRV Software em Vinhedo, na área de desenvolvimento e infraestrutura. Sou apaixonado por tecnologia e novos desafios."
    },
    {
        name: "Pedro Lemos",
        fotoPath: "pedro-img.jfif",
        role:"Back End",
        description:"Pedro Henrique Lemos Santimaria formado em técnico de desenvolvimento de sistemas pelo senai, atualmente cursando ciências da computação na Unimetrocamp, desenvolver Back-End .NET"
    }
]