# Portfolio Blueprint -- Joao Felipe Schwaab

> Fonte unica de verdade para implementacao do portfolio.
> Cada decisao aqui tem um proposito estrategico: conversao, diferenciacao e percepcao de qualidade.

---

## 1. Visao Geral do Projeto

### Objetivo
Criar um portfolio que funcione como uma **maquina de conversao**, nao apenas um showcase visual. O site posiciona Joao Felipe Schwaab como especialista em **landing pages de alta conversao + desenvolvimento mobile**, atraindo clientes freelance e recrutadores simultaneamente.

### Posicionamento
> "Eu nao construo paginas -- eu construo argumentos visuais que guiam o usuario do interesse a acao."

### Stack Tecnica
- **Framework:** Next.js 16.2.1 (App Router)
- **UI:** React 19 + Tailwind CSS 4
- **Linguagem:** TypeScript
- **Animacoes:** Framer Motion + CSS Animations
- **Deploy:** Vercel
- **Idiomas:** Bilingue PT/EN com toggle

### Restricoes
- ZERO conteudo generico
- ZERO frases cliche ("Ola, eu sou...", "Apaixonado por tecnologia")
- ZERO aparencia de template
- Tudo deve parecer feito sob medida e premium

---

## 2. Arquitetura do Site

### Sitemap

```
/              --> redireciona para /pt (via proxy.ts)
/pt            --> Versao em portugues (default)
/en            --> Versao em ingles
```

Site single-page com smooth-scroll entre secoes. Sem rotas separadas para projetos ou sobre -- experiencia imersiva e focada em conversao.

### Hierarquia de Secoes

```
1. Hero ............... Identidade + proposta de valor (2 segundos)
2. Manifesto .......... Filosofia / por que contratar
3. Stats .............. Prova social em numeros
4. Projetos ........... Bento grid com 4-6 cases
5. Skills ............. Stack tecnica agrupada
6. Sobre .............. Conexao pessoal
7. CTA Final .......... Conversao (WhatsApp + Instagram)
```

### Fluxo do Usuario (Primeiro Acesso --> Conversao)

```
1. Aterrissa no Hero --> le headline + proposta de valor
2. Intriga com Manifesto --> entende a filosofia por tras do trabalho
3. Convence com Stats --> numeros criam confianca
4. Valida com Projetos --> ve trabalho real, demonstracao de qualidade
5. Conecta com Skills --> confirma capacidade tecnica
6. Humaniza com Sobre --> cria empatia e confianca pessoal
7. Converte com CTA --> WhatsApp (acao imediata) ou Instagram (nurturing)
```

**Ponto critico:** Botao flutuante do WhatsApp aparece a partir da secao Stats, capturando quem ja esta convencido antes mesmo de ver os projetos.

### Estrutura de Pastas

```
portfolio-online/
  src/
    app/
      layout.tsx                        -- Root layout minimo
      globals.css                       -- Tokens Tailwind v4 + keyframes + glassmorphism
      [lang]/
        layout.tsx                      -- Layout principal: fonts, metadata, NavBar, Footer
        page.tsx                        -- Compoe todas as secoes
        dictionaries.ts                 -- getDictionary() + hasLocale() + Locale type
        dictionaries/
          pt.json                       -- Toda a copy em portugues
          en.json                       -- Toda a copy em ingles
        not-found.tsx
        sitemap.ts
        robots.ts
        opengraph-image.tsx             -- OG image dinamica
    components/
      ui/
        GlassCard.tsx                   -- Container frosted reutilizavel
        GradientText.tsx                -- Texto com gradient accent
        MagneticButton.tsx              -- CTA com efeito magnetico [use client]
        TechBadge.tsx                   -- Tag de skill/tech
        DeviceMockup.tsx                -- Frame 3D perspectiva phone/laptop
        ScrollReveal.tsx                -- Wrapper animacao entrada [use client]
        CosmicOrb.tsx                   -- Esfera decorativa gradient
      layout/
        NavBar.tsx                      -- Navegacao sticky [use client]
        SectionWrapper.tsx              -- Espacamento + bg radial consistente
        Footer.tsx
        LocaleToggle.tsx                -- Switcher PT/EN [use client]
        FloatingWhatsApp.tsx            -- Botao fixo WhatsApp [use client]
      sections/
        Hero.tsx
        Manifesto.tsx
        Stats.tsx                       -- [use client] (count-up animation)
        Projects.tsx
        Skills.tsx
        About.tsx
        FinalCTA.tsx
    lib/
      constants.ts                      -- Links, telefone, URLs sociais
      types.ts                          -- Dictionary type, Project type, etc.
    hooks/
      useScrollDirection.ts             -- Para NavBar hide/show
      useMousePosition.ts               -- Para efeito magnetico
  public/
    projects/                           -- Screenshots/mockups dos projetos
    icons/                              -- SVGs do tech stack
    joao-avatar.webp                    -- Foto otimizada
  proxy.ts                              -- Deteccao de locale + redirect (NAO middleware.ts!)
```

> **IMPORTANTE (Next.js 16):** O arquivo de routing e `proxy.ts` com funcao `proxy()`, NAO `middleware.ts`. Verificar `node_modules/next/dist/docs/` antes de implementar.

---

## 3. Direcao Visual (UI)

### Estilo: Dark Cosmic Purple

Inspirado na referencia Dtail Studio -- atmosfera espacial/cosmica com profundidade, glassmorphism e efeitos glow. A sensacao deve ser de **premium tech futurista**, nao de "site dark mode generico".

### Paleta de Cores

