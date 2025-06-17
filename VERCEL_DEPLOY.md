# 🚀 Deploy na Vercel - Lembra+

## Passos para corrigir o site branco na Vercel:

### 1. ✅ Arquivos já configurados:
- `vite.config.ts` - Base path corrigido para produção
- `vercel.json` - Configurações de build e rewrites
- `main.tsx` - Convex opcional (não quebra sem variáveis de ambiente)

### 2. 🔧 Configurações na Vercel:

#### Build Settings:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

#### Environment Variables (Opcional):
Se quiser usar o backend Convex, adicione:
- `VITE_CONVEX_URL` = `https://wonderful-basilisk-85.convex.cloud`

**Nota**: O site funciona sem essas variáveis (apenas frontend)

### 3. 🐛 Debugging:
Se ainda aparecer branco:
1. Vá em **Functions** > **View Function Logs** na Vercel
2. Abra **Developer Tools** (F12) no navegador
3. Verifique a aba **Console** por erros JavaScript
4. Verifique a aba **Network** por recursos não carregados

### 4. 🔄 Re-deploy:
Após configurar, faça um novo deploy:
- Git push ou redeploy manual na Vercel
- O site deve carregar corretamente

### 5. ✨ URL final:
Seu site estará em: `https://seu-projeto.vercel.app`
