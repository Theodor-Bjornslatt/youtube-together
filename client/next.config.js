/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['sv-se'],
    defaultLocale: 'sv-se'
  },
  images: {
    domains: ['cdn.vox-cdn.com', 'img.youtube.com']
  }
}