| Token | HEX | Uso |
|-------|-----|-----|
| `void` | `#0B0A1A` | Background mais profundo, body |
| `cosmos` | `#13112B` | Background de cards, secoes |
| `nebula` | `#1A1035` | Superficies elevadas, nav bg |
| `stardust` | `#2D1B69` | Bordas sutis, dividers |
| `nova` | `#7B2FBE` | Acento primario (botoes, links, highlights) |
| `pulsar` | `#A855F7` | Hover states, ponto medio de gradients |
| `quasar` | `#C084FC` | Acento leve, tags, text highlights sutis |
| `plasma` | `#38BDF8` | Acento secundario (azul eletrico, contraste) |
| `starlight` | `#E2E8F0` | Texto primario |
| `moonbeam` | `#94A3B8` | Texto secundario |
| `glass-white` | `rgba(255,255,255,0.05)` | Fill glassmorphism |
| `glass-border` | `rgba(255,255,255,0.08)` | Borda glassmorphism |

### Gradientes

```css
/* Hero -- radial sutil no background */
radial-gradient(ellipse at 30% 20%, #7B2FBE15 0%, transparent 60%)

/* Accent -- para texto gradient e CTAs */
linear-gradient(135deg, #7B2FBE, #A855F7, #38BDF8)

/* Card glow -- brilho no topo dos cards */
radial-gradient(circle at 50% 0%, #7B2FBE20 0%, transparent 70%)
```

### Tipografia

| Nivel | Fonte | Peso | Tamanho (mobile / desktop) | Line Height | Tracking |
|-------|-------|------|---------------------------|-------------|----------|
| H1 (Hero) | Space Grotesk | 700 | 40px / 72px | 1.0 | -0.03em |
| H2 (Secao) | Space Grotesk | 600 | 28px / 48px | 1.1 | -0.02em |
| H3 (Card) | Space Grotesk | 600 | 20px / 24px | 1.2 | -0.01em |
| Body large | Inter | 400 | 16px / 18px | 1.6 | 0 |
| Body | Inter | 400 | 14px / 16px | 1.6 | 0 |
| Caption/Label | Inter | 500 | 12px / 14px | 1.4 | 0.02em |
| Mono/Code | Geist Mono | 400 | 13px / 14px | 1.5 | 0 |

**Fontes via `next/font/google`:**
- `Space_Grotesk` -- geometrica, moderna, vibe tech sem ser robotica
- `Inter` -- workhorse de UI, legibilidade maxima
- `Geist_Mono` -- ja presente no projeto

### Grid e Espacamento

- **Max width:** 1200px
- **Section padding:** `py-24 md:py-32` (96px / 128px)
- **Base unit:** 8px
- **Escala:** 4, 8, 12, 16, 24, 32, 48, 64, 96
- **Bento grid:** CSS Grid `repeat(12, 1fr)`, `gap-6`
- **Mobile:** coluna unica `px-5`
- **Tablet (768px+):** 2 colunas
- **Desktop (1024px+):** grid 12 colunas completo

### Glassmorphism (receita padrao)

```css
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
}
```

### Tailwind v4 Config (globals.css)

```css
@import "tailwindcss";

@theme inline {
  --color-void: #0B0A1A;
  --color-cosmos: #13112B;
  --color-nebula: #1A1035;
  --color-stardust: #2D1B69;
  --color-nova: #7B2FBE;
  --color-pulsar: #A855F7;
  --color-quasar: #C084FC;
  --color-plasma: #38BDF8;
  --color-starlight: #E2E8F0;
  --color-moonbeam: #94A3B8;
  --font-sans: var(--font-inter);
  --font-display: var(--font-space-grotesk);
  --font-mono: var(--font-geist-mono);
}
```

Isso permite usar `bg-void`, `text-nova`, `border-stardust`, `font-display`, etc.

---

## 4. Componentizacao (Design System)

### Componentes UI

#### `GlassCard`
- **Objetivo:** Container frosted reutilizavel para cards, secoes elevadas
- **Props:** `children`, `className`, `glow` (boolean -- adiciona radial glow no topo)
- **Estados:** default | hover (borda brilha `rgba(255,255,255,0.12)`) | active
- **Responsivo:** Full-width mobile, grid-span variavel desktop
- **Implementacao:** Server Component (apenas CSS)

#### `GradientText`
- **Objetivo:** Texto com gradient accent (linear-gradient aplicado via `bg-clip-text`)
- **Props:** `children`, `as` (tag HTML -- span, h1, h2, etc.)
- **Estados:** N/A (puramente visual)
- **Responsivo:** Herda font-size do parent
- **Implementacao:** Server Component

#### `MagneticButton`
- **Objetivo:** CTA premium com efeito de atracao magnetica no hover
- **Props:** `label`, `href`, `variant` ("primary" | "ghost"), `icon` (opcional)
- **Estados:** default | hover (botao segue cursor em raio de 20px) | active (scale 0.97) | disabled
- **Responsivo:** Full-width mobile, auto-width desktop
- **Implementacao:** Client Component (`"use client"`)
- **Comportamento:** No hover, `onMouseMove` calcula offset entre cursor e centro do botao. Aplica `transform: translate(offsetX, offsetY)` com spring physics via Framer Motion. No mouse leave, volta suavemente ao centro.

#### `TechBadge`
- **Objetivo:** Tag visual para skills/tecnologias com icone
- **Props:** `icon` (SVG path ou componente), `name`, `brandColor` (HEX opcional)
- **Estados:** default (glass bg) | hover (glow na `brandColor`)
- **Responsivo:** Flex wrap, mesmo tamanho em todas as telas
- **Implementacao:** Server Component

#### `DeviceMockup`
- **Objetivo:** Frame 3D de dispositivo (laptop/phone) para screenshots de projetos
- **Props:** `image` (src), `type` ("phone" | "laptop"), `alt`
- **Estados:** default (`rotateY(-5deg)`) | hover (`rotateY(0deg)`, transicao 0.5s)
- **Responsivo:** Escala proporcionalmente, phone usa max-width menor
- **Implementacao:** Server Component (CSS `perspective` + `transform`)

