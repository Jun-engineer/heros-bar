/** @type {import('next').NextConfig} */

const nextConfig = {
    transpilePackages: [
        "awesome_module",
        "@fullcalendar/common",
        "@fullcalendar/daygrid",
        "@fullcalendar/react",
    ],
}

export default nextConfig;
