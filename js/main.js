const ua = detect.parse(navigator.userAgent)
const button = document.querySelector('.descargo')
const imagen = document.querySelector('.imagen')

console.log(ua.device)
if(ua.device !== null){
    if(ua.device.type === 'Mobile'){
        button.textContent = 'Descarga'
        button.href = 'Descarga/registrapp.apk'
        imagen.remove()
    }
    
}
