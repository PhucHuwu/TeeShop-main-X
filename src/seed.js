const connect = require('./app/config/DB');
const Product = require('./app/Model/Product');
// Dữ liệu seed mẫu
const products = [
    {
        name: 'Áo thun training hidden graphic',
        description:
            'Áo thun training hidden graphic, chất liệu cotton thoáng mát, form unisex dễ phối đồ, phù hợp mặc hàng ngày và đi chơi.',
        price: Math.floor(Math.random() * 100000) + 300000, // 300k - 399k
        quantity: 1,
        image: 'https://n7media.coolmate.me/uploads/November2025/ao-thun-training-hidden-graphic-6-packs-fix_final_(1).jpg?aio=w-1100',
    },

    {
        name: 'Áo dài tay thể thao nam Logo Active Slim',
        description:
            'Áo dài tay thể thao nam Logo Active Slim, chất liệu thấm hút mồ hôi, thiết kế ôm nhẹ, thích hợp tập luyện và mặc thường ngày.',
        price: Math.floor(Math.random() * 100000) + 300000,
        quantity: 1,
        image: 'https://n7media.coolmate.me/uploads/October2025/ao-dai-tay-active-slim-1-den_5.jpg',
    },

    {
        name: 'Quần dài nam Track Pants Windbreaker Cargo',
        description:
            'Quần dài nam Track Pants Windbreaker Cargo, co giãn nhẹ, tiện dụng với nhiều túi, phù hợp thể thao và dạo phố.',
        price: Math.floor(Math.random() * 150000) + 400000, // 400k - 549k
        quantity: 1,
        image: 'https://n7media.coolmate.me/uploads/October2025/quan-dai-track-pants-winbreaker-cargo-9-den_17.jpg?aio=w-1100',
    },

    {
        name: 'Áo khoác nam Track Jacket Windbreaker',
        description:
            'Áo khoác nam Track Jacket Windbreaker, chất liệu gió nhẹ, giữ ấm tốt, form hiện đại, phù hợp cả tập luyện lẫn đi chơi.',
        price: Math.floor(Math.random() * 150000) + 300000, // 300k - 449k
        quantity: 1,
        image: 'https://n7media.coolmate.me/uploads/October2025/ao-khoac-nam-track-jacket-windbreaker-1-den_51.jpg?aio=w-1100',
    },

    {
        name: 'Quần Shorts Nam Gym Power 2 lớp',
        description:
            'Quần Shorts Nam Gym Power 2 lớp, co giãn thoải mái, form trẻ trung năng động, phù hợp tập gym và đi chơi.',
        price: Math.floor(Math.random() * 100000) + 200000, // 200k - 299k
        quantity: 1,
        image: 'https://n7media.coolmate.me/uploads/September2025/quan-shorts-gym-power-2-lop-xanh-reu-1.jpg?aio=w-1100',
    },

    {
        name: 'Áo Thun Gym Power dáng Tights',
        description:
            'Áo Thun Gym Power dáng Tights, chất liệu co giãn, thoáng mát, hỗ trợ tối đa khi luyện tập thể thao.',
        price: Math.floor(Math.random() * 100000) + 300000,
        quantity: 1,
        image: 'https://n7media.coolmate.me/uploads/September2025/ao-thun-nam-gym-power-dang-tights-co-gian-exdry-thoang-mat-den-1.jpg?aio=w-1100',
    },

    {
        name: 'Quần leggings thể thao co giãn Vital Seamless - Đen',
        description:
            'Quần leggings thể thao co giãn Vital Seamless - Đen, ôm sát, co giãn 4 chiều, thoải mái khi tập luyện.',
        price: Math.floor(Math.random() * 100000) + 300000,
        quantity: 1,
        image: 'https://n7media.coolmate.me/uploads/September2025/quan-legging-the-thao-co-gian-seamless-7-den_9.jpg?aio=w-1100g',
    },

    {
        name: 'Quần leggings thể thao co giãn Vital Seamless - Hồng',
        description:
            'Quần leggings thể thao co giãn Vital Seamless - Hồng, thiết kế thời trang, chất liệu mềm mại, hỗ trợ vận động linh hoạt.',
        price: Math.floor(Math.random() * 100000) + 300000,
        quantity: 1,
        image: 'https://n7media.coolmate.me/uploads/September2025/quan-legging-the-thao-co-gian-seamless-9-hong_39.jpg?aio=w-1100',
    },

    {
        name: 'Croptop thể thao Vital Seamless - Hồng',
        description:
            'Croptop thể thao Vital Seamless - Hồng, ôm dáng, co giãn tốt, phối hợp hoàn hảo với các loại leggings hoặc shorts thể thao.',
        price: Math.floor(Math.random() * 100000) + 250000, // 250k - 349k
        quantity: 1,
        image: 'https://n7media.coolmate.me/uploads/September2025/ao-croptop-the-thao-co-gian-vital-seamless-20-hong_74.jpg?aio=w-1100',
    },

    {
        name: 'Short thể thao Promax Sideflow',
        description: 'Short thể thao Promax Sideflow, chất liệu thoáng khí, co giãn tốt, thích hợp tập gym và chạy bộ.',
        price: Math.floor(Math.random() * 100000) + 200000,
        quantity: 1,
        image: 'https://n7media.coolmate.me/uploads/November2025/short-the-thao-promax-side-9-trang_60.jpg?aio=w-1100',
    },
];

async function seed() {
    try {
        await connect();

        console.log('Connected to MongoDB');

        // Xóa hết dữ liệu cũ
        await Product.deleteMany({});
        console.log('Old products removed');

        // Thêm dữ liệu seed
        await Product.insertMany(products);
        console.log('Seed data inserted');
        process.exit();
    } catch (err) {
        console.error(err);
    }
}

seed();
