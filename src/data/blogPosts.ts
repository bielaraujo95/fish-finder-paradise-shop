
import { BlogPostProps } from "@/types/blog";

export const blogPosts: BlogPostProps[] = [
  {
    id: "1",
    title: "As melhores técnicas de pesca para iniciantes",
    content: `
      <p>A pesca é uma atividade que une esporte, lazer e contato com a natureza. Para os iniciantes, conhecer as técnicas básicas é fundamental para garantir uma experiência positiva desde as primeiras pescarias.</p>
      
      <h2>Técnicas básicas</h2>
      <p>Começar pela pesca de barranco é uma excelente forma de aprender os fundamentos. Com uma vara simples e iscas naturais como minhocas ou massas, é possível capturar várias espécies em lagos e rios calmos.</p>
      
      <h2>Escolha do equipamento</h2>
      <p>Para iniciantes, recomendamos varas de 1,80m a 2,10m, molinetes de tamanho médio e linhas entre 0.30mm e 0.40mm, que permitem a captura de diversas espécies sem complicações técnicas.</p>
      
      <h2>Iscas recomendadas</h2>
      <p>As iscas naturais são as mais indicadas para quem está começando: minhocas, massas, milho e camarão costumam ser eficientes para uma variedade de peixes.</p>
    `,
    summary: "Descubra as técnicas essenciais e equipamentos básicos para iniciar na pesca esportiva com bons resultados desde as primeiras experiências.",
    image: "https://images.unsplash.com/photo-1545489379-98211498c709?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: "2024-04-15",
    author: "Carlos Pescador",
    category: "pesca",
    tags: ["iniciantes", "técnicas", "equipamentos"]
  },
  {
    id: "2",
    title: "Camping às margens dos rios: dicas essenciais",
    content: `
      <p>Acampar às margens de rios combina duas paixões: a pesca e o camping. Este guia traz dicas essenciais para uma experiência segura e confortável.</p>
      
      <h2>Escolha do local</h2>
      <p>Procure terrenos planos, distantes pelo menos 50 metros da margem para evitar inundações repentinas. Verifique a previsão do tempo e o histórico de cheias do rio.</p>
      
      <h2>Equipamentos necessários</h2>
      <p>Além do equipamento básico de camping (barraca, saco de dormir, fogareiro), leve lonas extras, cordas, lanternas potentes e filtros de água.</p>
      
      <h2>Preservação ambiental</h2>
      <p>Lembre-se sempre de seguir a filosofia "leave no trace" (não deixe rastros). Colete todo seu lixo, utilize sabões biodegradáveis e respeite as regras locais de pesca.</p>
    `,
    summary: "Saiba como organizar um camping perfeito às margens dos rios, combinando a paixão pela pesca com a experiência de acampar na natureza.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: "2024-04-10",
    author: "Marina Silva",
    category: "camping",
    tags: ["camping", "rio", "equipamentos"]
  },
  {
    id: "3",
    title: "Trilhas off-road para pescadores aventureiros",
    content: `
      <p>Existem diversos pontos de pesca acessíveis apenas por trilhas off-road, proporcionando experiências únicas para pescadores aventureiros.</p>
      
      <h2>Preparação do veículo</h2>
      <p>Para trilhas de pescaria, seu veículo precisa de pneus adequados para terrenos lamacentos, proteção inferior reforçada e equipamentos de resgate como guincho e pranchas de desatolamento.</p>
      
      <h2>Trilhas famosas</h2>
      <p>No Brasil, a região do Pantanal e a Amazônia oferecem excelentes trilhas off-road que levam a pontos de pesca extraordinários, com espécies raras e combativas.</p>
      
      <h2>Planejamento essencial</h2>
      <p>Nunca vá sozinho, avise sempre alguém sobre sua rota e previsão de retorno, e leve equipamentos de comunicação via satélite para áreas sem sinal de celular.</p>
    `,
    summary: "Conheça as melhores trilhas off-road que levam a pontos de pesca isolados e como preparar seu veículo para estas aventuras.",
    image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: "2024-04-05",
    author: "Felipe Ramos",
    category: "offroad",
    tags: ["offroad", "aventura", "trilhas"]
  },
  {
    id: "4",
    title: "A pescaria no mar aberto: um guia completo",
    content: `
      <p>A pesca em mar aberto oferece desafios e recompensas únicas. Este artigo aborda desde a preparação até as técnicas específicas para esta modalidade.</p>
      
      <h2>Equipamentos específicos</h2>
      <p>Para o mar aberto, são necessários varas mais robustas, molinetes com maior capacidade de linha e resistência à corrosão marinha, além de anzóis e linhas específicos.</p>
      
      <h2>Segurança a bordo</h2>
      <p>Nunca subestime o mar. Coletes salva-vidas, EPIRBs (Emergency Position Indicating Radio Beacon), kit de primeiros socorros e verificação metereológica são essenciais.</p>
      
      <h2>Espécies-alvo</h2>
      <p>No litoral brasileiro, dourados, atuns, marlins e cavalas são espécies muito visadas na pesca oceânica, cada uma exigindo técnicas e equipamentos específicos.</p>
    `,
    summary: "Um guia completo sobre pesca em mar aberto, abordando equipamentos específicos, técnicas e cuidados essenciais para esta modalidade desafiadora.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: "2024-03-28",
    author: "Roberto Costa",
    category: "pesca",
    tags: ["pesca oceânica", "mar aberto", "equipamentos"]
  },
  {
    id: "5",
    title: "Explorando cachoeiras remotas: aventura e pesca",
    content: `
      <p>Cachoeiras isoladas oferecem não apenas beleza natural, mas também oportunidades únicas de pesca em ambientes preservados.</p>
      
      <h2>Planejamento da expedição</h2>
      <p>Pesquise bem antes de partir. Muitas cachoeiras com bons pontos de pesca estão em áreas de difícil acesso, exigindo caminhadas longas ou até mesmo rapel.</p>
      
      <h2>Espécies de peixes</h2>
      <p>Em cachoeiras brasileiras, é comum encontrar espécies como lambaris, piaus, traíras e até mesmo trutas em regiões mais frias, cada uma exigindo técnicas específicas.</p>
      
      <h2>Equipamento de camping ultralight</h2>
      <p>Como você provavelmente precisará carregar todo o equipamento, invista em itens leves e compactos, priorizando o essencial para a pesca e sobrevivência.</p>
    `,
    summary: "Descubra como planejar expedições para pescar em cachoeiras remotas, combinando a paixão pela pesca com aventuras em cenários naturais espetaculares.",
    image: "https://images.unsplash.com/photo-1564710550907-467d09c77bf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: "2024-03-20",
    author: "Andréa Campos",
    category: "aventuras",
    tags: ["cachoeiras", "pesca em água doce", "expedição"]
  },
  {
    id: "6",
    title: "Equipamentos essenciais para camping em família",
    content: `
      <p>Planejar um camping em família requer atenção especial aos equipamentos, especialmente quando se combina com atividades como a pesca.</p>
      
      <h2>Barracas adequadas</h2>
      <p>Opte por modelos espaçosos e com divisórias para garantir privacidade. Para famílias com 4 pessoas, barracas de 6 lugares oferecem o conforto necessário.</p>
      
      <h2>Cozinha de camping</h2>
      <p>Invista em um bom fogareiro de duas bocas, utensílios compactos e um sistema eficiente para armazenar e resfriar alimentos, especialmente os peixes que serão capturados.</p>
      
      <h2>Atividades para crianças</h2>
      <p>Tenha sempre jogos, livros e atividades que possam entreter as crianças enquanto os adultos pescam ou durante momentos de descanso.</p>
    `,
    summary: "Saiba quais equipamentos são essenciais para garantir conforto e segurança em campings familiares que incluem atividades de pesca.",
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: "2024-03-15",
    author: "Paulo Mendes",
    category: "camping",
    tags: ["família", "equipamentos", "conforto"]
  }
];
