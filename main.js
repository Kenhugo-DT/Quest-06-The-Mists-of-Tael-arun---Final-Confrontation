document.addEventListener('DOMContentLoaded', () => {
    // Menu elements
    const menuTrigger = document.querySelector('.menu-trigger');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Content sections
    const questWrapper = document.querySelector('.quest-wrapper');
    const inventoryWrapper = document.querySelector('.inventory-wrapper');
    const locationsWrapper = document.querySelector('.locations-wrapper');
    
    // Quest elements
    const quests = document.querySelectorAll('.quest');
    const nextQuestBtn = document.getElementById('next-quest');
    const prevQuestBtn = document.getElementById('prev-quest');
    let currentQuestIndex = 0;

    // Show quest section by default
    questWrapper.style.display = 'block';
    inventoryWrapper.style.display = 'none';
    locationsWrapper.style.display = 'none';

    // Initially show first quest
    showQuest(0);

    // Menu click handlers
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const sectionName = item.textContent.toLowerCase().trim();
            
            // Hide all sections
            questWrapper.style.display = 'none';
            inventoryWrapper.style.display = 'none';
            locationsWrapper.style.display = 'none';
            
            // Show selected section
            switch(sectionName) {
                case 'quests':
                    questWrapper.style.display = 'block';
                    break;
                case 'inventory':
                    inventoryWrapper.style.display = 'block';
                    break;
                case 'locations':
                    locationsWrapper.style.display = 'block';
                    // Show first location
                    const locations = document.querySelectorAll('.location');
                    locations.forEach(loc => loc.classList.remove('active'));
                    if(locations[0]) locations[0].classList.add('active');
                    break;
            }
            
            dropdownMenu.classList.remove('show');
        });
    });

    // Quest navigation
    function showQuest(index) {
        quests.forEach(quest => quest.classList.remove('active'));
        quests[index].classList.add('active');
    }

    nextQuestBtn?.addEventListener('click', () => {
        currentQuestIndex = (currentQuestIndex + 1) % quests.length;
        showQuest(currentQuestIndex);
    });

    prevQuestBtn?.addEventListener('click', () => {
        currentQuestIndex = (currentQuestIndex - 1 + quests.length) % quests.length;
        showQuest(currentQuestIndex);
    });

    // Menu trigger
    menuTrigger?.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });

    // Click outside menu to close
    document.addEventListener('click', () => {
        dropdownMenu.classList.remove('show');
    });
});