const colors = ["#ADBCA5", "#E8B9AB", "#E09891", "#CB769E", "#8C5F66", "#EAE4E9", "#FFF1E6", "#FDE2E4", "#FAD2E1", "#E2ECE9",
                "#BEE1E6", "#F0EFEB", "#DFE7FD", "#CDDAFD", "#70D6FF", "#FF70A6", "#FF9770", "#FFD670", "#E9FF70", "#343332",
                "#FAE3E3", "#F7D4BC", "#CFA5B4", "#C98BB9", "#CACF85", "#8CBA80", "#658E9C", "#4D5382", "#514663", "#FFCDB2",
                "#FFB4A2", "#E5989B", "#B5838D", "#6D6875", "#FFB2E6", "#D972FF", "#8447FF", "#8CFFDA", "#FFFFE8", "#222222", 
                "#FFFFFF", "#1C5D99", "#639FAB", "#BBCDE5", "#B8B8D1", "#5B5F97", "#FFC145", "#FFFFFB", "#FF6B6C"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const randomColor = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];
});