/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = 'production'
const nextConfig = {
    basePath: isProd ? '/portcoolio' : '',
    assetPrefix: '/portcoolio/',
    env: {
    NEXT_PUBLIC_BASE_PATH: '/portcoolio',
  },
};

export default nextConfig;