#### `ScrollReveal`
- **Objetivo:** Wrapper que anima entrada de elementos ao entrar no viewport
- **Props:** `children`, `direction` ("up" | "left" | "right"), `delay` (ms)
- **Estados:** hidden (opacity 0, translateY 24px) | visible (opacity 1, translateY 0)
- **Responsivo:** Mesmo comportamento
- **Implementacao:** Client Component (`"use client"`) -- usa `useInView` do Framer Motion com `once: true`

#### `CosmicOrb`
- **Objetivo:** Esfera decorativa com gradient que flutua, criando atmosfera cosmica
- **Props:** `size` (px), `color` (HEX), `position` (absolute coords), `blur` (px)
- **Estados:** sempre animando (CSS `@keyframes float`)
- **Responsivo:** Escala reduzida ou oculta em mobile (< 768px)
- **Implementacao:** Server Component (puro CSS animation)

### Componentes Layout

#### `NavBar`
- **Objetivo:** Navegacao principal sticky
- **Conteudo:** Logo/nome (esquerda) | Links: Projetos, Skills, Sobre, Contato (centro-direita) | LocaleToggle + CTA (direita)
- **Estados:** visible | hidden (slide-up ao rolar para baixo, reaparece ao rolar para cima) | mobile-menu-open (overlay glass fullscreen)
- **Responsivo:** Horizontal desktop, hamburger + overlay mobile
- **Implementacao:** Client Component -- usa `useScrollDirection` hook

#### `SectionWrapper`
- **Objetivo:** Espacamento e background consistente para cada secao
- **Props:** `id` (para anchor scroll), `children`, `className`, `withRadialBg` (boolean)
- **Responsivo:** Padding escala (`py-24 md:py-32`)
- **Implementacao:** Server Component

#### `LocaleToggle`
- **Objetivo:** Switcher PT/EN
- **Conteudo:** Dois botoes ("PT" | "EN") com estado ativo destacado
- **Implementacao:** Client Component -- usa `useRouter` para trocar locale

#### `FloatingWhatsApp`
- **Objetivo:** CTA persistente para WhatsApp
- **Conteudo:** Icone WhatsApp + tooltip "Fale comigo"
- **Estados:** hidden (acima do hero) | visible (aparece apos secao Stats) | pulse (glow a cada 5s)
- **Responsivo:** Fixed bottom-right, mesmo tamanho
- **Implementacao:** Client Component -- detecta scroll position

---

## 5. Secoes (Detalhamento Completo)

---

### 5.1 HERO

**Objetivo estrategico:** Comunicar identidade, especializacao e personalidade em menos de 2 segundos. Criar diferenciacao imediata de portfolios template.

**Layout:**
- Full viewport (`100vh`)
- Texto alinhado a esquerda (60% width desktop)
- Direita: cosmic orbs flutuando + efeito sutil de particulas (CSS-only)
- Base: scroll indicator animado (chevron ou icone de mouse)
- Radial gradient sutil no background

**Copy PT:**
```
[Small caps, Inter 500, 14px, text-quasar, tracking 0.08em]
LANDING PAGES & MOBILE

[H1, Space Grotesk 700, 72px]
Interfaces que

[H1, gradient text (accent gradient)]
convertem.

[Body, Inter 400, 18px, text-moonbeam, max-width 520px]
Projeto, desenvolvo e lanco experiencias digitais
que transformam visitantes em clientes -- da primeira
impressao ao toque final no celular.

[MagneticButton, variant="primary", icon=WhatsApp]
Vamos conversar

[MagneticButton, variant="ghost"]
Ver projetos ↓
```

**Copy EN:**
```
[Small caps]
LANDING PAGES & MOBILE

[H1]
Interfaces that

[H1, gradient]
convert.

[Body]
I design, build, and ship digital experiences
that turn visitors into customers -- from first impression
to the last tap on mobile.

[MagneticButton, variant="primary", icon=WhatsApp]
Let's talk

[MagneticButton, variant="ghost"]
See projects ↓
```

**Micro-interacoes:**
| Elemento | Animacao | Ferramenta | Timing |
|----------|----------|------------|--------|
| Label | Fade-in | Framer Motion | 0s delay, 0.4s duration |
| H1 linha 1 | Stagger letter reveal | Framer Motion | 0.2s delay, 0.03s/char |
| H1 gradient | Stagger letter reveal | Framer Motion | 0.6s delay, 0.03s/char |
| Body | Fade-in + translateY(12px) | Framer Motion | 1.0s delay, 0.5s duration |
| CTAs | Fade-in + translateY(12px) | Framer Motion | 1.2s delay, 0.4s duration |
| Orbs | Float loop (translateY 20px) | CSS @keyframes | Infinito, 6s ease-in-out |
| Background | Parallax sutil no mouse move | CSS perspective + JS mousemove | Continuo |
| Scroll indicator | Fade-in + bounce | CSS @keyframes | 1.5s delay, infinito |

---

### 5.2 MANIFESTO

**Objetivo estrategico:** Diferenciar de "code monkey". Estabelecer pensamento estrategico e sensibilidade de design. Quem le essa secao deve pensar: "esse cara pensa diferente".

**Layout:**
- Duas colunas (desktop): pull quote H2 a esquerda (span 5 cols), texto expandido a direita (span 7 cols)
- Aspas decorativas gigantes (Space Grotesk, 200px, opacity 5%, posicao absoluta)
- Mobile: empilhado, quote acima, texto abaixo

