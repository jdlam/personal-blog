import { next } from '@vercel/edge';

// Bots to block - these often ignore robots.txt
const BLOCKED_BOTS = [
  'GPTBot',
  'ChatGPT-User',
  'CCBot',
  'anthropic-ai',
  'Claude-Web',
  'ClaudeBot',
  'Bytespider',
  'PetalBot',
  'Amazonbot',
  'Omgilibot',
  'FacebookBot',
  'Applebot',
  'PerplexityBot',
  'YouBot',
  'Cohere-ai',
  'DataForSeoBot',
  'Diffbot',
  'Scrapy',
  'SemrushBot',
  'AhrefsBot',
  'MJ12bot',
  'DotBot',
  'BLEXBot',
  'serpstatbot',
  'SeekportBot',
  'Sogou',
  'Yandex',
  'YandexBot',
  'Baiduspider',
  'ia_archiver',
  'archive.org_bot',
];

export default function middleware(request: Request) {
  const userAgent = request.headers.get('user-agent') || '';

  // Check if the user agent contains any blocked bot identifier
  const isBlockedBot = BLOCKED_BOTS.some((bot) =>
    userAgent.toLowerCase().includes(bot.toLowerCase())
  );

  if (isBlockedBot) {
    return new Response('Forbidden', { status: 403 });
  }

  return next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
