const serverIpBlock = document.querySelector('.server-ip-block');

if (serverIpBlock) {
    console.log("Кнопка IP найдена!"); // Это должно появиться в консоли сразу

    serverIpBlock.addEventListener('click', () => {
        const ipAdress = "crustix.net";
        navigator.clipboard.writeText(ipAdress).then(() => {
            serverIpBlock.textContent = "CKOПИРOВАНO!";
        });
    });
}