**Copy PT:**
```
[H2, Space Grotesk 600, 48px, text-starlight]
"Uma landing page nao e um site.
E uma maquina de decisao."

[Body, Inter 400, 18px, text-moonbeam]
Cada pixel tem um proposito. Cada scroll conta uma historia.
Eu nao construo paginas -- eu construo argumentos visuais
que guiam o usuario do interesse a acao.

No mobile, isso e ainda mais critico: telas menores exigem
clareza absoluta. Sem distracao. Sem friccao. So conversao.
```

**Copy EN:**
```
[H2]
"A landing page isn't a website.
It's a decision engine."

[Body]
Every pixel has a purpose. Every scroll tells a story.
I don't build pages -- I build visual arguments
that guide users from interest to action.

On mobile, this is even more critical: smaller screens
demand absolute clarity. No distraction. No friction.
Just conversion.
```

**Micro-interacoes:**
| Elemento | Animacao | Ferramenta | Trigger |
|----------|----------|------------|---------|
| Pull quote | Reveal linha por linha | Framer Motion useInView | Scroll |
| Aspas decorativas | Parallax float (velocidade 0.5x) | CSS transform + scroll | Scroll |
| Body text | Fade-in | Framer Motion useInView | Scroll, 0.3s delay |

---

### 5.3 STATS ROW

**Objetivo estrategico:** Prova social rapida atraves de numeros. Construir credibilidade ANTES de mostrar o portfolio. Quem ve numeros fortes ja chega nos projetos predisposto a aprovar.

**Layout:**
- GlassCard full-width contendo row horizontal de 4 stats
- Separados por dividers verticais (1px, glass-border)
- Cada stat: numero grande (Space Grotesk 700, 48px) + label (Inter 400, 14px, text-moonbeam)
- Mobile: grid 2x2

**Conteudo:**

| Stat | Copy PT | Copy EN | Valor | Sufixo |
|------|---------|---------|-------|--------|
| Projetos | Projetos entregues | Projects delivered | 20 | + |
| Satisfacao | Satisfacao dos clientes | Client satisfaction | 100 | % |
| Experiencia | Anos de experiencia | Years of experience | 3 | + |
| Conversao | Taxa media de conversao | Avg conversion rate | 40 | %+ |

> Ajustar numeros para a realidade. Os valores acima sao placeholders.

**Micro-interacoes:**
| Elemento | Animacao | Ferramenta | Trigger |
|----------|----------|------------|---------|
| Numeros | Count-up de 0 ao valor alvo | Framer Motion useMotionValue | useInView, 2s, easeOut |
| Sufixo (+, %) | Fade-in ao completar count | Framer Motion | Delay = duracao do count |
| Card inteiro | Subtle glow pulse | CSS animation | Apos count completar |

---

### 5.4 PROJETOS (Bento Grid)

**Objetivo estrategico:** Demonstrar range (landing pages + mobile) e qualidade. A propria grid e uma demonstracao de dominio de layout -- meta-prova de competencia.

**Layout:**
- H2 header + body subtext
- Bento grid com tamanhos variados (12 colunas):
  - **Card 1:** span 8 cols (landing page, destaque)
  - **Card 2:** span 4 cols (mobile app)
  - **Card 3:** span 6 cols (landing page)
  - **Card 4:** span 6 cols (mobile app)
  - **Card 5:** span 4 cols (landing page)
  - **Card 6:** span 8 cols (mobile ou landing page, destaque)
- Mobile: todos full-width empilhados

**Copy header PT:**
```
[H2, Space Grotesk 600, 48px]
Projetos que entregam resultado.

[Body, Inter 400, 18px, text-moonbeam]
Cada projeto e uma resposta a um problema real.
Da estrategia ao deploy, da primeira tela ao ultimo pixel.
```

**Copy header EN:**
```
[H2]
Projects that deliver results.

[Body]
Each project is a response to a real problem.
From strategy to deploy, from first screen to last pixel.
```

**Estrutura de cada ProjectCard:**
```
[GlassCard com glow]
  [Imagem/DeviceMockup -- screenshot do projeto]
  [Badge: "Landing Page" ou "Mobile App" -- glass bg com dot colorido]
  [H3, Space Grotesk 600, 24px: Nome do Projeto]
  [Body, Inter 400, 16px, text-moonbeam: descricao em 1 linha]
  [TechBadge row: React, Next.js, Flutter, etc.]
  [Hover overlay: "Ver projeto" / "View project" com icone de link externo]
```

**Micro-interacoes:**
| Elemento | Animacao | Ferramenta | Trigger |
|----------|----------|------------|---------|
| Cards | ScrollReveal staggered (fade-up) | Framer Motion | Scroll, 0.1s delay entre cards |
| Imagem | Scale 1.00 --> 1.05 | CSS transition | :hover, 0.4s |
| Borda card | Opacity 0.06 --> 0.15 | CSS transition | :hover, 0.3s |
| Glow no topo | Opacity 0 --> 1 | CSS transition | :hover, 0.3s |
| DeviceMockup | rotateY(-5deg) --> rotateY(0deg) | CSS transition | :hover, 0.5s |
| Overlay | Fade-in com backdrop blur | CSS transition | :hover, 0.3s |

---

### 5.5 SKILLS / TECH STACK

**Objetivo estrategico:** Estabelecer credibilidade tecnica de forma organizada, sem a lista generica de icones que todo portfolio tem. Agrupar por dominio mostra pensamento estruturado.

**Layout:**
- H2 header
- Tres colunas (desktop), cada uma com titulo de grupo + grid de TechBadges
- Mobile: empilhado verticalmente

**Copy header PT:**
```
[H2] As ferramentas certas para cada desafio.
```

**Copy header EN:**
```
[H2] The right tools for every challenge.
```

**Grupos:**

