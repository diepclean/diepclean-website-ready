
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: mode === 'production' ? 'terser' : false,
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari13'],
    ...(mode === 'production' && {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug'],
          passes: 2,
        },
        mangle: {
          safari10: true,
        },
        format: {
          comments: false,
        },
      },
    }),
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React chunks
          vendor: ['react', 'react-dom'],
          
          // UI library chunks
          ui: [
            '@radix-ui/react-dialog', 
            '@radix-ui/react-slot',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-toast'
          ],
          
          // Icons and assets
          icons: ['lucide-react'],
          
          // Routing
          router: ['react-router-dom'],
          
          // Form handling
          forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
          
          // Email service
          email: ['@emailjs/browser'],
        },
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `assets/styles/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
      external: [],
    },
    chunkSizeWarningLimit: 500,
    reportCompressedSize: false,
    sourcemap: false,
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // Inline small assets
  },
  server: {
    host: "::",
    port: 8080,
    cors: true,
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom',
      'react-router-dom',
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-slot'
    ],
    exclude: ['@vite/client', '@vite/env'],
  },
  esbuild: {
    target: 'es2020',
    legalComments: 'none',
    minifyIdentifiers: mode === 'production',
    minifySyntax: mode === 'production',
    minifyWhitespace: mode === 'production',
  },
  css: {
    devSourcemap: mode === 'development',
    postcss: {
      plugins: mode === 'production' ? [
        require('cssnano')({
          preset: ['default', {
            discardComments: { removeAll: true },
            normalizeWhitespace: true,
            colormin: true,
            convertValues: true,
            discardDuplicates: true,
            discardEmpty: true,
            mergeRules: true,
            minifyFontValues: true,
            minifySelectors: true,
          }]
        })
      ] : [],
    },
  },
}));
