import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Nostalgiccraft Dokumentation',
            favicon: '/favicon.png',
            social: {
                github: 'https://github.com/Nostalgiccraft-net',
                discord: 'https://discord.gg/yGaFFrbAmc',
                youtube: 'https://www.youtube.com/channel/UCddOioDpJwtkzQEmPQ07HvA',
                instagram: 'https://www.instagram.com/nostalgiccraft_net/',
            },
            logo: {
                alt: 'Nostalgiccraft Logo',
                src: './src/assets/favicon.png',
            },
            defaultLocale: 'de',
            locales: {
                "en": {
					"label": "English",
				},
                "de": {
                    "label": "Deutsch",
                }
            }
        }),
    ],
});