| Grupo | Titulo PT | Titulo EN | Tecnologias |
|-------|-----------|-----------|-------------|
| Frontend | Frontend & Web | Frontend & Web | React, Next.js, TypeScript, Tailwind CSS, Framer Motion |
| Mobile | Mobile | Mobile | React Native, Flutter |
| Tools | Ferramentas & Deploy | Tools & Deploy | Figma, Git, Vercel, Firebase |

> Ajustar tecnologias conforme stack real.

**Micro-interacoes:**
| Elemento | Animacao | Ferramenta | Trigger |
|----------|----------|------------|---------|
| Badges | Fade-in staggered (0.05s entre) | Framer Motion | Scroll, useInView |
| Badge individual | Glow na brandColor | CSS transition | :hover, 0.3s |

**Brand colors sugeridas para hover:**
- React: `#61DAFB`
- Next.js: `#FFFFFF`
- TypeScript: `#3178C6`
- Tailwind: `#06B6D4`
- Flutter: `#02569B`
- Figma: `#F24E1E`
- Vercel: `#FFFFFF`
- Firebase: `#FFCA28`

---

### 5.6 SOBRE (About)

**Objetivo estrategico:** Criar conexao pessoal. Mostrar o humano por tras do codigo. Construir confianca para clientes freelance e relatabilidade para recrutadores.

**Layout:**
- Assimetrico: foto/avatar a esquerda (span 4 cols) com frame glass + gradient ring animado
- Texto a direita (span 8 cols)
- Abaixo do texto: 2 mini GlassCards com icone + fun fact
- Mobile: foto centralizada acima, texto abaixo

**Copy PT:**
```
[H2, Space Grotesk 600, 48px]
Quem esta por tras do codigo.

[Body, Inter 400, 18px, text-moonbeam]
Sou Joao Felipe Schwaab -- desenvolvedor focado em criar
experiencias digitais que funcionam. Comecei com landing
pages porque acredito que a primeira impressao e tudo.
Expandi para mobile porque os usuarios vivem no celular.

Minha obsessao: entender por que as pessoas clicam,
rolam e convertem. Cada projeto e uma nova hipotese
sobre comportamento humano.

[GlassCard mini, icone mapa]
Baseado no RS, Brasil

[GlassCard mini, icone globo]
Disponivel para projetos remotos
```

**Copy EN:**
```
[H2]
The person behind the code.

[Body]
I'm Joao Felipe Schwaab -- a developer focused on building
digital experiences that work. I started with landing
pages because I believe first impressions are everything.
I expanded into mobile because users live on their phones.

My obsession: understanding why people click,
scroll, and convert. Every project is a new hypothesis
about human behavior.

[GlassCard mini, map icon]
Based in RS, Brazil

[GlassCard mini, globe icon]
Available for remote projects
```

**Micro-interacoes:**
| Elemento | Animacao | Ferramenta | Trigger |
|----------|----------|------------|---------|
| Foto | Float sutil (translateY 8px) | CSS @keyframes | Infinito, 4s |
| Gradient ring | Rotacao lenta | CSS @keyframes rotate | Infinito, 8s |
| Texto | Fade-in | Framer Motion useInView | Scroll |
| Fun fact cards | Slide-up (translateY 20px --> 0) | Framer Motion | Scroll, 0.2s delay entre cards |

---

### 5.7 CTA FINAL

**Objetivo estrategico:** Pressao maxima de conversao. Proximo passo absolutamente claro. Friccao zero. Este e o momento de fechar.

**Layout:**
- Full-width com gradiente radial intensificado (mais `nova` visivel)
- Texto centralizado
- 2 CTAs lado a lado (desktop) ou empilhados (mobile)
- Cosmic orbs maiores e mais brilhantes (3-4 orbs, tamanhos variados)
- Spacing extra generoso (py-32 md:py-40)

**Copy PT:**
```
[H2, Space Grotesk 600, 48px, text-starlight]
Tem um projeto em mente?

[H2, gradient text]
Vamos tirar do papel.

[Body, Inter 400, 18px, text-moonbeam, max-width 480px, mx-auto]
Manda uma mensagem e em 24h a gente ja esta
alinhando os proximos passos.

[MagneticButton, variant="primary", icon=WhatsApp, size="large"]
Chamar no WhatsApp

[MagneticButton, variant="ghost", icon=Instagram]
Seguir no Instagram
```

**Copy EN:**
```
[H2]
Got a project in mind?

[H2, gradient]
Let's make it real.

[Body]
Send a message and within 24h we'll be
aligning the next steps.

[MagneticButton, variant="primary", icon=WhatsApp, size="large"]
Message on WhatsApp

[MagneticButton, variant="ghost", icon=Instagram]
Follow on Instagram
```

**Micro-interacoes:**
| Elemento | Animacao | Ferramenta | Trigger |
|----------|----------|------------|---------|
| H2 | Scale 1.02 --> 1.0 + fade-in | Framer Motion | Scroll, useInView |
| CTAs | Efeito magnetico mais forte (raio 30px) + glow pulse idle | Framer Motion + CSS | Hover + idle (5s cycle) |
| Orbs | Mais animados (translateY 30px, 4s) | CSS @keyframes | Infinito |
| Background | Gradiente radial mais intenso | CSS | Estatico |

---

## 6. Animacoes e Interacoes

### Estrategia de Ferramentas

| Ferramenta | Quando Usar | Por Que |
|------------|-------------|---------|
| **Framer Motion** | Scroll reveals, stagger, count-up, magnetic buttons, hero text | Melhor integracao React, `useInView`, `motion`, layout animations |
| **CSS @keyframes** | Float orbs, gradient rotate, marquee, glow pulse, scroll indicator | Zero custo JS, roda no compositor, melhor performance para animacoes always-on |
| **CSS scroll-driven** | Parallax, nav background opacity | Suporte nativo 2024+, zero JS para efeitos scroll-linked |

