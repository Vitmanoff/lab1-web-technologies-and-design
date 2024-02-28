   // Функция для отображения выбранной вкладки
   function showTab(tabName) {
    // Скрыть все вкладки
    var tabs = document.getElementsByClassName('content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }

    // Отобразить выбранную вкладку
    document.getElementById(tabName).classList.add('active');

    // Выделить активную вкладку
    var tabButtons = document.getElementsByClassName('tab');
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active-tab');
    }
    document.querySelector('[onclick="showTab(\'' + tabName + '\')"]').classList.add('active-tab');
}

document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('background-video');

    // Устанавливаем громкость (от 0 до 1)
    video.volume = 0.01; 
});

function playVideo() {
    var video = document.getElementById('background-video');
    video.play();
    document.getElementById('play-button').style.display = 'none'; // Скрываем кнопку после воспроизведения
}
