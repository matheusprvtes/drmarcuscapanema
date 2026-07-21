# Dr. Marcus Capanema — Site

Site institucional do Dr. Marcus Capanema (cirurgia plástica · BH e São Paulo).
Site **estático** (HTML/CSS/JS puro) — **não precisa de build**.

## Estrutura

```
index.html            Home (landing page)
sobre.html            Sobre o Dr. Marcus Capanema
procedimentos.html    Procedimentos (rinoplastia, face, prótese de mama) — hero com carrossel
depoimentos.html      Depoimentos de pacientes
blog.html             Blog (temas e categorias)
contato.html          Contato / agendamento
style.css             Estilos
script.js             Interações (menu, reveal, WhatsApp, carrossel)
vercel.json           Cache e headers de segurança
robots.txt · sitemap.xml
assets/               logo (SVG), fotos (WebP/JPG) e imagens do carrossel (proc-1/2/3)
```

## Deploy na Vercel

1. Suba o **conteúdo desta pasta** na **raiz** do repositório no GitHub (incluindo a pasta `assets/` inteira).
2. Na Vercel: *Add New → Project* → importe o repositório.
3. **Framework Preset:** Other · **Build Command:** vazio · **Output Directory:** vazio · **Root Directory:** vazio (raiz).
4. Deploy. Não há build nem dependências.

> Dica: se subir pelo site do GitHub, **arraste a pasta `assets` inteira** — o upload manual às vezes ignora subpastas. Alternativa à prova de falhas: Vercel CLI (`npm i -g vercel`, depois `vercel --prod` dentro desta pasta).

O `vercel.json` já configura cache longo para `/assets` e headers de segurança básicos.

## Antes de ir ao ar (checklist)

- [ ] **Domínio:** `canonical`, JSON-LD, `robots.txt` e `sitemap.xml` usam `https://www.drmarcuscapanema.com.br`. Ajuste se o domínio final for outro.
- [ ] **WhatsApp:** número **(31) 98720-3497** (BH e SP) definido em `script.js` (const `CONTACT`). Ajustar lá se mudar.
- [ ] **Depoimentos:** 7 relatos reais publicados em `depoimentos.html`, em conformidade com o CFM.
- [ ] **Blog:** página estruturada com temas e categorias; a lista de artigos tem um espaço reservado (marcado com `<!-- EDITOR -->`) para inserir os posts.
- [ ] **Tracking:** inserir GTM/Pixel no `<head>` e `<body>` quando disponível (CTAs já têm `data-wa` para mapeamento de eventos).

## Contato / WhatsApp

Todos os CTAs e o botão flutuante apontam para o WhatsApp **+55 (31) 98720-3497**.
- Belo Horizonte: Rua dos Otoni, 909 — Sala 1610, Santa Efigênia · 30150-274
- São Paulo: Edifício Latitude Corporate — R. Maria Figueiredo, 202, 15º andar, Jardins · 04002-001

Responsável técnico: Dr. Marcus Capanema — CRM-MG 60.314 · RQE 48.411