### Catalogo Completo

| # | Animacao | Tipo | Ferramenta | Trigger | Duracao | Objetivo |
|---|----------|------|------------|---------|---------|----------|
| 1 | Hero text stagger | Letter reveal | Framer Motion | Page load | 1.2s total | Premium feel, guia atencao |
| 2 | Orb float | TranslateY loop | CSS @keyframes | Always | 6s infinite | Atmosfera cosmica |
| 3 | Scroll reveal | Fade + translateY | Framer Motion | useInView | 0.6s | Revelacao progressiva |
| 4 | Count-up | Number increment | Framer Motion | useInView | 2s | Credibilidade via prova |
| 5 | Card hover glow | Box-shadow + border | CSS transition | :hover | 0.3s | Feedback interativo |
| 6 | Magnetic button | Transform translate | Framer Motion + onMouseMove | Mouse | Continuo | Premium feel, incentiva clique |
| 7 | Gradient ring rotate | Transform rotate | CSS @keyframes | Always | 8s infinite | Polish visual |
| 8 | Nav show/hide | TranslateY | Framer Motion | Scroll direction | 0.3s | UX limpo, mais espaco |
| 9 | Mockup perspective | Transform rotateY | CSS transition | :hover | 0.5s | Profundidade 3D |
| 10 | WhatsApp pulse | Scale + opacity | CSS @keyframes | Periodico 5s | 1s | Chama atencao pro CTA |
| 11 | Background parallax | CSS perspective | JS mousemove | Mouse | Continuo | Profundidade, imersao |
| 12 | Scroll indicator bounce | TranslateY | CSS @keyframes | Always | 1.5s infinite | Convida a rolar |

### Regras de Performance
- Animacoes always-on usam **APENAS** `transform` e `opacity` (GPU composited)
- `will-change: transform` somente em elementos ativamente animados
- `prefers-reduced-motion: reduce` desabilita todas as animacoes nao-essenciais
- Framer Motion `useInView` com `once: true` -- entrada anima uma vez, nao re-dispara
- Zero bibliotecas 3D pesadas (nada de Three.js). Todo 3D via CSS `perspective` + `transform`

---

## 7. Estrategia de Conversao

### Posicionamento de CTAs

| Local | CTA | Canal | Razao Estrategica |
|-------|-----|-------|--------------------|
| Hero | "Vamos conversar" / "Let's talk" | WhatsApp | Captura visitante high-intent que ja sabe o que quer |
| Apos Stats | Botao flutuante aparece | WhatsApp | Credibilidade recem-estabelecida, strike while warm |
| Cards de projeto | "Ver projeto" / "View project" | Link externo | Mantem engajamento, demonstra profundidade |
| CTA Final | Primary + Secondary | WhatsApp + Instagram | Pressao maxima, duas opcoes (acao vs. nurturing) |
| Footer | Links discretos | Ambos | Catch-all para scrollers |
| Nav (desktop) | Botao "Contato" | Scroll pro CTA | Acesso persistente a qualquer momento |

### Gatilhos Psicologicos

1. **Prova social (Stats):** Numeros criam autoridade antes de mostrar portfolio
2. **Escassez implicita:** "Disponivel para projetos remotos" sugere disponibilidade limitada sem ser agressivo
3. **Reciprocidade:** A qualidade do portfolio demonstra competencia -- visitante recebe valor (inspiracao, prova) antes de ser convidado a agir
4. **Escalada de comprometimento:** Passivo (ler) --> Ativo (scrollar projetos) --> Converter (WhatsApp)
5. **Aversao a perda:** "Vamos tirar do papel" implica que o projeto ja existe conceitualmente e seria perdido sem acao

### Links de Conversao

**WhatsApp:**
```
https://wa.me/55XXXXXXXXXXX?text=Oi%20Jo%C3%A3o!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.
```

**Instagram:**
```
https://instagram.com/SEU_HANDLE
```

> Substituir `XXXXXXXXXXX` pelo numero real e `SEU_HANDLE` pelo @ do Instagram.

---

## 8. SEO (Nivel Tecnico)

### Estrutura Semantica HTML

```html
<header>  <!-- NavBar -->
<main>
  <section id="hero" aria-label="Introducao">        <!-- H1 aqui -->
  <section id="manifesto" aria-label="Filosofia">     <!-- H2 -->
  <section id="stats" aria-label="Resultados">        <!-- H2 implicito -->
  <section id="projects" aria-label="Portfolio">      <!-- H2 -->
  <section id="skills" aria-label="Tecnologias">      <!-- H2 -->
  <section id="about" aria-label="Sobre">             <!-- H2 -->
  <section id="contact" aria-label="Contato">         <!-- H2 -->
</main>
<footer>
```

### Metadata por Locale

**PT:**
```typescript
{
  title: "Joao Felipe Schwaab | Desenvolvedor de Landing Pages & Apps Mobile",
  description: "Crio landing pages de alta conversao e aplicativos mobile que transformam visitantes em clientes. Baseado no RS, disponivel para projetos remotos.",
  keywords: ["landing page developer", "desenvolvedor landing page", "mobile developer",
             "react developer", "next.js", "freelancer", "portfolio"],
  openGraph: {
    title: "Joao Felipe Schwaab | Landing Pages & Mobile",
    description: "Interfaces que convertem.",
    type: "website",
    locale: "pt_BR"
  }
}
```

**EN:**
```typescript
{
  title: "Joao Felipe Schwaab | Landing Page & Mobile Developer",
  description: "I build high-converting landing pages and mobile apps that turn visitors into customers. Based in Brazil, available for remote projects.",
  openGraph: {
    title: "Joao Felipe Schwaab | Landing Pages & Mobile",
    description: "Interfaces that convert.",
    type: "website",
    locale: "en_US"
  }
}
```

