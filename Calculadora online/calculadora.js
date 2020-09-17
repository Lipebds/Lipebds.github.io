valor ;
var  resultado ;
function  botao ( num ) {
    valor  =  documento . calc . viseira . valor  +  num ;
}
function  reseta ( ) {
    documento . calc . viseira . valor  =  '' ;
}
function  calcula ( ) {
    resultado  =  eval ( valor ) ;
    documento . calc . viseira . valor  =  resultado . toLocaleString ( 'pt-BR' ) ;
}