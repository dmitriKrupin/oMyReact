/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.alias['tslib'] = 'tslib';
        }

        return config;
    },
};

module.exports = nextConfig;