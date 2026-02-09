@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { scroll-behavior: smooth; }
}

@layer components {
  .article-card {
    @apply bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden;
  }
  .gradient-bg {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
}