### Core Web Vitals

| Metrica | Estrategia |
|---------|-----------|
| **LCP** | Hero text e server-rendered (Server Component), sem imagem bloqueante no hero |
| **CLS** | Fonts via `next/font` (self-hosted, sem flash). Dimensoes de imagem definidas |
| **INP** | `"use client"` apenas em componentes interativos. Secoes sao Server Components |
| **FID** | Minimo JS no bundle. Framer Motion tree-shakes features nao usadas |

### Checklist SEO
- [ ] H1 unico por pagina (hero headline)
- [ ] `<html lang>` dinamico por locale (pt / en)
- [ ] `sitemap.ts` com rotas `/pt` e `/en`
- [ ] `robots.ts` permitindo todos os crawlers
- [ ] OG image dinamica via Next.js `ImageResponse` API
- [ ] JSON-LD `Person` schema na secao About
- [ ] Alt text em todas as imagens
- [ ] Hreflang tags para PT e EN
- [ ] Structured data para portfolio/projects

### Performance Budget
- **JS total:** < 100KB gzipped (Framer Motion ~30KB e o maior custo)
- **Imagens:** WebP, servidas via `next/image` com `sizes` attribute
- **Fonts:** 2 Google Fonts via `next/font` (self-hosted, zero requests externos)
- **Target Lighthouse:** > 90 em todas as 4 categorias

---

## 9. Consideracoes Tecnicas

### Dependencias a Adicionar

```bash
npm install framer-motion server-only negotiator @types/negotiator
```

| Pacote | Uso |
|--------|-----|
| `framer-motion` | Scroll animations, stagger, magnetic effects, count-up |
| `server-only` | Garante que `dictionaries.ts` nunca vaze pro client bundle |
| `negotiator` | Parse `Accept-Language` header no `proxy.ts` |
| `@types/negotiator` | TypeScript types |

### Server vs Client Components

**Server Components** (default, sem diretiva):
- `SectionWrapper`, `GlassCard`, `GradientText`, `CosmicOrb`, `DeviceMockup`, `TechBadge`
- `Hero`, `Manifesto`, `Projects`, `Skills`, `About`, `FinalCTA`
- Todos os layouts

**Client Components** (`"use client"`):
- `NavBar` -- deteccao de scroll, mobile menu state
- `LocaleToggle` -- usa `useRouter` para trocar locale
- `FloatingWhatsApp` -- deteccao de scroll position
- `ScrollReveal` -- usa `useInView` do Framer Motion
- `MagneticButton` -- tracking de posicao do mouse
- `Stats` -- count-up animation com `useMotionValue`

### i18n (Padrao Next.js 16)

**`proxy.ts`** na raiz do projeto:
- Exporta funcao `proxy()` (NAO `middleware()`)
- Detecta locale via `Accept-Language`
- Redireciona `/` para `/pt` ou `/en`
- Pass-through se locale ja presente

**`dictionaries.ts`:**
- Usa `hasLocale()` do Next.js 16
- Importa JSONs dinamicamente
- Tipagem forte com `Locale` type

**JSONs organizados por secao:**
```json
{
  "nav": {
    "projects": "Projetos",
    "skills": "Skills",
    "about": "Sobre",
    "contact": "Contato"
  },
  "hero": {
    "label": "LANDING PAGES & MOBILE",
    "title_line1": "Interfaces que",
    "title_accent": "convertem.",
    "description": "Projeto, desenvolvo e lanco...",
    "cta_primary": "Vamos conversar",
    "cta_secondary": "Ver projetos"
  },
  "manifesto": { "..." },
  "stats": { "..." },
  "projects": { "..." },
  "skills": { "..." },
  "about": { "..." },
  "cta": { "..." },
  "footer": { "..." }
}
```

### Responsividade (Mobile-First)

| Breakpoint | Comportamento |
|------------|--------------|
| **< 768px** | Coluna unica, nav hamburger, cards full-width, orbs menores ou ocultos |
| **768px - 1023px** | 2 colunas, nav horizontal, bento grid simplificado |
| **1024px+** | Grid 12 colunas, todos os efeitos visuais ativos, anotacoes laterais |
| **1440px+** | Max-width 1200px, conteudo centralizado |

---

## 10. Tres Ideias Diferenciadoras

### 10.1 O Portfolio como Case Study

**Conceito:** Uma anotacao lateral fixa (visible apenas em desktop, margem direita) que narra as decisoes de design conforme o usuario rola. O portfolio se torna a prova viva da expertise em landing pages.

**Implementacao:**
- Elemento `position: fixed` no lado direito (right 24px)
- Texto muda baseado na secao ativa (Intersection Observer)
- Estilo: `text-moonbeam`, `text-xs`, `opacity-50`, rotacao 90deg ou horizontal
- Hidden em telas < 1280px

**Textos por secao:**
| Secao ativa | Anotacao PT | Anotacao EN |
|-------------|-------------|-------------|
| Hero | "Regra dos 2 segundos. Nome + funcao + CTA." | "2-second rule. Name + role + CTA." |
| Manifesto | "Filosofia antes do portfolio. Contexto gera confianca." | "Philosophy before portfolio. Context builds trust." |
| Stats | "Prova social antes do trabalho. Numeros convencem." | "Social proof before work. Numbers persuade." |
| Projects | "Bento grid: hierarquia visual por escala." | "Bento grid: visual hierarchy through scale." |
| Skills | "Agrupado por dominio, nao por icone." | "Grouped by domain, not by icon." |
| About | "Conexao pessoal. Tecnologia e feita por humanos." | "Personal connection. Tech is made by humans." |
| CTA | "Uma acao clara. Zero friccao." | "One clear action. Zero friction." |

