document.getElementById('content').style.display = 'none';  

const substituicoes = 
{
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};


/* primeiramente mudo o texto para letras minusculas, e percorro o texto procurando 
as letras que serao substituidas, se tiver a letra eu adiciono a palavra correspondente,
 se nao adiciono apenas a letra a string criptografada*/

function encriptar(texto, substituicoes) 
  {
    
    texto = texto.toLowerCase();
  
    let textoEncriptado = '';
  
    for (let i = 0; i < texto.length; i++) {
      const caractereAtual = texto[i];
  
      if (substituicoes.hasOwnProperty(caractereAtual)) {
        textoEncriptado += substituicoes[caractereAtual];
      } else {
        textoEncriptado += caractereAtual;
      }
    }

    return textoEncriptado;

  }


  function exibirTexto(textoEncriptado)
  {
    let texto = document.getElementById('mensagem-cript');
    texto.innerHTML = textoEncriptado;

  }

  function apagarTextoEscrito()
  {
    document.getElementById('text').value = "";
  }

  function encriptarTexto()
  {

  let texto = document.getElementById('text').value;
  let textoEncriptado = encriptar(texto, substituicoes);

  document.getElementById('content-vaziu').style.display = 'none'
  document.getElementById('content').style.display = 'block';

  exibirTexto(textoEncriptado);
  apagarTextoEscrito();
 
  }
  
  function desencriptar(texto, substituicoes) 
  {
    
    texto = texto.toLowerCase();
  
    let textoDesencriptado = '';
  
    for (let i = 0; i < texto.length; i++) {

      const caractereAtual = texto[i];

      if (substituicoes.hasOwnProperty(caractereAtual)){

        if(caractereAtual == 'a'){
          textoDesencriptado += caractereAtual;
          i = i + 1;
          }else if(caractereAtual == 'e'){
            textoDesencriptado += caractereAtual;
            i = i + 4;
          }else if(caractereAtual == 'i'){
            textoDesencriptado += caractereAtual;
            i = i + 3;
          }else if(caractereAtual == 'o'){
            textoDesencriptado += caractereAtual;
            i = i + 3;
          }else if(caractereAtual == 'u'){
            textoDesencriptado += caractereAtual;
            i = i + 3;
          }

        }else{

          textoDesencriptado += caractereAtual;

         }

       }

      return textoDesencriptado;

}
  
  function desencriptarTexto() 
  {
    const textoEncriptado = document.getElementById('text').value;
    const textoDesencriptado = desencriptar(textoEncriptado, substituicoes);

    exibirTexto(textoDesencriptado);
    apagarTextoEscrito();

    document.getElementById('content-vaziu').style.display = 'none'
    document.getElementById('content').style.display = 'block';
  }

  function copiarTexto()
  {
    let texto = document.getElementById('mensagem-cript').innerHTML;
    navigator.clipboard.writeText(texto);

    document.getElementById('content').style.display = 'none';
    document.getElementById('content-vaziu').style.display = 'block';
    
  }

  

