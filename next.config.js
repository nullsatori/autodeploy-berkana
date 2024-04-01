/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
     config.module.rules.push({
       test: /\.json$/,
       type: "javascript/auto",
       use: [
         {
           loader: "json-loader",
         },
       ],
     });
 
     return config;
  },
  async redirects() {
     return [
       {
         source: "/((?!maintenance).*)",
         destination: "/maintenance",
         permanent: false,
       },
     ];
  },
 };
 
 module.exports = nextConfig;
 