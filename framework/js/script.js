const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// 悬停放大效果
left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));


// 获取所有时间轴事件和对应的事件内容
const timelineEvents = document.querySelectorAll('.timeline-event');
const eventDescriptions = document.querySelectorAll('.content-display p');

// 绑定悬停事件
timelineEvents.forEach((event, index) => {
    event.addEventListener('mouseenter', () => {
        // 清除所有高亮
        eventDescriptions.forEach(desc => desc.classList.remove('highlight'));
        timelineEvents.forEach(evt => evt.classList.remove('active'));
        
        // 高亮当前时间轴事件和对应的描述
        event.classList.add('active');
        eventDescriptions[index].classList.add('highlight');
    });
    
    // 清除高亮
    event.addEventListener('mouseleave', () => {
        event.classList.remove('active');
        eventDescriptions[index].classList.remove('highlight');
    });
});



// 获取时间轴事件和对应的事件卡片
const eventCards = document.querySelectorAll('.event-card');

// 为每个时间轴事件添加点击事件
timelineEvents.forEach((event, index) => {
    event.addEventListener('click', () => {
        // 检查当前点击的卡片是否已激活
        if (eventCards[index].classList.contains('active')) {
            // 如果已激活，清除所有卡片的激活和非激活状态
            eventCards.forEach(card => card.classList.remove('active', 'inactive'));
        } else {
            // 否则，设置点击的卡片为激活状态，其他卡片为非激活状态
            eventCards.forEach((card, i) => {
                card.classList.toggle('active', i === index);
                card.classList.toggle('inactive', i !== index);
            });
        }
    });
});
