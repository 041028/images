// 声明图像文件名数组
const images = [
    'images/th (1).jpg',
    'images/th (2).jpg',
    'images/th (3).jpg',
    'images/th (4).jpg',
    'images/微信图片_20240908214923.jpg'
];

// 获取画廊和主图像的 DOM 元素
const gallery = document.getElementById('gallery');
const mainImage = document.getElementById('mainImage');
let currentImageIndex = 0; // 当前图像索引

// 迭代照片并添加缩略图
images.forEach((image, index) => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.alt = image;
    imgElement.className = 'thumbnail';
    
    // 为每个缩略图添加 click 事件监听器
    imgElement.addEventListener('click', () => {
        currentImageIndex = index; // 更新当前图像索引
        updateMainImage(); // 更新主图像
        mainImage.classList.remove('bright', 'dark'); // 点击更换图片时移除效果
        document.getElementById('toggleBrightnessButton').textContent = '改变亮度'; // 重置按钮文本
        brightnessState = 0; // 重置亮度状态
        
    });

    gallery.appendChild(imgElement);
});

// 更新主图像的函数
function updateMainImage() {
    mainImage.src = images[currentImageIndex]; // 更新主图像
    mainImage.classList.remove('bright', 'dark'); // 移除效果
   
}

// 更新主图像并添加切换功能
document.getElementById('prevButton').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1; // 循环到最后一张
    updateMainImage();
    mainImage.classList.remove('bright', 'dark'); // 点击更换图片时移除效果
    document.getElementById('toggleBrightnessButton').textContent = '改变亮度'; // 重置按钮文本
    brightnessState = 0; // 重置亮度状态
    
});

document.getElementById('nextButton').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0; // 循环到第一张
    updateMainImage();
    mainImage.classList.remove('bright', 'dark'); // 点击更换图片时移除效果
    document.getElementById('toggleBrightnessButton').textContent = '改变亮度'; // 重置按钮文本
    brightnessState = 0; // 重置亮度状态
    
});

let brightnessState = 0; // 0: 原色, 1: 变亮, 2: 变暗

// 变亮和变暗按钮的处理器
document.getElementById('toggleBrightnessButton').addEventListener('click', () => {
    brightnessState = (brightnessState + 1) % 3; // 循环状态
    mainImage.classList.remove('bright', 'dark'); // 移除所有效果

    if (brightnessState === 1) {
        mainImage.classList.add('bright'); // 添加变亮效果
        document.getElementById('toggleBrightnessButton').textContent = '变暗';
    } else if (brightnessState === 2) {
        mainImage.classList.add('dark'); // 添加变暗效果
        document.getElementById('toggleBrightnessButton').textContent = '变回原色';
    } else {
        document.getElementById('toggleBrightnessButton').textContent = '变亮';
    }
});
// 改变背景颜色按钮功能
document.getElementById('bgColorButton').addEventListener('click', () => {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
});

// 初始化主图像
updateMainImage();
