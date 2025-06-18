# 🎥 Guia de Deploy dos Vídeos

## ✅ Problema Resolvido
Ajustei os caminhos dos vídeos de `/porta-comprimidos/videos/...` para `./videos/...` para funcionar corretamente no deploy.

## 📋 Status Atual
- ✅ Vídeos incluídos no build da pasta `public/videos/`
- ✅ Caminhos ajustados para deploy
- ✅ Build funcionando corretamente
- ✅ Vídeos aparecem em `dist/videos/` após build

## 🚀 Para Deploy
1. **Faça novo build**: `npm run build`
2. **Deploy a pasta `dist/`** completa
3. **Os vídeos estarão disponíveis** automaticamente

## 📊 Tamanhos dos Arquivos
- `exemplos (1).mp4`: 4.47 MB
- `exemplos (2).mp4`: 7.49 MB
- **Total**: ~12 MB

## 🎯 Alternativas (se ainda não funcionar)

### Opção A: YouTube Embed (Recomendado)
```tsx
// Substitua VideoPlayer por iframe do YouTube
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  frameBorder="0" 
  allowFullScreen
></iframe>
```

### Opção B: Cloudinary (Otimizado)
1. Crie conta gratuita no [Cloudinary](https://cloudinary.com)
2. Faça upload dos vídeos
3. Use as URLs fornecidas

### Opção C: GitHub Releases
1. Crie um Release no GitHub do projeto
2. Anexe os vídeos como assets
3. Use as URLs diretas dos arquivos

## 🔧 Teste Local
Para testar se está funcionando:
```bash
npm run build
npm run preview
```

## 🌐 Deploy Platforms
- **Vercel**: Funciona automaticamente
- **Netlify**: Funciona automaticamente  
- **GitHub Pages**: Funciona automaticamente
- **Firebase Hosting**: Funciona automaticamente

## ⚠️ Observações
- Vídeos em `public/` são copiados para `dist/` no build
- Total de ~12MB é aceitável para a maioria dos hostings
- Se ainda não aparecer, considere hospedar externamente