**Por que funciona:** Posiciona Joao como alguem que pensa estrategicamente sobre cada pixel -- exatamente o que um cliente comprando landing pages quer ver. O portfolio nao apenas mostra trabalho, ele e trabalho.

### 10.2 Cursor Constellation Trail

**Conceito:** Substituir o cursor default (em desktop) por um efeito de constelacao -- 3-5 pontos luminosos que seguem o cursor com trailing fisico (spring animation). Os pontos deixam um rastro sutil como um cometa cruzando o espaco.

**Implementacao:**
- Componente `CursorTrail` no root layout (Client Component)
- Overlay `div` com `pointer-events: none` + `position: fixed` + `inset: 0` + `z-index: 50`
- 5 pseudo-elementos (ou divs) com `background: radial-gradient(circle, #A855F7, transparent)`
- `onMouseMove` atualiza CSS custom properties (`--mouse-x`, `--mouse-y`)
- Cada ponto tem `transition-delay` incremental (0ms, 50ms, 100ms, 150ms, 200ms)
- Pontos diminuem de tamanho progressivamente (6px, 5px, 4px, 3px, 2px)
- Desativado em touch devices: `@media (hover: hover) and (pointer: fine)`

**Custo de performance:** Minimo -- apenas atualiza 2 custom properties no mousemove. Todos os calculos visuais sao CSS (transition, transform). Zero recalculo de layout.

### 10.3 Transicoes Cosmicas entre Secoes

**Conceito:** Ao inves de simples fade-in, cada transicao entre secoes tem um "evento cosmico" unico, usando scroll-driven CSS animations (zero JavaScript).

**Transicoes:**
| Transicao | Efeito | Descricao |
|-----------|--------|-----------|
| Hero --> Manifesto | Hyperspace | Pontos de luz comprimem em uma linha horizontal, depois expandem |
| Stats --> Projects | Dissolve | Numeros se fragmentam em particulas que reagrupam como grid |
| About --> CTA | Supernova | Gradiente intensifica progressivamente, simulando aproximacao de estrela |

**Implementacao:**
```css
@keyframes hyperspace {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scaleX(3) scaleY(0.1); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}

.section-transition {
  animation: hyperspace linear;
  animation-timeline: view();
  animation-range: exit -20% exit 10%;
}
```

**Fallback:** Em browsers sem suporte a `animation-timeline: view()`, degrada gracefully para transicao simples de opacidade.

---

## 11. Footer

**Layout:** Minimalista, single row (desktop) ou empilhado (mobile)

**Conteudo:**
- Esquerda: `Joao Felipe Schwaab` + ano
- Centro: Links sociais (GitHub, LinkedIn, Instagram) -- icones SVG
- Direita: "Feito com Next.js" / "Built with Next.js" (opcional, sutil)

**Copy PT:**
```
Joao Felipe Schwaab 2025
[GitHub icon] [LinkedIn icon] [Instagram icon]
```

**Copy EN:**
```
Joao Felipe Schwaab 2025
[GitHub icon] [LinkedIn icon] [Instagram icon]
```

---

## 12. Sequencia de Implementacao

### Fase 1: Fundacao
1. Setup fonts (Space Grotesk, Inter) no root layout
2. Configurar `globals.css` com tokens Tailwind v4 completos + keyframes
3. Criar `proxy.ts` para roteamento de locale
4. Criar estrutura `[lang]/` com layout, dictionaries, JSONs
5. Construir componentes base: `GlassCard`, `GradientText`, `SectionWrapper`, `ScrollReveal`, `CosmicOrb`

### Fase 2: Layout Shell
1. Construir `NavBar` com scroll behavior e mobile menu
2. Construir `LocaleToggle`
3. Construir `Footer`
4. Criar `page.tsx` compondo todas as secoes (placeholders)
5. Adicionar `FloatingWhatsApp`

### Fase 3: Secoes
1. Hero (copy + layout + animacoes basicas)
2. Manifesto
3. Stats (com count-up)
4. Projects bento grid (com dados mock)
5. Skills
6. About
7. Final CTA

### Fase 4: Polish
1. Todas as animacoes Framer Motion
2. `MagneticButton` effect
3. Cursor constellation trail
4. Anotacoes laterais (case study)
5. `DeviceMockup` com CSS 3D
6. Transicoes cosmicas entre secoes

### Fase 5: Producao
1. SEO metadata para ambos os locales
2. OG image generation
3. Sitemap e robots.ts
4. JSON-LD structured data
5. Performance audit (Lighthouse)
6. Testar `prefers-reduced-motion`
7. Cross-browser testing
8. Responsividade em 375px, 768px, 1024px, 1440px
9. Deploy Vercel

---

## 13. Checklist de Verificacao Final

- [ ] `npm run dev` roda sem erros
- [ ] `/` redireciona para `/pt` corretamente
- [ ] Toggle PT/EN muda toda a copy sem reload
- [ ] Todas as 7 secoes renderizam na ordem correta
- [ ] NavBar oculta ao rolar pra baixo, reaparece ao rolar pra cima
- [ ] FloatingWhatsApp aparece apos secao Stats
- [ ] Todas as animacoes respeitam `prefers-reduced-motion`
- [ ] Lighthouse score > 90 em Performance, Accessibility, Best Practices, SEO
- [ ] Responsivo em 375px, 768px, 1024px, 1440px
- [ ] Links WhatsApp e Instagram funcionam corretamente
- [ ] OG image renderiza preview correto ao compartilhar
- [ ] Sitemap acessivel em `/sitemap.xml`
- [ ] H1 unico na pagina
- [ ] Sem console errors ou warnings
