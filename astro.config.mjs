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
            },
            sidebar: [
                {
                    label: 'Lobby',
                    translations: {
                        de: 'Lobby'
                    },
                    items: [
                        {
                            label: 'How our lobby works',
                            translations: {
                                de: 'Wie unsere Lobby funktioniert'
                            },
                            link: '/lobby'
                        }
                    ]
                },
                {
                    label: 'Verification process',
                    translations: {
                        de: 'Verifizierungsprozess'
                    },
                    items: [
                        {
                            label: 'How you can verify yourself',
                            translations: {
                                de: 'Wie du dich verifizieren kannst'
                            },
                            link: '/verify'
                        }
                    ]
                },
                {
                    label: 'OneHit',
                    translations: {
                        de: 'OneHit'
                    },
                    items: [
                        {
                            label: 'How OneHit works',
                            translations: {
                                de: 'Wie OneHit funktioniert'
                            },
                            link: '/onehit'
                        }
                    ]
                },
                {
                    label: "BorderRun",
                    translations: {
                        de: "BorderRun"
                    },
                    items: [
                        {
                            label: "How BorderRun works",
                            translations: {
                                de: "Wie BorderRun funktioniert"
                            },
                            link: "/borderrun"
                        }
                    ]
                },
                {
                    label: 'NostalgicCity',
                    translations: {
                        de: 'NostalgicCity'
                    },
                    items: [
                        {
                            label: 'How the plot world works',
                            translations: {
                                de: 'Wie die Plotwelt funktioniert'
                            },
                            link: '/citybuild'
                        },
                        {
                            label: 'How the banking system works',
                            translations: {
                                de: 'Wie das Bankensystem funktioniert'
                            },
                            link: '/citybuild/banksystem'
                        },
                        {
                            label: 'How our farm world works',
                            translations: {
                                de: 'Wie unsere Farmwelt funktioniert'
                            },
                            link: '/citybuild/farmworld'
                        },
                        {
                            label: 'How our nether world works',
                            translations: {
                                de: 'Wie unsere Netherwelt funktioniert'
                            },
                            link: '/citybuild/nether'
                        }
                    ]
                }
            ],
        }),
    ],
});
