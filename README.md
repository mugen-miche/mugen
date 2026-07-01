# mugen · portfolio v2

Portfolio de Parfait Michel — développeur web freelance à Cotonou, Bénin.

## Lancer en local

```bash
npm install
npm run dev
```

## Déployer sur Vercel

1. Push ce repo sur GitHub
2. vercel.com → Import → sélectionner le repo
3. Aucune config nécessaire

## Ajouter un projet

Dans `src/data/projects.js` :

```js
{
  id: 'mon-projet',
  name: 'Mon Projet',
  tagline: 'Une ligne résumé',
  description: 'Description complète...',
  category: 'Client',         // Client | Personnel | SaaS | Concept
  stack: ['React', 'Supabase'],
  status: 'Livré',            // Livré | En cours | En conception
  year: '2025',
}
```

## Ajouter des réseaux sociaux

Dans `src/components/Sidebar.jsx` → section `social-links`.

---
crafted by mugen · localdev
