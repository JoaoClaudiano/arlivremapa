# AR Livre Mapa

Aplicativo React + Firebase para mapear espaços ao ar livre para exercícios, bem-estar e lazer.

## Funcionalidades

- Mapa interativo com espaços georreferenciados
- Filtros por tipo de espaço: praças, trilhas, academias ao ar livre
- Páginas de detalhes de cada espaço
- Blog com dicas de exercícios e bem-estar
- Integração com Firebase Firestore
- Preparado para AdSense (monetização)

# arvore

arlivremapa/
├─ public/
│   ├─ index.html   ← Ponto de entrada HTML, React “mounta” no <div id="root">
│   └─ favicon.ico  ← Ícone do site
│
├─ src/
│   ├─ firebase.js  ← Configura Firebase e Firestore (db)
│   ├─ styles.css   ← Estilos globais
│   ├─ index.js     ← Ponto de entrada React
│   ├─ App.js       ← Roteamento do site e estrutura geral (Header/Footer + páginas)
│
│   ├─ components/
│   │   ├─ Header.js     ← Barra superior, links Home/Blog
│   │   ├─ Footer.js     ← Rodapé
│   │   ├─ MapView.js    ← Mapa interativo, lê dados de Firestore → exibe marcadores
│   │   ├─ SpaceCard.js  ← Card resumido de cada espaço
│   │   ├─ BlogList.js   ← Lista de posts do blog
│   │   └─ BlogPost.js   ← Página detalhada de um post
│
│   ├─ pages/
│   │   ├─ Home.js        ← Página inicial → contém <MapView />
│   │   ├─ SpaceDetail.js ← Página de detalhes de um espaço específico
│   │   └─ Blog.js        ← Página com lista de posts do blog
│
├─ .gitignore       ← Arquivos que não vão pro GitHub
├─ package.json     ← Dependências e scripts do projeto
└─ README.md        ← Documentação do projeto

-----------------------------------------------------------
FLUXO DE DADOS PRINCIPAL:

Firestore (db)
├─ spaces
│   └─ cada documento = um espaço (nome, coordenadas, tipo, fotos, tags, ratings)
├─ blog_posts
│   └─ cada documento = um post (title, content, author, tags)

Fluxo:
Firestore → MapView.js → Home.js → Renderiza marcadores no mapa
Firestore → SpaceDetail.js → Renderiza detalhes do espaço clicado
Firestore → Blog.js → Lista posts
Firestore → BlogPost.js → Renderiza post detalhado

Roteamento (App.js):
"/"             → Home.js
"/space/:id"    → SpaceDetail.js
"/blog"         → Blog.js
"/blog/:id"     → BlogPost.js

Header.js / Footer.js → componentes fixos em todas as páginas

# Autor

João Claudiano

