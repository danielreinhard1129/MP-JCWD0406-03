/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "**",
            },
            {
              protocol: "http",
              hostname: "**",
            },
        ]
        
      },
    //ini juga buat klo make next image harus di declare alamat urlnya
}

module.exports = nextConfig
