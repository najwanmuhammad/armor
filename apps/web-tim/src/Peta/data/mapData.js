// Posisi awal: tampilan luas Indonesia
export const mapCenter = [-2, 118];
export const mapZoom = 5;

// Target zoom awal: overview Pulau Morotai (menampilkan Desa Kolorai & Desa Yayasan)
export const morotaiTarget = {
    lat: 2.0520,
    lng: 128.2500,
    zoom: 14
};

// Dua lokasi KKN dengan polygon batas desa
export const kknLocations = [
    {
        id: "yayasan",
        name: "Desa Yayasan",
        color: "#f97316",
        glowColor: "#fbbf24",
        lat: 2.050700,
        lng: 128.292763,
        centerLat: 2.048921,
        centerLng: 128.292241,
        zoom: 17,
        description: "Morotai Selatan, Morotai Island Regency, North Maluku",
        photo: "/images/yayasan.png",
        video: "/video/Video contoh.mp4",
        pois: [
            {
                id: "kantor_desa_yayasan",
                name: "Kantor Desa",
                lat: 2.050317,
                lng: 128.292481,
                description: "Kantor Desa Yayasan, Kecamatan Morotai Selatan"
            },
            {
                id: "balai_desa_yayasan",
                name: "Balai Desa",
                lat: 2.049003,
                lng: 128.292174,
                description: "Balai Desa Yayasan, Kecamatan Morotai Selatan"
            }
        ],
        // Polygon perkiraan batas desa — bisa dikoreksi sesuai koordinat asli
        polygon: [
            [2.050570, 128.290859],
            [2.050559, 128.291959],
            [2.050162, 128.294017],
            [2.050007, 128.294076],
            [2.048958, 128.293421],
            [2.047905, 128.293140],
            [2.046382, 128.292619],
            [2.046431, 128.292528],
            [2.046668, 128.291616],
            [2.047830, 128.291431],
            [2.049284, 128.291261],
            [2.049575, 128.291088],
            [2.049650, 128.289903],
            [2.049745, 128.289929],
            [2.049666, 128.290664],
            [2.049721, 128.291039]
        ]
    },
    {
        id: "kolorai",
        name: "Desa Kolorai",
        color: "#f97316",
        glowColor: "#fbbf24",
        lat: 2.0555,
        lng: 128.2080,
        centerLat: 2.055603,
        centerLng: 128.211096,
        zoom: 17,
        description: "Morotai Selatan Barat, Morotai Island Regency, North Maluku",
        photo: "/images/kolorai.png",
        // Polygon batas pulau (berada tepat di Pulau Kolorai sebelah kiri)
        polygon: [
            [2.058399, 128.209374],
            [2.058058, 128.210318],
            [2.057491, 128.211011],
            [2.056620, 128.211852],
            [2.055341, 128.212290],
            [2.053970, 128.213961],
            [2.053564, 128.213954],
            [2.053353, 128.213619],
            [2.053160, 128.213099],
            [2.053220, 128.212674],
            [2.053212, 128.211537],
            [2.053455, 128.210658],
            [2.055323, 128.208721],
            [2.056215, 128.208444],
            [2.057133, 128.208408],
            [2.058036, 128.208711],
            [2.058259, 128.209088]
        ]
    }
];

// Flat list semua marker
export const locations = kknLocations.map(loc => ({
    id: loc.id,
    name: loc.name,
    lat: loc.lat,
    lng: loc.lng,
    centerLat: loc.centerLat,
    centerLng: loc.centerLng,
    description: loc.description,
    photo: loc.photo,
    video: loc.video,
    pois: loc.pois || []
}));
