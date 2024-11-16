    // 创建卡片的通用函数
    function addCard(container, project) {
        const newCard = document.createElement('div');
        newCard.className = 'project-card';
        newCard.style.backgroundImage = `url(${project.image})`; // 动态设置背景图片
        newCard.innerHTML = `
            <a href="${project.link}" target="_blank" style="font-size: 25px;">${project.name}</a>
            <div class="description"style="font-size: 18px;">${project.description}</div>
        `;
        container.appendChild(newCard);
    }
    
    // #projectCards1 独立监听
    let projectIndex1 = 0;
    let cardCount1 = 0; // 卡片计数器
    const maxCards = 30; // 最大卡片数量
    let allowAddCards1 = true; // 控制是否允许添加卡片的开关
    
    document.getElementById('world-harmony').addEventListener('mousemove', () => {
        if (allowAddCards1 && cardCount1 < maxCards) {
            const projectCards1 = document.getElementById('projectCards1');
            addCard(projectCards1, projects1[projectIndex1]);
            projectIndex1 = (projectIndex1 + 1) % projects1.length; // 循环显示项目
            cardCount1++;
        }
    });
    
    // 检查是否滚动到页面底部的函数
    function checkScrollToBottom(container, callback) {
        if (container.scrollHeight - container.scrollTop === container.clientHeight) {
            callback();
        }
    }
    
    // 监听 #projectCards1 滚动事件，滚动到底部后允许生成更多卡片
    document.getElementById('projectCards1').addEventListener('scroll', () => {
        checkScrollToBottom(document.getElementById('projectCards1'), () => {
            allowAddCards1 = true;
            cardCount1 = 0; // 重置计数器，以便继续生成卡片
        });
    });
    
    /*------------------------------------------------------------------------------------------*/
    
    // #projectCards2 独立监听
    let projectIndex2 = 0;
    let cardCount2 = 0; // 卡片计数器
    let allowAddCards2 = true; // 控制是否允许添加卡片的开关
    
    document.getElementById('pollution-introduction').addEventListener('mousemove', () => {
        if (allowAddCards2 && cardCount2 < maxCards) {
            const projectCards2 = document.getElementById('projectCards2');
            addCard(projectCards2, projects2[projectIndex2]);
            projectIndex2 = (projectIndex2 + 1) % projects2.length; // 循环显示项目
            cardCount2++;
        }
    });
    
    // 监听 #projectCards2 滚动事件，滚动到底部后允许生成更多卡片
    document.getElementById('projectCards2').addEventListener('scroll', () => {
        checkScrollToBottom(document.getElementById('projectCards2'), () => {
            allowAddCards2 = true;
            cardCount2 = 0; // 重置计数器，以便继续生成卡片
        });
    });