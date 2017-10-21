const colors = {
    red: '#F44336',
    pink: '#E91E63',
    purple: '#9C27B0',
    indigo: '#3F51B5',
    blue: '#2196F3',
    light_blue: '#03A9F4',
    cyan: '#00BCD4',
    green: '#4CAF50',
    lime: '#CDDC39',
    yellow: '#FFEB3B',
    amber: '#FFC107',
    orange: '#FF9800',
    deep_orange: '#FF5722',
    brown: '#795548',
};

function changeBackgroundColor(color) {
    let script = " var faceHeader = document.querySelector('._2s1x ._2s1y');\n" +
        "faceHeader.style.backgroundColor = '" + color + "';\n" +
        "faceHeader.style.borderBottom = '1px  solid " + color + "';\n" +
        "document.querySelector('._585-').style.border = '1px solid " + color + "'";
    // insere o script na pagina
    chrome.tabs.executeScript({
        code: script
    });
}


// adiciona um listener ao evento DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    //pega todos os elementos que possuem a classe cor
    let corSelect = document.querySelectorAll('.cor');
    // percorre todos os elementos
    corSelect.forEach((item) => {
        //adiciona um evento para o evento de clique
        item.addEventListener('click', () => {
            //pega a cor da div
            let color = item.getAttribute('class').replace(/cor /g, "").trim();
            changeBackgroundColor(colors[color]);
        });
    });
});